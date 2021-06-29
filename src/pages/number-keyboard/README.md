# NumberKeyboard

### Install

```js
import { NumberKeyboard } from 'rvant'
```

## Usage

### Default Keyboard

```html
<Cell isLink click={useCallback(() => setShow(true), [])}>Show Keyboard</Cell>
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

### Keyboard With Sidebar

```html
<NumberKeyboard
  visible={show}
  closeButtonText='Close'
  theme='custom'
  extraKey='.'
  blur={useCallback(() => setShow(false), [])}
  input={onInput}
  delete={onDelete}
/>
```

### IdNumber Keyboard

Use `extraKey` prop to set the content of bottom left button.

```html
<Cell isLink click={useCallback(() => setShow(true), [])}>Show IdNumber Keyboard</Cell>
<NumberKeyboard
  visible={show}
  closeButtonText='Close'
  extraKey='X'
  blur={useCallback(() => setShow(false), [])}
  input={onInput}
  delete={onDelete}
/>
```

### Keyboard With Title

Use `title` prop to set keyboard title.

```html
<Cell isLink click={useCallback(() => setShow(true), [])}>Show Keyboard With Title</Cell>
<NumberKeyboard
  visible={show}
  closeButtonText='Close'
  title='Keyboard Title'
  extraKey='.'
  blur={useCallback(() => setShow(false), [])}
  input={onInput}
  delete={onDelete}
/>
```

### Multiple ExtraKey

```html
<Cell isLink click={useCallback(() => setShow(true), [])}>Show Keyboard With Multiple ExtraKey</Cell>
<NumberKeyboard
  visible={show}
  closeButtonText='Close'
  theme='custom'
  extraKey={['00', '.']}
  blur={useCallback(() => setShow(false), [])}
  input={onInput}
  delete={onDelete}
/>
```

### Random Key Order

Use `randomKeyOrder` prop to shuffle the order of keys.

```html
<Cell isLink click={useCallback(() => setShow(true), [])}>Show Keyboard With Random Key Order</Cell>
<NumberKeyboard
  visible={show}
  randomKeyOrder
  blur={useCallback(() => setShow(''), [])}
  input={onInput}
  delete={onDelete}
/>
```

### Bind Value

```html
<Field
  value={value}
  readonly
  clickable
  label='Bind Value'
  placeholder='Click Input'
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
const onInput = (v: string) => console.log(`Input: ${v}`)
const onDelete = () => console.log(`delete`)
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| v-model | Current value | _string_ | - |
| show | Whether to show keyboard | _boolean_ | - |
| title | Keyboard title | _string_ | - |
| theme | Keyboard theme，can be set to `custom` | _string_ | `default` |
| maxlength | Value maxlength | _number \| string_ | - |
| transition | Whether to show transition animation | _boolean_ | `true` |
| z-index | Keyboard z-index | _number \| string_ | `100` |
| extra-key | Content of bottom left key | _string \| string[]_ | `''` |
| close-button-text | Close button text | _string_ | - |
| delete-button-text | Delete button text | _string_ | Delete Icon |
| close-button-loading | Whether to show loading close button in custom theme | _boolean_ | `false` |
| show-delete-key | Whether to show delete button | _boolean_ | `true` |
| blur-on-close `v3.0.6` | Whether to emit blur event when clicking close button | _boolean_ | `true` |
| hide-on-click-outside | Whether to hide keyboard when outside is clicked | _boolean_ | `true` |
| teleport | Specifies a target element where NumberKeyboard will be mounted | _string \| Element_ | - |
| safe-area-inset-bottom | Whether to enable bottom safe area adaptation | _boolean_ | `true` |
| random-key-order | Whether to shuffle the order of keys | _boolean_ | `false` |

| value | Current value | _string_ | - |
| visible | Whether to show keyboard | _boolean_ | - |
| title | Keyboard title | _string_ | - |
| zIndex | Keyboard z-index | _number \| string_ | `100` |
| transition | Whether to show transition animation | _boolean_ | `true` |
| blurOnClose |  Whether to emit blur event when clicking close button | _boolean_ | `true` |
| showDeleteKey | Whether to show delete button | _boolean_ | `true` |
| randomKeyOrder | Whether to shuffle the order of keys | _boolean_ | `false` |
| deleteButtonText | Delete button text | _string_ | - |
| closeButtonText | Whether to show loading close button in custom theme | _string_ | - |
| closeButtonLoading | Whether to show loading close button in custom theme | _boolean_ | `false` |
| hideOnClickOutside | Whether to hide keyboard when outside is clicked | _boolean_ | `true` |
| safeAreaInsetBottom | Whether to enable bottom safe area adaptation | _boolean_ | `true` |
| theme | Keyboard theme，can be set to `custom` | _string_ | `default` |
| extraKey | Content of bottom left key | _string \| string[]_ | `''` |
| maxlength | Value maxlength | _number \| string_ | - |
| teleport | Return the mount node for Popup, default is body element | _boolean \| Element_ | - |
| teleportClassName | Custom teleport class | _string_ | - |
| teleportStyle | Custom teleport style | _object_ | - |
| titleLeft | Custom title left content | _React.ReactNode \| React.ReactNode[]_ | - |
| customDeleteKey | Custom delete key content | _React.ReactNode \| React.ReactNode[]_ | - |
| customExtraKey | Custom extra key content | _React.ReactNode \| React.ReactNode[]_ | - |

### Events

| Event  | Description                                                        | Arguments               |
| ------ | ------------------------------------------------------------------ | ----------------------- |
| input  | Emitted when keydown                                               | key: Content of the key |
| delete | Emitted when the delete key is pressed                             | -                       |
| close  | Emitted when the close button is clicked                           | -                       |
| blur   | Emitted when the close button is clicked or the keyboard is blured | -                       |
| show   | Emitted when keyboard is fully displayed                           | -                       |
| hide   | Emitted when keyboard is fully hidden                              | -                       |
| change | Value Change                                                       | v: string               |

### SCSS Variables

| Name                                     | Default Value       | Description |
| ---------------------------------------- | ------------------- | ----------- |
| $number-keyboard-background-color        | `$gary-2`           | -           |
| $number-keyboard-key-height              | `48px`              | -           |
| $number-keyboard-key-font-size           | `28px`              | -           |
| $number-keyboard-key-active-color        | `$gary-3`           | -           |
| $number-keyboard-delete-font-size        | `$font-size-lg`     | -           |
| $number-keyboard-title-color             | `$gary-7`           | -           |
| $number-keyboard-title-height            | `34px`              | -           |
| $number-keyboard-title-font-size         | `$font-size-lg`     | -           |
| $number-keyboard-close-padding           | _0 var($padding-md` | -           |
| $number-keyboard-close-color             | `$text-link-color`  | -           |
| $number-keyboard-close-font-size         | `$font-size-md`     | -           |
| $number-keyboard-button-text-color       | `$white`            | -           |
| $number-keyboard-button-background-color | `$primary-color`    | -           |
| $number-keyboard-z-index                 | `100`               | -           |
