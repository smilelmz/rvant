# Progress 进度条

### 介绍

用于展示操作的当前进度。

### 引入

```js
import { Progress } from 'rvant';
```

## 代码演示

### 基础用法

进度条默认为蓝色，使用 `percentage` 属性来设置当前进度。

```html
<Progress percentage="50" />
```

### 线条粗细

通过 `strokeWidth` 可以设置进度条的粗细。

```html
<Progress percentage="50" strokeWidth="8" />
```

### 置灰

设置 `inactive` 属性后进度条将置灰。

```html
<Progress inactive percentage="50" />
```

### 样式定制

可以使用 `pivotText` 属性自定义文字，`color` 属性自定义进度条颜色。

```html
<Progress pivotText="橙色" color="#f2826a" percentage="25" />
<Progress pivotText="红色" color="#ee0a24" percentage="50" />
<Progress
  percentage="75"
  pivotText="紫色"
  pivotColor="#7232dd"
  color="linear-gradient(to right, #be99ff, #7232dd)"
/>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| percentage | 进度百分比 | _number \| string_ | `0` |
| stroke-width | 进度条粗细，默认单位为`px` | _number \| string_ | `4px` |
| color | 进度条颜色 | _string_ | `#1989fa` |
| trackColor | 轨道颜色 | _string_ | `#e5e5e5` |
| pivotText | 进度文字内容 | _string_ | 百分比 |
| pivotColor | 进度文字背景色 | _string_ | 同进度条颜色 |
| textColor | 进度文字颜色 | _string_ | `white` |
| inactive | 是否置灰 | _boolean_ | `false` |
| showPivot | 是否显示进度文字 | _boolean_ | `true` |

### 方法

通过 ref 可以获取到 Progress 实例并调用实例方法

| 方法名 | 说明                                         | 参数 | 返回值 |
| ------ | -------------------------------------------- | ---- | ------ |
| resize | 外层元素大小变化后，可以调用此方法来触发重绘 | -    | -      |

### Scss样式变量

| 名称                             | 默认值          | 描述 |
| -------------------------------- | --------------- | ---- |
| $progress-height                 | `4px`           | -    |
| $progress-color                  | `$blue`         | -    |
| $progress-background-color       | `$gray-3`       | -    |
| $progress-pivot-padding          | `0 5px`         | -    |
| $progress-pivot-text-color       | `$white`        | -    |
| $progress-pivot-font-size        | `$font-size-xs` | -    |
| $progress-pivot-line-height      | `1.6`           | -    |
| $progress-pivot-background-color | `$blue`         | -    |
