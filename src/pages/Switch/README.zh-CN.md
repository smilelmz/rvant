# Switch 开关

### 介绍

用于在打开和关闭状态之间进行切换。

### 引入

```js
import { Switch } from 'rvant';
```

## 代码演示

### 基础用法

通过 `value` 绑定开关的选中状态，`true` 表示开，`false` 表示关。

```html
<Switch
  value={checked}
  change={(v: boolean | ((prevState: boolean) => boolean)) =>
    setChecked(v)
  }
/>
```

```js
const [checked, setChecked] = useState(false)
```

### 禁用状态

通过 `disabled` 属性来禁用开关，禁用状态下开关不可点击。

```html
<Switch value={true} disabled />
```

### 加载状态

通过 `loading` 属性设置开关为加载状态，加载状态下开关不可点击。

```html
<Switch value={true} loading />
```

### 自定义大小

通过 `size` 属性自定义开关的大小。

```html
<Switch
  value={checked2}
  size='24px'
  change={(v: boolean | ((prevState: boolean) => boolean)) =>
    setChecked2(v)
  }
/>
```

### 自定义颜色

`activeColor` 属性表示打开时的背景色，`inactiveColor` 表示关闭时的背景色。

```html
<Switch
  value={checked3}
  activeColor='#ee0a24'
  inactiveColor='#dcdee0'
  change={(v: boolean | ((prevState: boolean) => boolean)) =>
    setChecked3(v)
  }
/>
```

### 搭配单元格使用

```html
<Cell
  title='提醒'
  rightIcon={
    <Switch
      value={checked4}
      change={(v: boolean | ((prevState: boolean) => boolean)) =>
        setChecked4(v)
      }
      size="24"
    />
  }
/>
```

## API

### Props

| 参数           | 说明                     | 类型               | 默认值    |
| -------------- | ------------------------ | ------------------ | --------- |
| value        | 开关选中状态             | _any_              | `false`   |
| loading        | 是否为加载状态           | _boolean_          | `false`   |
| disabled       | 是否为禁用状态           | _boolean_          | `false`   |
| size           | 开关尺寸，默认单位为`px` | _number \| string_ | `30px`    |
| activeColor   | 打开时的背景色           | _string_           | `#1989fa` |
| inactiveColor | 关闭时的背景色           | _string_           | `white`   |
| activeValue   | 打开时对应的值           | _any_              | `true`    |
| inactiveValue | 关闭时对应的值           | _any_              | `false`   |

### Events

| 事件名 | 说明               | 回调参数            |
| ------ | ------------------ | ------------------- |
| change | 开关状态切换时触发 | _value: any_        |

### Scss 样式

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| $switch-size | `30px` | - |
| $switch-width | `2em` | - |
| $switch-height | `1em` | - |
| $switch-node-size | `1em` | - |
| $switch-node-background-color | `$white` | - |
| $switch-node-box-shadow | `0 3px 1px 0 rgba(0, 0, 0, 0.05)` | - |
| $switch-background-color | `$white` | - |
| $switch-on-background-color | `$blue` | - |
| $switch-transition-duration | `$animation-duration-base` | - |
| $switch-disabled-opacity | `$disabled-opacity` | - |
| $switch-border | `$border-width-base solid rgba(0, 0, 0, 0.1)` | - |
