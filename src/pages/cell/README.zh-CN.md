# Cell 单元格

### 引入

```js
import { Cell, CellGroup } from 'rvant';
```

## 代码演示

### 基础用法

`Cell` 可以单独使用，也可以与 `CellGroup` 搭配使用，`CellGroup` 可以为 `Cell` 提供上下外边框。

```html
<CellGroup>
  <Cell title="单元格" value="内容" />
  <Cell title="单元格" value="内容" label="描述信息" />
</CellGroup>
```

### 单元格大小

通过 `size` 属性可以控制单元格的大小。

```html
<Cell title="单元格" value="内容" size="large" />
<Cell title="单元格" value="内容" size="large" label="描述信息" />
```

### 展示图标

通过 `icon` 属性在标题左侧展示图标。

```html
<Cell title="单元格" icon="location-o" />
```

### 只设置 value

只设置 `value` 时，内容会靠左对齐。

```html
<Cell value="内容" />
```

### 展示箭头

设置 `isLink` 属性后会在单元格右侧显示箭头，并且可以通过 `arrow-direction` 属性控制箭头方向。

```html
<Cell title="单元格" isLink />
<Cell title="单元格" isLink value="内容" />
<Cell title="单元格" isLink arrowDirection="down" value="内容" />
```

### 页面导航

可以通过 `url` 属性进行 URL 跳转，或通过 `to` 属性进行路由跳转。

```html
<Cell title='URL 跳转' isLink url='https://www.baidu.com' />
<Cell title='URL 跳转' isLink url='https://www.baidu.com' replace />
```

### 分组标题

通过 `CellGroup` 的 `title` 属性可以指定分组标题。

```html
<CellGroup title="分组1">
  <Cell title="单元格" value="内容" />
</CellGroup>
<CellGroup title="分组2">
  <Cell title="单元格" value="内容" />
</CellGroup>
```

### 使用插槽

如以上用法不能满足你的需求，可以使用插槽来自定义内容。

```html
<Cell
    title={[
    <span className='custom-title' key='1'>
        单元格
    </span>
    ]}
/>
<Cell
    title='单元格'
    icon='shop-o'
    value={<Icon name='search' className='search-icon' />}
/>

<style>
  .custom-title {
    margin-right: 4px;
    vertical-align: middle;
  }

  .search-icon {
    font-size: 16px;
    line-height: inherit;
  }
</style>
```

### 垂直居中

通过 `center` 属性可以让 `Cell` 的左右内容都垂直居中。

```html
<Cell center title="单元格" value="内容" label="描述信息" />
```

## API

### CellGroup Props

| 参数   | 说明           | 类型      | 默认值 |
| ------ | -------------- | --------- | ------ |
| title  | 分组标题       | _string \| ReactNode \| ReactNode[]_  | `-`    |
| border | 是否显示外边框 | _boolean_ | `true` |

### Cell Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 左侧标题 | _number \| string \| ReactNode \| ReactNode[]_ | - |
| value | 右侧内容 | _number \| string \| ReactNode \| ReactNode[]_ | - |
| label | 标题下方的描述信息 | _string \| ReactNode \| ReactNode[]_ | - |
| size | 单元格大小，可选值为 `large` | _string_ | - |
| icon | 左侧图标名称或图片链接 | _string \| ReactNode \| ReactNode[]_ | - |
| rightIcon | 右侧侧图标名称或图片链接 | _string \| ReactNode \| ReactNode[]_ | - |
| iconPrefix | 图标类名前缀，同 Icon 组件的 [class-prefix 属性](#/zh-CN/icon#props) | _string_ | `van-icon` |
| url | 点击后跳转的链接地址 | _string_ | - |
| border | 是否显示内边框 | _boolean_ | `true` |
| replace | 是否在跳转时替换当前页面历史 | _boolean_ | `false` |
| clickable | 是否开启点击反馈 | _boolean_ | `false` |
| isLink | 是否展示右侧箭头并开启点击反馈 | _boolean_ | `false` |
| required | 是否显示表单必填星号 | _boolean_ | `false` |
| center | 是否使内容垂直居中 | _boolean_ | `false` |
| arrow-direction | 箭头方向，可选值为 `left` `right` `up` `down` | _string_ | `right` |
| titleStyle | 左侧标题额外样式 | _any_ | - |
| titlClass | 左侧标题额外类名 | _any_ | - |
| valueClass | 右侧内容额外类名 | _any_ | - |
| labelClass | 描述信息额外类名 | _any_ | - |

### Cell Events

| 事件名 | 说明             | 回调参数       |
| ------ | ---------------- | -------------- |
| click  | 点击单元格时触发 | _event: Event_ |
