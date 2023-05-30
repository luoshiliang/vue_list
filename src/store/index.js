import Vue from "vue";
import vuex from 'vuex'
Vue.use(vuex)
import { Store } from "vuex";
import student from './student.js'

const store = new Store({
    modules:{
        student
    }
})
export default store