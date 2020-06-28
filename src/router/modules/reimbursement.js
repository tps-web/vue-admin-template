import Layout from '@/layout'

const reimbursement = {
  path: '/reimbursement',
  redirect: '/reimbursement',
  component: Layout,
  meta: {
    title: '报销管理',
    icon: 'nested'
  },
  children: [{
    path: 'bxsqd',
    name: 'Bxsqd',
    component: () =>
                import('@/views/reimbursement/bxsqd'),
    meta: { title: '报销申请单', icon: 'form' }
  },
  {
    path: 'zpdy',
    name: 'Zpdy',
    component: () =>
                import('@/views/reimbursement/zpdy'),
    meta: { title: '支票打印', icon: 'form' }
  },
  {
    path: 'bxdcx',
    name: 'Bxdcx',
    component: () =>
                import('@/views/reimbursement/bxdcx'),
    meta: { title: '报销单查询', icon: 'form' }
  },
  {
    path: 'bxedcx',
    name: 'Bxedcx',
    component: () =>
                import('@/views/reimbursement/bxedcx'),
    meta: { title: '报销额度查询', icon: 'form' }
  },
  {
    path: 'zbzcjd',
    name: 'Zbzcjd',
    component: () =>
                import('@/views/reimbursement/zbzcjd'),
    meta: { title: '指标支出进度', icon: 'form' }
  },
  {
    path: 'cyzy',
    name: 'Cyzy',
    component: () =>
                import('@/views/reimbursement/cyzy'),
    meta: { title: '常用摘要', icon: 'form' }
  },
  {
    path: 'cybxskr',
    name: 'Cybxskr',
    component: () =>
                import('@/views/reimbursement/cybxskr'),
    meta: { title: '常用报销收款人', icon: 'form' }
  }

  ]
}
export default reimbursement
