import { isIOS as checkIsIOS } from '../validate/system'
import { getRootScrollTop, setRootScrollTop } from './scroll'

const isIOS = checkIsIOS()

/* istanbul ignore next */
export function resetScroll() {
  if (isIOS) {
    setRootScrollTop(getRootScrollTop())
  }
}
