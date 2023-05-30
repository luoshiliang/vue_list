
import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter)
import Home from '../views/Home.vue'
import discoloration from '../views/discoloration.vue'
import student from '../views/student.vue'
import formMsg from '../views/formMsg.vue'
import shop from '../views/shop.vue'
import shoeStore from '../views/shoeStore.vue'
import axioslx from '../views/axioslx.vue'
import elstudent from '../views/elstudent.vue'

const routes = [
    {
        path: '/',
        component: Home,
        name: 'Home',
    },
    {
        path: '/discoloration',
        name: 'discoloration',
        component: discoloration
    },
    {
        path: '/student',
        name: 'student',
        component: student
    },
    {
        path: '/formMsg',
        name: 'formMsg',
        component: formMsg
    },
    {
        path: '/shop',
        name: 'shop',
        component: shop
    }
    ,
    {
        path: '/shoeStore',
        name: 'shoeStore',
        component: shoeStore
    }
    ,
    {
        path: '/axioslx',
        name: 'axioslx',
        component: axioslx
    }
    ,
    {
        path: '/elstudent',
        name: 'elstudent',
        component: elstudent
    }
]


const router = new VueRouter({
    routes
})

export default router
