import defaultSettings from '@/settings'

const title = defaultSettings.title || '农村财务系统'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
