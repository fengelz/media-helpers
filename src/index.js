import { matchMedia, breakpoints } from './helpers'
import * as mixins from './mixins.scss'

export const SmallOnly = (props) => {
  return matchMedia.isSmall ? props.children : null
}

export const MediumUp = (props) => {
  return matchMedia.isMediumUp ? props.children : null
}

export const MediumOnly = (props) => {
  return matchMedia.isMediumOnly ? props.children : null
}

export const LargeUp = (props) => {
  return matchMedia.isLargeUp ? props.children : null
}

export const LargeOnly = (props) => {
  return matchMedia.isLargeOnly ? props.children : null
}

export const XLargeUp = (props) => {
  return matchMedia.isXLargeUp ? props.children : null
}

export const XLargeOnly = (props) => {
  return matchMedia.isXXLargeOnly ? props.children : null
}

export const XXLargeUp = (props) => {
  return matchMedia.isXXLargeUp ? props.children : null
}

export {
  matchMedia,
  breakpoints,
  mixins
}
