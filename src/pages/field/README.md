# Field

### Intro

Field component let users enter and edit text.

### Install

```js
import { Field } from 'rvant';
```

## Usage

### Basic Usage

The value of field is bound with v-model.

```html
<CellGroup>
  <Field
    value={value}
    label='Label'
    placeholder='Text'
    change={useCallback((v) => setValue(v), [])}
  />
</CellGroup>
```

```js
const [value, setValue] = useState('')
```

### Custom Type

Use `type` prop to custom different type fields.

```html
<Field
  value={text}
  label='Text'
  placeholder='Text'
  change={(v) => setText(v)}
/>
<Field
  value={phone}
  type='tel'
  label='Phone'
  placeholder='Phone'
  change={useCallback((v) => setPhone(v), [])}
/>
<Field
  value={digit}
  type='digit'
  label='Digit'
  placeholder='Digit'
  change={useCallback((v) => setDigit(v), [])}
/>
<Field
  value={number}
  type='number'
  label='Number'
  placeholder='Number'
  change={useCallback((v) => setNumber(v), [])}
/>
<Field
  value={password}
  type='password'
  label='Password'
  placeholder='Password'
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

### Disabled

```html
<CellGroup>
  <Field value={'Input Readonly'} label='Text' readonly />
  <Field value={'Input Disabled'} label='Text' disabled />
</CellGroup>
```

### Show Icon

```html
<CellGroup>
  <Field
    value={icon1}
    label='Text'
    leftIcon='smile-o'
    rightIcon='warning-o'
    placeholder='Show Icon'
    change={useCallback((v) => setIcon1(v), [])}
  />
  <Field
    value={icon2}
    clearable
    label='Text'
    leftIcon='music-o'
    placeholder='Show Clear Icon'
    change={useCallback((v) => setIcon2(v), [])}
  />
</CellGroup>
```

```js
const [icon1, setIcon1] = useState('')
const [icon2, setIcon2] = useState('123')
```

### Error Info

Use `error` or `errorMessage` to show error info.

```html
<CellGroup>
  <Field
    value={username}
    error
    required
    label='Username'
    placeholder='Username'
    change={useCallback((v) => setUsername(v), [])}
  />
  <Field
    required
    value={phone}
    label='Phone'
    placeholder='Phone'
    errorMessage='Invalid phone'
    change={useCallback((v) => setPhone(v), [])}
  />
</CellGroup>
```

### Insert Button

Use `button` to insert button.

```html
<Field
  value={sms}
  center
  clearable
  label='SMS'
  placeholder='SMS'
  button={
    <Button size='small' type='primary'>
      Send SMS
    </Button>
  }
  change={useCallback((v) => setSms(v), [])}
/>
```

### Format Value

Use `formatter` prop to format the input value.

```html
<Field
  value={value1}
  label='Text'
  placeholder='Format On Change'
  formatter={formatter}
  change={useCallback((v) => setValue1(v), [])}
/>
<Field
  value={value2}
  label='Text'
  placeholder='Format On Blur'
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

### Auto Resize

Textarea Field can be auto resize when has `autosize` prop.

```html
<Field
  value={value}
  autosize
  rows='1'
  type='textarea'
  label='Message'
  placeholder='Message'
  change={useCallback((v) => setValue(v), [])}
/>
```

### Show Word Limit

```html
<Field
  value={value}
  autosize
  showWordLimit
  rows='2'
  type='textarea'
  maxlength='50'
  label='Message'
  placeholder='Message'
  change={useCallback((v) => setValue(v), [])}
/>
```

### Input Align

Use `inputAlign` prop to align the input value.

```html
<Field
  value={value}
  label='Text'
  inputAlign='right'
  placeholder='Input Align Right'
  change={useCallback((v) => setValue(v), [])}
/>
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| value | Field value | _number \| string_ | - |
| label | Field label | _string \| React.ReactNode \| React.ReactNode[]_ | - |
| extra | Custom content on the right | _React.ReactNode \| React.ReactNode[]_ | - |
| input | Custom input | _React.ReactNode_ | - |
| button | Insert button | _React.ReactNode_ | - |
| name | Name | _string_ | - |
| type | Input type, can be set to `tel` `digit`<br>`number` `textarea` `password` | _string_ | `text` |
| size | Size，can be set to `large` | _string_ | - |
| maxlength | Max length of value | _number \| string_ | - |
| placeholder | Input placeholder | _string_ | - |
| border | Whether to show inner border | _boolean_ | `true` |
| disabled | Whether to disable field | _boolean_ | `false` |
| readonly | Whether to be readonly | _boolean_ | `false` |
| colon | Whether to display colon after label | _boolean_ | `false` |
| required | Whether to show required mark | _boolean_ | `false` |
| center | Whether to center content vertically | _boolean_ | `true` |
| clearable | Whether to be clearable | _boolean_ | `false` |
| clearIcon `v3.0.12` | Clear icon name | _string_ | `clear` |
| clearTrigger | When to display the clear icon, `always` means to display the icon when value is not empty, `focus` means to display the icon when input is focused | _string_ | `focus` |
| clickable | Whether to show click feedback when clicked | _boolean_ | `false` |
| isLink | Whether to show link icon | _boolean_ | `false` |
| autofocus | Whether to auto focus, unsupported in iOS | _boolean_ | `false` |
| showWordLimit | Whether to show word limit, need to set the `maxlength` prop | _boolean_ | `false` |
| error | Whether to mark the input content in red | _boolean_ | `false` |
| errorMessage | Error message | _string_ | - |
| errorMessageAlign | Error message align, can be set to `center` `right` | _string_ | `left` |
| formatter | Input value formatter | _(val: string) => string_ | - |
| formatTrigger | When to format value，can be set to `onBlur` | _string_ | `onChange` |
| arrowDirection | Can be set to `left` `up` `down` | _string_ | `right` |
| labelClass | Label className | _string \| Array \| object_ | - |
| labelWidth | Label width | _number \| string_ | `6.2em` |
| labelAlign | Label align, can be set to `center` `right` | _string_ | `left` |
| inputAlign | Input align, can be set to `center` `right` | _string_ | `left` |
| autosize | Textarea auto resize，can accpet an object,<br>e.g. { maxHeight: 100, minHeight: 50 } | _boolean \| object_ | `false` |
| leftIcon | Left side icon name | _string \| React.ReactNode_ | - |
| rightIcon | Right side icon name | _string \| React.ReactNode_ | - |
| iconPrefix | Icon className prefix | _string_ | `van-icon` |
| rules | Form validation rules | _Rule[]_ | - |
| autocomplete `v3.0.3` | [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) attribute of native input element | _string_ | - |

### Events

Field support all native events of input tag

| Event | Description | Parameters |
| --- | --- | --- |
| change | Emitted when input value changed | _value: string_ |
| focus | Emitted when input is focused | _event: Event_ |
| blur | Emitted when input is blured | _event: Event_ |
| clear | Emitted when the clear icon is clicked | _event: MouseEvent_ |
| keypress | Emitted when keyboard press| _event: MouseEvent_ |
| clickInput | Emitted when the input is clicked | _event: MouseEvent_ |
| clickLeftIcon | Emitted when the left icon is clicked | _event: MouseEvent_ |
| clickRightIcon | Emitted when the right icon is clicked | _event: MouseEvent_ |

### Methods

Use refto get Field instance and call instance methods.

| Name  | Description         | Attribute | Return value |
| ----- | ------------------- | --------- | ------------ |
| focus | Trigger input focus | -         | -            |
| blur  | Trigger input blur  | -         | -            |

### Scss Variables

| Name                             | Default Value   | Description |
| -------------------------------- | --------------- | ----------- |
| $field-label-width               | `6.2em`         | -           |
| $field-label-color               | `$gray-7`       | -           |
| $field-label-margin-right        | `$padding-sm`   | -           |
| $field-input-text-color          | `$text-color`   | -           |
| $field-input-error-text-color    | `$red`          | -           |
| $field-input-disabled-text-color | `$gray-5`       | -           |
| $field-placeholder-text-color    | `$gray-5`       | -           |
| $field-icon-size                 | `16px`          | -           |
| $field-clear-icon-size           | `16px`          | -           |
| $field-clear-icon-color          | `$gray-5`       | -           |
| $field-right-icon-color          | `$gray-6`       | -           |
| $field-error-message-color       | `$red`          | -           |
| $field-error-message-text-color  | `12px`          | -           |
| $field-text-area-min-height      | `60px`          | -           |
| $field-word-limit-color          | `$gray-7`       | -           |
| $field-word-limit-font-size      | `$font-size-sm` | -           |
| $field-word-limit-line-height    | `16px`          | -           |
| $field-disabled-text-color       | `$gray-5`       | -           |
