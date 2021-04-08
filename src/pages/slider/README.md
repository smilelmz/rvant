# Slider

### Install

```js
import { Slider } from 'rvant';
```

## Usage

### Basic Usage

```html
<Slider value={value} change={onChange} />
```

```js
import { Toast } from 'rvant';

const [value, setValue] = useState<SliderValue | undefined>(50)
const onChange = (v: React.SetStateAction<SliderValue | undefined>) => {
  setValue(v)
  Toast.info(`Current value: ${v}`)
}
```

### Dual thumb

Add `range` attribute to open dual thumb mode.

```html
<Slider value={value} range change={onChange} />
```

```js
import { Toast } from 'rvant';

const [value, setValue] = useState<SliderValue | undefined>([20, 60])
const onChange = (v: React.SetStateAction<SliderValue | undefined>) => {
  setValue(v)
  Toast.info(`Current value: ${v}`)
}
```

### Range

```html
<Slider value={value} min={-50} max={50} />
```

### Disabled

```html
<Slider value={value} disabled />
```

### Step size

```html
<Slider value={value} step={10} />
```

### Custom style

```html
<Slider value={value} barHeight="4px" activeColor="#ee0a24" />
```

### Custom button

```html
<Slider
  value={value7}
  activeColor='#ee0a24'
  button={<div className='custom-button'>{value}</div>}
  dragMove={(v) => setValue(v)}
/>

<style>
  .custom-button {
    width: 26px;
    color: #fff;
    font-size: 10px;
    line-height: 18px;
    text-align: center;
    background-color: #ee0a24;
    border-radius: 100px;
  }
</style>
```

### Vertical

```html
<div style={{ height: '150px', paddingLeft: '30px' }}>
  <Slider vertical value={value} change={(v) => setValue(v)} />
  <Slider
    vertical
    range
    value={value2}
    change={(v) => setValue2(v)}
    style={{ marginLeft: 100 }}
  />
</div>
```

## API

### Props

| Attribute         | Description                          | Type                 | Default   |
| ----------------- | ------------------------------------ | -------------------- | --------- |
| value             | Current value                        | _number \| number[]_ | `0`       |
| max               | Max value                            | _number \| string_   | `100`     |
| min               | Min value                            | _number \| string_   | `0`       |
| step              | Step size                            | _number \| string_   | `1`       |
| barHeight        | Height of bar                        | _number \| string_   | `2px`     |
| buttonSize       | Button size                          | _number \| string_   | `24px`    |
| activeColor       | Active color of bar                  | _string_             | `#1989fa` |
| inactiveColor     | Inactive color of bar                | _string_             | `#e5e5e5` |
| range             | Whether to enable dual thumb mode    | _boolean_            | `false`   |
| disabled          | Whether to disable slider            | _boolean_            | `false`   |
| readonly `v3.0.5` | Whether to be readonly               | _boolean_            | `false`   |
| vertical          | Whether to display slider vertically | _boolean_            | `false`   |

### Events

| Event     | Description                    | Arguments           |
| --------- | ------------------------------ | ------------------- |
| dragMove  | Emitted when value is changing | value: current rate |
| change    | Emitted after value changed    | value: current rate |
| dragStart | Emitted when start draging     | -                   |
| dragEnd   | Emitted when end draging       | -                   |


### Scss Variables

| Name                              | Default Value                  | Description |
| --------------------------------- | ------------------------------ | ----------- |
| $slider-active-background-color   | `$blue`                        | -           |
| $slider-inactive-background-color | `$gray-3`                      | -           |
| $slider-disabled-opacity          | `$disabled-opacity`            | -           |
| $slider-bar-height                | `2px`                          | -           |
| $slider-button-width              | `24px`                         | -           |
| $slider-button-height             | `24px`                         | -           |
| $slider-button-border-radius      | `50%`                          | -           |
| $slider-button-background-color   | `$white`                       | -           |
| $slider-button-box-shadow         | `0 1px 2px rgba(0, 0, 0, 0.5)` | -           |
