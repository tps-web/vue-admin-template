import Layout from '@/layout'
const cm = {
  path: '/cm',
  component: Layout,
  redirect: '/cm',
  meta: {
    title: '合同管理',
    icon: 'hetong'
  },
  children: [{
    path: 'htlr',
    name: 'Htlr',
    component: () =>
                import('@/views/cm/htlr'),
    meta: { title: '合同录入', icon: 'form' }
  },
  {
    path: 'htcx',
    name: 'htcx',
    component: () =>
                import('@/views/cm/htcx'),
    meta: { title: '合同查询', icon: 'form' }
  },
  {
    path: 'yfkcx',
    name: 'yfkcx',
    component: () =>
                import('@/views/cm/yfkcx'),
    meta: { title: '应付款查询', icon: 'form' }
  },
  {
    path: 'byysk',
    name: 'byysk',
    component: () =>
                import('@/views/cm/byysk'),
    meta: { title: '本月应收款', icon: 'form' }
  },
  {
    path: 'byyfk',
    name: 'byyfk',
    component: () =>
                import('@/views/cm/byyfk'),
    meta: { title: '本月应付款', icon: 'form' }
  }

  ]
}
export default cm
