import request from '../../utils/request'
import router from '../../router'
import { Toast } from "vant";


let userInfo = localStorage.getItem('userInfo')
let token = localStorage.getItem('token')


export default {
    namespaced: true,

    state: {
        userInfo: userInfo ? JSON.parse(userInfo) : null,
        token: token ? token : null, 
    },

    getters: {},

    mutations: {
        login(state, payload) {
             state.userInfo = payload.userInfo
             state.token = payload.token
        }
    },

    actions: {
        handleLogin({ commit }, payload){
            request.post('http://localhost:8080/api/sign-in', payload).then(res => {
                console.log(res)
                if (res.code === 0){
                    commit('login', res.data)

                    localStorage.setItem('userInfo', JSON.stringify(res.data.userInfo))
                    localStorage.setItem('token', res.data.token)

                    router.replace('/center')
                } else {
                    Toast(res.msg)
                }
            })
        }
    }
}