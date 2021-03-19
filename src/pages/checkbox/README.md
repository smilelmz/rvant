# Checkbox

### Install

Register components globally in the following way

```js
import { Checkbox, CheckboxGroup } from 'rvant';
```

## Usage

### Basic Usage

```html
<van-checkbox v-model="checked">Checkbox</van-checkbox>
```

```js
const [checked, setChecked] = useState(false);
```

### Disabled

```html
<Checkbox disabled checked={false} labelText='Checkbox' />
<Checkbox disabled checked labelText='Checkbox' />
```

### Custom Shape

```html
<Checkbox
  checked={shapeChecked}
  labelText='Checkbox'
  shape='square'
  change={v => setShapeChecked(v)}
/>
```

### Custom Color

```html
<Checkbox
  checked={colorChecked}
  labelText='Checkbox'
  checkedColor='#07c160'
  change={v => setColorChecked(v)}
/>
```

### Custom Icon Size

```html
<Checkbox checked={true} iconSize="24px">Checkbox</Checkbox>
```

### Custom Icon

Use icon to custom icon.

```html
<Checkbox
  checked={iconChecked}
  labelText='Checkbox'
  icon={<img src={iconChecked ? activeIcon : inactiveIcon} />}
  change={v => setIconChecked(v)}
/>

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
<Checkbox
  checked={labelChecked}
  labelText='Checkbox'
  labelDisabled
  change={v => setLabelChecked(v)}
/>
```

### Checkbox Group

When Checkboxes are inside a CheckboxGroup, the checked checkboxes's name is an array and bound with CheckboxGroup by value.

```html
<CheckboxGroup
  value={result}
  change={(v: React.SetStateAction<string[]>) => setResult(v)}
>
  <Checkbox name='a'>Checkbox a</Checkbox>
  <Checkbox name='b'>Checkbox b</Checkbox>
</CheckboxGroup>
```

```js
const [result, setResult] = useState(['a', 'b'])
```

### Horizontal

```html
<CheckboxGroup
  value={horizontalResult}
  direction='horizontal'
  change={(v: React.SetStateAction<string[]>) => setHorizontalResult(v)}
>
  <Checkbox name='a'>Checkbox a</Checkbox>
  <Checkbox name='b'>Checkbox b</Checkbox>
</CheckboxGroup>
```

```js
const [result, setResult] = useState([])
```

### Maximum amount of checked options

```html
<CheckboxGroup
  value={result2}
  max={2}
  change={(v: React.SetStateAction<string[]>) => setResult2(v)}
>
  <Checkbox name='a'>Checkbox a</Checkbox>
  <Checkbox name='b'>Checkbox b</Checkbox>
  <Checkbox name='c'>Checkbox c</Checkbox>
</CheckboxGroup>
```

### Toggle All

```html
<CheckboxGroup
  ref={groupRef}
  value={checkAllResult}
  change={(v: React.SetStateAction<string[]>) => setCheckAllResult(v)}
>
  <Checkbox name='a'>Checkbox a</Checkbox>
  <Checkbox name='b'>Checkbox b</Checkbox>
  <Checkbox name='c' disabled checked={false}>
    Checkbox c
  </Checkbox>
</CheckboxGroup>
<div className='demo-checkbox-buttons'>
  <Button
    type='primary'
    click={() =>
      groupRef.current.toggleAll({ checked: true, skipDisabled: true })
    }
  >
    Check All
  </Button>
  <Button type='danger' click={() => groupRef.current.toggleAll()}>
    Toggle All
  </Button>
</div>
```

## API

### Checkbox Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| checked | Check status | _boolean_ | `false` |
| name | Checkbox name | _any_ | - |
| shape | Can be set to `square` | _string_ | `round` |
| icon          | Icon                      | React.ReactNode    | -         |
| icon-size     | Icon size | _number \| string_ | `20px`    |
| checkedColor | Checked color | _string_ | `#1989fa` | - |
| labelText     | checkbox label text                | _string_           | -         |
| disabled | Disable checkbox | _boolean_ | `false` |
| labelDisabled | Whether to disable label click | _boolean_ | `false` |
| labelPosition | Can be set to `left` | _string_ | `right` |
| bindGroup | Whether to bind with CheckboxGroup | _boolean_ | `true` |

### CheckboxGroup Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| value | Names of all checked checkboxes | _any[]_ | - |
| disabled | Whether to disable all checkboxes | _boolean_ | `false` |
| max | Maximum amount of checked options | _number \| string_ | `0`(Unlimited) |
| direction | Direction, can be set to `horizontal` | _string_ | `vertical` |
| iconSize | Icon size of all checkboxes | _number \| string_ | `20px` |
| checkedColor | Checked color of all checkboxes | _string_ | `#1989fa` | - |

### Checkbox Events

| Event  | Description                          | Parameters          |
| ------ | ------------------------------------ | ------------------- |
| change | Emitted when value changed           | _checked: boolean_  |
| click  | Emitted when the checkbox is clicked | _event: MouseEvent_ |

### CheckboxGroup Events

| Event  | Description                | Parameters     |
| ------ | -------------------------- | -------------- |
| change | Emitted when value changed | _names: any[]_ |

### CheckboxGroup Methods

Use ref get CheckboxGroup instance and call instance methods.

| Name | Description | Attribute | Return value |
| --- | --- | --- | --- |
| toggleAll | Toggle check status of all checkboxes | _options?: boolean \| object_ | - |

### Checkbox Methods

Use ref to get Checkbox instance and call instance methods.

| Name   | Description         | Attribute           | Return value |
| ------ | ------------------- | ------------------- | ------------ |
| toggle | Toggle check status | _checked?: boolean_ | -            |

### Scss Variables

How to use: [Custom Theme](#/en-US/theme).

| Name | Default Value | Description |
| --- | --- | --- |
| $checkbox-size | `20px` | - |
| $checkbox-border-color | `$gray-5` | - |
| $checkbox-transition-duration | `$animation-duration-fast` | - |
| $checkbox-label-margin | `$padding-xs` | - |
| $checkbox-label-color | `$text-color` | - |
| $checkbox-checked-icon-color | `$blue` | - |
| $checkbox-disabled-icon-color | `$gray-5` | - |
| $checkbox-disabled-label-color | `$gray-5` | - |
| $checkbox-disabled-background-color | `$border-color` | - |
