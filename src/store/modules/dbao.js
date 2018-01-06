import * as types from '../mutation-types'
import ApiSpace from '@/api/space'
const state = {
        // 点击试玩按钮 返回奖品
        playClickResult: [],
    }
    // mutations
const mutations = {
        // 点击返回结果
        [types.GET_CLICK_RESULT](state, data) {
            // alert(679)
            state.playClickResult = data
                // state.playClickResult.message = data.message
                // state.playClickResult.result = data.result
                // state.playClickResult.code = data.code
        },
    }
    // actions
const actions = {
    //点击试玩按钮 返回奖品
    getPlayClick: ({ commit }) => {
        return ApiSpace.getPlayClick().then((data) => {
            // alert(123)
            commit(types.GET_CLICK_RESULT, data)
            return data
        }, (error) => {
            console.log(error)
            return error
        })
    }
}
export default {
    state,
    mutations,
    actions
}