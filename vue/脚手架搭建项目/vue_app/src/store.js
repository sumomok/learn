import Vue from 'vue'
import Vuex from 'vuex'
import getStudentList from './store/getStudentList'

Vue.use(Vuex)

export default new Vuex.Store({
  strict:true,
  modules:{
    getStudentList
  }
})
