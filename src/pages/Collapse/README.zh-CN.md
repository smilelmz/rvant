# Collapse 折叠面板

### 介绍

将一组内容放置在多个折叠面板中，点击面板的标题可以展开或收缩其内容。

### 引入

```js
import { Collapse, CollapseItem } from 'rvant'
```

## 代码演示

### 基础用法

通过 `value` 控制展开的面板列表，`active` 为数组格式。

```html
<Collapse
  value={active}
  change={useCallback((v) => setActive(v as number[]), [])}
>
  <CollapseItem title='标题1'>
    代码是写出来给人看的，附带能在机器上运行
  </CollapseItem>
  <CollapseItem title='标题2'>
    代码是写出来给人看的，附带能在机器上运行
  </CollapseItem>
  <CollapseItem title='标题3'>
    代码是写出来给人看的，附带能在机器上运行
  </CollapseItem>
</Collapse>
```

```js
const [active, setActive] = useState([0])
```

### 手风琴

通过 `accordion` 可以设置为手风琴模式，最多展开一个面板，此时 `active` 为字符串格式。

```html
<Collapse
  value={active}
  accordion
  change={useCallback((v) => setActive(v as number), [])}
>
  <CollapseItem title='标题1'>
    代码是写出来给人看的，附带能在机器上运行
  </CollapseItem>
  <CollapseItem title='标题2'>
    代码是写出来给人看的，附带能在机器上运行
  </CollapseItem>
  <CollapseItem title='标题3'>
    代码是写出来给人看的，附带能在机器上运行
  </CollapseItem>
</Collapse>
```

```js
const [active, setActive] = useState(0)
```

### 禁用状态

通过 `disabled` 属性来禁用单个面板。

```html
<Collapse
  value={active}
  change={useCallback((v) => setActive(v as number[]), [])}
>
  <CollapseItem title='标题1'>
    代码是写出来给人看的，附带能在机器上运行
  </CollapseItem>
  <CollapseItem title='标题2' disabled>
    代码是写出来给人看的，附带能在机器上运行
  </CollapseItem>
  <CollapseItem title='标题3' disabled>
    代码是写出来给人看的，附带能在机器上运行
  </CollapseItem>
</Collapse>
```

### 自定义标题内容

通过 `title` 插槽可以自定义标题栏的内容。

```html
<Collapse
  value={active}
  change={useCallback((v) => setActive(v as number[]), [])}
>
  <CollapseItem title={
    <div>标题1 <Icon name="question-o" /></div>
  }>
    代码是写出来给人看的，附带能在机器上运行
  </CollapseItem>
  <CollapseItem title='标题2' value="内容" icon="shop-o">
    代码是写出来给人看的，附带能在机器上运行
  </CollapseItem>
</Collapse>
```

```js
const [active, setActive] = useState([])
```

## API

### Collapse Props

| 参数      | 说明                | 类型                                                                   | 默认值  |
| --------- | ------------------- | ---------------------------------------------------------------------- | ------- |
| value     | 当前展开面板的 name | 手风琴模式：_number \| string_<br>非手风琴模式：_(number \| string)[]_ | -       |
| accordion | 是否开启手风琴模式  | _boolean_                                                              | `false` |
| border    | 是否显示外边框      | _boolean_                                                              | `true`  |

### Collapse Events

| 事件名 | 说明           | 回调参数                               |
| ------ | -------------- | -------------------------------------- |
| change | 切换面板时触发 | activeNames: 类型与 value 绑定的值一致 |

### CollapseItem Props

| 参数       | 说明                                   | 类型                                                       | 默认值  |
| ---------- | -------------------------------------- | ---------------------------------------------------------- | ------- |
| name       | 唯一标识符，默认为索引值               | _number \| string_                                         | `index` |
| icon       | 标题栏左侧或图片链接                   | _string_                                                   | -       |
| size       | 标题栏大小，可选值为 `large`           | _string_                                                   | -       |
| value      | 标题栏右侧内容                         | _number \| string \| React.ReactNode \| React.ReactNode[]_ | -       |
| label      | 标题栏描述信息                         | _number \| string \| React.ReactNode \| React.ReactNode[]_ | -       |
| border     | 是否显示内边框                         | _boolean_                                                  | `true`  |
| isLink     | 是否展示标题栏右侧箭头并开启点击反馈   | _boolean_                                                  | `true`  |
| disabled   | 是否禁用面板                           | _boolean_                                                  | `false` |
| readonly   | 是否为只读状态，只读状态下无法操作面板 | _boolean_                                                  | `false` |
| titleClass | 左侧标题额外类名                       | _string_                                                   | -       |
| valueClass | 右侧内容额外类名                       | _string_                                                   | -       |
| labelClass | 描述信息额外类名                       | _string_                                                   | -       |
| title      | 标题栏左侧内容                         | _number \| string \| React.ReactNode \| React.ReactNode[]_ | -       |
| url        | 点击后跳转的链接地址                   | _string_                                                   | -       |
| rightIcon  | 自定义右侧按钮，默认是 `arrow`         | _string \| React.ReactNode \| React.ReactNode[]_           | -       |

### CollapseItem 方法

通过 ref 可以获取到 CollapseItem 实例并调用实例方法。

| 方法名 | 说明                                                             | 参数               | 返回值 |
| ------ | ---------------------------------------------------------------- | ------------------ | ------ |
| toggle | 切换面试展开状态，传 `true` 为展开，`false` 为收起，不传参为切换 | _expand?: boolean_ | -      |

### Scss样式变量

| 名称                                    | 默认值                     | 描述 |
| --------------------------------------- | -------------------------- | ---- |
| $collapse-item-transition-duration      | `$animation-duration-base` | -    |
| $collapse-item-content-padding          | `$padding-sm $padding-md`  | -    |
| $collapse-item-content-font-size        | `$font-size-md`            | -    |
| $collapse-item-content-line-height      | `1.5`                      | -    |
| $collapse-item-content-text-color       | `$gray-6`                  | -    |
| $collapse-item-content-background-color | `$white`                   | -    |
| $collapse-item-title-disabled-color     | `$gray-5`                  | -    |
