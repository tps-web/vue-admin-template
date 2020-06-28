// 出纳账
import Layout from '@/layout'
const resource = {
  path: '/resource',
  component: Layout,
  redirect: '/resource',
  meta: {
    title: '资源管理',
    icon: 'zichan'
  },
  children: [{
    path: 'lbsz',
    name: 'lbsz',
    component: () =>
                import('@/views/resource/lbsz'),
    meta: { title: '类别设置', icon: 'form' }
  },
  {
    path: 'bdfs',
    name: 'bdfs',
    component: () =>
                import('@/views/resource/bdfs'),
    meta: { title: '变动方式', icon: 'form' }
  },
  {
    path: 'zykbgl',
    name: 'zykbgl',
    component: () =>
                import('@/views/resource/zykbgl'),
    meta: { title: '资源卡片管理', icon: 'form' }
  },
  {
    path: 'zybdgl',
    name: 'zybdgl',
    component: () =>
                import('@/views/resource/zybdgl'),
    meta: { title: '资源变动管理', icon: 'form' }
  },
  {
    path: 'skjl',
    name: 'skjl',
    component: () =>
                import('@/views/resource/skjl'),
    meta: { title: '收款记录', icon: 'form' }
  },
  {
    path: 'dqtx',
    name: 'dqtx',
    component: () =>
                import('@/views/resource/dqtx'),
    meta: { title: '到期提醒', icon: 'form' }
  },
  {
    path: 'dwhzb',
    name: 'dwhzb',
    component: () =>
                import('@/views/resource/dwhzb'),
    meta: { title: '单位汇总表', icon: 'form' }
  },
  {
    path: 'zyhzb',
    name: 'zyhzb',
    component: () =>
                import('@/views/resource/zyhzb'),
    meta: { title: '资源汇总表', icon: 'form' }
  },
  {
    path: 'zymxtz',
    name: 'zymxtz',
    component: () =>
                import('@/views/resource/zymxtz'),
    meta: { title: '资源明细台账', icon: 'form' }
  }, {
    path: 'zybdmx',
    name: 'zybdmx',
    component: () =>
                import('@/views/resource/zybdmx'),
    meta: { title: '资源变动明细', icon: 'form' }
  }

  ]
}

export default resource
