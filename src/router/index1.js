import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'
import budget from './modules/budget'
import target from './modules/target'
import reimbursement from './modules/reimbursement'
import revenueManagement from './modules/revenueManagement'
import cm from './modules/cm'
import cashier from './modules/cashier'
import resource from './modules/resource'
import institution from './modules/institution'
import assets from './modules/assets'
// import financial from './modules/financial'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [{
        path: '/redirect',
        component: Layout,
        hidden: true,
        children: [{
            path: '/redirect/:path*',
            component: () =>
                import ('@/views/redirect/index')
        }]
    },
    {
        path: '/login',
        component: () =>
            import ('@/views/login/index'),
        hidden: true
    },
    {
        path: '/404',
        component: () =>
            import ('@/views/404'),
        hidden: true
    },
    {
        path: '/changePwd',
        component: Layout,
        children: [{
            path: '/changePwd',
            name: '修改密码',
            component: () =>
                import ('@/views/changePwd'),
            meta: { title: '修改密码' }
        }],
        hidden: true
    },
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        children: [{
            path: 'dashboard',
            name: '首页',
            component: () =>
                import ('@/views/dashboard/index'),
            meta: { title: '首页', icon: 'shouye', affix: true }
        }]
    },
    {
        path: '/personal_data',
        component: Layout,
        children: [{
            path: '/personal_data',
            component: () =>
                import ('@/views/personal_data'),
            meta: { title: '个人资料' }
        }],
        hidden: true
    },
    // 预算管理
    budget,
    // 指标管理
    target,
    // 报销管理
    reimbursement,
    // 收入管理
    revenueManagement,
    // 合同管理
    cm,
    // 出纳账管理
    cashier,
    // 资源管理
    resource,
    // 制度管理
    institution,
    // 资产管理
    assets,
    // financial,
    // {
    //   path: 'external-link',
    //   component: Layout,
    //   children: [{
    //     path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
    //     meta: { title: 'External Link', icon: 'link' }
    //   }]
    // },

    // 404 page must be placed at the end !!!
    { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router