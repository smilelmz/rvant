# Badge 徽标

### 介绍

在右上角展示徽标数字或小红点。

### 引入

```js
import { Badge } from 'rvant'
```

## 代码演示

### 基础用法

设置 `content` 属性后，Badge 会在子元素的右上角显示对应的徽标，也可以通过 `dot` 来显示小红点。

```html
<Badge content='5'>
  <div className='child' />
</Badge>
<Badge content='10'>
  <div className='child' />
</Badge>
<Badge content='Hot'>
  <div className='child' />
</Badge>
<Badge dot>
  <div className='child' />
</Badge>

<style>
  .child {
    width: 40px;
    height: 40px;
    background: #f2f3f5;
    border-radius: 4px;
  }
</style>
```

### 最大值

设置 `max` 属性后，当 `content` 的数值超过最大值时，会自动显示为 `{max}+`。

```html
<Badge content='20' max='9'>
  <div className='child' />
</Badge>
<Badge content='50' max='20'>
  <div className='child' />
</Badge>
<Badge content='200' max='99'>
  <div className='child' />
</Badge>
```

### 自定义颜色

通过 `color` 属性来设置徽标的颜色。

```html
<Badge content='5' color='#1989fa'>
  <div className='child' />
</Badge>
<Badge content='10' color='#1989fa'>
  <div className='child' />
</Badge>
<Badge dot color='#1989fa'>
  <div className='child' />
</Badge>
```

### 自定义徽标内容

通过 `content` 插槽可以自定义徽标的内容，比如插入一个图标。

```html
<Badge content={<Icon name="success" className="badge-icon" />}>
  <div className='child' />
</Badge>
<Badge content={<Icon name="cross" className="badge-icon" />}>
  <div className='child' />
</Badge>
<Badge content={<Icon name="down" className="badge-icon" />}>
  <div className='child' />
</Badge>
```

```css
.badge-icon {
  display: block;
  font-size: 10px;
  line-height: 16px;
}
```

### 独立展示

当 Badge 没有子元素时，会作为一个独立的元素进行展示。

```html
<Badge content='20' style={{ marginLeft: 16 }} />
<Badge content='200' max='99' style={{ marginLeft: 16 }} />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| dot | 是否展示为小红点 | _boolean_ | `false` 
| max | 最大值，超过最大值会显示 `{max}+`，仅当 content 为数字时有效 | _number \| string_ | - ||
| color | 徽标背景颜色 | _string_ | `#ee0a24` |
| offset `v3.0.5` | 设置徽标的偏移量，数组的两项分别对应水平和垂直方向的偏移量 | _[number, number]_ | - |
| content | 徽标内容 | _number \| string \| React.ReactNode \| React.ReactNode[]_ | - |


### Scss Variables

| Name | Default Value | Description |
| --- | --- | --- |
| $badge-size | `16px` | - |
| $badge-color | `$white` | - |
| $badge-padding | `0 3px` | - |
| $badge-font-size | `$font-size-sm` | - |
| $badge-font-weight | `$font-weight-bold` | - |
| $badge-border-width | `$border-width-base` | - |
| $badge-background-color | `$red` | - |
| $badge-dot-color | `$red` | - |
| $badge-dot-size | `8px` | - |
| $badge-font-family | `-apple-system-font, Helvetica Neue, Arial, sans-serif` | - |
