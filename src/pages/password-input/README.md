# PasswordInput

### Intro

The passwordinput component is usually used with NumberKeyboard Component.

### Install

```js
import { PasswordInput, NumberKeyboard } from 'rvant'
```

## Usage

### Basic Usage

```html
<PasswordInput
  value={value}
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

### Custom Length

```html
<PasswordInput
  value={value}
  length={4}
  focused={show}
  focus={useCallback(() => setShow(true), [])}
/>
```

### Add Gutter

```html
<PasswordInput
  value={value}
  gutter={10}
  focused={show}
  focus={useCallback(() => setShow(true), [])}
/>
```

### Without Mask

```html
<PasswordInput
  mask={false}
  value={value}
  focused={show}
  focus={useCallback(() => setShow(true), [])}
/>
```

### Hint Error

Use `info` to set info message, use `errorInfo` prop to set error message.

```html
<PasswordInput
  info={'Some tips'}
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
    setErrorInfo('Password Mistake')
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

| Attribute  | Description                    | Type               | Default |
| ---------- | ------------------------------ | ------------------ | ------- |
| value      | Password value                 | _string_           | `''`    |
| info       | Bottom info                    | _string_           | -       |
| errorInfo | Bottom error info              | _string_           | -       |
| length     | Maxlength of password          | _number \| string_ | `6`     |
| gutter     | Gutter of input                | _number \| string_ | `0`     |
| mask       | Whether to mask value          | _boolean_          | `true`  |
| focused    | Whether to show focused cursor | _boolean_          | `false` |

### Events

| Event | Description                   | Arguments |
| ----- | ----------------------------- | --------- |
| focus | Emitted when input is focused | -         |

### SCSS Variables

| Name                                      | Default Value   | Description |
| ----------------------------------------- | --------------- | ----------- |
| $password-input-height                    | `50px`          | -           |
| $password-input-margin                    | `0 $padding-md` | -           |
| $password-input-font-size                 | `20px`          | -           |
| $password-input-border-radius             | `6px`           | -           |
| $password-input-background-color          | `$white`        | -           |
| $password-input-info-color                | `$gary-6`       | -           |
| $password-input-info-font-size            | `$font-size-md` | -           |
| $password-input-error-info-color          | `$danger-color` | -           |
| $password-input-dot-size                  | `10px`          | -           |
| $password-input-dot-color                 | `$black`        | -           |
| $password-input-cursor-color              | `$text-color`   | -           |
| $password-input-cursor-width              | `1px`           | -           |
| $password-input-cursor-height             | `40%`           | -           |
| $password-input-cursor-animation-duration | `1s`            | -           |
