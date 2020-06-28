import Layout from '@/layout'
// 资产管理
const assets = {
  path: '/assets',
  component: Layout,
  redirect: '/assets',
  name: 'assets',
  meta: {
    title: '资产管理',
    icon: 'nested'
  },
  children: [{
    path: 'rcyw',
    component: () =>
                import('@/views/assets/rcyw/index'), // Parent router-view
    name: 'rcyw',
    meta: { title: '日常业务' },
    redirect: '/assets/rcyw/swlb',
    children: [{
      path: 'swlb',
      component: () =>
                        import('@/views/assets/rcyw/swlb'),
      name: 'swlb',
      meta: { title: '事务列表' }
    }, {
      path: 'zczj',
      component: () =>
                        import('@/views/assets/rcyw/zczj'),
      name: 'zczj',
      meta: { title: '资产增加' }
    },
    {
      path: 'yskpdr',
      component: () =>
                        import('@/views/assets/rcyw/yskpdr'),
      name: 'yskpdr',
      meta: { title: '原始卡片导入' }
    },
    {
      path: 'yskpxg',
      component: () =>
                        import('@/views/assets/rcyw/yskpxg'),
      name: 'yskpxg',
      meta: { title: '原始卡片修改' }
    },
    {
      path: 'zcjs',
      component: () =>
                        import('@/views/assets/rcyw/zcjs'),
      name: 'zcjs',
      meta: { title: '资产减少' }
    },
    {
      path: 'nbdb',
      component: () =>
                        import('@/views/assets/rcyw/nbdb'),
      name: 'nbdb',
      meta: { title: '内部调拨' }
    },
    {
      path: 'yscz',
      component: () =>
                        import('@/views/assets/rcyw/yscz'),
      name: 'yscz',
      meta: { title: '原始重置' }
    },
    {
      path: 'zczkbd',
      component: () =>
                        import('@/views/assets/rcyw/zczkbd'),
      name: 'zczkbd',
      meta: { title: '资产状况变动' }
    },
    {
      path: 'zcztbd',
      component: () =>
                        import('@/views/assets/rcyw/zcztbd'),
      name: 'zcztbd',
      meta: { title: '资产状态变动' }
    }

    ]
  },
  {
    path: 'ymcl',
    component: () =>
                import('@/views/assets/ymcl/index'), // Parent router-view
    name: 'ymcl',
    meta: { title: '月末处理' },
    redirect: '/assets/ymcl',
    children: [{
      path: 'gzlsr',
      component: () =>
                        import('@/views/assets/ymcl/gzlsr'),
      name: 'gzlsr',
      meta: { title: '工作量输入' }
    },
    {
      path: 'zczj',
      component: () =>
                        import('@/views/assets/ymcl/zczj'),
      name: 'zczj',
      meta: { title: '资产折旧' }
    },
    {
      path: 'ymjz',
      component: () =>
                        import('@/views/assets/ymcl/ymjz'),
      name: 'ymjz',
      meta: { title: '月末结转' }
    }, {
      path: 'nmjz',
      component: () =>
                        import('@/views/assets/ymcl/nmjz'),
      name: 'nmjz',
      meta: { title: '年末结转' }
    }

    ]
  },
  {
    path: 'ywcx',
    component: () =>
                import('@/views/assets/ywcx/index'), // Parent router-view
    name: 'ywcx',
    meta: { title: '业务查询' },
    redirect: '/assets/ywcx',
    children: [{
      path: 'zccx',
      component: () =>
                        import('@/views/assets/ywcx/zccx'),
      name: 'zccx',
      meta: { title: '资产查询' }
    },
    {
      path: 'zcjscx',
      component: () =>
                        import('@/views/assets/ywcx/zcjscx'),
      name: 'zcjscx',
      meta: { title: '资产减少查询' }
    },
    {
      path: 'zczjcx',
      component: () =>
                        import('@/views/assets/ywcx/zczjcx'),
      name: 'zczjcx',
      meta: { title: '资产折旧查询' }
    },
    {
      path: 'yzczcx',
      component: () =>
                        import('@/views/assets/ywcx/yzczcx'),
      name: 'yzczcx',
      meta: { title: '原值重置查询' }
    },
    {
      path: 'zkbdcx',
      component: () =>
                        import('@/views/assets/ywcx/zkbdcx'),
      name: 'zkbdcx',
      meta: { title: '状况变动查询' }
    },
    {
      path: 'ztbdcx',
      component: () =>
                        import('@/views/assets/ywcx/ztbdcx'),
      name: 'ztbdcx',
      meta: { title: '状态变动查询' }
    },
    {
      path: 'nbtbcx',
      component: () =>
                        import('@/views/assets/ywcx/nbtbcx'),
      name: 'nbtbcx',
      meta: { title: '内部调拨查询' }
    }
    ]
  },
  {
    path: 'zcqc',
    component: () =>
                import('@/views/assets/zcqc/index'), // Parent router-view
    name: 'zcqc',
    meta: { title: '资产清查' },
    redirect: '/assets/zcqc/',
    children: [{
      path: 'xzzckp',
      component: () =>
                        import('@/views/assets/zcqc/xzzckp'),
      name: 'xzzckp',
      meta: { title: '下载资产卡片' }
    },
    {
      path: 'zcqcbb',
      component: () =>
                        import('@/views/assets/zcqc/zcqcbb'),
      name: 'zcqcbb',
      meta: { title: '资产清查报表' }
    },
    {
      path: 'zcpylrb',
      component: () =>
                        import('@/views/assets/zcqc/zcpylrb'),
      name: 'zcpylrb',
      meta: { title: '资产盘盈录入表' }
    },
    {
      path: 'zcpksqb',
      component: () =>
                        import('@/views/assets/zcqc/zcpksqb'),
      name: 'zcpksqb',
      meta: { title: '资产盘亏申请表' }
    }
    ]
  },
  {
    path: 'pzcl',
    component: () =>
                import('@/views/assets/pzcl/index'), // Parent router-view
    name: 'pzcl',
    meta: { title: '凭证处理' },
    redirect: '/assets/pzcl/',
    children: [{
      path: 'zczjpz',
      component: () =>
                        import('@/views/assets/pzcl/zczjpz'),
      name: 'zczjpz',
      meta: { title: '资产增加凭证' }
    },
    {
      path: 'zcjspz',
      component: () =>
                        import('@/views/assets/pzcl/zcjspz'),
      name: 'zcjspz',
      meta: { title: '资产减少凭证' }
    },
    {
      path: 'zczjpz1',
      component: () =>
                        import('@/views/assets/pzcl/zczjpz1'),
      name: 'zczjpz1',
      meta: { title: '资产折旧凭证' }
    },
    {
      path: 'ysczpz',
      component: () =>
                        import('@/views/assets/pzcl/ysczpz'),
      name: 'ysczpz',
      meta: { title: '原值重置凭证' }
    },
    {
      path: 'zcztbdpz',
      component: () =>
                        import('@/views/assets/pzcl/zcztbdpz'),
      name: 'zcztbdpz',
      meta: { title: '资产状态变动凭证' }
    },
    {
      path: 'zczkbdpz',
      component: () =>
                        import('@/views/assets/pzcl/zczkbdpz'),
      name: 'zczkbdpz',
      meta: { title: '资产状况变动凭证' }
    },
    {
      path: 'nbtbpz',
      component: () =>
                        import('@/views/assets/pzcl/nbtbpz'),
      name: 'nbtbpz',
      meta: { title: '内部调拔凭证' }
    }
    ]
  },
  {
    path: 'bbcx',
    component: () =>
                import('@/views/assets/bbcx/index'), // Parent router-view
    name: 'bbcx',
    meta: { title: '报表查询' },
    redirect: '/assets/bbcx',
    children: [{
      path: 'dwbb',
      component: () =>
                        import('@/views/assets/bbcx/dwbb'),
      name: 'dwbb',
      meta: { title: '单位报表' }
    },
    {
      path: 'czbb',
      component: () =>
                        import('@/views/assets/bbcx/czbb'),
      name: 'czbb',
      meta: { title: '财政报表' }
    }
    ]
  },
  {
    path: 'xtsz',
    component: () =>
                import('@/views/assets/xtsz/index'), // Parent router-view
    name: 'xtsz',
    meta: { title: '系统设置' },
    redirect: '/assets/xtsz',
    children: [{
      path: 'jslcdy',
      component: () =>
                        import('@/views/assets/xtsz/jslcdy'),
      name: 'jslcdy',
      meta: { title: '减少流程定义' }
    },
    {
      path: 'jslcsz',
      component: () =>
                        import('@/views/assets/xtsz/jslcsz'),
      name: 'jslcsz',
      meta: { title: '减少流程设置' }
    },
    {
      path: 'zclbsz',
      component: () =>
                        import('@/views/assets/xtsz/zclbsz'),
      name: 'zclbsz',
      meta: { title: '资产类别设置' }
    },
    {
      path: 'dwsz',
      component: () =>
                        import('@/views/assets/xtsz/dwsz'),
      name: 'dwsz',
      meta: { title: '单位设置' }
    },
    {
      path: 'bmsz',
      component: () =>
                        import('@/views/assets/xtsz/bmsz'),
      name: 'bmsz',
      meta: { title: '部门设置' }
    },
    {
      path: 'zclysz',
      component: () =>
                        import('@/views/assets/xtsz/zclysz'),
      name: 'zclysz',
      meta: { title: '资产来源设置' }
    },
    {
      path: 'zjfssz',
      component: () =>
                        import('@/views/assets/xtsz/zjfssz'),
      name: 'zjfssz',
      meta: { title: '折旧方式设置' }
    },
    {
      path: 'jsfssz',
      component: () =>
                        import('@/views/assets/xtsz/jsfssz'),
      name: 'jsfssz',
      meta: { title: '减少方式设置' }
    },
    {
      path: 'syfxsz',
      component: () =>
                        import('@/views/assets/xtsz/syfxsz'),
      name: 'syfxsz',
      meta: { title: '使用方向设置' }
    },
    {
      path: 'syzksz',
      component: () =>
                        import('@/views/assets/xtsz/syzksz'),
      name: 'syzksz',
      meta: { title: '使用状况设置' }
    },
    {
      path: 'yhlb',
      component: () =>
                        import('@/views/assets/xtsz/yhlb'),
      name: 'yhlb',
      meta: { title: '用户列表' }
    },
    {
      path: 'zckpsz',
      component: () =>
                        import('@/views/assets/xtsz/zckpsz'),
      name: 'zckpsz',
      meta: { title: '资产卡片设置' }
    },
    {
      path: 'ztxxsz',
      component: () =>
                        import('@/views/assets/xtsz/ztxxsz'),
      name: 'ztxxsz',
      meta: { title: '帐套信息设置' }
    },
    {
      path: 'ztczsz',
      component: () =>
                        import('@/views/assets/xtsz/ztczsz'),
      name: 'ztczsz',
      meta: { title: '帐套操作设置' }
    }
    ]
  }

  ]
}
export default assets
