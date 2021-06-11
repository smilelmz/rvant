# SwipeCell 滑动单元格

### 介绍

可以左右滑动来展示操作按钮的单元格组件。

### 引入

```js
import { SwipeCell } from 'rvant'
```

## 代码演示

### 基础用法

`SwipeCell` 组件提供了 `left` 和 `right` 两个属性，用于定义两侧滑动区域的内容。

```html
<SwipeCell
  left={<Button square type='primary' text='选择' />}
  right={[
    <Button key='delete' square type='danger' text='删除' />,
    <Button key='collect' square type='primary' text='收藏' />
  ]}
>
  <Cell border={false} title='单元格' value='内容' />
</SwipeCell>
```

### 自定义内容

`SwipeCell` 可以嵌套任意内容，比如嵌套一个商品卡片。

```html
<SwipeCell
  right={
    <Button
      className='delete-button'
      key='delete'
      square
      type='danger'
      text='删除'
    />
  }
>
  <div style={{ width: '100%', height: 200, background: '#fff' }}>
    自定义内容
  </div>
</SwipeCell>
```

### 异步关闭

通过传入 `before-close` 回调函数，可以自定义两侧滑动内容关闭时的行为。

```html
<SwipeCell
  beforeClose={beforeClose as Interceptor}
  left={
    <Button className='delete-button' square type='primary' text='选择' />
  }
  right={
    <Button className='delete-button' square type='danger' text='删除' />
  }
>
  <Cell border={false} title='单元格' value='内容' />
</SwipeCell>
```

```js
const beforeClose = ({ position }: { position: string }) => {
  switch (position) {
    case 'left':
    case 'cell':
    case 'outside':
      return true
    case 'right':
      return new Promise((resolve) => {
        Toast.loading({
          onClose: () => {
            resolve(1)
          }
        })
      })
    default:
  }
}
```

## API

### Props

| 参数             | 说明                                                        | 类型                           | 默认值  |
| ---------------- | ----------------------------------------------------------- | ------------------------------ | ------- |
| name             | 标识符，可以在事件参数中获取到                              | _number \| string_             | `''`    |
| leftWidth       | 指定左侧滑动区域宽度，单位为 `px`                           | _number \| string_             | `auto`  |
| rightWidth      | 指定右侧滑动区域宽度，单位为 `px`                           | _number \| string_             | `auto`  |
| beforeClose     | 关闭前的回调函数，返回 `false` 可阻止关闭，支持返回 Promise | _(args) => boolean \| Promise_ | -       |
| disabled         | 是否禁用滑动                                                | _boolean_                      | `false` |
| stopPropagation | 是否阻止滑动事件冒泡                                        | _boolean_                      | `false` |
| left       | 左侧滑动区域的内容                           | _React.ReactNode \| React.ReactNode[]_             | `auto`  |
| right      | 右侧滑动区域的内容                          | _React.ReactNode \| React.ReactNode[]_             | `auto`  |

### Events

| 事件名 | 说明       | 回调参数                                                                         |
| ------ | ---------- | -------------------------------------------------------------------------------- |
| click  | 点击时触发 | _position: 'left' \| 'right' \| 'cell' \| 'outside'_                             |
| open   | 打开时触发 | _{ name: string \| number, position: 'left' \| 'right' }_                        |
| close  | 关闭时触发 | _{ name: string \| number, position: 'left' \| 'right' \| 'cell' \| 'outside' }_ |

### beforeClose 参数

beforeClose 的第一个参数为对象，对象中包含以下属性：

| 参数名   | 说明             | 类型                                       |
| -------- | ---------------- | ------------------------------------------ |
| name     | 标识符           | _string \| number_                         |
| position | 关闭时的点击位置 | _'left' \| 'right' \| 'cell' \| 'outside'_ |

### 方法

通过 ref 可以获取到 SwipeCell 实例并调用实例方法。

| 方法名 | 说明             | 参数                                     | 返回值 |
| ------ | ---------------- | ---------------------------------------- | ------ |
| open   | 打开单元格侧边栏 | side: `left \| right`                    | -      |
| close  | 收起单元格侧边栏 | position: `left \| right \| cell \| outside` | -      |

### Scss样式变量

| 名称                              | 默认值                               | 描述 |
| --------------------------------- | ------------------------------------ | ---- |
| $switch-cell-padding-top          | `$cell-vertical-padding - 1px`       | -    |
| $switch-cell-padding-bottom       | `$cell-vertical-padding - 1px`       | -    |
| $switch-cell-large-padding-top    | `$cell-large-vertical-padding - 1px` | -    |
| $switch-cell-large-padding-bottom | `$cell-large-vertical-padding - 1px` | -    |
