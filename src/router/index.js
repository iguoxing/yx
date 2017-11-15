import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '@/components/Hello'

const Index = resolve => require(['@/components/Index/Index'], resolve)
const Service = resolve => require(['@/components/Index/Service'], resolve)
const AboutUs = resolve => require(['@/components/Index/AboutUs'], resolve)
const Share = resolve => require(['@/components/Buy/Share'], resolve)
const Check = resolve => require(['@/components/Buy/Check'], resolve)
const Article = resolve => require(['@/components/Doc/Article'], resolve)
const ArticleList = resolve => require(['@/components/Doc/List'], resolve)
const Login = resolve => require(['@/components/Index/Login'], resolve)
const Goods = resolve => require(['@/components/Index/Goods'], resolve)
const GoodsInfo = resolve => require(['@/components/Index/GoodsInfo'], resolve)
const GoodsOne = resolve => require(['@/components/Index/GoodsOne'], resolve)
const Buy = resolve => require(['@/components/Index/Buy'], resolve)
const Cart = resolve => require(['@/components/Index/Cart'], resolve)
const WaitPay = resolve => require(['@/components/Index/WaitPay'], resolve)
const WaitTake = resolve => require(['@/components/Index/WaitTake'], resolve)
const Entry = resolve => require(['@/components/Entry/Entry'], resolve)

// const Toolbar = resolve => require(['@/components/Base/Toolbar'], resolve)
const Toolbar = resolve => require(['@/components/Base/Toolbar'], resolve)
const Foot = resolve => require(['@/components/Base/Foot'], resolve)

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Index, alias: '/index' }, //首页
    { path: '/service', component: Service }, //售后服务
    { path: '/us', component: AboutUs }, //售后服务
    { path: '/share', component: Share }, //共享计划
    { path: '/check', component: Check }, //确认页面
    { path: '/article', component: Article }, //测评文章
    { path: '/article/list', component: ArticleList }, //测评文章
    { path: '/login', component: Login },
    { path: '/goods', component: Goods }, //产品列表
    { path: '/goods_info', component: GoodsInfo }, //商品详情
    { path: '/goods_one', component: GoodsOne }, //单个商品
    { path: '/buy', component: Buy }, //产品列表
    { path: '/cart', component: Cart }, //购物车
    { path: '/wait_pay', component: WaitPay }, //待付款
    { path: '/wait_take', component: WaitTake }, //待收货
    { path: '/toolbar', component: Toolbar },
    { path: '/foot', component: Foot },
    { path: '/enter', component: Entry }
]

const Router = new VueRouter({
    linkActiveClass: 'active',
    mode: 'history',
    routes
})

export default Router;

// 创建根实例
// new Vue({
//   el: '#example'
// })