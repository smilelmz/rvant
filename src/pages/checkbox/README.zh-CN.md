# Checkbox 复选框

### 介绍

用于在选中和非选中状态之间进行切换。

### 引入

通过以下方式来全局注册组件

```js
import { Checkbox, CheckboxGroup } from 'rvant';
```

## 代码演示

### 基础用法

通过 `checked` 绑定复选框的勾选状态。

```html
<Checkbox checked={checked} change={v => setChecked(v)}>复选框</Checkbox>
```

```js
const [checked, setChecked] = useState(false);
```

### 禁用状态

通过设置 `disabled` 属性可以禁用复选框。

```html
<Checkbox disabled checked={false} labelText='复选框' />
<Checkbox disabled checked labelText='复选框' />
```

### 自定义形状

将 `shape` 属性设置为 `square`，复选框的形状会变成方形。

```html
<Checkbox
  checked={shapeChecked}
  labelText='自定义形状'
  shape='square'
  change={v => setShapeChecked(v)}
/>
```

### 自定义颜色

通过 `checkedColor` 属性设置选中状态的图标颜色。

```html
<Checkbox
  checked={colorChecked}
  labelText='自定义颜色'
  checkedColor='#07c160'
  change={v => setColorChecked(v)}
/>
```

### 自定义大小

通过 `iconSize` 属性可以自定义图标的大小。

```html
<Checkbox checked={true} iconSize="24px">复选框</Checkbox>
```

### 自定义图标

通过 `icon` 插槽自定义图标，可以通过 `slotProps` 判断是否为选中状态.

```html
<Checkbox
  checked={iconChecked}
  labelText='自定义图标'
  icon={<img src={iconChecked ? activeIcon : inactiveIcon} />}
  change={v => setIconChecked(v)}
/>

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

设置 `labelDisabled` 属性后，点击图标以外的内容不会触发复选框切换。

```html
<Checkbox
  checked={labelChecked}
  labelText='禁用文本点击'
  labelDisabled
  change={v => setLabelChecked(v)}
/>
```

### 复选框组

复选框可以与复选框组一起使用，复选框组通过 `value` 数组绑定复选框的勾选状态。

```html
<CheckboxGroup
  value={result}
  change={(v: React.SetStateAction<string[]>) => setResult(v)}
>
  <Checkbox name='a'>复选框 a</Checkbox>
  <Checkbox name='b'>复选框 b</Checkbox>
</CheckboxGroup>
```

```js
const [result, setResult] = useState(['a', 'b'])
```

### 水平排列

将 `direction` 属性设置为 `horizontal` 后，复选框组会变成水平排列。

```html
<CheckboxGroup
  value={horizontalResult}
  direction='horizontal'
  change={(v: React.SetStateAction<string[]>) => setHorizontalResult(v)}
>
  <Checkbox name='a'>复选框 a</Checkbox>
  <Checkbox name='b'>复选框 b</Checkbox>
</CheckboxGroup>
```

```js
const [result, setResult] = useState([])
```

### 限制最大可选数

通过 `max` 属性可以限制复选框组的最大可选数。

```html
<CheckboxGroup
  value={result2}
  max={2}
  change={(v: React.SetStateAction<string[]>) => setResult2(v)}
>
  <Checkbox name='a'>复选框 a</Checkbox>
  <Checkbox name='b'>复选框 b</Checkbox>
  <Checkbox name='c'>复选框 c</Checkbox>
</CheckboxGroup>
```

### 全选与反选

通过 `CheckboxGroup` 实例上的 `toggleAll` 方法可以实现全选与反选。

```html
<CheckboxGroup
  ref={groupRef}
  value={checkAllResult}
  change={(v: React.SetStateAction<string[]>) => setCheckAllResult(v)}
>
  <Checkbox name='a'>复选框 a</Checkbox>
  <Checkbox name='b'>复选框 b</Checkbox>
  <Checkbox name='c' disabled checked={false}>
    复选框 c
  </Checkbox>
</CheckboxGroup>
<div className='demo-checkbox-buttons'>
  <Button
    type='primary'
    click={() =>
      groupRef.current.toggleAll({ checked: true, skipDisabled: true })
    }
  >
    全选
  </Button>
  <Button type='danger' click={() => groupRef.current.toggleAll()}>
    反选
  </Button>
</div>
```
## API

### Checkbox Props

| 参数          | 说明                      | 类型               | 默认值    |
| ------------- | ------------------------- | ------------------ | --------- |
| checked       | 是否为选中状态            | _boolean_          | `false`   |
| name          | 标识符                    | _any_              | -         |
| shape         | 形状，可选值为 `square`   | _string_           | `round`   |
| icon          | 图标                      | React.ReactNode    | -         |
| icon-size     | 图标大小，默认单位为 `px` | _number \| string_ | `20px`    |
| checkedColor  | 选中状态颜色              | _string_           | `#1989fa` |
| labelText     | 复选框文本                | _string_           | -         |
| disabled      | 是否禁用复选框            | _boolean_          | `false`   |
| labelDisabled | 是否禁用复选框文本点击    | _boolean_          | `false`   |
| labelPosition | 文本位置，可选值为 `left` | _string_           | `right`   |
| bindGroup     | 是否与复选框组绑定        | _boolean_          | `true`    |

### CheckboxGroup Props

| 参数         | 说明                                  | 类型               | 默认值     |
| ------------ | ------------------------------------- | ------------------ | ---------- |
| value        | 所有选中项的标识符                    | _any[]_            | -          |
| disabled     | 是否禁用所有复选框                    | _boolean_          | `false`    |
| max          | 最大可选数，`0` 为无限制              | _number \| string_ | `0`        |
| direction    | 排列方向，可选值为 `horizontal`       | _string_           | `vertical` |
| iconSize     | 所有复选框的图标大小，默认单位为 `px` | _number \| string_ | `20px`     |
| checkedColor | 所有复选框的选中状态颜色              | _string_           | `#1989fa`  |

### Checkbox Events

| 事件名 | 说明                     | 回调参数            |
| ------ | ------------------------ | ------------------- |
| change | 当绑定值变化时触发的事件 | _checked: boolean_  |
| click  | 点击复选框时触发         | _event: MouseEvent_ |

### CheckboxGroup Events

| 事件名 | 说明                     | 回调参数       |
| ------ | ------------------------ | -------------- |
| change | 当绑定值变化时触发的事件 | _names: any[]_ |

### CheckboxGroup 方法

通过 ref 可以获取到 CheckboxGroup 实例并调用实例方法

| 方法名    | 说明                                                               | 参数                          | 返回值 |
| --------- | ------------------------------------------------------------------ | ----------------------------- | ------ |
| toggleAll | 切换所有复选框，传 `true` 为选中，`false` 为取消选中，不传参为取反 | _options?: boolean \| object_ | -      |

### Checkbox 方法

通过 ref 可以获取到 Checkbox 实例并调用实例方法

| 方法名 | 说明                                                             | 参数                | 返回值 |
| ------ | ---------------------------------------------------------------- | ------------------- | ------ |
| toggle | 切换选中状态，传 `true` 为选中，`false` 为取消选中，不传参为取反 | _checked?: boolean_ | -      |

### 样式变量

Scss 变量

| 名称                                | 默认值                     | 描述 |
| ----------------------------------- | -------------------------- | ---- |
| $checkbox-size                      | `20px`                     | -    |
| $checkbox-border-color              | `$gray-5`                  | -    |
| $checkbox-transition-duration       | `$animation-duration-fast` | -    |
| $checkbox-label-margin              | `$padding-xs`              | -    |
| $checkbox-label-color               | `$text-color`              | -    |
| $checkbox-checked-icon-color        | `$blue`                    | -    |
| $checkbox-disabled-icon-color       | `$gray-5`                  | -    |
| $checkbox-disabled-label-color      | `$gray-5`                  | -    |
| $checkbox-disabled-background-color | `$border-color`            | -    |
