# Sidebar 侧边导航

### 介绍

垂直展示的导航栏，用于在不同的内容区域之间进行切换。

### 引入

```js
import { Sidebar, SidebarItem } from 'rvant'
```

## 代码演示

### 基础用法

通过 `value` 绑定当前选中项的索引。

```html
<Sidebar
  value={active}
  change={useCallback((v) => setActive(v as number), [])}
>
  <SidebarItem title='标签名' />
  <SidebarItem title='标签名' />
  <SidebarItem title='标签名' />
</Sidebar>
```

```js
const [active, setActive] = useState(0)
```

### 徽标提示

设置 `dot` 属性后，会在右上角展示一个小红点；设置 `badge` 属性后，会在右上角展示相应的徽标。

```html
<Sidebar
  value={active}
  change={useCallback((v) => setActive(v as number), [])}
>
  <SidebarItem title='标签名' dot />
  <SidebarItem title='标签名' badge='5' />
  <SidebarItem title='标签名' badge='20' />
</Sidebar>
```

### 禁用选项

通过 `disabled` 属性禁用选项。

```html
<Sidebar
  value={active}
  change={useCallback((v) => setActive(v as number), [])}
>
  <SidebarItem title='标签名' />
  <SidebarItem title='标签名' disabled />
  <SidebarItem title='标签名' />
</Sidebar>
```

### 监听切换事件

设置 `change` 方法来监听切换导航项时的事件。

```html
<Sidebar value={active} change={onChange}>
  <SidebarItem title='标签名 1' />
  <SidebarItem title='标签名 2' />
  <SidebarItem title='标签名 3' />
</Sidebar>
```

```js
const [active, setActive] = useState(0)
const onChange = useCallback((v) => {
Toast.info(`标签名 ${v}`)
setActive(v as number)
}, [])
```

## API

### Sidebar Props

| 参数    | 说明             | 类型               | 默认值 |
| ------- | ---------------- | ------------------ | ------ |
| value | 当前导航项的索引 | _number \| string_ | `0`    |

### Sidebar Events

| 事件名 | 说明             | 回调参数        |
| ------ | ---------------- | --------------- |
| change | 切换导航项时触发 | _index: number_ |

### SidebarItem Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 内容 | _string \| React.ReactNode \| React.ReactNode[]_ | `''` |
| dot | 是否显示右上角小红点 | _boolean_ | `false` |
| badge | 图标右上角徽标的内容 | _number \| string_ | - |
| disabled | 是否禁用该项 | _boolean_ | `false` |

### SidebarItem Events

| 事件名 | 说明       | 回调参数        |
| ------ | ---------- | --------------- |
| click  | 点击时触发 | _index: number_ |

### Scss样式变量

| 名称                               | 默认值              | 描述 |
| ---------------------------------- | ------------------- | ---- |
| $sidebar-width                     | `80px`              | -    |
| $sidebar-font-size                 | `$font-size-md`     | -    |
| $sidebar-line-height               | `$line-height-md`   | -    |
| $sidebar-text-color                | `$text-color`       | -    |
| $sidebar-disabled-text-color       | `$gray-5`           | -    |
| $sidebar-padding                   | `20px $padding-sm`  | -    |
| $sidebar-active-color              | `$active-color`     | -    |
| $sidebar-background-color          | `$background-color` | -    |
| $sidebar-selected-font-weight      | `$font-weight-bold` | -    |
| $sidebar-selected-text-color       | `$text-color`       | -    |
| $sidebar-selected-border-width     | `4px`               | -    |
| $sidebar-selected-border-height    | `16px`              | -    |
| $sidebar-selected-border-color     | `$red`              | -    |
| $sidebar-selected-background-color | `$white`            | -    |
