// 财务管理
import Layout from '@/layout'

const financial = {
  path: '/financial',
  component: Layout,
  redirect: '/financial',
  name: 'financial',
  meta: {
    title: '财务管理',
    icon: 'nested'
  },
  children: [{
    path: 'yewu',
    component: () =>
            import('@/views/financial/yewu/index'),

    meta: { title: '业务' },
    // redirect: 'financial/yewu/cwkj',
    children: [{
      path: 'cwkj',
      meta: { title: '财务会计' },
      // redirect: 'financial/cwkj/zzgl',
      component: () =>
                import('@/views/financial/yewu/index'),
      children: [{
        path: 'zzgl',
        // redirect: 'financial/zzgl/cs',
        meta: { title: '总账管理' },
        component: () =>
                        import('@/views/financial/yewu/index'),
        children: [{
          path: 'cs',
          // redirect: 'financial/cs',
          meta: { title: '初始' },
          component: () =>
                            import('@/views/financial/yewu/index'),
          children: [{
            path: 'zzsz',
            meta: { title: '总账设置' },
            component: () =>
                                    import('@/views/financial/yewu/zzsz')
          }, {
            path: 'kmsz',
            meta: { title: '余额初始' },
            component: () =>
                                    import('@/views/financial/yewu/yecs')

          },
          {
            path: 'cyzy',
            meta: { title: '常用摘要' },
            component: () =>
                                    import('@/views/financial/yewu/cyzy')
          },
          {
            path: 'dykmjz',
            meta: { title: '对应科目结转' },
            component: () =>
                                    import('@/views/financial/yewu/dykmjz')
          }, {
            path: 'sykmjz',
            meta: { title: '损益科目结转' },
            component: () =>
                                    import('@/views/financial/yewu/sykmjz')
          }
          ]
        }, {
          path: 'pz',
          meta: { title: '凭证' },
          component: () =>
                            import('@/views/financial/yewu/index'),
          children: [{
            path: 'zd',
            meta: { title: '制单' },
            component: () =>
                                    import('@/views/financial/yewu/zd')
          },
          {
            path: 'fh',
            meta: { title: '复核' },
            component: () =>
                                    import('@/views/financial/yewu/fh')
          },
          {
            path: 'jz',
            meta: { title: '记账' },
            component: () =>
                                    import('@/views/financial/yewu/jz')
          },
          {
            path: 'cx',
            meta: { title: '查询' },
            component: () =>
                                    import('@/views/financial/yewu/cx')
          },
          {
            path: 'dy',
            meta: { title: '打印' },
            component: () =>
                                    import('@/views/financial/yewu/dy')
          },
          {
            path: 'zhb',
            meta: { title: '总汇表' },
            component: () =>
                                    import('@/views/financial/yewu/zhb')
          }
          ]
        }, {
          path: 'ym',
          meta: { title: '月末' },
          component: () =>
                            import('@/views/financial/yewu/index'),
          children: [{
            path: 'dykmjz1',
            meta: { title: '对应科目结转' },
            component: () =>
                                import('@/views/financial/yewu/dykmjz1')
          }, {
            path: 'sykmjz1',
            meta: { title: '损益科目结转' },
            component: () =>
                                import('@/views/financial/yewu/sykmjz1')
          }, {
            path: 'qmjz',
            meta: { title: '期末结转' },
            component: () =>
                                import('@/views/financial/yewu/qmjz')
          }, {
            path: 'csxnzt',
            meta: { title: '初始下年帐套' },
            component: () =>
                                import('@/views/financial/yewu/csxnzt')
          }, {
            path: 'plfjz',
            meta: { title: '批量反记账' },
            component: () =>
                                import('@/views/financial/yewu/plfjz')
          }]

        }, {
          path: 'zd',
          meta: { title: '账单' }

        }]
      }

      ]
    }]
  }]
}
export default financial
