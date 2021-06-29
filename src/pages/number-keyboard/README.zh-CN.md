# NumberKeyboard 数字键盘

### 引入

```js
import { NumberKeyboard } from 'rvant'
```

## 代码演示

### 默认样式

数字键盘提供了 `input`、`delete`、`blur` 事件，分别对应输入内容、删除内容和失去焦点的动作。

```html
<Cell isLink click={useCallback(() => setShow(true), [])}>弹出键盘</Cell>
<NumberKeyboard
  visible={show}
  extraKey='.'
  blur={useCallback(() => setShow(false), [])}
  input={onInput}
  delete={onDelete}
/>
```

```js
const [show, setShow] = useState(false)
const onInput = (value: string) => console.log(`输入: ${value}`)
const onDelete = () => console.log(`delete`)
```

### 带右侧栏的键盘

将 theme 属性设置为 `custom` 来展示键盘的右侧栏，常用于输入金额的场景。

```html
<NumberKeyboard
  visible={show}
  closeButtonText='完成'
  theme='custom'
  extraKey='.'
  blur={useCallback(() => setShow(false), [])}
  input={onInput}
  delete={onDelete}
/>
```

### 身份证号键盘

通过 `extraKey` 属性可以设置左下角按键内容，比如需要输入身份证号时，可以将 `extraKey` 设置为 `X`。

```html
<NumberKeyboard
  visible={show}
  closeButtonText='完成'
  extraKey='X'
  blur={useCallback(() => setShow(false), [])}
  input={onInput}
  delete={onDelete}
/>
```

### 键盘标题

通过 `title` 属性可以设置键盘标题。

```html
<NumberKeyboard
  visible={show}
  closeButtonText='完成'
  title='键盘标题'
  extraKey='.'
  blur={useCallback(() => setShow(false), [])}
  input={onInput}
  delete={onDelete}
/>
```

### 配置多个按键

当 theme 为 `custom` 时，支持以数组的形式配置两个 `extraKey`。

```html
<NumberKeyboard
  visible={show}
  closeButtonText='完成'
  theme='custom'
  extraKey={['00', '.']}
  blur={useCallback(() => setShow(false), [])}
  input={onInput}
  delete={onDelete}
/>
```

### 随机数字键盘

通过 `randomKeyOrder` 属性可以随机排序数字键盘，常用于安全等级较高的场景。

```html
<NumberKeyboard
  visible={show}
  randomKeyOrder
  blur={useCallback(() => setShow(''), [])}
  input={onInput}
  delete={onDelete}
/>
```

### 双向绑定

可以通过 `value` 绑定键盘当前输入值。

```html
<Field
  value={value}
  readonly
  clickable
  label='绑定数据'
  placeholder='点此输入'
  click={useCallback(() => setShow(true), [])}
/>
<NumberKeyboard
  value={value}
  visible={show}
  maxlength='6'
  change={(v) => setValue(v)}
  blur={useCallback(() => setShow(false), [])}
/>
```

```js
const [show, setShow] = useState(false)
const [value, setValue] = useState('')
const onInput = (v: string) => console.log(`输入: ${v}`)
const onDelete = () => console.log(`delete`)
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前输入值 | _string_ | - |
| visible | 是否显示键盘 | _boolean_ | - |
| title | 键盘标题 | _string_ | - |
| zIndex | 键盘 z-index 层级 | _number \| string_ | `100` |
| transition | 是否开启过场动画 | _boolean_ | `true` |
| blurOnClose | 是否在点击关闭按钮时触发 blur 事件 | _boolean_ | `true` |
| showDeleteKey | 是否展示删除图标 | _boolean_ | `true` |
| randomKeyOrder | 是否将通过随机顺序展示按键 | _boolean_ | `false` |
| deleteButtonText | 删除按钮文字，空则展示删除图标 | _string_ | - |
| closeButtonText | 关闭按钮文字，空则不展示 | _string_ | - |
| closeButtonLoading | 是否将关闭按钮设置为加载中状态，仅在 `theme="custom"` 时有效 | _boolean_ | `false` |
| hideOnClickOutside | 是否在点击外部时收起键盘 | _boolean_ | `true` |
| safeAreaInsetBottom | 是否开启底部安全区适配 | _boolean_ | `true` |
| theme | 样式风格，可选值为 `custom` | _string_ | `default` |
| extraKey | 底部额外按键的内容 | _string \| string[]_ | `''` |
| maxlength | 输入值最大长度 | _number \| string_ | - |
| teleport | 指定挂载的节点,默认为body | _boolean \| Element_ | - |
| teleportClassName | 指定挂载的节点的样式名称 | _string_ | - |
| teleportStyle | 指定挂载的节点的样式 | _object_ | - |
| titleLeft | 自定义标题栏左侧内容 | _React.ReactNode \| React.ReactNode[]_ | - |
| customDeleteKey | 自定义删除按键内容 | _React.ReactNode \| React.ReactNode[]_ | - |
| customExtraKey | 自定义左下角按键内容 | _React.ReactNode \| React.ReactNode[]_ | - |

### Events

| 事件名 | 说明                           | 回调参数      |
| ------ | ------------------------------ | ------------- |
| input  | 点击按键时触发                 | key: 按键内容 |
| delete | 点击删除键时触发               | -             |
| close  | 点击关闭按钮时触发             | -             |
| blur   | 点击关闭按钮或非键盘区域时触发 | -             |
| show   | 键盘完全弹出时触发             | -             |
| hide   | 键盘完全收起时触发             | -             |
| change | 键盘值变化                     | v: string     |

### Scss样式变量

| 名称                                     | 默认值              | 描述 |
| ---------------------------------------- | ------------------- | ---- |
| $number-keyboard-background-color        | `$gary-2`           | -    |
| $number-keyboard-key-height              | `48px`              | -    |
| $number-keyboard-key-font-size           | `28px`              | -    |
| $number-keyboard-key-active-color        | `$gary-3`           | -    |
| $number-keyboard-delete-font-size        | `$font-size-lg`     | -    |
| $number-keyboard-title-color             | `$gary-7`           | -    |
| $number-keyboard-title-height            | `34px`              | -    |
| $number-keyboard-title-font-size         | `$font-size-lg`     | -    |
| $number-keyboard-close-padding           | _0 var($padding-md` | -    |
| $number-keyboard-close-color             | `$text-link-color`  | -    |
| $number-keyboard-close-font-size         | `$font-size-md`     | -    |
| $number-keyboard-button-text-color       | `$white`            | -    |
| $number-keyboard-button-background-color | `$primary-color`    | -    |
| $number-keyboard-z-index                 | `100`               | -    |
