# Swipe 轮播

### 介绍

用于循环播放一组图片或内容。

### 引入

```js
import { Swipe, SwipeItem } from 'rvant'
```

## 代码演示

### 基础用法

每个 SwipeItem 代表一张轮播卡片，可以通过 `autoplay` 属性设置自动轮播的间隔。

```html
<Swipe autoplay={3000} indicatorColor='white'>
  <SwipeItem>1</SwipeItem>
  <SwipeItem>2</SwipeItem>
  <SwipeItem>3</SwipeItem>
  <SwipeItem>4</SwipeItem>
</Swipe>
<div className='btn-group'>
  <Button type='primary' click={() => swipeRef.current.prev()}>上一页</Button>
  <Button type='success' click={() => swipeRef.current.next()}>下一页</Button>
  <Button type='danger' click={() => swipeRef.current.swipeTo(0)}>第一页</Button>
</div>
```

```js
const swipeRef = useRef<SwipeHandler>()
```

### 懒加载

当 Swipe 中含有图片时，可以通过 `lazyRender` 属性来开启懒加载模式。在懒加载模式下，只会渲染当前页和下一页。

```html
<Swipe autoplay={3000} lazyRender>
  {images.map((item, index) => {
    return (
      <SwipeItem key={index}>
        <img src={item} />
      </SwipeItem>
    )
  })}
</Swipe>
```

```js
const images = [
  'https://img.yzcdn.cn/vant/apple-1.jpg',
  'https://img.yzcdn.cn/vant/apple-2.jpg',
  'https://img.yzcdn.cn/vant/apple-3.jpg',
  'https://img.yzcdn.cn/vant/apple-4.jpg'
]
```

### 监听 change 事件

在每一页轮播结束后，会触发 `change` 事件。

```html
<Swipe indicatorColor='white' change={onChange}>
  <SwipeItem>1</SwipeItem>
  <SwipeItem>2</SwipeItem>
  <SwipeItem>3</SwipeItem>
  <SwipeItem>4</SwipeItem>
</Swipe>
```

```js
const onChange = (index: number) => {
  Toast.show({
    message: `当前 Swipe 索引：${index}`,
    mask: false
  })
}
```

### 纵向滚动

设置 `vertical` 属性后滑块会纵向排列，此时需要指定滑块容器的高度。

```html
<Swipe
  autoplay={3000}
  indicatorColor='white'
  vertical
  style={{ height: 200 }}
  className='demo-swipe--vertical'
>
  <SwipeItem>1</SwipeItem>
  <SwipeItem>2</SwipeItem>
  <SwipeItem>3</SwipeItem>
  <SwipeItem>4</SwipeItem>
</Swipe>
```

### 自定义滑块大小

滑块默认宽度为 `100%`，可以通过 `width` 属性设置单个滑块的宽度。纵向滚动模式下，可以通过 `height` 属性设置单个滑块的高度。

```html
<Swipe width={300} loop={false} indicatorColor='white'>
  <SwipeItem>1</SwipeItem>
  <SwipeItem>2</SwipeItem>
  <SwipeItem>3</SwipeItem>
  <SwipeItem>4</SwipeItem>
</Swipe>
```

> 目前不支持在循环滚动模式下自定义滑块大小，因此需要将 loop 设置为 false。

### 自定义指示器

通过 `indicator` 插槽可以自定义指示器的样式。

```html
<Swipe
  renderIndicator={(opt: { active: number }) => {
    return <div className='custom-indicator'>{opt.active + 1}/4</div>
  }}
>
  <SwipeItem>1</SwipeItem>
  <SwipeItem>2</SwipeItem>
  <SwipeItem>3</SwipeItem>
  <SwipeItem>4</SwipeItem>
</Swipe>

<style>
  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
  }
</style>
```

## API

### Swipe Props

| 参数            | 说明                     | 类型                                           | 默认值    |
| --------------- | ------------------------ | ---------------------------------------------- | --------- |
| autoplay        | 自动轮播间隔，单位为 ms  | _number \| string_                             | -       |
| duration        | 动画时长，单位为 ms      | _number \| string_                             | `500`     |
| initialSwipe    | 初始位置索引值           | _number \| string_                             | `0`       |
| width           | 滑块宽度，单位为 `px`    | _number \| string_                             | `auto`    |
| height          | 滑块高度，单位为 `px`    | _number \| string_                             | `auto`    |
| loop            | 是否开启循环播放         | _boolean_                                      | `true`    |
| showIndicators  | 是否显示指示器           | _boolean_                                      | `true`    |
| vertical        | 是否为纵向滚动           | _boolean_                                      | `false`   |
| touchable       | 是否可以通过手势滑动     | _boolean_                                      | `true`    |
| stopPropagation | 是否阻止滑动事件冒泡     | _boolean_                                      | `true`    |
| lazyRender      | 是否延迟渲染未展示的轮播 | _boolean_                                      | `false`   |
| indicatorColor  | 指示器颜色               | _string_                                       | `#1989fa` |
| renderIndicator | 自定义指示器             | _(opt: { active: number }) => React.ReactNode_ | - |

### Swipe Events

| 事件名 | 说明                 | 回调参数            |
| ------ | -------------------- | ------------------- |
| change | 每一页轮播结束后触发 | index, 当前页的索引 |

### SwipeItem Events

| 事件名 | 说明       | 回调参数            |
| ------ | ---------- | ------------------- |
| click  | 点击时触发 | _event: MouseEvent_ |

### Swipe 方法

通过 ref 可以获取到 Swipe 实例并调用实例方法。

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| prev | 切换到上一轮播 | - | - |
| next | 切换到下一轮播 | - | - |
| swipeTo | 切换到指定位置 | _index: number, options: SwipeToOptions_ | - |
| resize | 外层元素大小或组件显示状态变化时，可以调用此方法来触发重绘 | - | - |

### SwipeToOptions 格式

| 名称      | 说明         | 类型      |
| --------- | ------------ | --------- |
| immediate | 是否跳过动画 | _boolean_ |

### Scss样式变量

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| $swipe-indicator-size | _6px_ | - |
| $swipe-indicator-margin | _12px_ | - |
| $swipe-indicator-active-opacity | _1_ | - |
| $swipe-indicator-inactive-opacity | _0.3_ | - |
| $swipe-indicator-active-background-color | _#1989fa_ | - |
| $swipe-indicator-inactive-background-color | _#ebedf0_ | - |
