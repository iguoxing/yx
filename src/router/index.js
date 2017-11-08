import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

const Index = resolve => require(['@/components/Index/Index'], resolve)
const Service = resolve => require(['@/components/Index/Service'], resolve)
const Login = resolve => require(['@/components/Index/Login'], resolve)
const Goods = resolve => require(['@/components/Index/Goods'], resolve)
const GoodsInfo = resolve => require(['@/components/Index/GoodsInfo'], resolve)
const GoodsOne = resolve => require(['@/components/Index/GoodsOne'], resolve)
const Buy = resolve => require(['@/components/Index/Buy'], resolve)
const Cart = resolve => require(['@/components/Index/Cart'], resolve)
const WaitPay = resolve => require(['@/components/Index/WaitPay'], resolve)
const WaitTake = resolve => require(['@/components/Index/WaitTake'], resolve)
const Entry = resolve => require(['@/components/Entry/Entry'], resolve)
const Myorder = resolve => require(['@/components/Entry/Myorder'], resolve)
const Address = resolve => require(['@/components/Entry/Address'], resolve)
const AfterSale = resolve => require(['@/components/Entry/AfterSale'], resolve)
const PartnerApply = resolve => require(['@/components/Entry/PartnerApply'], resolve)

// const Toolbar = resolve => require(['@/components/Base/Toolbar'], resolve)
const Toolbar = resolve => require(['@/components/Base/Toolbar'], resolve)
const Foot = resolve => require(['@/components/Base/Foot'], resolve)

Vue.use(Router)
export default new Router({
  // 选中状态
  linkActiveClass:'active',
  mode: 'history',
  // scrollBehavior: () => ({ y: 0 }),
  routes: [
    {path: '/',component: Index,alias: '/index'},//首页
    {path: '/service',component: Service},//售后服务
    {path: '/login',component: Login},
    {path: '/goods',component: Goods},//产品列表
    {path: '/goods_info',component: GoodsInfo},//商品详情
    {path: '/goods_one',component: GoodsOne},//单个商品
    {path: '/buy',component: Buy},//产品列表
    {path: '/cart',component: Cart},//购物车
    {path: '/wait_pay',component: WaitPay},//待付款
    {path: '/wait_take',component: WaitTake},//待收货
    {path: '/toolbar',component: Toolbar},
    {path: '/foot',component: Foot},
    {path: '/enter',component: Entry,
      children:[
        // {path:'/',component:Entry,alias: 'index'},
        {path:'/',component:Myorder,alias: 'order'},
        {path:'address',component:Address},
        {path:'after_sale',component:AfterSale},
        {path:'partner_apply',component:PartnerApply},
      ]
    }
  ]
})

// 创建根实例
// new Vue({
//   el: '#example'
// })
