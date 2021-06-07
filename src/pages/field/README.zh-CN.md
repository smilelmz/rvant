# Field 输入框

### 介绍

用户可以在文本框内输入或编辑文字。

### 引入

```js
import { Field } from 'rvant';
```

## 代码演示

### 基础用法

通过 `placeholder` 设置占位提示文字。

```html
<!-- Field 是基于 Cell 实现的，可以使用 CellGroup 作为容器来提供外边框。 -->
<CellGroup>
  <Field
    value={value}
    label='文本'
    placeholder='请输入文本'
    change={useCallback((v) => setValue(v), [])}
  />
</CellGroup>
```

```js
const [value, setValue] = useState('')
```

### 自定义类型

根据 `type` 属性定义不同类型的输入框，默认值为 `text`。

```html
<!-- 输入任意文本 -->
<Field
  value={text}
  label='文本'
  placeholder='请输入文本'
  change={(v) => setText(v)}
/>
<!-- 输入手机号，调起手机号键盘 -->
<Field
  value={phone}
  type='tel'
  label='手机号'
  placeholder='请输入手机号'
  change={useCallback((v) => setPhone(v), [])}
/>
<!-- 允许输入正整数，调起纯数字键盘 -->
<Field
  value={digit}
  type='digit'
  label='整数'
  placeholder='请输入整数'
  change={useCallback((v) => setDigit(v), [])}
/>
<!-- 允许输入数字，调起带符号的纯数字键盘 -->
<Field
  value={number}
  type='number'
  label='数字'
  placeholder='请输入数字（支持小数）'
  change={useCallback((v) => setNumber(v), [])}
/>
<!-- 输入密码 -->
<Field
  value={password}
  type='password'
  label='密码'
  placeholder='请输入密码'
  change={useCallback((v) => setPassword(v), [])}
/>
```

```js
const [text, setText] = useState('')
const [phone, setPhone] = useState('')
const [digit, setDigit] = useState('')
const [number, setNumber] = useState('')
const [password, setPassword] = useState('')
```

### 禁用输入框

通过 `readonly` 将输入框设置为只读状态，通过 `disabled` 将输入框设置为禁用状态。

```html
<CellGroup>
  <Field value={'输入框只读'} label='文本' readonly />
  <Field value={'输入框只读'} label='文本' disabled />
</CellGroup>
```

### 显示图标

通过 `leftIcon` 和 `rightIcon` 配置输入框两侧的图标，通过设置 `clearable` 在输入过程中展示清除图标。

```html
<CellGroup>
  <Field
    value={icon1}
    label='文本'
    leftIcon='smile-o'
    rightIcon='warning-o'
    placeholder='显示图标'
    change={useCallback((v) => setIcon1(v), [])}
  />
  <Field
    value={icon2}
    clearable
    label='文本'
    leftIcon='music-o'
    placeholder='显示清除图标'
    change={useCallback((v) => setIcon2(v), [])}
  />
</CellGroup>
```

```js
const [icon1, setIcon1] = useState('')
const [icon2, setIcon2] = useState('123')
```

### 错误提示

设置 `required` 属性表示这是一个必填项，可以配合 `error` 或 `errorMessage` 属性显示对应的错误提示。

```html
<CellGroup>
  <Field
    value={username}
    error
    required
    label='用户名'
    placeholder='请输入用户名'
    change={useCallback((v) => setUsername(v), [])}
  />
  <Field
    required
    value={phone}
    label='手机号'
    placeholder='请输入手机号'
    errorMessage='手机号格式错误'
    change={useCallback((v) => setPhone(v), [])}
  />
</CellGroup>
```

### 插入按钮

通过 button 插槽可以在输入框尾部插入按钮。

```html
<Field
  value={sms}
  center
  clearable
  label='短信验证码'
  placeholder='请输入短信验证码'
  button={
    <Button size='small' type='primary'>
      发送验证码
    </Button>
  }
  change={useCallback((v) => setSms(v), [])}
/>
```

### 格式化输入内容

通过 `formatter` 属性可以对输入的内容进行格式化，通过 `formatTrigger` 属性可以指定执行格式化的时机，默认在输入时进行格式化。

```html
<Field
  value={value1}
  label='文本'
  placeholder='在输入时执行格式化'
  formatter={formatter}
  change={useCallback((v) => setValue1(v), [])}
/>
<Field
  value={value2}
  label='文本'
  placeholder='在失焦时执行格式化'
  formatTrigger='onBlur'
  formatter={formatter}
  change={useCallback((v) => setValue2(v), [])}
/>
```

```js
const [value1, setValue1] = useState('')
const [value2, setValue2] = useState('')
const formatter = (value: string) => value.replace(/\d/g, '')
```

### 高度自适应

对于 textarea，可以通过 `autosize` 属性设置高度自适应。

```html
<Field
  value={value}
  autosize
  rows='1'
  type='textarea'
  label='留言'
  placeholder='请输入留言'
  change={useCallback((v) => setValue(v), [])}
/>
```

### 显示字数统计

设置 `maxlength` 和 `showWordLimit` 属性后会在底部显示字数统计。

```html
<Field
  value={value}
  autosize
  showWordLimit
  rows='2'
  type='textarea'
  maxlength='50'
  label='留言'
  placeholder='请输入留言'
  change={useCallback((v) => setValue(v), [])}
/>
```

### 输入框内容对齐

通过 `inputAlign` 属性可以设置输入框内容的对齐方式，可选值为 `center`、`right`。

```html
<Field
  value={value}
  label='文本'
  inputAlign='right'
  placeholder='输入框内容右对齐'
  change={useCallback((v) => setValue(v), [])}
/>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前输入的值 | _number \| string_ | - |
| label | 自定义输入框左侧文本 | _string \| React.ReactNode \| React.ReactNode[]_ | - |
| extra | 自定义输入框最右侧的额外内容 | _React.ReactNode \| React.ReactNode[]_ | - |
| input | 自定义输入框 | _React.ReactNode_ | - |
| button | 自定义输入框尾部按钮 | _React.ReactNode_ | - |
| name | 名称，提交表单的标识符 | _string_ | - |
| type | 输入框类型, 可选值为 `tel` `digit`<br>`number` `textarea` `password` 等 | _string_ | `text` |
| size | 大小，可选值为 `large` | _string_ | - |
| maxlength | 输入的最大字符数 | _number \| string_ | - |
| placeholder | 输入框占位提示文字 | _string_ | - |
| border | 是否显示内边框 | _boolean_ | `true` |
| disabled | 是否禁用输入框 | _boolean_ | `false` |
| readonly | 是否为只读状态，只读状态下无法输入内容 | _boolean_ | `false` |
| colon | 是否在 label 后面添加冒号 | _boolean_ | `false` |
| required | 是否显示表单必填星号 | _boolean_ | `false` |
| center | 是否使内容垂直居中 | _boolean_ | `false` |
| clearable | 是否启用清除图标，点击清除图标后会清空输入框 | _boolean_ | `false` |
| clearIcon | 清除图标名称或图片链接 | _string_ | `clear` |
| clearTrigger | 显示清除图标的时机，`always` 表示输入框不为空时展示，<br>`focus` 表示输入框聚焦且不为空时展示 | _string_ | `focus` |
| clickable | 是否开启点击反馈 | _boolean_ | `false` |
| isLink | 是否展示右侧箭头并开启点击反馈 | _boolean_ | `false` |
| autofocus | 是否自动聚焦，iOS 系统不支持该属性 | _boolean_ | `false` |
| showWordLimit | 是否显示字数统计，需要设置 `maxlength` 属性 | _boolean_ | `false` |
| error | 是否将输入内容标红 | _boolean_ | `false` |
| errorMessage | 底部错误提示文案，为空时不展示 | _string_ | - |
| errorMessageAlign | 错误提示文案对齐方式，可选值为 `center` `right` | _string_ | `left` |
| formatter | 输入内容格式化函数 | _(val: string) => string_ | - |
| formatTrigger | 格式化函数触发的时机，可选值为 `onBlur` | _string_ | `onChange` |
| arrowDirection | 箭头方向，可选值为 `left` `up` `down` | _string_ | `right` |
| labelClass | 左侧文本额外类名 | _string \| Array \| object_ | - |
| labelWidth | 左侧文本宽度，默认单位为 `px` | _number \| string_ | `6.2em` |
| labelAlign | 左侧文本对齐方式，可选值为 `center` `right` | _string_ | `left` |
| inputAlign | 输入框对齐方式，可选值为 `center` `right` | _string_ | `left` |
| autosize | 是否自适应内容高度，只对 textarea 有效，<br>可传入对象,如 { maxHeight: 100, minHeight: 50 }，<br>单位为`px` | _boolean \| object_ | `false` |
| leftIcon | 左侧图标名称或图片链接 | _string \| React.ReactNode_ | - |
| rightIcon | 右侧图标名称或图片链接 | _string \| React.ReactNode_ | - |
| iconPrefix | 图标类名前缀，同 Icon 组件的 class-prefix 属性 | _string_ | `van-icon` |
| rules | 表单校验规则，详见 Form 组件 | _Rule[]_ | - |
| autocomplete | input 标签原生的[自动完成属性](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) | _string_ | - |

### Events

| 事件           | 说明                 | 回调参数                       |
| -------------- | -------------------- | ------------------------------ |
| change         | 输入框内容变化时触发 | _value: string (当前输入的值)_ |
| focus          | 输入框获得焦点时触发 | _event: FocusEvent_                 |
| blur           | 输入框失去焦点时触发 | _event: FocusEvent_                 |
| clear          | 点击清除按钮时触发   | _event: TouchEvent_            |
| keypress       | 键盘事件             | _event: KeyboardEvent_            |
| clickInput     | 点击输入区域时触发   | _event: MouseEvent_            |
| clickLeftIcon  | 点击左侧图标时触发   | _event: MouseEvent_            |
| clickRightIcon | 点击右侧图标时触发   | _event: MouseEvent_            |

### 方法

通过 ref 可以获取到 Field 实例并调用实例方法。

| 方法名 | 说明           | 参数 | 返回值 |
| ------ | -------------- | ---- | ------ |
| focus  | 获取输入框焦点 | -    | -      |
| blur   | 取消输入框焦点 | -    | -      |

### Scss样式变量

| 名称                             | 默认值          | 描述 |
| -------------------------------- | --------------- | ---- |
| $field-label-width               | `6.2em`         | -    |
| $field-label-color               | `$gray-7`       | -    |
| $field-label-margin-right        | `$padding-sm`   | -    |
| $field-input-text-color          | `$text-color`   | -    |
| $field-input-error-text-color    | `$red`          | -    |
| $field-input-disabled-text-color | `$gray-5`       | -    |
| $field-placeholder-text-color    | `$gray-5`       | -    |
| $field-icon-size                 | `16px`          | -    |
| $field-clear-icon-size           | `16px`          | -    |
| $field-clear-icon-color          | `$gray-5`       | -    |
| $field-right-icon-color          | `$gray-6`       | -    |
| $field-error-message-color       | `$red`          | -    |
| $field-error-message-text-color  | `12px`          | -    |
| $field-text-area-min-height      | `60px`          | -    |
| $field-word-limit-color          | `$gray-7`       | -    |
| $field-word-limit-font-size      | `$font-size-sm` | -    |
| $field-word-limit-line-height    | `16px`          | -    |
| $field-disabled-text-color       | `$gray-5`       | -    |

## 常见问题

### 设置 type 为 number 后，为什么 input 标签的类型仍为 text?

HTML 原生的 `type="number"` 属性在 iOS 和 Android 系统上都存在一定问题，比如 maxlength 属性不生效、无法获取到完整的输入内容等。因此设置 type 为 `number` 时，Field 不会使用原生的 `type="number"` 属性，而是用现代浏览器支持的 [inputmode 属性](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/inputmode)来控制输入键盘的类型。
