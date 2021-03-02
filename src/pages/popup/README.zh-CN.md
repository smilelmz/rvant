# Popup 弹出层

### 介绍

弹出层容器，用于展示弹窗、信息提示等内容，支持多个弹出层叠加展示。

### 引入

```js
import { Popup } from 'SmileUI';
```

## 代码演示

### 基础用法

通过 `show` 控制弹出层是否展示。

```html
<Popup
  show={showBase}
  style={{ padding: '30px 50px' }}
  close={() => setShowBase(false)}
>
  center
</Popup>
<Cell title='展示弹出层' isLink click={() => setShowBase(true)} />
```

```js
const [showBase, setShowBase] = useState(false)
```

### 弹出位置

通过 `position` 属性设置弹出位置，默认居中弹出，可以设置为 `top`、`bottom`、`left`、`right`。

```html
<Popup
  show={showTop}
  style={{ height: '30%' }}
  position='top'
  close={() => setShowTop(false)}
/>
```

### 关闭图标

设置 `closeable` 属性后，会在弹出层的右上角显示关闭图标，并且可以通过 `close-icon` 属性自定义图标，使用 `close-icon-position` 属性可以自定义图标位置。

```html
<Popup
  show={showIconOne}
  style={{ height: '30%' }}
  position='bottom'
  closeable
  close={() => setShowIconOne(false)}
/>
<Popup
  show={showIconTwo}
  style={{ height: '30%' }}
  position='bottom'
  closeable
  closeIcon='close'
  close={() => setShowIconTwo(false)}
/>
<Popup
  show={showIconThree}
  style={{ height: '30%' }}
  closeable
  closeIconPosition='top-left'
  position='bottom'
  close={() => setShowIconThree(false)}
/>
```

### 圆角弹窗

设置 `round` 属性后，弹窗会根据弹出位置添加不同的圆角样式。

```html
<Popup
  show={showRound}
  style={{ height: '30%' }}
  position='bottom'
  round
  close={() => setShowRound(false)}
/>
```
## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| show | 是否显示弹出层 | _boolean_ | `false` |
| overlay | 是否显示遮罩层 | _boolean_ | `true` |
| overlayClass | 自定义遮罩层类名 | _string \| Array \| object_ | - |
| overlayStyle | 自定义遮罩层样式 | _object_ | - |
| position | 弹出位置，可选值为 `top` `bottom` `right` `left` | _string_ | `center` |
| duration | 动画时长，单位秒 | _number \| string_ | `0.3` |
| round | 是否显示圆角 | _boolean_ | `false` |
| lockScroll | 是否锁定背景滚动 | _boolean_ | `true` |
| closeOnClickOverlay | 是否在点击遮罩层后关闭 | _boolean_ | `true` |
| closeable | 是否显示关闭图标 | _boolean_ | `false` |
| closeIcon | 关闭图标名称或图片链接 | _string_ | `cross` |
| closeIconPosition | 关闭图标位置，可选值为 `top-left`<br>`bottom-left` `bottom-right` | _string_ | `top-right` |
| transition | 动画类名，等价于 [transtion](https://v3.cn.vuejs.org/api/built-in-components.html#transition) 的 `name` 属性 | _string_ | - |
| transitionAppear | 是否在初始渲染时启用过渡动画 | _boolean_ | `false` |
| safeAreaInsetBottom | 是否开启[底部安全区适配](#/zh-CN/advanced-usage#di-bu-an-quan-qu-gua-pei) | _boolean_ | `false` |

### Events

| 事件名           | 说明                       | 回调参数            |
| ---------------- | -------------------------- | ------------------- |
| click            | 点击弹出层时触发           | _event: MouseEvent_ |
| close            | 关闭弹出层时触发           | -                   |
| opened           | 打开弹出层且动画结束后触发 | -                   |
| closed           | 关闭弹出层且动画结束后触发 | -                   |
