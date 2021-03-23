# Rate 评分

### 介绍

用于对事物进行评级操作。

### 引入

```js
import { Rate } from 'rvant';
```

## 代码演示

### 基础用法

```html
<Rate value={rateValue} change={(v: number) => setRateValue(v)} />
```

```js
const [rateValue, setRateValue] = useState(5)
```

### 自定义图标

```html
 <Rate
  value={rateIcon}
  icon='like'
  void-icon='like-o'
  change={(v: number) => setRateIcon(v)}
/>
```

### 自定义样式

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

### 半星

```html
<Rate value={rateHalf} allowHalf change={(v: number) => setRateHalf(v)} />
```

```js
const [rateHalf, setRateHalf] = useState(2.5)
```

### 自定义数量

```html
<Rate value={rateCount} count={6} change={(v: number) => setRateCount(v)} />
```

### 禁用状态

```html
<Rate value={3} disabled />
```

### 只读状态

```html
<Rate value={3} readonly />
```

## API

### Props

| 参数          | 说明                                                                 | 类型               | 默认值     |
| ------------- | -------------------------------------------------------------------- | ------------------ | ---------- |
| value         | 当前分值                                                             | _number_           | -          |
| count         | 图标总数                                                             | _number \| string_ | `5`        |
| size          | 图标大小，默认单位为`px`                                             | _number \| string_ | `20px`     |
| gutter        | 图标间距，默认单位为`px`                                             | _number \| string_ | `4px`      |
| color         | 选中时的颜色                                                         | _string_           | `#ee0a24`  |
| voidColor     | 未选中时的颜色                                                       | _string_           | `#c8c9cc`  |
| disabledColor | 禁用时的颜色                                                         | _string_           | `#c8c9cc`  |
| icon          | 选中时的[图标名称](#/zh-CN/icon)或图片链接                           | _string_           | `star`     |
| voidIcon      | 未选中时的[图标名称](#/zh-CN/icon)或图片链接                         | _string_           | `star-o`   |
| iconPrefix    | 图标类名前缀，同 Icon 组件的 [class-prefix 属性](#/zh-CN/icon#props) | _string_           | `van-icon` |
| allowHalf     | 是否允许半选                                                         | _boolean_          | `false`    |
| readonly      | 是否为只读状态，只读状态下无法修改评分                               | _boolean_          | `false`    |
| disabled      | 是否禁用评分                                                         | _boolean_          | `false`    |
| touchable     | 是否可以通过滑动手势选择评分                                         | _boolean_          | `true`     |

### Events

| 事件名 | 说明                     | 回调参数 |
| ------ | ------------------------ | -------- |
| change | 当前分值变化时触发的事件 | 当前分值 |

### Scss样式变量

| 名称                      | 默认值          | 描述 |
| ------------------------- | --------------- | ---- |
| $rate-icon-size           | `20px`          | -    |
| $rate-icon-gutter         | `$padding-base` | -    |
| $rate-icon-void-color     | `$gray-5`       | -    |
| $rate-icon-full-color     | `$red`          | -    |
| $rate-icon-disabled-color | `$gray-5`       | -    |
