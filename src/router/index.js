//该文件专门用于创建整个应用的路由器
import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

Vue.use(VueRouter)
//创建并导出一个路由器
const router = new VueRouter({
    routes: [
        {
            name: 'echo',
            path: '/about',
            component: About
        },
        {
            name: 'jia',
            path: '/home',
            component: Home,
            children: [
                {
                    name: 'xinwen',
                    path: 'news',
                    component: News,
                },
                {
                    name: 'xiaoxi',
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            name: 'xiangqing',
                            path: 'detail',
                            component: Detail,
                            //props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件。
                            // props:{a:1,b:'hellp'},

                            //props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件。
                            props($route) {
                                return {
                                    id: $route.query.id,
                                    title: $route.query.title,
                                    a: 1,
                                    b: 'hello'
                                }
                            }
                        },
                    ]
                }
            ]
        },
    ]

})
//全局前置路由守卫，每次路由之前和初始化时调用
router.beforeEach((to, from, next) => {
    // if(to.path === './home.news' || to.path === './home/message'){
    //     if(localStorage.getItem('quanxian') === 'root'){
    //         next()
    //     }else{
    //         alert('权限不对，无权查看')
    //     }
    // }else{
    //     next()
    // }
    if(to.name === 'xinwen' || to.name === 'xiaoxi'){
        if(localStorage.getItem('quanxian') === 'root'){
            next()
        }else{
            alert('权限不对，无权查看')
        }
    }else{
        next()
    }
})


export default router
