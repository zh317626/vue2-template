import axios from 'axios'
// import Router from '../router/index'
import qs from 'qs'

// 添加请求头；根据需求配饰即可
let headers = {
  'Content-Type': 'application/x-www-form-urlencoded',
}
//拦截器；针对发送请求以前做的处理
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// 响应期
axios.interceptors.response.use(function (response) {
  // Do something with response data
  let res = response.data;
  if (res.code == 935) { // 登录过期
    console.log('如果登录过期,在这儿就可以返回登录页面等等');
  }
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

// 创建一个函数
const request = (request) => {
  let { method = 'GET', url, params, data, type, headerPost = {} } = request;
  method = method.toUpperCase() // 转为大写字母
  // 请求地址
  let baseUrl = process.env.VUE_APP_API_URL;

  // 多域名情况下
  if (type === 'wall') {
    baseUrl = process.env.VUE_APP_AWLLPAPER
  }

  // 配置token请求；可以根据实际需求进行判断
  // let token = localStorage.getItem('token')
  // if (!token) {
    // Router.replace({ name: 'Home' }) // 跳转到登录页面
  // } else {
    // headers.token = Object.assign({}, data, { token: token }) // 合并参数
  // }

  if (method === 'POST') { // 如果是post请求的处理
    data = qs.stringify(data) // 在post中处理数据序列化
  }

  // 同过 Promise 封装一个请求接口
  return new Promise((resolve, reject) => {
    axios({
      url: baseUrl + url,
      method: method,
      data: data,
      params,
      header: Object.assign({}, headers, headerPost)
    })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
      .finally(() => {
        // console.log('不管是否成功都要执行');
      })
  })
}

// 暴露出去
export default request