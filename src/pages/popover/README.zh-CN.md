# Popover 气泡弹出框

### 介绍

弹出式的气泡菜单。

### 引入

```js
import { Popover } from 'rvant';
```

## 代码演示

### 基础用法

当 Popover 弹出时，会基于 `reference` 的内容进行定位。

```html
<Popover
  show={lightTheme}
  actions={[{ text: '选项一' }, { text: '选项二' }, { text: '选项三' }]}
  placement='bottom-start'
  select={onSelect}
  updateShow={(v) => setLightTheme(v)}
  reference={<Button type='primary'>浅色风格</Button>}
/>
```

```js
const [lightTheme, setLightTheme] = useState(false)
const onSelect = (action: { text: string }) => Toast.info(action.text)
```

### 深色风格

Popover 支持浅色和深色两种风格，默认为浅色风格，将 `theme` 属性设置为 `dark` 可切换为深色风格。

```html
<Popover
  show={darkTheme}
  theme='dark'
  actions={[{ text: '选项一' }, { text: '选项二' }, { text: '选项三' }]}
  select={onSelect}
  updateShow={(v: boolean) => setDarkTheme(v)}
  reference={<Button type='primary'>深色风格</Button>}
/>
```

```js
const [darkTheme, setDarkTheme] = useState(false)
```

### 弹出位置

通过 `placement` 属性来控制气泡的弹出位置。

```html
<Popover
  show={placement}
  theme='dark'
  actions={[{ text: '选项一' }, { text: '选项二' }]}
  select={onSelect}
  placement='bottom-start'
  updateShow={(v: boolean) => setPlacement(v)}
  reference={<div className='demo-popover-refer' />}
/>
```

`placement` 支持以下值：

```bash
top           # 顶部中间位置
top-start     # 顶部左侧位置
top-end       # 顶部右侧位置
left          # 左侧中间位置
left-start    # 左侧上方位置
left-end      # 左侧下方位置
right         # 右侧中间位置
right-start   # 右侧上方位置
right-end     # 右侧下方位置
bottom        # 底部中间位置
bottom-start  # 底部左侧位置
bottom-end    # 底部右侧位置
```

### 展示图标

在 `actions` 数组中，可以通过 `icon` 字段来定义选项的图标，支持传入[图标名称](#/zh-CN/icon)或图片链接。

```html
<Popover
  show={showIcon}
  actions={[
    { text: '选项一', icon: 'add-o' },
    { text: '选项二', icon: 'music-o' },
    { text: '选项三', icon: 'more-o' }
  ]}
  placement='bottom-start'
  select={onSelect}
  updateShow={(v: boolean) => setShowIcon(v)}
  reference={<Button type='primary'>展示图标</Button>}
/>
```

```js
const [showIcon, setShowIcon] = useState(false)
```

### 禁用选项

在 `actions` 数组中，可以通过 `disabled` 字段来禁用某个选项。

```html
<Popover
  show={disableAction}
  actions={[
    { text: '选项一', disabled: true },
    { text: '选项二', disabled: true },
    { text: '选项三' }
  ]}
  select={onSelect}
  updateShow={(v: boolean) =>setDisableAction(v)}
  reference={<Button type='primary'>禁用选项</Button>}
/>
```

```js
const [disableAction, setDisableAction] = useState(false)
```

### 自定义内容

通过children，可以在 Popover 内部放置任意内容。

```html
<Popover
  show={customContent}
  placement='top-start'
  select={onSelect}
  updateShow={(v: boolean) => setCustomContent(v)}
  reference={<Button type='primary'>自定义内容</Button>}
>
  <Grid
    square
    clickable
    border={false}
    columnNum={3}
    style={{ width: 240 }}
  >
    {new Array(6).fill(1).map((_, index) => (
      <GridItem
        key={index}
        text='选项'
        icon='photo-o'
        click={() => setCustomContent(false)}
      />
    ))}
  </Grid>
</Popover>
```

```js
const [customContent, setCustomContent] = useState(false)
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| show | 是否展示气泡弹出层 | _boolean_ | `false` |
| overlay | 是否显示遮罩层 | _boolean_ | `false` |
| duration | 动画时长，单位秒 | _number \| string_ | `0.3` |
| overlayClass | 自定义遮罩层类名 | _string \| Array \| object_ | - |
| overlayStyle | 自定义遮罩层样式 | _object_ | - |
| offset | 出现位置的偏移量 | _[number, number]_ | `[0, 8]` |
| theme | 主题风格，可选值为 `dark` | _string_ | `light` |
| trigger | 触发方式，可选值为 `manual` | `click` |
| actions | 选项列表 | _Action[]_ | `[]` |
| placement | 弹出位置 | _string_ | `bottom` |
| closeOnClickAction | 是否在点击选项后关闭 | _boolean_ | `true` |
| closeOnClickOverlay | 是否在点击外部元素后关闭菜单 | _boolean_ | `true` |
| closeOnClickOutside | 是否在点击遮罩层后关闭菜单 | _boolean_ | `true` |
| reference  | 触发 Popover 显示的元素内容 | _React.ReactNode \| React.ReactNode[]_ | - |
| children | 自定义菜单内容 | _React.ReactNode \| React.ReactNode[]_ | - |

### Action 数据结构

`actions` 属性是一个由对象构成的数组，数组中的每个对象配置一列，对象可以包含以下值：

| 键名      | 说明                     | 类型                        |
| --------- | ------------------------ | --------------------------- |
| text      | 选项文字                 | _string_                    |
| icon      | 文字左侧的图标           | _string_                    |
| color     | 选项文字颜色             | _string_                    |
| disabled  | 是否为禁用状态           | _boolean_                   |
| className | 为对应选项添加额外的类名 | _string \| Array \| object_ |

### Events

| 事件名       | 说明                     | 回调参数                        |
| ------------ | ------------------------ | ------------------------------- |
| select       | 点击选项时触发           | _action: Action, index: number_ |
| updateShow   | 更新显示状态             | _action: Action, index: number_ |
| opened       | 打开菜单且动画结束后触发 | -                               |
| closed       | 关闭菜单且动画结束后触发 | -                               |
| clickOverlay | 点击遮罩层时触发         | _event: MouseEvent_             |

### Scss样式变量

| 名称                                      | 默认值              | 描述 |
| ----------------------------------------- | ------------------- | ---- |
| $popover-arrow-size                       | `6px`               | -    |
| $popover-border-radius                    | `$border-radius-lg` | -    |
| $popover-action-width                     | `128px`             | -    |
| $popover-action-height                    | `44px`              | -    |
| $popover-action-font-size                 | `$font-size-md`     | -    |
| $popover-action-line-height               | `$line-height-md`   | -    |
| $popover-action-icon-size                 | `20px`              | -    |
| $popover-light-text-color                 | `$text-color`       | -    |
| $popover-light-background-color           | `$white`            | -    |
| $popover-light-action-disabled-text-color | `$gray-5`           | -    |
| $popover-dark-text-color                  | `$white`            | -    |
| $popover-dark-background-color            | `#4a4a4a`           | -    |
| $popover-dark-action-disabled-text-color  | `$gray-6`           | -    |
