# Cascader

### Intro

The cascader component is used for the selection of multi-level data. The typical scene is the selection of provinces and cities.

### Install

```js
import { Cascader } from 'rvant'
```

## Usage

### Basic Usage

```html
<Field
  value={result}
  isLink
  readonly
  label='Area'
  placeholder='Select Area'
  click={useCallback(() => setShow(true), [])}
/>
<Popup
  show={show}
  round
  teleport={true}
  position='bottom'
  close={() => setShow(false)}
>
  <Cascader
    value={value}
    title='Select Area'
    options={options}
    close={useCallback(() => setShow(false), [])}
    finish={onFinish}
  />
</Popup>
```

```js
const options = [
  {
    text: 'Zhejiang',
    value: '330000',
    children: [{ text: 'Hangzhou', value: '330100' }],
  },
  {
    text: 'Jiangsu',
    value: '320000',
    children: [{ text: 'Nanjing', value: '320100' }],
  },
];
const [value, setValue] = useState('')
const [show, setShow] = useState(false)
const [result, setResult] = useState('')
const onFinish = ({ value, selectedOptions }: CascaderEventParams) => {
  const result = selectedOptions
    .map((option) => option.text || option.name)
    .join('/')

  setShow(false)
  setValue(value)
  setResult(result)
}
```

### Custom Color

```html
<Cascader
  value={value}
  title='Select Area'
  options={zhCNOptions}
  activeColor='#1989fa'
  close={useCallback(() => setShow(false), [])}
  finish={onFinish}
/>
```

### Async Options

```html
<Field
  value={result}
  isLink
  readonly
  label='Area'
  placeholder='Select Area'
  click={useCallback(() => setShow(true), [])}
/>
<Popup
  show={show}
  round
  teleport={true}
  position='bottom'
  close={() => setShow(false)}
>
  <Cascader
    value={value}
    title='Select Area'
    options={options}
    change={loadDynamicOptions}
    close={useCallback(() => setShow(false), [])}
    finish={onFinish}
  />
</Popup>
```

```js
const asyncOptions1 = [
  {
    text: 'Zhejiang',
    value: '330000',
    children: []
  }
]
const asyncOptions2 = [
  { text: 'Hangzhou', value: '330100' },
  { text: 'Ningbo', value: '330200' }
]
const [options, setOptions] = useState(asyncOptions1)
const [value, setValue] = useState('')
const [show, setShow] = useState(false)
const [result, setResult] = useState('')
const loadDynamicOptions = ({ value }: CascaderOption) => {
  setValue(value as string)
  if (value === '330000') {
    const newOptions = [...options]
    setTimeout(() => {
      newOptions[0].children = asyncOptions2
      setOptions(newOptions)
    }, 500)
  }
}
const onFinish = ({ value, selectedOptions }: CascaderEventParams) => {
  const result = selectedOptions
    .map((option) => option.text || option.name)
    .join('/')

  setShow(false)
  setValue(value)
  setResult(result)
}
```

### Custom Field Names

```html
<Cascader
  value={value}
  title='Select Area'
  options={options}
  fieldNames={{
    text: 'name',
    value: 'code',
    children: 'items'
  }}
  close={useCallback(() => setShow(false), [])}
  finish={onFinish}
/>
```

```js
const [value, setValue] = useState('')
const [show, setShow] = useState(false)
const [result, setResult] = useState('')
const options = [
  {
    name: 'Zhejiang',
    code: '330000',
    items: [{ name: 'Hangzhou', code: '330100' }],
  },
  {
    name: 'Jiangsu',
    code: '320000',
    items: [{ name: 'Nanjing', code: '320100' }],
  },
]
const onFinish = ({ value, selectedOptions }: CascaderEventParams) => {
  const result = selectedOptions
    .map((option) => option.text || option.name)
    .join('/')

  setShow(false)
  setValue(value)
  setResult(result)
}
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| title | Title | _string \| ReactNode \| ReactNode[]_ | - |
| value | Value of selected option | _string \| number_ | - |
| options | Options | _Option[]_ | `[]` |
| placeholder | Placeholder of unselected tab | _string_ | `Select` |
| activeColor | Active color | _string_ | `#ee0a24` |
| swipeable | Whether to enable gestures to slide left and right | _boolean_ | `false` |
| closeable | Whether to show close icon | _boolean_ | `true` |
| closeIcon | Close icon name | _string_ | `cross` |
| fieldNames | Custom the fields of options | _object_ | `{ text: 'text', value: 'value', children: 'children' }` |

### Events

| Event    | Description                            | Arguments                              |
| -------- | -------------------------------------- | -------------------------------------- |
| change   | Emitted when active option changed     | `{ value, selectedOptions, tabIndex }` |
| finish   | Emitted when all options is selected   | `{ value, selectedOptions, tabIndex }` |
| close    | Emitted when the close icon is clicked | -                                      |
| clickTab | Emitted when a tab is clicked          | _activeTab: number, title: string_     |

### SCSS Variables

| Name                              | Default Value   | Description |
| --------------------------------- | --------------- | ----------- |
| $cascader-header-height           | `48px`          | -           |
| $cascader-header-padding          | `0 $padding-md` | -           |
| $cascader-title-font-size         | `$font-size-lg` | -           |
| $cascader-title-line-height       | `20px`          | -           |
| $cascader-close-icon-size         | `22px`          | -           |
| $cascader-close-icon-color        | `$gary-5`       | -           |
| $cascader-close-icon-active-color | `$gary-6`       | -           |
| $cascader-selected-icon-size      | `18px`          | -           |
| $cascader-tabs-height             | `48px`          | -           |
| $cascader-active-color            | `$danger-color` | -           |
| $cascader-options-height          | `384px`         | -           |
| $cascader-tab-color               | `$text-color`   | -           |
| $cascader-unselected-tab-color    | `$gary-6`       | -           |
