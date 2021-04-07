# Grid 宫格

### 介绍

宫格可以在水平方向上把页面分隔成等宽度的区块，用于展示内容或进行页面导航。

### 引入

```js
import { Grid, GridItem } from 'rvant';
```

## 代码演示

### 基础用法

通过 `icon` 属性设置格子内的图标，`text` 属性设置文字内容。

```html
<Grid>
  <GridItem icon="photo-o" text="文字" />
  <GridItem icon="photo-o" text="文字" />
  <GridItem icon="photo-o" text="文字" />
  <GridItem icon="photo-o" text="文字" />
</Grid>
```

### 自定义列数

默认一行展示四个格子，可以通过 `columnNum` 自定义列数。

```html
<Grid columnNum={3}>
  {new Array(6).fill(1).map((_, index) => (
    <GridItem key={index} text='文字' icon='photo-o' />
  ))}
</Grid>
```

### 自定义内容

通过插槽可以自定义格子展示的内容。

```html
<Grid border={false} columnNum={3}>
  <GridItem>
    <Image fit='contain' src='https://img.yzcdn.cn/vant/apple-1.jpg' />
  </GridItem>
  <GridItem>
    <Image fit='contain' src='https://img.yzcdn.cn/vant/apple-2.jpg' />
  </GridItem>
  <GridItem>
    <Image fit='contain' src='https://img.yzcdn.cn/vant/apple-3.jpg' />
  </GridItem>
</Grid>
```

### 正方形格子

设置 `square` 属性后，格子的高度会和宽度保持一致。

```html
<Grid square>
  {new Array(8).fill(1).map((_, index) => (
    <GridItem key={index} text='文字' icon='photo-o' />
  ))}
</Grid>
```

### 格子间距

通过 `gutter` 属性设置格子之间的距离。

```html
<Grid gutter={10}>
  {new Array(8).fill(1).map((_, index) => (
    <GridItem key={index} text='文字' icon='photo-o' />
  ))}
</Grid>
```

### 内容横排

将 `direction` 属性设置为 `horizontal`，可以让宫格的内容呈横向排列。

```html
<Grid direction='horizontal' columnNum={3}>
  <GridItem text='文字' icon='photo-o' />
  <GridItem text='文字' icon='photo-o' />
  <GridItem text='文字' icon='photo-o' />
</Grid>
```

### 点击事件

```html
<Grid columnNum={2}>
  <GridItem text='文字' icon='home-o' click={() => Toast.info('点击了GridItem 1')} />
  <GridItem text='文字' icon='search' click={() => Toast.info('点击了GridItem 2')} />
</Grid>
```

### 徽标提示

设置 `dot` 属性后，会在图标右上角展示一个小红点。设置 `badge` 属性后，会在图标右上角展示相应的徽标。

```html
<Grid columnNum={2}>
  <GridItem text='文字' icon='home-o' dot />
  <GridItem text='文字' icon='search' badge='99+' />
</Grid>
```

## API

### Grid Props

| 参数      | 说明                                      | 类型               | 默认值     |
| --------- | ----------------------------------------- | ------------------ | ---------- |
| columnNum | 列数                                      | _number \| string_ | `4`        |
| iconSize  | 图标大小，默认单位为`px`                  | _number \| string_ | `28px`     |
| gutter    | 格子之间的间距，默认单位为`px`            | _number \| string_ | `0`        |
| border    | 是否显示边框                              | _boolean_          | `true`     |
| center    | 是否将格子内容居中显示                    | _boolean_          | `true`     |
| square    | 是否将格子固定为正方形                    | _boolean_          | `false`    |
| clickable | 是否开启格子点击反馈                      | _boolean_          | `false`    |
| direction | 格子内容排列的方向，可选值为 `horizontal` | _string_           | `vertical` |

### GridItem Props

| 参数       | 说明                         | 类型               | 默认值     |
| ---------- | ---------------------------- | ------------------ | ---------- |
| text       | 文字                         | _string \| React.ReactNode_           | -          |
| icon       | 图标名称或图片链接           | _string \| React.ReactNode_           | -          |
| iconPrefix | 图标类名前缀，同 Icon 组件的 | _string_           | `van-icon` |
| dot        | 是否显示图标右上角小红点     | _boolean_          | `false`    |
| badge      | 图标右上角徽标的内容         | _number \| string_ | -          |

### GridItem Events

| 事件名 | 说明           | 回调参数            |
| ------ | -------------- | ------------------- |
| click  | 点击格子时触发 | _event: MouseEvent_ |

### Scss样式变量

| 名称                                | 默认值                    | 描述 |
| ----------------------------------- | ------------------------- | ---- |
| $grid-item-content-padding          | `$padding-md $padding-xs` | -    |
| $grid-item-content-background-color | `$white`                  | -    |
| $grid-item-content-active-color     | `$active-color`           | -    |
| $grid-item-icon-size                | `28px`                    | -    |
| $grid-item-text-color               | `$gray-7`                 | -    |
| $grid-item-text-font-size           | `$font-size-sm`           | -    |
