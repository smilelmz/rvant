# Swipe

### Intro

Used to loop a group of pictures or content.

### Install

```js
import { Swipe, SwipeItem } from 'rvant'
```

## Usage

### Basic Usage

Use `autoplay` prop to set autoplay interval.

```html
<Swipe autoplay={3000} indicatorColor='white'>
  <SwipeItem>1</SwipeItem>
  <SwipeItem>2</SwipeItem>
  <SwipeItem>3</SwipeItem>
  <SwipeItem>4</SwipeItem>
</Swipe>
<div className='btn-group'>
  <Button type='primary' click={() => swipeRef.current.prev()}>prev</Button>
  <Button type='success' click={() => swipeRef.current.next()}>next</Button>
  <Button type='danger' click={() => swipeRef.current.swipeTo(0)}>first page</Button>
</div>
```

```js
const swipeRef = useRef<SwipeHandler>()
```

### Lazy Render

Use `lazyRender` prop to enable lazy rendering.

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

### Change Event

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
    message: `Current Swipe Index：${index}`,
    mask: false
  })
}
```

### Vertical Scrolling

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

### Set SwipeItem Size

```html
<Swipe width={300} loop={false} indicatorColor='white'>
  <SwipeItem>1</SwipeItem>
  <SwipeItem>2</SwipeItem>
  <SwipeItem>3</SwipeItem>
  <SwipeItem>4</SwipeItem>
</Swipe>
```

> It's not supported to set SwipeItem size in the loop mode.

### Custom Indicator

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

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| autoplay | Autoplay interval (ms) | _number \| string_ | - |
| duration | Animation duration (ms) | _number \| string_ | `500` |
| initialSwipe | Index of initial swipe, start from 0 | _number \| string_ | `0` |
| width | Set Swiper Item Width | _number \| string_ | `0` |
| height | Set Swiper Item Height | _number \| string_ | `0` |
| loop | Whether to enable loop | _boolean_ | `true` |
| showIndicators | Whether to show indicators | _boolean_ | `true` |
| vertical | Whether to be vertical Scrolling | _boolean_ | `false` |
| touchable | Whether to allow swipe by touch gesture | _boolean_ | `true` |
| stopPropagation | Whether to stop touchmove event propagation | _boolean_ | `false` |
| lazyRender | Whether to enable lazy render | _boolean_ | `false` |
| indicatorColor | Indicator color | _string_ | `#1989fa` |
| renderIndicator | Custom indicator             | _(opt: { active: number }) => React.ReactNode_ | - |

### Swipe Events

| Event  | Description                        | Arguments                     |
| ------ | ---------------------------------- | ----------------------------- |
| change | Emitted when current swipe changed | index: index of current swipe |

### SwipeItem Events

| Event | Description                       | Arguments           |
| ----- | --------------------------------- | ------------------- |
| click | Emitted when component is clicked | _event: MouseEvent_ |

### Swipe Methods

Use ref to get Swipe instance and call instance methods..

| Name | Description | Attribute | Return value |
| --- | --- | --- | --- |
| prev | Swipe to prev item | - | - |
| next | Swipe to next item | - | - |
| swipeTo | Swipe to target index | _index: number, options: SwipeToOptions_ | - |
| resize | Resize Swipe when container element resized or visibility changed | - | - |

### SwipeToOptions

| Name      | Description               | Type      |
| --------- | ------------------------- | --------- |
| immediate | Whether to skip animation | _boolean_ |

### SCSS Variables

| Name | Default Value | Description |
| --- | --- | --- |
| $swipe-indicator-size | `6px` | - |
| $swipe-indicator-margin | `12px` | - |
| $swipe-indicator-active-opacity | `1` | - |
| $swipe-indicator-inactive-opacity | `0.3` | - |
| $swipe-indicator-active-background-color | `#1989fa` | - |
| $swipe-indicator-inactive-background-color | `#ebedf0` | - |
