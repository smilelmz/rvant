# NavBar 导航栏

### 引入

```js
import { NavBar } from 'rvant';
```

## 代码演示

### 基础用法

```html
<NavBar
  title='标题'
  leftText='返回'
  rightText='按钮'
  leftArrow
  clickLeft={onClickLeft}
  clickRight={onClickRight}
/>
```

```js
const onClickLeft = () => Toast.info('返回')
const onClickRight = () => Toast.info('按钮')
```

### 使用插槽

通过插槽自定义导航栏两侧的内容。

```html
<NavBar
  title='标题'
  leftText='返回'
  right={<Icon name='search' size='18' />}
  leftArrow
/>
```

## API

### Props

| 参数             | 说明                                               | 类型                                   | 默认值  |
| ---------------- | -------------------------------------------------- | -------------------------------------- | ------- |
| title            | 标题                                               | _string_                               | `''`    |
| left             | 自定义左侧内容                                     | _React.ReactNode \| React.ReactNode[]_ | `''`    |
| right            | 自定义右侧内容                                     | _React.ReactNode \| React.ReactNode[]_ | `''`    |
| leftText         | 左侧文案                                           | _string_                               | `''`    |
| rightText        | 右侧文案                                           | _string_                               | `''`    |
| leftArrow        | 是否显示左侧箭头                                   | _boolean_                              | `false` |
| border           | 是否显示下边框                                     | _boolean_                              | `true`  |
| fixed            | 是否固定在顶部                                     | _boolean_                              | `false` |
| placeholder      | 固定在顶部时，是否在标签位置生成一个等高的占位元素 | _boolean_                              | `false` |
| zIndex           | 导航栏 z-index                                     | _number \| string_                     | `1`     |
| safeAreaInsetTop | 是否开启顶部安全区适配                             | _boolean_                              | `false` |

### Events

| 事件名     | 说明               | 回调参数            |
| ---------- | ------------------ | ------------------- |
| clickLeft  | 点击左侧按钮时触发 | _event: MouseEvent_ |
| clickRight | 点击右侧按钮时触发 | _event: MouseEvent_ |

### Scss样式变量

| 名称                      | 默认值          | 描述 |
| ------------------------- | --------------- | ---- |
| $nav-bar-height           | `46px`          | -    |
| $nav-bar-background-color | `$white`        | -    |
| $nav-bar-arrow-size       | `16px`          | -    |
| $nav-bar-icon-color       | `$blue`         | -    |
| $nav-bar-text-color       | `$blue`         | -    |
| $nav-bar-title-font-size  | `$font-size-lg` | -    |
| $nav-bar-title-text-color | `$text-color`   | -    |
| $nav-bar-z-index          | `1`             | -    |
