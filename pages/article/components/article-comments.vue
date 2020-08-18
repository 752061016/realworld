<template>
  <!-- 若未登录则不显示评论组件 -->
  <div v-if="user">
    <form class="card comment-form">
        <div class="card-block">
        <textarea class="form-control" placeholder="Write a comment..." v-model="body" rows="3"></textarea>
        </div>
        <div class="card-footer">
        <img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img" />
        <!-- 绑定事件 -->
        <button 
            class="btn btn-sm btn-primary"
            @click="addUserComment"
            :disabled="btnDisabled"
        >
            Post Comment
        </button>
        </div>
    </form>
    
    <div class="card" v-for="comment in comments" :key="comment.id">
        <div class="card-block">
            <!-- 绑定用户评论 -->
            <p class="card-text">{{ comment.body }}</p>
        </div>
        <div class="card-footer">
            <nuxt-link :to="{
                name: 'profile',
                params: {
                    username: comment.author.username
                }
            }" class="comment-author">
                <img :src="comment.author.image" class="comment-author-img" />
            </nuxt-link>
            &nbsp;
            <nuxt-link :to="{
                name: 'profile',
                params: {
                    username: comment.author.username
                }
            }" class="comment-author">
                {{ comment.author.username }}
            </nuxt-link>
            <span class="date-posted">{{ comment.createdAt | date }}</span>
            <!-- 如果当前评论是当前登录用户所写，则显示删除评论按键 -->
            <span 
                class="mod-options" 
                ng-show="$ctrl.canModify" 
                v-if="user.username === comment.author.username" @click="
                deleteComment(comment)"
            >
                <i class="ion-trash-a" ng-click="$ctrl.deleteCb()"></i>
            </span>
        </div>
    </div>
    
  </div>
</template>

<script>
import { getComments, addComment, deleteComment } from '@/api/article'
import { mapState } from 'vuex'
export default {
    name: 'ArticleComments',
    props: {
        article: {
            type: Object,
            required: true
        }
    },
    data () {
        return {
            comments: [],
            body: '',
            btnDisabled: false,
        }
    },
    async mounted () {
        const { data } = await getComments(this.article.slug)
        this.comments = data.comments
    },
    computed: {
        // 映射当前登录用户的登录状态
        ...mapState(['user'])
    },
    methods: {
        async deleteComment (comment) {
            // 获取 id
            const { id } = comment
            // 删除评论
            await deleteComment(this.article.slug, id)
            // 找到对应下标并删除
            const index = this.comments.findIndex(comment => comment.id === id)
            this.comments.splice(index, 1)

        },
        async addUserComment () {
            // 禁用按钮
            this.btnDisabled = true
            // 发起请求
            const { data } = await addComment(this.article.slug, {
                comment: {
                    body: this.body
                }
            })
            // 如果返回添加的评论信息则添加到所有评论的第一个并清空输入框
            if( data.comment ) this.comments.unshift(data.comment)
            this.body = ''
            this.btnDisabled = false
        }
    }
}
</script>

<style>

</style>