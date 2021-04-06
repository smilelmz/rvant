# Empty 空状态

### 介绍

空状态时的占位提示。

### 引入

```js
import { Empty } from 'rvant';
```

## 代码演示

### 基础用法

```html
<Empty description="描述文字" />
```

### 图片类型

Empty 组件内置了多种占位图片类型，可以在不同业务场景下使用。

```html
<!-- 通用错误 -->
<Empty image="error" description="描述文字" />
<!-- 网络错误 -->
<Empty image="network" description="描述文字" />
<!-- 搜索提示 -->
<Empty image="search" description="描述文字" />
```

### 自定义图片

需要自定义图片时，可以在 image 属性中传入任意图片 URL。

```html
<Empty
  className="custom-image"
  image="https://img.yzcdn.cn/vant/custom-empty-image.png"
  description="描述文字"
/>

<style>
  .custom-image .Empty__image {
    width: 90px;
    height: 90px;
  }
</style>
```

### 底部内容

通过默认插槽可以在 Empty 组件的下方插入内容。

```html
<Empty description="描述文字">
  <Button round type="danger" class="bottom-button">按钮</Button>
</Empty>

<style>
  .bottom-button {
    width: 160px;
    height: 40px;
  }
</style>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| image | 图片类型，可选值为 `error` `network` `search`，支持传入图片 URL | _string \| React.ReactNode_ | `default` |
| imageSize | 图片大小，默认单位为 `px` | _number \| string_ | - |
| description | 图片下方的描述文字 | _string \| React.ReactNode_ | - |

### Scss样式变量

| 名称                           | 默认值            | 描述 |
| ------------------------------ | ----------------- | ---- |
| $empty-padding                 | `$padding-xl 0`   | -    |
| $empty-image-size              | `160px`           | -    |
| $empty-description-margin-top  | `$padding-md`     | -    |
| $empty-description-padding     | `0 60px`          | -    |
| $empty-description-color       | `$gray-6`         | -    |
| $empty-description-font-size   | `$font-size-md`   | -    |
| $empty-description-line-height | `$line-height-md` | -    |
| $empty-bottom-margin-top       | `24px`            | -    |
