/*
 * @Author: your name
 * @Date: 2020-03-23 15:32:31
 * @LastEditTime: 2020-03-23 16:02:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \learn\myblog\src\js\router.js
 */
export default {
    mode: 'history',
    routes: [
        {
            path: "/home",
            component: () => import('../components/home')
        },
        {
            path: "/user",
            component: () => import('../components/user')
        },
        {
            path: "/about",
            component: () => import('../components/about')
        }
    ]
}