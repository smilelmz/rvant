# Tab 标签页

### 介绍

选项卡组件，用于在不同的内容区域之间进行切换。

### 引入

```js
import { Tab, Tabs } from 'rvant'
```

## 代码演示

### 基础用法

通过 `active` 绑定当前激活标签对应的索引值，默认情况下启用第一个标签。

```html
<Tabs
  active={active}
  change={useCallback((v) => setActive(v as number), [])}
>
  {tabs.map((tab) => {
    return (
      <Tab title={`标签 ${tab}`} key={tab}>
        内容 {tab}
      </Tab>
    )
  })}
</Tabs>
```

```js
const [active, setActive] = useState(2)
const tabs = [1, 2, 3, 4]
```

### 通过名称匹配

在标签指定 `name` 属性的情况下，`active` 的值为当前标签的 `name`（此时无法通过索引值来匹配标签）。

```html
<Tabs
  active={active}
  change={useCallback((v) => setActive(v as string), [])}
>
  <Tab title={`标签 1`} name='a'>内容 1</Tab>
  <Tab title={`标签 2`} name='b'>内容 2</Tab>
  <Tab title={`标签 3`} name='c'>内容 3</Tab>
</Tabs>
```

```js
const [active, setActive] = useState('b')
```

### 标签栏滚动

标签数量超过 5 个时，标签栏可以在水平方向上滚动，切换时会自动将当前标签居中。

```html
<Tabs>
  {tabs.map((tab, index) => (
    <Tab title={`标签 ${tab}`} key={index}>
      内容 {tab}
    </Tab>
  ))}
</Tabs>
```

```js
const tabs = [1, 2, 3, 4, 5, 6, 7, 8]
```

### 禁用标签

设置 `disabledFunc` 属性即可禁用标签，如果需要监听禁用标签的点击事件，可以在 `Tabs` 上监听`disabled` 事件。

```html
<Tabs disabledFunc={onClickDisabled}>
  {tabs.map((tab, index) => (
    <Tab title={`标签 ${tab}`} key={index} disabled={index === 1}>
      内容 {tab}
    </Tab>
  ))}
</Tabs>
```

```js
const tabs = [1, 2, 3]
const onClickDisabled = (index: number, title: string) => {
  console.log(index, title)
  Toast.info(`${title} 已禁用`)
}
```

### 样式风格

`Tab` 支持两种样式风格：`line` 和`card`，默认为 `line` 样式，可以通过 `type` 属性切换样式风格。

```html
<Tabs type='card'>
  {tabs.map((tab, index) => (
    <Tab title={`标签 ${tab}`} key={index}>
      内容 {tab}
    </Tab>
  ))}
</Tabs>
```

### 点击事件

可以在 `Tabs` 上绑定 `click` 事件，事件传参为标签对应的标识符和标题。

```html
<Tabs click={onClick}>
  {tabs.map((tab, index) => (
    <Tab title={`标签 ${tab}`} key={index}>
      内容 {tab}
    </Tab>
  ))}
</Tabs>
```

```js
const tabs = [1, 2, 3]
const onClick = (index: number, title: string) => {
  Toast.info(title)
}
```

### 粘性布局

通过 `sticky` 属性可以开启粘性布局，粘性布局下，标签页滚动到顶部时会自动吸顶。

```html
<Tabs sticky>
  {tabs.map((tab, index) => (
    <Tab title={`标签 ${tab}`} key={index}>
      内容 {tab}
    </Tab>
  ))}
</Tabs>
```

### 自定义标签

通过 `title` 插槽可以自定义标签内容。

```html
<Tabs>
  {tabs.map((tab, index) => (
    <Tab
      customTitle={<><Icon name='more-o' />标签</>}
      key={index}
    >
      内容 {tab}
    </Tab>
  ))}
</Tabs>
```

### 切换动画

通过 `animated` 属性可以开启切换标签内容时的转场动画。

```html
<Tabs animated>
  {tabs.map((tab) => {
    return (
      <Tab title={`标签 ${tab}`} key={tab}>
        内容 {tab}
      </Tab>
    )
  })}
</Tabs>
```

### 滑动切换

通过 `swipeable` 属性可以开启滑动切换标签页。

```html
<Tabs swipeable>
  {tabs.map((tab) => {
    return (
      <Tab title={`标签 ${tab}`} key={tab}>
        内容 {tab}
      </Tab>
    )
  })}
</Tabs>
```

### 滚动导航

通过 `scrollspy` 属性可以开启滚动导航模式，该模式下，内容将会平铺展示。

```html
<Tabs scrollspy sticky>
  {tabs.map((tab, index) => (
    <Tab title={`标签 ${tab}`} key={index}>
      内容 {tab}
    </Tab>
  ))}
</Tabs>
```

### 异步切换

通过 `beforeChange` 属性可以在切换标签前执行特定的逻辑。

```html
<Tabs beforeChange={beforeChange as Interceptor}>
  {tabs.map((tab) => {
    return (
      <Tab title={`标签 ${tab}`} key={tab}>
        内容 {tab}
      </Tab>
    )
  })}
</Tabs>
```

```js
const tabs = [1, 2, 3, 4]
const beforeChange = (name: number) => {
  if (name === 1) {
    return false
  }
  return new Promise((resolve) => {
    resolve(name !== 3)
  })
}
```

## API

### Tabs Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| active | 绑定当前选中标签的标识符 | _number \| string_ | `0` |
| color | 标签主题色 | _string_ | `#ee0a24` |
| border | 是否显示标签栏外边框，仅在 `type="line"` 时有效 | _boolean_ | `false` |
| sticky | 是否使用粘性定位布局 | _boolean_ | `false` |
| animated | 是否开启切换标签内容时的转场动画 | _boolean_ | `false` |
| ellipsis | 是否省略过长的标题文字 | _boolean_ | `true` |
| swipeable | 是否开启手势左右滑动切换 | _boolean_ | `false` |
| scrollspy | 是否开启滚动导航 | _boolean_ | `false` |
| background | 标签栏背景色 | _string_ | `white` |
| lazyRender | 是否开启延迟渲染（首次切换到标签时才触发内容渲染） | _boolean_ | `true` |
| lineWidth | 底部条宽度，默认单位 `px` | _number \| string_ | `40px` |
| lineHeight | 底部条高度，默认单位 `px` | _number \| string_ | `3px` |
| beforeChange | 切换标签前的回调函数，返回 `false` 可阻止切换，支持返回 Promise | _(name) => boolean \| Promise_ | - |
| titleActiveColor | 标题选中态颜色 | _string_ | - |
| titleInactiveColor | 标题默认态颜色 | _string_ | - |
| type | 样式风格类型，可选值为 `card` | _string_ | `line` |
| duration | 动画时间，单位秒 | _number \| string_ | `0.3` |
| offsetTop | 粘性定位布局下与顶部的最小距离，支持 `px` `vw` `vh` `rem` 单位，默认 `px` | _number \| string_ | `0` |
| swipeThreshold | 滚动阈值，标签数量超过阈值且总宽度超过标签栏宽度时开始横向滚动 | _number \| string_ | `5` |
| navLeft | 标题左侧内容 | _React.ReactNode \| React.ReactNode[]_ | `0` |
| navRight | 标题右侧内容 | _React.ReactNode \| React.ReactNode[]_| `5` |

### Tab Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| dot | 是否在标题右上角显示小红点 | _boolean_ | `false` |
| name | 标签名称，作为匹配的标识符 | _number \| string_ | 标签的索引值 |
| badge | 图标右上角徽标的内容 | _number \| string_ | - |
| title | 标题 | _string_ | - |
| disabled | 是否禁用标签 | _boolean_ | `false` |
| titleStyle | 自定义标题样式 | _string \| Array \| object_ | - |
| titleClass | 自定义标题类名 | _string \| Array \| object_ | - |
| customTitle | 自定义标题 | _React.ReactNode \| React.ReactNode[]_ | - |

### Tabs Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击标签时触发 | _name: string \| number, title: string_ |
| change | 当前激活的标签改变时触发 | _name: string \| number, title: string_ |
| disabledFunc | 点击被禁用的标签时触发 | _name: string \| number, title: string_ |
| rendered | 标签内容首次渲染时触发（仅在开启延迟渲染后触发） | _name: string \| number, title: string_ |
| scroll | 滚动时触发，仅在 sticky 模式下生效 | _{ scrollTop: number, isFixed: boolean }_ |

### Tabs 方法

通过 ref 可以获取到 Tabs 实例并调用实例方法。

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| resize | 外层元素大小或组件显示状态变化时，可以调用此方法来触发重绘 | - | - |
| scrollTo | 滚动到指定的标签页，在滚动导航模式下可用 | _name: string \| number_ | - |

### Scss样式变量

| 名称                            | 默认值                      | 描述 |
| ------------------------------- | --------------------------- | ---- |
| $tab-text-color                 | $gray-7                     | -    |
| $tab-active-text-color          | $text-color                 | -    |
| $tab-disabled-text-color        | $gray-5                     | -    |
| $tab-font-size                  | $font-size-md               | -    |
| $tab-line-height                | $line-height-md             | -    |
| $tabs-default-color             | $red                        | -    |
| $tabs-line-height               | 44px                        | -    |
| $tabs-card-height               | 30px                        | -    |
| $tabs-nav-background-color      | $white                      | -    |
| $tabs-bottom-bar-width          | 40px                        | -    |
| $tabs-bottom-bar-height         | 3px                         | -    |
| $tabs-bottom-bar-color          | $tabs-default-color         | -    |
