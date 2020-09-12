import defaultSettings from '@/settings'

const title = defaultSettings.title || '淘淘客栈'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
