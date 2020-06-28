// 出纳账
import Layout from '@/layout'
const cashier = {
  path: '/cashier',
  redirect: '/cashier',
  component: Layout,
  meta: {
    title: '出纳账管理',
    icon: 'nested'
  },
  children: [{
    path: 'xjrjzlr',
    name: 'xjrjzlr',
    component: () =>
                import('@/views/cashier/xjrjzlr'),
    meta: { title: '现金日记账录入', icon: 'form' }
  },
  {
    path: 'yhrjzlr',
    name: 'yhrjzlr',
    component: () =>
                import('@/views/cashier/yhrjzlr'),
    meta: { title: '银行日记账录入', icon: 'form' }
  },
  {
    path: 'xjrjzcx',
    name: 'xjrjzcx',
    component: () =>
                import('@/views/cashier/xjrjzcx'),
    meta: { title: '现金日记账查询', icon: 'form' }
  },
  {
    path: 'yhrjzcx',
    name: 'yhrjzcx',
    component: () =>
                import('@/views/cashier/yhrjzcx'),
    meta: { title: '银行日记账查询', icon: 'form' }
  },
  {
    path: 'xjyhrjzcx',
    name: 'xjyhrjzcx',
    component: () =>
                import('@/views/cashier/xjyhrjzcx'),
    meta: { title: '现金银行日记账查询', icon: 'form' }
  },
  {
    path: 'xjyhsfbg',
    name: 'xjyhsfbg',
    component: () =>
                import('@/views/cashier/xjyhsfbg'),
    meta: { title: '现金银行收付报告', icon: 'form' }
  },
  {
    path: 'yhckdsb',
    name: 'yhckdsb',
    component: () =>
                import('@/views/cashier/yhckdsb'),
    meta: { title: '银行存款对数表', icon: 'form' }
  },
  {
    path: 'xjpzsc',
    name: 'xjpzsc',
    component: () =>
                import('@/views/cashier/xjpzsc'),
    meta: { title: '现金凭证生成', icon: 'form' }
  },
  {
    path: 'yhpzsc',
    name: 'yhpzsc',
    component: () =>
                import('@/views/cashier/yhpzsc'),
    meta: { title: '银行凭证生成', icon: 'form' }
  }

  ]
}

export default cashier
