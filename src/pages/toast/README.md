# Toast

### 引入

```js
import { Toast } from 'rvant';
```

## 代码演示

### 基础用法

```html
<Cell title='文字提示' isLink click={showText} />
<Cell title='加载提示' isLink click={showLoading} />
<Cell title='成功提示' isLink click={showSuccess} />
<Cell title='失败提示' isLink click={showFailure} />
```

```js
const showText = () => {
  Toast.info('提示内容', 5)
}
const showLoading = () => {
  Toast.loading({ message: '加载提示' })
}
const showSuccess = () => {
  Toast.success('成功提示')
}
const showFailure = () => {
  Toast.fail('失败提示')
}
```

### 自定义图标

```html
<Cell title='自定义图标' isLink click={showIcon} />
<Cell title='自定义图片' isLink click={showIconUrl} />
<Cell title='自定义加载图标' isLink click={showCommonLoading} />
```

```js
const showIcon = () => {
  Toast.show({
    message: '自定义图标',
    icon: 'like-o'
  })
}
const showIconUrl = () => {
  Toast.show({
    message: '自定义图片',
    icon: 'https://img.yzcdn.cn/vant/logo.png'
  })
}
const showCommonLoading = () => {
  Toast.show({
    type: 'loading',
    message: '加载中...',
    loadingType: 'spinner'
  })
}
```

### 自定义位置

```html
<Cell title='顶部提示' isLink click={showTop} />
<Cell title='底部展示' isLink click={showBottom} />
```

```js
const showTop = () => {
  Toast.show({
    message: '顶部展示',
    position: 'top'
  })
}
const showBottom = () => {
  Toast.show({
    message: '底部展示',
    position: 'bottom'
  })
```

### 修改默认配置

通过 `Toast.setDefaultConfig` 函数可以全局修改 Toast 的默认配置。

```js
Toast.setDefaultConfig({ duration: 3, mask: false, position: 'middle' });
```

### 方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| Toast.show | 展示提示 | `options` | `void` |
| Toast.info | 展示提示 | `message, duration, position` | `void` |
| Toast.success | 展示成功提示 | `message, duration` | `void` |
| Toast.fail | 展示失败提示 | `message, duration` | `void` |
| Toast.loading | 展示加载提示 | `options` | `void` |
| Toast.hide | 关闭提示 | - | `void` |
| Toast.setDefaultConfig | 修改默认配置，对所有 Toast 生效。<br>传入 type 可以修改指定类型的默认配置 | `IToastConfig` | `void` |

### Options

| 参数                  | 说明                                                        | 类型                        | 默认值     |   |
| --------------------- | ----------------------------------------------------------- | --------------------------- | ---------- | - |
| type                  | 提示类型，可选值为 `text` `loading` `success` `fail` `html` | _string_                    | `text`     |   |
| position              | 位置，可选值为 `top` `bottom`                               | _string_                    | `middle`   |   |
| message               | 文本内容                                                    | _string_                    | `''`       | - |
| icon                  | 自定义图标                                                  | _string_                    | -          |   |
| iconSize              | 图标大小，如 `20px` `2em`，默认单位为 `px`                  | _number \| string_          | `36px`     |   |
| iconPrefix            | 图标类名前缀，同 Icon 组件的                                | _string_                    | `van-icon` |   |
| mask                  | 是否显示背景遮罩层                                          | _boolean_                   | `false`    |   |
| loadingType           | 加载图标类型, 可选值为 `spinner`                            | _string_                    | `circular` |   |
| duration              | 展示时长(ms)，值为 0 时，toast 不会消失                     | _number_                    | `2000`     |   |
| className             | 自定义类名                                                  | _string \| Array \| object_ | -          |   |
| onOpened              | 完全展示后的回调函数                                        | _Function_                  | -          |   |
| onClose               | 关闭时的回调函数                                            | _Function_                  | -          |   |

### Scss 变量

| 名称                            | 默认值                    | 描述 |
| ------------------------------- | ------------------------- | ---- |
| $toast-max-width                | `70%`                     | -    |
| $toast-font-size                | `$font-size-md`           | -    |
| $toast-text-color               | `$white`                  | -    |
| $toast-loading-icon-color       | `$white`                  | -    |
| $toast-line-height              | `$line-height-md`         | -    |
| $toast-border-radius            | `$border-radius-lg`       | -    |
| $toast-background-color         | `rgba($black, 70%)`       | -    |
| $toast-icon-size                | `36px`                    | -    |
| $toast-text-min-width           | `96px`                    | -    |
| $toast-text-padding             | `$padding-xs $padding-sm` | -    |
| $toast-default-padding          | `$padding-md`             | -    |
| $toast-default-width            | `88px`                    | -    |
| $toast-default-min-height       | `88px`                    | -    |
| $toast-position-top-distance    | `20%`                     | -    |
| $toast-position-bottom-distance | `20%`                     | -    |
