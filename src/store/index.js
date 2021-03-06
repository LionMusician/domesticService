/***
 * 定义
 */
import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate'

import mutations from './mutations'
import actions from './action'
import getters from './getter'

Vue.use(Vuex)

const state = {
    tabBarActive: 0,
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    plugins: [
        createPersistedState({
            storage: {
                getItem: key => wx.getStorageSync(key),
                setItem: (key, value) => wx.setStorageSync(key, value),
                removeItem: (key) => { }
            }
        })
    ]
})
