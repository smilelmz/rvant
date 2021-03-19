# Overlay 遮罩层

### 介绍

创建一个遮罩层，用于强调特定的页面元素，并阻止用户进行其他操作。

### 引入

通过以下方式来全局注册组件
```js
import { Overlay } from 'rvant'
```

## 代码演示

### 基础用法

```html
<Button
  type='primary'
  click={() => setShow(true)}
  style={{ marginLeft: 16 }}
>
  显示遮罩层
</Button>
<Overlay show={show} click={() => setShow(false)} />
```

```js
const [show, setShow] = useState(false)
```

### 嵌入内容

通过默认插槽可以在遮罩层上嵌入任意内容。

```html
<Overlay show={show} click={() => setShow(false)}>
  <div className='wrapper'>
    <div className='block' />
  </div>
</Overlay>

<style>
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .block {
    width: 120px;
    height: 120px;
    background-color: #fff;
  }
</style>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| show | 是否展示遮罩层 | _boolean_ | `false` |
| zIndex | z-index 层级 | _number \| string_ | `1` |
| duration | 动画时长，单位秒 | _number \| string_ | `0.3` |
| className | 自定义类名 | _string_ | - |
| customStyle | 自定义样式 | _object_ | - |
| lockScroll | 是否锁定背景滚动，锁定时蒙层里的内容也将无法滚动 | _boolean_ | `true` |

### Events

| 事件名 | 说明       | 回调参数            |
| ------ | ---------- | ------------------- |
| click  | 点击时触发 | _event: MouseEvent_ |

### 样式变量

组件提供了下列 Scss 变量

| 名称                      | 默认值               | 描述 |
| ------------------------- | -------------------- | ---- |
| $overlay-z-index          | `1`                  | -    |
| $overlay-background-color | `rgba(0, 0, 0, 0.7)` | -    |
