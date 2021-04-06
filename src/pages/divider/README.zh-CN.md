# Divider 分割线

### 介绍

用于将内容分隔为多个区域。

### 引入

```js
import { Divider } from 'rvant';
```

## 代码演示

### 基础用法

默认渲染一条水平分割线。

```html
<Divider />
```

### 展示文字

通过插槽在可以分割线中间插入内容。

```html
<Divider>文本</Divider>
```

### 内容位置

通过 `contentPosition` 指定内容所在位置。

```html
<Divider contentPosition='left'>文本</Divider>
<Divider contentPosition='right'>文本</Divider>
```

### 虚线

添加 `dashed` 属性使分割线渲染为虚线。

```html
<Divider dashed hairline={false}>
  文本
</Divider>
```

### 自定义样式

可以直接通过 `style` 属性设置分割线的样式。

```html
<Divider
  style={{
    borderColor: '#1989fa',
    color: '#1989fa',
    padding: '0 16px'
  }}
>
  文本
</Divider>
```

## API

### Props

| 参数             | 说明                              | 类型      | 默认值   |
| ---------------- | --------------------------------- | --------- | -------- |
| dashed           | 是否使用虚线                      | _boolean_ | `false`  |
| hairline         | 是否使用 0.5px 线                 | _boolean_ | `true`   |
| contentPosition | 内容位置，可选值为 `left` `right` | _string_  | `center` |

### Scss样式变量

| 名称                         | 默认值          | 描述 |
| ---------------------------- | --------------- | ---- |
| $divider-margin              | `$padding-md 0` | -    |
| $divider-text-color          | `$gray-6`       | -    |
| $divider-font-size           | `$font-size-md` | -    |
| $divider-line-height         | `24px`          | -    |
| $divider-border-color        | `$border-color` | -    |
| $divider-content-padding     | `$padding-md`   | -    |
| $divider-content-left-width  | `10%`           | -    |
| $divider-content-right-width | `10%`           | -    |
