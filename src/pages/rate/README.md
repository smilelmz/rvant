# Rate

### Install

```js
import { Rate } from 'rvant';
```

## Usage

### Basic Usage

```html
<Rate value={rateValue} change={(v: number) => setRateValue(v)} />
```

```js
const [rateValue, setRateValue] = useState(5)
```

### Custom Icon

```html
 <Rate
  value={rateIcon}
  icon='like'
  void-icon='like-o'
  change={(v: number) => setRateIcon(v)}
/>
```

### Custom Style

```html
<Rate
  value={rateStyle}
  size='25'
  color='#ffd21e'
  void-icon='star'
  void-color='#eee'
  change={(v: number) => setRateStyle(v)}
/>
```

### Half Star

```html
<Rate value={rateHalf} allowHalf change={(v: number) => setRateHalf(v)} />
```

```js
const [rateHalf, setRateHalf] = useState(2.5)
```

### Custom Count

```html
<Rate value={rateCount} count={6} change={(v: number) => setRateCount(v)} />
```

### Disabled

```html
<Rate value={3} disabled />
```

### Readonly

```html
<Rate value={3} readonly />
```

## API

### Props

| Attribute     | Description                                   | Type               | Default    |
| ------------- | --------------------------------------------- | ------------------ | ---------- |
| value         | Current rate                                  | _number_           | -          |
| count         | Count                                         | _number \| string_ | `5`        |
| size          | Icon size                                     | _number \| string_ | `20px`     |
| gutter        | Icon gutter                                   | _number \| string_ | `4px`      |
| color         | Selected color                                | _string_           | `#ee0a24`  |
| voidColor     | Void color                                    | _string_           | `#c8c9cc`  |
| disabledColor | Disabled color                                | _string_           | `#c8c9cc`  |
| icon          | Selected icon                                 | _string_           | `star`     |
| voidIcon      | Void icon                                     | _string_           | `star-o`   |
| iconPrefix    | Icon className prefix                         | _string_           | `van-icon` |
| allowHalf     | Whether to allow half star                    | _boolean_          | `false`    |
| readonly      | Whether to be readonly                        | _boolean_          | `false`    |
| disabled      | Whether to disable rate                       | _boolean_          | `false`    |
| touchable     | Whether to allow select rate by touch gesture | _boolean_          | `true`     |

### Events

| Event  | Description               | Parameters   |
| ------ | ------------------------- | ------------ |
| change | Emitted when rate changed | current rate |

### Scss Variables

| Name                      | Default Value   | Description |
| ------------------------- | --------------- | ----------- |
| $rate-icon-size           | `20px`          | -           |
| $rate-icon-gutter         | `$padding-base` | -           |
| $rate-icon-void-color     | `$gray-5`       | -           |
| $rate-icon-full-color     | `$red`          | -           |
| $rate-icon-disabled-color | `$gray-5`       | -           |
