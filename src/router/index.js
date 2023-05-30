
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
import router1 from '../views/router.vue'
import routerlianxi from '../views/routerlianxi.vue'
import routerlianxi1 from '../views/routerlianxi1.vue'
import routerlianxi2 from '../views/routerlianxi2.vue'
import routerlianxi3 from '../views/routerlianxi3.vue'
import routerlianxi4 from '../views/routerlianxi4.vue'
import routerlianxi5 from '../views/routerlianxi5.vue'
import rlx1 from '../views/rlx1.vue'
import rlx2 from '../views/rlx2.vue'
import rlx3 from '../views/rlx3.vue'
import rlx4 from '../views/rlx4.vue'
import rlx5 from '../views/rlx5.vue'
import rlx6 from '../views/rlx6.vue'

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
    ,
    {
        path: '/router1',
        name: 'router1',
        component: router1,
        redirect: routerlianxi,
        children: [
            {
                path: 'routerlianxi',
                name: 'routerlianxi',
                redirect: rlx1,
                component: routerlianxi,
                children: [
                    {
                        path: 'rlx1',
                        name: 'rlx1',
                        component: rlx1
                    },
                    {
                        path: 'rlx2',
                        name: 'rlx2',
                        component: rlx2
                    },
                    {
                        path: 'rlx3',
                        name: 'rlx3',
                        component: rlx3
                    },
                    {
                        path: 'rlx4',
                        name: 'rlx4',
                        component: rlx4
                    },
                    {
                        path: 'rlx5',
                        name: 'rlx5',
                        component: rlx5
                    },
                    {
                        path: 'rlx6',
                        name: 'rlx6',
                        component: rlx6
                    }
                ]
            },
            {
                path: 'routerlianxi1',
                name: 'routerlianxi1',
                component: routerlianxi1
            },
            {
                path: 'routerlianxi2',
                name: 'routerlianxi2',
                component: routerlianxi2
            },
            {
                path: 'routerlianxi3',
                name: 'routerlianxi3',
                component: routerlianxi3
            },
            {
                path: 'routerlianxi4',
                name: 'routerlianxi4',
                component: routerlianxi4
            },
            {
                path: 'routerlianxi5',
                name: 'routerlianxi5',
                component: routerlianxi5
            }
        ]
    }
]


const router = new VueRouter({
    routes
})

export default router
