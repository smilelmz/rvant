# Stepper 步进器

### 介绍

步进器由增加按钮、减少按钮和输入框组成，用于在一定范围内输入、调整数字。

### 引入

```js
import { Stepper } from 'rvant';
```

## 代码演示

### 基础用法

```html
<Stepper value={value} change={(v) => setValue(v)}  />
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const value = ref(1);
    return { value };
  },
};
```

### 步长设置

通过 `step` 属性设置每次点击增加或减少按钮时变化的值，默认为 `1`。

```html
<Stepper value={value} change={(v) => setValue(v)}  step="2" />
```

### 限制输入范围

通过 `min` 和 `max` 属性限制输入值的范围。

```html
<Stepper value={value} change={(v) => setValue(v)}  min="5" max="8" />
```

### 限制输入整数

设置 `integer` 属性后，输入框将限制只能输入整数。

```html
<Stepper value={value} change={(v) => setValue(v)}  integer />
```

### 禁用状态

通过设置 `disabled` 属性来禁用步进器，禁用状态下无法点击按钮或修改输入框。

```html
<Stepper value={value} change={(v) => setValue(v)}  disabled />
```

### 禁用输入框

通过设置 `disableInput` 属性来禁用输入框，此时按钮仍然可以点击。

```html
<Stepper value={value} change={(v) => setValue(v)}  disableInput />
```

### 固定小数位数

通过设置 `decimalLength` 属性可以保留固定的小数位数。

```html
<Stepper value={value} change={(v) => setValue(v)}  step="0.2" decimalLength="1" />
```

### 自定义大小

通过 `inputWidth` 属性设置输入框宽度，通过 `buttonSize` 属性设置按钮大小和输入框高度。

```html
<Stepper value={value} change={(v) => setValue(v)}  inputWidth="40px" buttonSize="32px" />
```

### 异步变更

通过 `before-change` 属性可以在

```html
<Stepper value={value} change={(v) => setValue(v)}  beforeChange="beforeChange" />
```

```js
import { Toast } from 'rvant';

const beforeChange = () => {
  Toast.loading({ message: '加载中...' })

  return new Promise((resolve) => {
    setTimeout(() => {
      Toast.hide()
      resolve(true)
    }, 500)
  })
}
```

### 圆角风格

将 `theme` 设置为 `round` 来展示圆角风格的步进器。

```html
<Stepper value={value} change={(v) => setValue(v)}  theme="round" buttonSize="22" disableInput />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前输入的值 | _number \| string_ | - |
| min | 最小值 | _number \| string_ | `1` |
| max | 最大值 | _number \| string_ | - |
| default-value | 初始值，当 v-model 为空时生效 | _number \| string_ | `1` |
| step | 步长，每次点击时改变的值 | _number \| string_ | `1` |
| name | 标识符，可以在 `change` 事件回调参数中获取 | _number \| string_ | - |
| inputWidth | 输入框宽度，默认单位为 `px` | _number \| string_ | `32px` |
| buttonSize | 按钮大小以及输入框高度，默认单位为 `px` | _number \| string_ | `28px` |
| decimalLength | 固定显示的小数位数 | _number \| string_ | - |
| theme | 样式风格，可选值为 `round` | _string_ | - |
| placeholder | 输入框占位提示文字 | _string_ | - |
| integer | 是否只允许输入整数 | _boolean_ | `false` |
| disabled | 是否禁用步进器 | _boolean_ | `false` |
| disablePlus | 是否禁用增加按钮 | _boolean_ | `false` |
| disableMinus | 是否禁用减少按钮 | _boolean_ | `false` |
| disableInput | 是否禁用输入框 | _boolean_ | `false` |
| beforeChange | 输入值变化前的回调函数，返回 `false` 可阻止输入，支持返回 Promise | _(value) => boolean \| Promise_ | `false` |
| showPlus | 是否显示增加按钮 | _boolean_ | `true` |
| showMinus | 是否显示减少按钮 | _boolean_ | `true` |
| showInput | 是否显示输入框 | _boolean_ | `true` |
| longPress | 是否开启长按手势 | _boolean_ | `true` |
| allowEmpty | 是否允许输入的值为空 | _boolean_ | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 当绑定值变化时触发的事件 | _value: string, detail: { name: string }_ |
| overlimit | 点击不可用的按钮时触发 | _actionType: string_  |
| plus | 点击增加按钮时触发 | - |
| minus | 点击减少按钮时触发 | - |
| focus | 输入框聚焦时触发 | _event: Event_ |
| blur | 输入框失焦时触发 | _event: Event_ |

### Scss样式变量

| 名称                                     | 默认值              | 描述 |
| ---------------------------------------- | ------------------- | ---- |
| $stepper-active-color                    | `#e8e8e8`           | -    |
| $stepper-background-color                | `$active-color`     | -    |
| $stepper-button-icon-color               | `$text-color`       | -    |
| $stepper-button-disabled-color           | `$background-color` | -    |
| $stepper-button-disabled-icon-color      | `$gray-5`           | -    |
| $stepper-button-round-theme-color        | `$red`              | -    |
| $stepper-input-width                     | `32px`              | -    |
| $stepper-input-height                    | `28px`              | -    |
| $stepper-input-font-size                 | `$font-size-md`     | -    |
| $stepper-input-line-height               | `normal`            | -    |
| $stepper-input-text-color                | `$text-color`       | -    |
| $stepper-input-disabled-text-color       | `$gray-5`           | -    |
| $stepper-input-disabled-background-color | `$active-color`     | -    |
| $stepper-border-radius                   | `$border-radius-md` | -    |
