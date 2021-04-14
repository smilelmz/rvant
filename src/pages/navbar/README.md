# NavBar

### Install

```js
import { NavBar } from 'rvant';
```

## Usage

### Basic Usage

```html
<NavBar
  title='Title'
  leftText='Back'
  rightText='Button'
  leftArrow
  clickLeft={onClickLeft}
  clickRight={onClickRight}
/>
```

```js
const onClickLeft = () => Toast.info('Back')
const onClickRight = () => Toast.info('Button')
```

### Use Slot

```html
<NavBar
  title='Title'
  leftText='Back'
  right={<Icon name='search' size='18' />}
  leftArrow
/>
```

## API

### Props

| Attribute        | Description                                          | Type                                             | Default |
| ---------------- | ---------------------------------------------------- | ------------------------------------------------ | ------- |
| title            | Title                                                | _string \| React.ReactNode \| React.ReactNode[]_ | `''`    |
| left             | Common Left                                          | _React.ReactNode \| React.ReactNode[]_           | `''`    |
| right            | Common Right                                         | _React.ReactNode \| React.ReactNode[]_           | `''`    |
| leftText         | Left Text                                            | _string_                                         | `''`    |
| rightText        | Right Text                                           | _string_                                         | `''`    |
| leftArrow       | Whether to show left arrow                           | _boolean_                                        | `false` |
| border           | Whether to show bottom border                        | _boolean_                                        | `true`  |
| fixed            | Whether to fixed top                                 | _boolean_                                        | `false` |
| placeholder      | Whether to generage a placeholder element when fixed | _boolean_                                        | `false` |
| zIndex           | Z-index                                              | _number \| string_                               | `1`     |
| safeAreaInsetTop | Whether to enable top safe area adaptation           | _boolean_                                        | `false` |

### Events

| Event       | Description                              | Arguments           |
| ----------- | ---------------------------------------- | ------------------- |
| clickLeft  | Emitted when the left button is clicked  | _event: MouseEvent_ |
| clickRight | Emitted when the right button is clicked | _event: MouseEvent_ |

### Scss Variables

| Name                      | Default Value   | Description |
| ------------------------- | --------------- | ----------- |
| $nav-bar-height           | `46px`          | -           |
| $nav-bar-background-color | `$white`        | -           |
| $nav-bar-arrow-size       | `16px`          | -           |
| $nav-bar-icon-color       | `$blue`         | -           |
| $nav-bar-text-color       | `$blue`         | -           |
| $nav-bar-title-font-size  | `$font-size-lg` | -           |
| $nav-bar-title-text-color | `$text-color`   | -           |
| $nav-bar-z-index          | `1`             | -           |
