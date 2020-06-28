import Layout from '@/layout'
const budget =
    // 预算管理
    {
      path: '/nested',
      component: Layout,
      redirect: '/nested',
      name: 'Nested',
      meta: {
        title: '预算管理',
        icon: 'nested'
      },
      children: [{
        path: 'menu2',
        name: 'Menu2',
        component: () =>
                    import('@/views/nested/menu2/index'),
        meta: { title: '单位数字表', icon: 'table' }
      },
      {
        path: 'menu1',
        component: () =>
                    import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: '收入项目表', icon: 'table' },
        redirect: '/nested/menu1/menu1-1',
        children: [{
          path: 'menu1-1',
          component: () =>
                            import('@/views/nested/menu1/menu1-1'),
          name: 'Menu1-1',
          meta: { title: '自有资金收入', icon: 'form' }
        },
        {
          path: 'menu1-2',
          component: () =>
                            import('@/views/nested/menu1/menu1-2'),
          name: 'Menu1-2',
          meta: { title: '一般性转移支付', icon: 'form' }
        },
        {
          path: 'menu1-3',
          component: () =>
                            import('@/views/nested/menu1/menu1-3'),
          name: 'Menu1-3',
          meta: { title: '项目性转移支付', icon: 'form' }
        },
        {
          path: 'menu1-4',
          component: () =>
                            import('@/views/nested/menu1/menu1-4'),
          name: 'Menu1-4',
          meta: { title: '代收代支项目收入', icon: 'form' }
        },
        {
          path: 'menu1-5',
          component: () =>
                            import('@/views/nested/menu1/menu1-5'),
          name: 'Menu1-5',
          meta: { title: '资本性收入', icon: 'form' }
        }
        ]
      },
      {
        path: 'menu3',
        component: () =>
                    import('@/views/nested/menu3/index'), // Parent router-view
        name: 'Menu3',
        meta: { title: '支出项目表', icon: 'table' },
        redirect: '/nested/menu3/',
        children: [{
          path: 'menu3-1',
          component: () =>
                            import('@/views/nested/menu3/menu3-1'),
          name: 'Menu3-1',
          meta: { title: '基本支出项目表', icon: 'form' }
        },
        {
          path: 'menu3-2',
          component: () =>
                            import('@/views/nested/menu3/menu3-2'),
          name: 'Menu3-2',
          meta: { title: '项目支出表', icon: 'form' }
        },
        {
          path: 'menu3-3',
          component: () =>
                            import('@/views/nested/menu3/menu3-3'),
          name: 'Menu3-3',
          meta: { title: '基建支出项目表', icon: 'form' }
        }

        ]
      },
      {
        path: 'menu4',
        component: () =>
                    import('@/views/nested/menu4/index'), // Parent router-view
        name: 'Menu4',
        meta: { title: '单位报表', icon: 'table' },
        redirect: '/nested/menu4/menu4-1',
        children: [{
          path: 'menu4-1',
          component: () =>
                            import('@/views/nested/menu4/menu4-1'),
          name: 'Menu4-1',
          meta: { title: '单位基本数字表', icon: 'form' }
        },
        {
          path: 'menu4-2',
          component: () =>
                            import('@/views/nested/menu4/menu4-2'),
          name: 'Menu4-2',
          meta: { title: '单位预算收支总表', icon: 'form' }
        },
        {
          path: 'menu4-3',
          component: () =>
                            import('@/views/nested/menu4/menu4-3'),
          name: 'Menu4-3',
          meta: { title: '单位决算对应表', icon: 'form' }
        },
        {
          path: 'menu4-4',
          component: () =>
                            import('@/views/nested/menu4/menu4-4'),
          name: 'Menu4-4',
          meta: { title: '收入项目预算表', icon: 'form' }
        },
        {
          path: 'menu4-5',
          component: () =>
                            import('@/views/nested/menu4/menu4-5'),
          name: 'Menu4-5',
          meta: { title: '支出项目预算表', icon: 'form' }
        }

        ]
      }

      ]
    }
export default budget
