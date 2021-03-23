# Radio 单选框

### 介绍

用于在多个选项中选择单个结果。

### 引入

```js
import { RadioGroup, Radio } from 'vant';
```

## 代码演示

### 基础用法

通过 `v-model` 绑定值当前选中项的 name。

```html
<RadioGroup
  className='demo-radio-group'
  value={baseRadio}
  change={(v: any) => setBaseRadio(v)}
>
  <Radio name='1' labelText='单选框 1' />
  <Radio name='2' labelText='单选框 2' />
</RadioGroup>
```

```js
const [baseRadio, setBaseRadio] = useState('1')
```

### 水平排列

将 `direction` 属性设置为 `horizontal` 后，单选框组会变成水平排列。

```html
<RadioGroup
  className='demo-radio-group'
  value={dirRadio}
  direction='horizontal'
  change={(v: any) => setDirRadio(v)}
>
  <Radio name='1' labelText='单选框 1' />
  <Radio name='2' labelText='单选框 2' />
</RadioGroup>
```

### 禁用状态

通过 `disabled` 属性禁止选项切换，在 `Radio` 上设置 `disabled` 可以禁用单个选项。

```html
<RadioGroup
  className='demo-radio-group'
  disabled
  value={disabledAll}
  change={(v: any) => setDisabledAll(v)}
>
  <Radio name='1' labelText='单选框 1' />
  <Radio name='2' labelText='单选框 2' />
</RadioGroup>
```

### 自定义形状

将 `shape` 属性设置为 `square`，单选框的形状会变成方形。

```html
<RadioGroup
  className='demo-radio-group'
  value={shapeRadio}
  change={(v: any) => setShapeRadio(v)}
>
  <Radio name='1' labelText='单选框 1' shape='square' />
  <Radio name='2' labelText='单选框 2' shape='square' />
</RadioGroup>
```

### 自定义颜色

通过 `checked-color` 属性设置选中状态的图标颜色。

```html
<RadioGroup
  className='demo-radio-group'
  value={colorRadio}
  change={(v: any) => setColorRadio(v)}
>
  <Radio name='1' labelText='单选框 1' checkedColor='#07c160' />
  <Radio name='2' labelText='单选框 2' checkedColor='#07c160' />
</RadioGroup>
```

### 自定义大小

通过 `icon-size` 属性可以自定义图标的大小。

```html
<RadioGroup
  className='demo-radio-group'
  value={sizeRadio}
  change={(v: any) => setSizeRadio(v)}
>
  <Radio
    name='1'
    labelText='单选框 1'
    checkedColor='#07c160'
    iconSize='24px'
  />
  <Radio
    name='2'
    labelText='单选框 2'
    checkedColor='#07c160'
    iconSize='24px'
  />
</RadioGroup>
```

### 自定义图标

通过 `icon` 插槽自定义图标，并通过 `slotProps` 判断是否为选中状态。

```html
<RadioGroup
  className='demo-radio-group'
  value={iconRadio}
  change={(v: any) => setIconRadio(v)}
>
  <Radio
    name='1'
    labelText='单选框 1'
    icon={<img src={iconRadio === '1' ? activeIcon : inactiveIcon} />}
  />
  <Radio
    name='2'
    labelText='单选框 2'
    icon={<img src={iconRadio === '2' ? activeIcon : inactiveIcon} />}
  />
</RadioGroup>

<style>
  img {
    height: 20px;
  }
</style>
```

```js
const activeIcon = 'https://img.yzcdn.cn/vant/user-active.png'
const inactiveIcon = 'https://img.yzcdn.cn/vant/user-inactive.png'
```

### 禁用文本点击

设置 `label-disabled` 属性后，点击图标以外的内容不会触发单选框切换。

```html
<RadioGroup
  className='demo-radio-group'
  value={textRadio}
  change={(v: any) => setTextRadio(v)}
>
  <Radio name='1' labelText='单选框 1' labelDisabled />
  <Radio name='2' labelText='单选框 2' labelDisabled />
</RadioGroup>
```

## API

### Radio Props

| 参数          | 说明                      | 类型                        | 默认值    |
| ------------- | ------------------------- | --------------------------- | --------- |
| name          | 标识符                    | _any_                       | -         |
| shape         | 形状，可选值为 `square`   | _string_                    | `round`   |
| disabled      | 是否为禁用状态            | _boolean_                   | `false`   |
| labelText     | 文本                      | _string_                    | `无`        |
| labelDisabled | 是否禁用文本内容点击      | _boolean_                   | `false`   |
| labelPosition | 文本位置，可选值为 `left` | _string_                    | `right`   |
| icon          | 自定义图标                | _React.ReactNode \| string_ | `null`    |
| iconSize      | 图标大小，默认单位为`px`  | _number \| string_          | `20px`    |
| checkedColor  | 选中状态颜色              | _string_                    | `#1989fa` |

### RadioGroup Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前选中项的标识符 | _any_ | - |
| disabled | 是否禁用所有单选框 | _boolean_ | `false` |
| direction | 排列方向，可选值为`horizontal` | _string_ | `vertical` |
| iconSize | 所有单选框的图标大小，默认单位为`px` | _number \| string_ | `20px` |
| checkedColor | 所有单选框的选中状态颜色 | _string_ | `#1989fa` |

### Radio Events

| 事件名 | 说明             | 回调参数            |
| ------ | ---------------- | ------------------- |
| click  | 点击单选框时触发 | _event: MouseEvent_ |

### RadioGroup Events

| 事件名 | 说明                     | 回调参数       |
| ------ | ------------------------ | -------------- |
| change | 当绑定值变化时触发的事件 | _name: string_ |

### Scss样式变量

| 名称                             | 默认值                     | 描述 |
| -------------------------------- | -------------------------- | ---- |
| $radio-size                      | `20px`                     | -    |
| $radio-border-color              | `$gray-5`                  | -    |
| $radio-transition-duration       | `$animation-duration-fast` | -    |
| $radio-label-margin              | `$padding-xs`              | -    |
| $radio-label-color               | `$text-color`              | -    |
| $radio-checked-icon-color        | `$blue`                    | -    |
| $radio-disabled-icon-color       | `$gray-5`                  | -    |
| $radio-disabled-label-color      | `$gray-5`                  | -    |
| $radio-disabled-background-color | `$border-color`            | -    |
