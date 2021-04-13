# Stepper

### Install

```js
import { Stepper } from 'rvant';
```

## Usage

### Basic Usage

```html
<Stepper value={value} change={(v) => setValue(v)} />
```

```js
const [value, setValue] = useState(1)
```

### Step

```html
<Stepper value={value} change={(v) => setValue(v)}  step="2" />
```

### Range

```html
<Stepper value={value} change={(v) => setValue(v)}  min="5" max="8" />
```

### Integer

```html
<Stepper value={value} change={(v) => setValue(v)}  integer />
```

### Disabled

```html
<Stepper value={value} change={(v) => setValue(v)}  disabled />
```

### Disable Input

```html
<Stepper value={value} change={(v) => setValue(v)}  disableInput />
```

### Decimal Length

```html
<Stepper value={value} change={(v) => setValue(v)}  step="0.2" decimalLength="1" />
```

### Custom Size

```html
<Stepper value={value} change={(v) => setValue(v)}  inputWidth="40px" buttonSize="32px" />
```

### Before Change

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

### Round Theme

```html
<Stepper value={value} change={(v) => setValue(v)}  theme="round" buttonSize="22" disableInput />
```

## API

### Props

| Attribute     | Description                                                                                 | Type                            | Default |
| ------------- | ------------------------------------------------------------------------------------------- | ------------------------------- | ------- |
| value         | Current value                                                                               | _number \| string_              | -       |
| min           | Min value                                                                                   | _number \| string_              | `1`     |
| max           | Max value                                                                                   | _number \| string_              | -       |
| defaultValue  | Default value, valid when v-model is empty                                                  | _number \| string_              | `1`     |
| step          | Value change step                                                                           | _number \| string_              | `1`     |
| name          | Stepper name                                                                                | _number \| string_              | -       |
| inputWidth    | Input width                                                                                 | _number \| string_              | `32px`  |
| buttonSize    | Button size                                                                                 | _number \| string_              | `28px`  |
| decimalLength | Decimal length                                                                              | _number \| string_              | -       |
| theme         | Theme, can be set to `round`                                                                | _string_                        | -       |
| placeholder   | Input placeholder                                                                           | _string_                        | -       |
| integer       | Whether to allow only integers                                                              | _boolean_                       | `false` |
| disabled      | Whether to disable value change                                                             | _boolean_                       | `false` |
| disablePlus   | Whether to disable plus button                                                              | _boolean_                       | `false` |
| disableMinus  | Whether to disable minus button                                                             | _boolean_                       | `false` |
| disableInput  | Whether to disable input                                                                    | _boolean_                       | `false` |
| beforeChange  | Callback function before changing，return `false` to prevent change，support return Promise | _(value) => boolean \| Promise_ | `false` |
| showPlus      | Whether to show plus button                                                                 | _boolean_                       | `true`  |
| showMinus     | Whether to show minus button                                                                | _boolean_                       | `true`  |
| showInput     | Whether to show input                                                                       | _boolean_                       | `true`  |
| longPress     | Whether to allow long press                                                                 | _boolean_                       | `true`  |
| allowEmpty    | Whether to allow the input to be empty                                                      | _boolean_                       | `false` |

### Events

| Event     | Description                               | Arguments                                 |
| --------- | ----------------------------------------- | ----------------------------------------- |
| change    | Emitted when value changed                | _value: string, detail: { name: string }_ |
| overlimit | Emitted when a disabled button is clicked | _actionType: string_                      |
| plus      | Emitted when the plus button is clicked   | -                                         |
| minus     | Emitted when the minus button is clicked  | -                                         |
| focus     | Emitted when the input is focused         | _event: Event_                            |
| blur      | Emitted when the input is blured          | _event: Event_                            |

### Scss Variables

| Name                                     | Default Value       | Description |
| ---------------------------------------- | ------------------- | ----------- |
| $stepper-active-color                    | `#e8e8e8`           | -           |
| $stepper-background-color                | `$active-color`     | -           |
| $stepper-button-icon-color               | `$text-color`       | -           |
| $stepper-button-disabled-color           | `$background-color` | -           |
| $stepper-button-disabled-icon-color      | `$gray-5`           | -           |
| $stepper-button-round-theme-color        | `$red`              | -           |
| $stepper-input-width                     | `32px`              | -           |
| $stepper-input-height                    | `28px`              | -           |
| $stepper-input-font-size                 | `$font-size-md`     | -           |
| $stepper-input-line-height               | `normal`            | -           |
| $stepper-input-text-color                | `$text-color`       | -           |
| $stepper-input-disabled-text-color       | `$gray-5`           | -           |
| $stepper-input-disabled-background-color | `$active-color`     | -           |
| $stepper-border-radius                   | `$border-radius-md` | -           |
