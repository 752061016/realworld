<template>
<div class="home-page">

  <div class="banner">
    <div class="container">
      <h1 class="logo-font">conduit</h1>
      <p>A place to share your knowledge.</p>
    </div>
  </div>

  <div class="container page">
    <div class="row">

      <div class="col-md-9">
        <div class="feed-toggle">
          <ul class="nav nav-pills outline-active">
            <li class="nav-item">
              <nuxt-link 
              v-if="user"
              :class="{
                active: tab === 'your_feed'
              }"
              exact
              :to="{
                name: 'home',
                query: {
                  tab: 'your_feed'
                }
              }" class="nav-link">Your Feed</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link 
              :class="{
                active: tab === 'global_feed'
              }"
              exact
              :to="{
                name: 'home'
              }" class="nav-link">Global Feed</nuxt-link>
            </li>
            <li class="nav-item" v-if="tag">
              <nuxt-link 
              :class="{
                active: tab === 'tag'
              }"
              exact
              :to="{
                name: 'home',
                query: {
                  tab: tag,
                  tag
                }
              }" class="nav-link"># {{ tag }}</nuxt-link>
            </li>
          </ul>
        </div>

        <div class="article-preview"
          v-for="article in articles"
          :key="article.slug"
        >

        
          <div class="article-meta">
            <nuxt-link :to="{
              name: 'profile',
              params: {
                username: article.author.username
              }
            }"><img :src="article.author.image" /></nuxt-link>
            <div class="info">
              <nuxt-link class="author" :to="{
                name: 'profile',
                params: {
                  username: article.author.username
                }
              }">{{ article.author.username }}</nuxt-link>
              <span class="date">{{ article.createdAt | date }}</span>
            </div>
            <button 
              class="btn btn-outline-primary btn-sm pull-xs-right"
              :class="{active: article.favorited}"
              @click="onFavorite(article)"
              :disabled="article.favoriteDisabled">
              <i class="ion-heart"></i> {{ article.favoritesCount }}
            </button>
          </div>
          <nuxt-link :to="{
            name: 'article',
            params: {
              slug: article.slug
            }
          }" class="preview-link">
            <h1>{{ article.title }}</h1>
            <p>{{ article.description }}</p>
            <span>Read more...</span>
          </nuxt-link>
        </div>

        <!-- 分页列表 -->
        <nav>
          <ul class="pagination">

            <li 
              class="page-item"
              v-for="item in totalPage"
              :class="{
                active: item === page
              }"
              :key="item"
            >
              <nuxt-link 
                class="page-link" 
                :to="{
                  name: 'home',
                  query: {
                    page: item,
                    tag: $route.query.tag,
                    tab
                  }
                }"
              >{{ item }}</nuxt-link>
            </li>

          </ul>
        </nav>

      </div>

      <div class="col-md-3">
        <div class="sidebar">
          <p>Popular Tags</p>

          <div class="tag-list">
            <nuxt-link 
              :to="{
                name: 'home',
                query: {
                  tag: item,
                  tab: 'tag'
                }
              }" 
              class="tag-pill tag-default"
              v-for="item in tags"
              :key="item"
            >
            {{ item }}
            </nuxt-link>
          </div>
        </div>
      </div>

    </div>
  </div>

</div>
</template>

<script>
import { 
  getArticles, 
  getYourFeedArticles,
  addFavorite,
  deleteFavorite
} from '@/api/article'
import { getTags } from '@/api/tag'
import { mapState } from 'vuex'
export default {
    name: 'HomePage',
    watchQuery: ['page', 'tag', 'tab'],
    async asyncData ({ query }) {
      const page = Number.parseInt(query.page || 1)
      const limit = 2
      const tab = query.tab || 'global_feed'
      const tag = query.tag || ''
      const loadArticles = tab === 'global_feed' ? getArticles : getYourFeedArticles
      const [ articleRes, tagRes ] = await Promise.all([
        loadArticles({
          limit,
          offset: (page - 1) * limit,
          tag
        }),
        getTags()
      ])

      const { articles, articlesCount } = articleRes.data
      const { tags } = tagRes.data

      articles.forEach(article => article.favoriteDisabled = false);
      return {
        articles,
        articlesCount,
        limit, // 每页文章数量
        page, // 当前页码
        tags, // 标签列表
        tab, // 选项卡
        tag, // 数据标签
      }
    },
    computed: {
      totalPage () {
        return Math.ceil(this.articlesCount / this.limit)
      },
      ...mapState(['user'])
    },
    methods: {
      async onFavorite (article) {
        article.favoriteDisabled = true
        if (article.favorited) {
          // 取消点赞
          await deleteFavorite(article.slug)
          article.favorited = false
          article.favoritesCount -= 1
        } else {
          // 添加点赞
          await addFavorite(article.slug)
          article.favorited = true
          article.favoritesCount += 1
        }
        article.favoriteDisabled = false
      }
    }
}
</script>

<style>

</style>