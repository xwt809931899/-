import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count:5
}

const mutations = {
  add(state) {
    state.count++
  },
  reduce(state) {
    state.count--
  }
} 

const getters = {
  count:function(state) {
    return state.count += 100
  }
}

const actions = {
  addAsync({commit}){
      console.log('我比reduce先执行')
      commit('add')
  },
  reduceAsync({commit}){
    setTimeout(() => {
      commit('reduce')
    },2000)
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})


export default store
