# NoticeBar 通知栏

### 介绍

用于循环播放展示一组消息通知。

### 引入

```js
import { NoticeBar } from 'rvant';
```

## 代码演示

### 基础用法

通过 `text` 属性设置通知栏的内容，通过 `leftIcon` 属性设置通知栏左侧的图标。

```html
<NoticeBar
  text='在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。'
  scrollable
  leftIcon='volume-o'
/>
```

### 滚动播放

通知栏的内容长度溢出时会自动开启滚动播放，通过 `scrollable` 属性可以控制该行为。

```html
<NoticeBar text='技术是开发它的人的共同灵魂。' scrollable />
<NoticeBar
  text='在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。'
  scrollable={false}
/>
```

### 多行展示

文字较长时，可以通过设置 `wrapable` 属性来开启多行展示。

```html
<NoticeBar
  text='在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。'
  wrapable
  scrollable={false}
/>
```

### 通知栏模式

通知栏支持 `closeable` 和 `link` 两种模式。

```html
<NoticeBar mode='closeable' text='技术是开发它的人的共同灵魂。' />
<NoticeBar mode='link' text='技术是开发它的人的共同灵魂。' />
```

### 自定义样式

通过 `color` 属性设置文本颜色，通过 `background` 属性设置背景色。

```html
<NoticeBar
  text='技术是开发它的人的共同灵魂。'
  color='#1989fa'
  background='#ecf9ff'
  leftIcon='info-o'
/>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| mode | 通知栏模式，可选值为 `closeable` `link` | _string_ | `''` |
| text | 通知文本内容 | _string_ | `''` |
| color | 通知文本颜色 | _string_ | `#f60` |
| background | 滚动条背景 | _string_ | `#fff7cc` |
| leftIcon | 左侧图标 | _string \| React.ReactNode_ | - |
| rightIcon | 右侧图标 | _React.ReactNode_ | - |
| delay | 动画延迟时间 (s) | _number \| string_ | `1` |
| speed | 滚动速率 (px/s) | _number \| string_ | `50` |
| scrollable | 是否开启滚动播放，内容长度溢出时默认开启 | _boolean_ | - |
| wrapable | 是否开启文本换行，只在禁用滚动时生效 | _boolean_ | `false` |

### Events

| 事件名 | 说明                         | 回调参数            |
| ------ | ---------------------------- | ------------------- |
| click  | 点击通知栏时触发             | _event: MouseEvent_ |
| close  | 关闭通知栏时触发             | _event: MouseEvent_ |
| replay | 每当滚动栏重新开始滚动时触发 | -                   |

### Scss样式变量

| 名称                         | 默认值                    | 描述 |
| ---------------------------- | ------------------------- | ---- |
| $notice-bar-height           | `40px`                    | -    |
| $notice-bar-padding          | `0 $padding-md`           | -    |
| $notice-bar-wrapable-padding | `$padding-xs $padding-md` | -    |
| $notice-bar-text-color       | `$orange-dark`            | -    |
| $notice-bar-font-size        | `$font-size-md`           | -    |
| $notice-bar-line-height      | `24px`                    | -    |
| $notice-bar-background-color | `$orange-light`           | -    |
| $notice-bar-icon-size        | `16px`                    | -    |
| $notice-bar-icon-min-width   | `24px`                    | -    |
