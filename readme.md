# Media Helpers

## Introduction
A set of simple media query helpers based on Foundations breakpoints.
Includes: 
* JSX render only breakpoint tags
* Sass mixins
* js media match helper functions

## Code Samples

```jsx
import { SmallOnly, MediumOnly, LargeOnly, MediumUp, matchMedia } from "media-helpers"

<SmallOnly><p>Small only visible</p></SmallOnly>
<MediumOnly><p>Medium only visible</p></MediumOnly>
<MediumUp><p>Medium Up visible</p></MediumUp>
<LargeOnly><p>Large only visible</p></LargeOnly>

console.log(matchMedia.isLargeOnly)

```

```css
@import 'media-helpers/mixins';

@include breakpoint(medium-up) {
    background-color: green;
}
@include breakpoint(large-up) {
    background-color: blue;
}
@include breakpoint(x-large-up) {
    background-color: red;
}

```

## Installation

> yarn add or npm install 'media-helpers'