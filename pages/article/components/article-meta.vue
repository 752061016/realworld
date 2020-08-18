<template>
    <div class="article-meta">
        <nuxt-link :to="{
            name: 'profile',
            params: {
                username: article.author.username
            }
        }"><img :src="article.author.image" /></nuxt-link>
        <div class="info">
            <nuxt-link :to="{
                name: 'profile',
                params: {
                    username: article.author.username
                }
            }">{{ article.author.username }}</nuxt-link>
            <span class="date">{{ article.createdAt | date }}</span>
        </div>
        <!-- 不是作者时显示关注和收藏按钮 -->
        <template v-if="!isCurrentUser">
            <!-- 绑定disabled避免重复点击 -->
            <button 
                class="btn btn-sm btn-outline-secondary"
                :disabled="followDisabled"
                @click="follow"
                :class="{
                    active: article.author.following
                }"
            >
                <i class="ion-plus-round"></i>
                &nbsp;
                <!-- 绑定作者姓名，判断是否已关注 -->
                {{ article.author.following ? 'Unfollow' : 'Follow' }} 
                {{ article.author.username }}
            </button>
            &nbsp;&nbsp;
            <!-- 绑定disabled避免重复点击 -->
            <button 
                class="btn btn-sm btn-outline-primary"
                :disabled="favoriteDisabled"
                @click="favorite"
                :class="{
                    active: article.author.favorited
                }"
            >
                <i class="ion-heart"></i>
                &nbsp;
                <!-- 绑定喜欢总数 -->
                {{ article.favorited ? 'Unfavorite article' : 'Favorite Post'}} 
                <span class="counter">({{ article.favoritesCount }})</span>
            </button>
        </template>
        <!-- 是作者时显示修改和删除按钮 -->
        <template v-if="isCurrentUser">
            <span class="ng-scope">

                <nuxt-link class="btn btn-outline-secondary btn-sm" 
                  :to="{
                      name: 'editor',
                      query: {
                          slug: article.slug
                      }
                  }"
                >
                    <i class="ion-edit"></i> Edit Article
                </nuxt-link>

                <button class="btn btn-outline-danger btn-sm"
                  @click="deleteArticle"
                  :disabled="deleteDisabled"
                >
                    <i class="ion-trash-a"></i> Delete Article
                </button>

            </span>
        </template>
    </div>
</template>

<script>
import { addFollow, deleteFollow, addFavorite, deleteFavorite, deleteArticle } from '@/api/article'
import { mapState } from 'vuex'
export default {
    name: 'articleMeta',
    props: {
        article: {
            type: Object,
            required: true
        }
    },
    data () {
        return {
            followDisabled: false,
            favoriteDisabled: false,
            deleteDisabled: false
        }
    },
    methods: {
        // 删除文章
        async deleteArticle () {
            this.deleteDisabled = true
            // 删除文章
            await deleteArticle(this.article.slug)
            // 跳转个人主页
            this.$router.push(`/profile/${this.user.username}`)
            this.deleteDisabled = false
        },
        // 关注作者 / 取消关注
        async follow () {
            // 禁止点击按钮
            this.followDisabled = true
            // 根据是否已经添加来调用对应接口
            if (this.article.author.following) {
                await deleteFollow(this.article.author.username)
                this.article.author.following = false
            } else {
                await addFollow(this.article.author.username)
                this.article.author.following = true
            }
            this.followDisabled = false
        },
        // 添加喜欢文章 / 删除喜欢文章
        async favorite () {
            // 禁止点击按钮
            this.favoriteDisabled = true
            // 根据是否已经添加来调用对应接口
            if (this.article.favorited) {
                await deleteFavorite(this.article.slug)
                this.article.favorited = false
                this.article.favoritesCount --
            } else {
                await addFavorite(this.article.slug)
                this.article.favorited = true
                this.article.favoritesCount ++
            }
            this.favoriteDisabled = false
        }
    },
    computed: {
        // 映射当前登录用户的登录状态
        ...mapState(['user']),
        // 判断是否为当前登录用户的详情页
        isCurrentUser () {
          return this.user && this.article.author.username === this.user.username
        }
    }
}
</script>

<style>

</style>