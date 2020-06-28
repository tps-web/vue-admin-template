import Layout from '@/layout'
const institution = {
  path: '/institution',
  component: Layout,
  redirect: '/institution',
  meta: {
    title: '制度管理',
    icon: 'zhidu'
  },
  children: [{
    path: 'zdgl',
    component: () =>
                import('@/views/institution/zdgl'),
    name: 'zdgl',
    meta: {
      title: '制度管理'
    }
  },
  {
    path: 'wjzlgl',
    component: () =>
                import('@/views/institution/wjzlgl'),
    name: 'wjzlgl',
    meta: {
      title: '文件资料管理'
    }
  }
  ]
}
export default institution
