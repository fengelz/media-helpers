import {breakpoints as bp} from './settings.json'

export const breakpoints = bp

export const matchMedia = {
  isSmall: window.matchMedia(`screen and (max-width: ${ breakpoints.small }px)`).matches,
  isMediumUp: window.matchMedia(`screen and (min-width: ${ breakpoints.medium }px)`).matches,
  isMediumOnly: window.matchMedia(`screen and (min-width: ${ breakpoints.medium }px) and (max-width: ${ breakpoints.large - 1 }px)`).matches,
  isLargeUp: window.matchMedia(`screen and (min-width: ${ breakpoints.large }px)`).matches,
  isLargeOnly: window.matchMedia(`screen and (min-width: ${ breakpoints.large }px) and (max-width: ${ breakpoints.xLarge - 1 }px)`).matches,
  isXLargeUp: window.matchMedia(`screen and (min-width: ${ breakpoints.xLarge }px)`).matches,
  isXXLargeOnly: window.matchMedia(`screen and (min-width: ${ breakpoints.xLarge }px) and (max-width: ${ breakpoints.xxLarge - 1 }px)`).matches,
  isXXLargeUp: window.matchMedia(`screen and (min-width: ${ breakpoints.xxLarge }px)`).matches,
}
