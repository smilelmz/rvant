# Circle 环形进度条

### 介绍

圆环形的进度条组件，支持进度渐变动画。

### 引入

```js
import { Circle } from 'rvant';
```

## 代码演示

### 基础用法

`rate` 属性表示进度条的目标进度，`currentRate` 表示动画过程中的实时进度。当 `rate` 发生变化时，`currentRate` 会以 `speed` 的速度变化，直至达到 `rate` 设定的值。

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

### 宽度定制

通过 `strokeWidth` 属性来控制进度条宽度。

```html
<Circle
  currentRate={currentRate}
  rate={rate}
  speed={100}
  strokeWidth={60}
  text={`宽度定制`}
  change={r => setCurrentDate(r)}
/>
```

### 颜色定制

通过 `color` 属性来控制进度条颜色，`layerColor` 属性来控制轨道颜色。

```html
<Circle
  currentRate={currentRate}
  color="#ee0a24"
  layerColor="#ebedf0"
  rate={rate}
  speed={100}
  text={`颜色定制`}
  change={r => setCurrentDate(r)}
/>
```

### 渐变色

`color` 属性支持传入对象格式来定义渐变色。

```html
<Circle
  currentRate={currentRate}
  rate={rate}
  speed={100}
  color={gradientColor}
  text={`${currentRate1.toFixed(0)}%`}
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

### 逆时针方向

将 `clockwise` 设置为 `false`，进度会从逆时针方向开始。

```html
<Circle
  currentRate={currentRate}
  color="#07c160"
  rate={rate}
  speed={100}
  clockwise={false}
  style={{marginTop: 15}}
  text={`逆时针`}
  change={r => setCurrentDate(r)}
/>
```

### 大小定制

通过 `size` 属性设置圆环直径。

```html
<Circle
  currentRate={currentRate}
  color="#7232dd"
  rate={rate}
  speed={100}
  size="120px"
  clockwise={false}
  text={`大小定制`}
  style={{marginTop: 15}}
  change={r => setCurrentDate(r)}
/>
```

## API

### Props

| 参数          | 说明                                       | 类型               | 默认值    |
| ------------- | ------------------------------------------ | ------------------ | --------- |
| currentRate   | 当前进度                                   | _number_           | -         |
| rate          | 目标进度                                   | _number \| string_ | `100`     |
| size          | 圆环直径，默认单位为 `px`                  | _number \| string_ | `100px`   |
| color         | 进度条颜色，传入对象格式可以定义渐变色     | _string \| object_ | `#1989fa` |
| layerColor    | 轨道颜色                                   | _string_           | `white`   |
| fill          | 填充颜色                                   | _string_           | `none`    |
| speed         | 动画速度（单位为 rate/s）                  | _number \| string_ | `0`       |
| text          | 文字                                       | _string_           | -         |
| strokeWidth   | 进度条宽度                                 | _number \| string_ | `40`      |
| strokeLinecap | 进度条端点的形状，可选值为 `sqaure` `butt` | _string_           | `round`   |
| clockwise     | 是否顺时针增加                             | _boolean_          | `true`    |

### Events

| 事件名 | 说明         | 回调参数       |
| ------ | ------------ | -------------- |
| change | rate变化监听 | _rate: Number_ |

### Scss变量

| 名称                     | 默认值              | 描述 |
| ------------------------ | ------------------- | ---- |
| $circle-size             | `100px`             | -    |
| $circle-color            | `$blue`             | -    |
| $circle-layer-color      | `$white`            | -    |
| $circle-text-color       | `$text-color`       | -    |
| $circle-text-font-weight | `$font-weight-bold` | -    |
| $circle-text-font-size   | `$font-size-md`     | -    |
| $circle-text-line-height | `$line-height-md`   | -    |
