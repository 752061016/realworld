import {request} from '@/plugins/request'

// 获取公共文章列表
export const getArticles = params => {
    return request({
        method: 'GET',
        url: '/api/articles',
        params
    })
}

// 获取关注作者文章列表
export const getYourFeedArticles = params => {
    return request({
        method: 'GET',
        url: '/api/articles/feed',
        params,
        isLogin: true
    })
}

// 添加收藏
export const addFavorite = slug => {
    return request({
        method: 'POST',
        url: `/api/articles/${slug}/favorite`,
        isLogin: true
    })
}

// 取消收藏
export const deleteFavorite = slug => {
    return request({
        method: 'DELETE',
        url: `/api/articles/${slug}/favorite`,
        isLogin: true
    })
}

// 获取文章详情
export const getArticle = slug => {
    return request({
        method: 'GET',
        url: `/api/articles/${slug}`,
    })
}

// 获取文章评论
export const getComments = slug => {
    return request({
        method: 'GET',
        url: `/api/articles/${slug}/comments`,
    })
}

// 添加文章评论
export const addComment = (slug, data) => {
    return request({
        method: 'POST',
        url: `/api/articles/${slug}/comments`,
        data,
        isLogin: true
    })
}

// 删除文章评论
export const deleteComment = (slug, id) => {
    return request({
        method: 'DELETE',
        url: `/api/articles/${slug}/comments/${id}`,
        isLogin: true
    })
}

// 关注文章作者
export const addFollow = username => {
    return request({
        method: 'POST',
        url: `/api/profiles/${username}/follow`,
        isLogin: true
    })
}

// 取消关注文章作者
export const deleteFollow = username => {
    return request({
        method: 'DELETE',
        url: `/api/profiles/${username}/follow`,
        isLogin: true
    })
}

// 添加文章
export const addArticle = data => {
    return request({
        method: 'POST',
        url: `/api/articles`,
        data ,
        isLogin: true
    })
}

// 删除文章
export const deleteArticle = slug => {
    return request({
        method: 'DELETE',
        url: `/api/articles/${slug}`,
        isLogin: true
    })
}

// 修改文章
export const updataArticle = (slug, data) => {
    return request({
        method: 'PUT',
        url: `/api/articles/${slug}`,
        data,
        isLogin: true
    })
}


