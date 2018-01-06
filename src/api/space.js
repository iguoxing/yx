import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
    // export const httpUrlHeader = process.env.NODE_ENV == 'development' ? process.env.DOMAIN+'/play' : process.env.DOMAIN+'/play';
    // export const httpUrlHeader = process.env.NODE_ENV == 'development' ? process.env.DOMAIN+'/interaction' : process.env.DOMAIN+'/interaction';

// export const httpUrlHeader = process.env.NODE_ENV == 'development' ? '/interaction' : '/interaction';
export const httpUrlHeader = 'http://work.duodian.com';

export default {
    // 点击试玩按钮 返回奖品
    getPlayClick(options) {
        return new Promise((resolve, reject) => {
            Vue.http.get(httpUrlHeader + '/menu.jsonp?account=test@test.com').then((response) => {
                // Vue.http.get(httpUrlHeader + '/click?campaignId=' + options.campaignId).then((response) => {
                console.log(response)
                resolve(response.body)
            }, (error) => {
                console.log('点击返回奖品结果 出错')
                reject(error)
            })
        })
    },


}