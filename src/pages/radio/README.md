# Radio

### Install

```js
import { RadioGroup, Radio } from 'rvant';
```

## Usage

### Basic Usage

Use `v-model` to bind the name of checked radio.

```html
<RadioGroup
  className='demo-radio-group'
  value={baseRadio}
  change={(v: any) => setBaseRadio(v)}
>
  <Radio name='1' labelText='Radio 1' />
  <Radio name='2' labelText='Radio 2' />
</RadioGroup>
```

```js
const [baseRadio, setBaseRadio] = useState('1')
```

### Horizontal

```html
<RadioGroup
  className='demo-radio-group'
  value={dirRadio}
  direction='horizontal'
  change={(v: any) => setDirRadio(v)}
>
  <Radio name='1' labelText='Radio 1' />
  <Radio name='2' labelText='Radio 2' />
</RadioGroup>
```

### Disabled

```html
<RadioGroup
  className='demo-radio-group'
  disabled
  value={disabledAll}
  change={(v: any) => setDisabledAll(v)}
>
  <Radio name='1' labelText='Radio 1' />
  <Radio name='2' labelText='Radio 2' />
</RadioGroup>
```

### Custom Shape

```html
<RadioGroup
  className='demo-radio-group'
  value={shapeRadio}
  change={(v: any) => setShapeRadio(v)}
>
  <Radio name='1' labelText='Radio 1' shape='square' />
  <Radio name='2' labelText='Radio 2' shape='square' />
</RadioGroup>
```

### Custom Color

```html
<RadioGroup
  className='demo-radio-group'
  value={colorRadio}
  change={(v: any) => setColorRadio(v)}
>
  <Radio name='1' labelText='Radio 1' checkedColor='#07c160' />
  <Radio name='2' labelText='Radio 2' checkedColor='#07c160' />
</RadioGroup>
```

### Custom Icon Size

```html
<RadioGroup
  className='demo-radio-group'
  value={sizeRadio}
  change={(v: any) => setSizeRadio(v)}
>
  <Radio
    name='1'
    labelText='Radio 1'
    checkedColor='#07c160'
    iconSize='24px'
  />
  <Radio
    name='2'
    labelText='Radio 2'
    checkedColor='#07c160'
    iconSize='24px'
  />
</RadioGroup>
```

### Custom Icon

Use icon slot to custom icon

```html
<RadioGroup
  className='demo-radio-group'
  value={iconRadio}
  change={(v: any) => setIconRadio(v)}
>
  <Radio
    name='1'
    labelText='Radio 1'
    icon={<img src={iconRadio === '1' ? activeIcon : inactiveIcon} />}
  />
  <Radio
    name='2'
    labelText='Radio 2'
    icon={<img src={iconRadio === '2' ? activeIcon : inactiveIcon} />}
  />
</RadioGroup>

<style>
  img {
    height: 20px;
  }
</style>
```

```js
const activeIcon = 'https://img.yzcdn.cn/vant/user-active.png'
const inactiveIcon = 'https://img.yzcdn.cn/vant/user-inactive.png'
```

### Disable Label Click

```html
<RadioGroup
  className='demo-radio-group'
  value={textRadio}
  change={(v: any) => setTextRadio(v)}
>
  <Radio name='1' labelText='Radio 1' labelDisabled />
  <Radio name='2' labelText='Radio 2' labelDisabled />
</RadioGroup>
```

## API

### Radio Props

| Attribute     | Description                    | Type                        | Default   |   |
| ------------- | ------------------------------ | --------------------------- | --------- | - |
| name          | Radio name                     | _any_                       | -         |   |
| shape         | Can be set to `square`         | _string_                    | `round`   |   |
| disabled      | Whether to disable radio       | _boolean_                   | `false`   |   |
| labelText     | text                           | _string_                    | `无`      |   |
| labelDisabled | Whether to disable label click | _boolean_                   | `false`   |   |
| labelPosition | Can be set to `left`           | _string_                    | `right`   |   |
| icon          | Custom icon                    | _React.ReactNode \| string_ | `null`    |   |
| iconSize      | Icon size                      | _number \| string_          | `20px`    |   |
| checkedColor  | Checked color                  | _string_                    | `#1989fa` | - |

### RadioGroup Props

| Attribute     | Description                           | Type               | Default    |   |
| ------------- | ------------------------------------- | ------------------ | ---------- | - |
| value         | Name of checked radio                 | _any_              | -          |   |
| disabled      | Disable all radios                    | _boolean_          | `false`    |   |
| direction     | Direction, can be set to `horizontal` | _string_           | `vertical` |   |
| iconSize     | Icon size of all radios               | _number \| string_ | `20px`     |   |
| checkedColor | Checked color of all radios           | _string_           | `#1989fa`  | - |

### Radio Events

| Event | Description                   | Parameters          |
| ----- | ----------------------------- | ------------------- |
| click | Emitted when radio is clicked | _event: MouseEvent_ |

### RadioGroup Events

| Event  | Description                | Parameters     |
| ------ | -------------------------- | -------------- |
| change | Emitted when value changed | _name: string_ |

### Scss Variables

| Name                             | Default Value              | Description |
| -------------------------------- | -------------------------- | ----------- |
| $radio-size                      | `20px`                     | -           |
| $radio-border-color              | `$gray-5`                  | -           |
| $radio-transition-duration       | `$animation-duration-fast` | -           |
| $radio-label-margin              | `$padding-xs`              | -           |
| $radio-label-color               | `$text-color`              | -           |
| $radio-checked-icon-color        | `$blue`                    | -           |
| $radio-disabled-icon-color       | `$gray-5`                  | -           |
| $radio-disabled-label-color      | `$gray-5`                  | -           |
| $radio-disabled-background-color | `$border-color`            | -           |
