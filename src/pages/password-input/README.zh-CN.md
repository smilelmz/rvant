# PasswordInput 密码输入框

### 介绍

带网格的输入框组件，可以用于输入密码、短信验证码等场景，通常与数字键盘组件配合使用。

### 引入

```js
import { PasswordInput, NumberKeyboard } from 'rvant'
```

## 代码演示

### 基础用法

搭配数字键盘组件来实现密码输入功能。

```html
<!-- 密码输入框 -->
<PasswordInput
  value={value}
  focused={show}
  focus={useCallback(() => setShow(true), [])}
/>
<!-- 数字键盘 -->
<NumberKeyboard
  visible={show}
  blur={useCallback(() => setShow(false), [])}
  input={onInput}
  delete={onDelete}
/>
```

```js
const [show, setShow] = useState(false)
const [value, setValue] = useState('123')

const onInput = (key: ValueKeys) => {
  const maxlegnth = 6
  const newValue = (value + key).slice(0, maxlegnth)
  setValue(newValue)
}

const onDelete = () => {
  const newValue = value.slice(0, value.length - 1)
  setValue(newValue)
}
```

### 自定义长度

通过 `length` 属性来设置密码长度。

```html
<PasswordInput
  value={value}
  length={4}
  focused={show}
  focus={useCallback(() => setShow(true), [])}
/>
```

### 格子间距

通过 `gutter` 属性来设置格子之间的间距。

```html
<PasswordInput
  value={value}
  gutter={10}
  focused={show}
  focus={useCallback(() => setShow(true), [])}
/>
```

### 明文展示

将 `mask` 设置为 `false` 可以明文展示输入的内容，适用于短信验证码等场景。

```html
<PasswordInput
  mask={false}
  value={value}
  focused={show}
  focus={useCallback(() => setShow(true), [])}
/>
```

### 提示信息

通过 `info` 属性设置提示信息，通过 `errorInfo` 属性设置错误提示，例如当输入六位时提示密码错误。

```html
<PasswordInput
  info={'密码为 6 位数字'}
  value={value}
  errorInfo={errorInfo}
  focused={show}
  focus={useCallback(() => setShow(true), [])}
/>
<NumberKeyboard
  visible={show}
  blur={useCallback(() => setShow(false), [])}
  input={onInput}
  delete={onDelete}
/>
```

```js
const [show, setShow] = useState(false)
const [value, setValue] = useState('123')
const [errorInfo, setErrorInfo] = useState('')

const onInput = (key: ValueKeys) => {
  const maxlegnth = 6
  const newValue = (value + key).slice(0, maxlegnth)
  setValue(newValue)

  if (newValue.length === 6 && newValue !== '123456') {
    setErrorInfo('密码错误')
  }
}

const onDelete = () => {
  const newValue = value.slice(0, value.length - 1)
  setValue(newValue)
  setErrorInfo('')
}
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 密码值 | _string_ | `''` |
| info | 输入框下方文字提示 | _string_ | - |
| errorInfo | 输入框下方错误提示 | _string_ | - |
| length | 密码最大长度 | _number \| string_ | `6` |
| gutter | 输入框格子之间的间距，如 `20px` `2em`，默认单位为`px` | _number \| string_ | `0` |
| mask | 是否隐藏密码内容 | _boolean_ | `true` |
| focused | 是否已聚焦，聚焦时会显示光标 | _boolean_ | `false` |

### Events

| 事件名 | 说明             | 回调参数 |
| ------ | ---------------- | -------- |
| focus  | 输入框聚焦时触发 | -        |

### Scss样式变量

| 名称                                      | 默认值          | 描述 |
| ----------------------------------------- | --------------- | ---- |
| $password-input-height                    | `50px`          | -    |
| $password-input-margin                    | `0 $padding-md` | -    |
| $password-input-font-size                 | `20px`          | -    |
| $password-input-border-radius             | `6px`           | -    |
| $password-input-background-color          | `$white`        | -    |
| $password-input-info-color                | `$gary-6`       | -    |
| $password-input-info-font-size            | `$font-size-md` | -    |
| $password-input-error-info-color          | `$danger-color` | -    |
| $password-input-dot-size                  | `10px`          | -    |
| $password-input-dot-color                 | `$black`        | -    |
| $password-input-cursor-color              | `$text-color`   | -    |
| $password-input-cursor-width              | `1px`           | -    |
| $password-input-cursor-height             | `40%`           | -    |
| $password-input-cursor-animation-duration | `1s`            | -    |
