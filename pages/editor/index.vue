<template>
<div class="editor-page">
  <div class="container page">
    <div class="row">

      <div class="col-md-10 offset-md-1 col-xs-12">
        <form>
          <fieldset>
            <fieldset class="form-group">
                <input type="text" 
                  v-model="article.title" 
                  class="form-control form-control-lg" 
                  placeholder="Article Title">
            </fieldset>
            <fieldset class="form-group">
                <input type="text" 
                  v-model="article.description"  
                  class="form-control" 
                  placeholder="What's this article about?">
            </fieldset>
            <fieldset class="form-group">
                <textarea class="form-control" rows="8" 
                  v-model="article.body"  
                  placeholder="Write your article (in markdown)"></textarea>
            </fieldset>
            <fieldset class="form-group">
                <input type="text" 
                  v-model="article.tagList"  
                  class="form-control" 
                  placeholder="Enter tags"><div class="tag-list"></div>
                <div class="tag-list">
                  <span 
                    ng-repeat="tag in $ctrl.article.tagList" 
                    class="tag-default tag-pill ng-binding ng-scope"
                    v-for="(tag, index) in article.oldTagList"
                    :key="tag"
                    @click="deleteTag(index)"
                  >
                    <i class="ion-close-round"></i>
                    {{ tag }}
                  </span>
                </div>
            </fieldset>
            <button 
              class="btn btn-lg pull-xs-right btn-primary" 
              :disabled="btnDisabled" 
              @click="addArticle" 
              type="button">
                Publish Article
            </button>
          </fieldset>
        </form>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import { addArticle, updataArticle, getArticle } from '@/api/article'
export default {
    // 在路由匹配组件之前会先执行中间件处理
    middleware: 'authenticated',
    name: 'EditorPage',
    data () {
      return {
        article: {
          title: '',
          description: '',
          body: '',
          tagList: '',
          oldTagList: []
        },
        btnDisabled: false,
        slug: ''
      }
    },
    async mounted () {
      const slug = this.$route.query.slug
      // 如果带参获取文章详情并绑定数据
      if (slug) {
        this.slug = slug
        const { data } = await getArticle(slug)
        const article = data.article
        // 拼接标签 保留老标签
        article.oldTagList = article.tagList
        article.tagList = ''
        this.article = article
      }
    },
    methods: {
      deleteTag(index) {
        this.article.oldTagList.splice(index, 1)
      },
      async addArticle() {
        this.btnDisabled = true
        // 复制数据
        const article = Object.assign({}, this.article)
        // 提取字符串中以特殊字符或空格分割成的 tag 再与 oldtag组合成新数组
        article.tagList = (article.tagList.match(/[a-zA-Z0-9\u4e00-\u9fa5]+/ig) || []).concat(article.oldTagList)
        // 判断是否有 slug 有则为更新文章 没有为新增文章
        const { data } = this.slug ? await updataArticle(this.slug, { article }) : await addArticle({ article })
        // 成功后跳转到文章详情页
        this.$router.push(`/article/${data.article.slug}`)
        this.btnDisabled = false
      }
    }
    
}
</script>

<style>

</style>