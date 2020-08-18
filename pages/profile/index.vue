<template>
<div class="profile-page">

  <div class="user-info">
    <div class="container">
      <div class="row">

        <div class="col-xs-12 col-md-10 offset-md-1">
          <img :src="profile.image" class="user-img" />
          <h4>{{ profile.username }}</h4>
          <p>
            {{ profile.bio }}
          </p>
          <!-- 如果不是当前登录用户详情页，弹出关注按钮 -->
          <button 
            v-if="!isCurrentUser"
            class="btn btn-sm btn-outline-secondary action-btn"
            :disabled="followDisabled"
            @click="follow"
            :class="{
                active: profile.following
            }"
          >
            <i class="ion-plus-round"></i>
            &nbsp;
            {{ profile.following ? 'Unfollow' : 'Follow' }} {{ profile.username }}
          </button>
          <!-- 如果是当前登录用户详情页，弹出跳转到 setting 按钮 -->
          <button 
            class="btn btn-sm btn-outline-secondary action-btn"
            v-if="isCurrentUser"
            @click="goSetting"
            :class="{
                active: profile.following
            }"
          >
            <i class="ion-gear-a"></i>
            &nbsp;
            Edit Profile Settings
          </button>
        </div>

      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">

      <div class="col-xs-12 col-md-10 offset-md-1">
        <div class="articles-toggle">
          <ul class="nav nav-pills outline-active">
            <li class="nav-item">
              <!-- 用户全部文章 -->
              <nuxt-link 
              class="nav-link"
              :class="{
                active: tab === 'my_articles'
              }" 
              exact
              :to="{
                name: 'profile',
                params: {
                  username
                },
                query: {
                  tab: 'my_articles'
                }
              }"
              >My Articles</nuxt-link>
            </li>
            <li class="nav-item">
              <!-- 用户收藏的文章 -->
              <nuxt-link 
              class="nav-link" 
              :class="{
                active: tab === 'favorited_articles'
              }" 
              exact
              :to="{
                name: 'profile',
                params: {
                  username
                },
                query: {
                  tab: 'favorited_articles'
                }
              }"
              >Favorited Articles</nuxt-link>
            </li>
          </ul>
        </div>

        <div class="article-preview" v-for="article in articles" :key="article.username">
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
              <span class="date">{{ article.createdAt | date}}</span>
            </div>
            <button 
              class="btn btn-outline-primary btn-sm pull-xs-right"
              @click="favorite(article)"
              :disabled="article.favoriteDisabled"
              :class="{
                active: article.favorited
              }"
            >
              <i class="ion-heart"></i> {{ article.favoritesCount }}
            </button>
          </div>
          <nuxt-link class="preview-link" :to="{
            name: 'article',
            params: {
              slug: article.slug
            }
          }"
          >
            <h1>{{ article.title }}</h1>
            <p>{{ article.description }}</p>
            <span>Read more...</span>
            <ul class="tag-list">
              <li 
                class="tag-default tag-pill tag-outline ng-binding ng-scope"
                v-for="tag in article.tagList" :key="tag">
                {{ tag }}
              </li>
            </ul>
          </nuxt-link>
        </div>


        <!-- 分页列表 -->
        <nav>
          <ul class="pagination">

            <li 
              class="page-item"
              v-for="item in totalPage"
              :disabled="item === page"
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
                    tab
                  }
                }"
              >{{ item }}</nuxt-link>
            </li>

          </ul>
        </nav>
      </div>

      

    </div>
  </div>

</div>
</template>

<script>
import { getProfiles } from '@/api/user'
import { addFollow, deleteFollow, getArticles, addFavorite, deleteFavorite } from '@/api/article'
import { mapState } from 'vuex'
export default {
    name: 'profile',
    // 监听参数变化
    watchQuery: ['page', 'tab'],
    async asyncData ({ query, params }) {
      // 用户名
      const username = params.username
      // 当前标签
      const tab = query.tab || 'my_articles'
      // 当前页码
      const page = Number.parseInt(query.page || 1)
      // 每页数量
      const limit = 5
      // 获取文章列表参数
      const data = {
        limit,
        offset: (page - 1) * limit
      }
      if ( tab === 'my_articles' ) {
        // 选择用户文章的参数
        data.author = username
      } else {
        // 选择用户喜欢的参数
        data.favorited = username
      }

      // const { data } = await getProfiles(username)
      const [ profileData, articleData ] = await Promise.all([
        getProfiles(username),
        getArticles(data)
      ])

      const { profile } = profileData.data
      const { articles, articlesCount } = articleData.data
      // 添加按钮状态
      articles.forEach(article => article.favoriteDisabled = false)
      return {
        profile,
        articles,
        page,
        tab,
        username,
        limit,
        articlesCount
      }
    },
    data () {
      return {
        followDisabled: false,
        // favoriteDisabled: false
      }
    },
    methods: {
      goSetting () {
        this.$router.push('/settings')
      },
      async favorite(article) {
        // 禁用按钮
        article.favoriteDisabled = true
        // 根据状态调用不同接口
        if (article.favorited) {
          await deleteFavorite(article.slug)
          article.favorited = false
          article.favoritesCount --
        } else {
          await addFavorite(article.slug)
          article.favorited = true
          article.favoritesCount ++
        }
        article.favoriteDisabled = false
      },
      // 关注作者 / 取消关注
      async follow () {
          // 禁止点击按钮
          this.followDisabled = true
          // 根据是否已经添加来调用对应接口
          if (this.profile.following) {
              await deleteFollow(this.profile.username)
              this.profile.following = false
          } else {
              await addFollow(this.profile.username)
              this.profile.following = true
          }
          this.followDisabled = false
      },
    },
    computed: {
        // 映射当前登录用户的登录状态
        ...mapState(['user']),
        // 判断是否为当前登录用户的详情页
        isCurrentUser () {
          return this.user && this.profile.username === this.user.username
        },
        totalPage () {
          return Math.ceil(this.articlesCount / this.limit)
        },
    }
}
</script>

<style>

</style>