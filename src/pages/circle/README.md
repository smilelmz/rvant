# Circle

### Install

```js
import { Circle } from 'rvant';
```

## Usage

### Basic Usage

```html
<Circle
  currentRate={currentRate}
  rate={rate}
  speed={100}
  text={`${currentRate.toFixed(0)}%`}
  change={r => setCurrentDate(r)}
/>
```

```js
const [rate, setRate] = useState(70)
const [currentRate, setCurrentDate] = useState(70)
```

### Custom Width

```html
<Circle
  currentRate={currentRate}
  rate={rate}
  speed={100}
  strokeWidth={60}
  text={`Custom Width`}
  change={r => setCurrentDate(r)}
/>
```

### Custom Color

```html
<Circle
  currentRate={currentRate}
  color="#ee0a24"
  layerColor="#ebedf0"
  rate={rate}
  speed={100}
  text={`Custom Color`}
  change={r => setCurrentDate(r)}
/>
```

### Gradient

```html
<Circle
  currentRate={currentRate}
  rate={rate}
  speed={100}
  color={gradientColor}
  text={`${currentRate.toFixed(0)}%`}
  change={r => setCurrentDate(r)}
/>
```

```js
const gradientColor = {
  '0%': '#3fecff',
  '100%': '#6149f6'
}
const [rate, setRate] = useState(70)
const [currentRate, setCurrentDate] = useState(70)
```

### Counter Clockwise

```html
<Circle
  currentRate={currentRate}
  color="#07c160"
  rate={rate}
  speed={100}
  clockwise={false}
  style={{marginTop: 15}}
  text={`Counter Clockwise`}
  change={r => setCurrentDate(r)}
/>
```

### Custom Size

```html
<Circle
  currentRate={currentRate}
  color="#7232dd"
  rate={rate}
  speed={100}
  size="120px"
  clockwise={false}
  text={`Custom Size`}
  style={{marginTop: 15}}
  change={r => setCurrentDate(r)}
/>
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| currentRate | Current rate | _number_ | - |
| rate | Target rate | _number \| string_ | `100` |
| size | Circle size | _number \| string_ | `100px` |
| color | Progress color, passing object to render gradient | _string \| object_ | `#1989fa` |
| layerColor | Layer color | _string_ | `white` |
| fill | Fill color | _string_ | `none` |
| speed | Animate speed（rate/s） | _number \| string_ | `0` |
| text | Text | _string_ | - |
| strokeWidth | Stroke width | _number \| string_ | `40` |
| strokeLinecap | Stroke linecap，can be set to `sqaure` `butt` | _string_ | `round` |
| clockwise | Whether to be clockwise | _boolean_ | `true` |

### Events

| Event  | Description        | Arguments      |
| ------ | ------------------ | -------------- |
| change | rate change listen | _rate: Number_ |

### Scss Variables

| Name                     | Default Value       | Description |
| ------------------------ | ------------------- | ----------- |
| $circle-size             | `100px`             | -           |
| $circle-color            | `$blue`             | -           |
| $circle-layer-color      | `$white`            | -           |
| $circle-text-color       | `$text-color`       | -           |
| $circle-text-font-weight | `$font-weight-bold` | -           |
| $circle-text-font-size   | `$font-size-md`     | -           |
| $circle-text-line-height | `$line-height-md`   | -           |
