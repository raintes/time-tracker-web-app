import { NAVIGATION } from '../enums/enums'

export const navigation = [
  { name: 'TIME TRACKER', icon: null, href: NAVIGATION.HOME, current: true },
  { name: 'REPORTS', icon: null, href: NAVIGATION.REPORTS, current: false },
]

export const localStorageKey = {
  USER: 'user',
}
Object.freeze(NAVIGATION)
