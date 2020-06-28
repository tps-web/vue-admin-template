import Layout from '@/layout'

const target = {
  path: '/indexManagement',
  component: Layout,
  redirect: '/indexManagement',
  name: 'indexManagement',
  meta: { title: '指标管理', icon: 'example' },
  children: [{
    path: 'income/targetAddition',
    name: 'Income',
    component: () =>
                import('@/views/indexManagement/income/targetAddition'),
    meta: { title: '收入指标追加', icon: 'table' }
  },
  {
    path: 'expenditure/zbzj',
    name: 'Zbzj',
    component: () =>
                import('@/views/indexManagement/expenditure/zbzj'),
    meta: { title: '支出指标追加', icon: 'table' }
  },
  {
    path: 'expenditure/zbtj',
    name: 'zbtj',
    component: () =>
                import('@/views/indexManagement/expenditure/zbtj'),
    meta: { title: '支出指标调剂', icon: 'tree' }
  },
  {
    path: 'income/sqzbcx',
    name: 'Sqzbcx',
    component: () =>
                import('@/views/indexManagement/income/sqzbcx'),
    meta: { title: '收入申请指标查询', icon: 'tree' }
  },
  {
    path: 'income/zbkcx',
    name: 'Zbkcx',
    component: () =>
                import('@/views/indexManagement/income/zbkcx'),
    meta: { title: '收入指标库查询', icon: 'table' }
  },
  {
    path: 'expenditure/sqzbcx',
    name: 'Sqzbcx',
    component: () =>
                import('@/views/indexManagement/expenditure/sqzbcx'),
    meta: { title: '支出申请指标查询', icon: 'table' }
  },
  {
    path: 'expenditure/zbkcx',
    name: 'Zbkcx',
    component: () =>
                import('@/views/indexManagement/expenditure/zbkcx'),
    meta: { title: '支出指标库查询', icon: 'tree' }
  },
  {
    path: 'projectSubjects/set',
    name: 'Set',
    component: () =>
                import('@/views/indexManagement/projectSubjects/set'),
    meta: { title: '项目科目设置', icon: 'tree' }
  }
  ]
}
export default target
