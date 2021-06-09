# Tabbar 标签栏

### 介绍

底部导航栏，用于在不同页面之间进行切换。

### 引入

```js
import { Tabbar, TabbarItem } from 'rvant'
```

## 代码演示

### 基础用法

`value` 默认绑定选中标签的索引值，通过修改 `value` 即可切换选中的标签。

```html
<Tabbar
  value={active}
  change={useCallback((v) => setActive(v as number), [])}
>
  <TabbarItem icon='home-o'>标签</TabbarItem>
  <TabbarItem icon='search'>标签</TabbarItem>
  <TabbarItem icon='friends-o'>标签</TabbarItem>
  <TabbarItem icon='setting-o'>标签</TabbarItem>
</Tabbar>
```

```js
const [active, setActive] = useState(0)
```

### 通过名称匹配

在标签指定 `name` 属性的情况下，`value` 的值为当前标签的 `name`。

```html
<Tabbar
  value={active}
  change={useCallback((v) => setActive(v as string), [])}
>
  <TabbarItem name='home' icon='home-o'>
    标签
  </TabbarItem>
  <TabbarItem name='search' icon='search'>
    标签
  </TabbarItem>
  <TabbarItem name='friends' icon='friends-o'>
    标签
  </TabbarItem>
  <TabbarItem name='setting' icon='setting-o'>
    标签
  </TabbarItem>
</Tabbar>
```

### 徽标提示

设置 `dot` 属性后，会在图标右上角展示一个小红点；设置 `badge` 属性后，会在图标右上角展示相应的徽标。

```html
<Tabbar
  value={active}
  change={useCallback((v) => setActive(v as number), [])}
>
  <TabbarItem icon='home-o'>标签</TabbarItem>
  <TabbarItem icon='search' dot>
    标签
  </TabbarItem>
  <TabbarItem icon='friends-o' badge='5'>
    标签
  </TabbarItem>
  <TabbarItem icon='setting-o' badge='20'>
    标签
  </TabbarItem>
</Tabbar>
```

### 自定义图标

通过 `customIcon` 插槽自定义图标。

```html
<Tabbar
  value={active}
  change={useCallback((v) => setActive(v as number), [])}
>
  <TabbarItem
    customIcon={(active) => (
      <img src={active ? icon.active : icon.inactive} />
    )}
  >
    标签
  </TabbarItem>
  <TabbarItem icon='search'>标签</TabbarItem>
  <TabbarItem icon='setting-o'>标签</TabbarItem>
</Tabbar>
```

```js
const [active, setActive] = useState(0)
const icon = {
  active: 'https://img.yzcdn.cn/vant/user-active.png',
  inactive: 'https://img.yzcdn.cn/vant/user-inactive.png'
}
```

### 自定义颜色

通过 `activeColor` 属性设置选中标签的颜色，通过 `inactiveColor` 属性设置未选中标签的颜色。

```html
<Tabbar
  value={active}
  activeColor='#ee0a24'
  inactiveColor='#000'
  change={useCallback((v) => setActive(v as number), [])}
>
  <TabbarItem icon='home-o'>标签</TabbarItem>
  <TabbarItem icon='search'>标签</TabbarItem>
  <TabbarItem icon='friends-o'>标签</TabbarItem>
  <TabbarItem icon='setting-o'>标签</TabbarItem>
</Tabbar>
```

### 监听切换事件

通过 `change` 事件来监听选中标签的变化。

```html
<Tabbar value={active} change={onChange}>
  <TabbarItem icon='home-o'>标签</TabbarItem>
  <TabbarItem icon='search'>标签</TabbarItem>
  <TabbarItem icon='friends-o'>标签</TabbarItem>
  <TabbarItem icon='setting-o'>标签</TabbarItem>
</Tabbar>
```

```js
const [active, setActive] = useState(0)
const onChange = useCallback((v) => {
  Toast.info(v)
  setActive(v as number)
}, [])
```

## API

### Tabbar Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前选中标签的名称或索引值 | _number \| string_ | `0` |
| fixed | 是否固定在底部 | _boolean_ | `true` |
| border | 是否显示外边框 | _boolean_ | `true` |
| zIndex | 元素 z-index | _number \| string_ | `1` |
| activeColor | 选中标签的颜色 | _string_ | `#1989fa` |
| inactiveColor | 未选中标签的颜色 | _string_ | `#7d7e80` |
| placeholder | 固定在底部时，是否在标签位置生成一个等高的占位元素 | _boolean_ | `false` |
| safeAreaInsetBottom | 是否开启底部安全区适配，设置 fixed 时默认开启 | _boolean_ | `false` |
| beforeChange | 切换标签前的回调函数，返回 `false` 可阻止切换，支持返回 Promise | _(name) => boolean \| Promise_ | - |

### Tabbar Events

| 事件名 | 说明           | 回调参数                   |
| ------ | -------------- | -------------------------- |
| change | 切换标签时触发 | _active: number \| string_ |

### TabbarItem Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 标签名称，作为匹配的标识符 | _number \| string_ | 当前标签的索引值 |
| icon | 图标名称或图片链接 | _string_ | - |
| customIcon | 自定义图标 | _(active: boolean) => React.ReactNode_ | - |
| iconPrefix | 图标类名前缀，同 Icon 组件的classPrefix 属性 | _string_ | `van-icon` |
| dot | 是否显示图标右上角小红点 | _boolean_ | `false` |
| badge | 图标右上角徽标的内容 | _number \| string_ | - |


### TabbarItem Events

| 事件名 | 说明           | 回调参数                   |
| ------ | -------------- | -------------------------- |
| click | 点击事件 | _event: MouseEvent_ |

### Scss样式变量

| 名称                                 | 默认值          | 描述 |
| ------------------------------------ | --------------- | ---- |
| $tabbar-height                       | `50px`          | -    |
| $tabbar-z-index                      | `1`             | -    |
| $tabbar-background-color             | `$white`        | -    |
| $tabbar-item-font-size               | `$font-size-sm` | -    |
| $tabbar-item-text-color              | `$gray-7`       | -    |
| $tabbar-item-active-color            | `$blue`         | -    |
| $tabbar-item-active-background-color | `$white`        | -    |
| $tabbar-item-line-height             | `1`             | -    |
| $tabbar-item-icon-size               | `22px`          | -    |
| $tabbar-item-margin-bottom           | `4px`           | -    |
