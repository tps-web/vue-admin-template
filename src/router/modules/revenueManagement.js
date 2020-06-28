import Layout from '@/layout'
const revenueManagement = {
  path: '/revenueManagement',
  component: Layout,
  redirect: '/revenueManagement',
  meta: {
    title: '收入管理',
    icon: 'shouru'
  },
  children: [{
    path: 'pjlr',
    name: 'Pjlr',
    component: () =>
                import('@/views/revenueManagement/pjlr'),
    meta: { title: '票据录入', icon: 'form' }
  },
  {
    path: 'sksj',
    name: 'Sksj',
    component: () =>
                import('@/views/revenueManagement/sksj'),
    meta: { title: '收款收据', icon: 'form' }
  },
  {
    path: 'djdy',
    name: 'Djdy',
    component: () =>
                import('@/views/revenueManagement/djdy'),
    meta: { title: '单据打印', icon: 'form' }
  },
  {
    path: 'djsk',
    name: 'Djsk',
    component: () =>
                import('@/views/revenueManagement/djsk'),
    meta: { title: '单据收款', icon: 'form' }
  },
  {
    path: 'djcx',
    name: 'Djcx',
    component: () =>
                import('@/views/revenueManagement/djcx'),
    meta: { title: '单据查询', icon: 'form' }
  },
  {
    path: 'srjdcx',
    name: 'Srjdcx',
    component: () =>

                import('@/views/revenueManagement/srjdcx'),
    meta: { title: '收入进度查询', icon: 'form' }
  },
  {
    path: 'sjdrgl',
    name: 'Sjdrgl',
    component: () =>
                import('@/views/revenueManagement/management/index'),
    meta: { title: '收据导入管理', icon: 'form' },
    children: [{
      path: 'scsjmb',
      name: 'Scsjmb',
      component: () =>
                        import('@/views/revenueManagement/management/scsjmb'),
      meta: { title: '生成收据模板', icon: 'form' }
    },
    {
      path: 'drsksj',
      name: 'Drsksj',
      component: () =>
                        import('@/views/revenueManagement/management/drsksj'),
      meta: { title: '导入收款收据', icon: 'form' }
    }
    ]
  }
  ]
}

export default revenueManagement
