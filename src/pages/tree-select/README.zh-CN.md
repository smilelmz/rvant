# TreeSelect 分类选择

### 介绍

用于从一组相关联的数据集合中进行选择。

### 引入

```js
import { TreeSelect } from 'rvant'
```

## 代码演示

### 单选模式

`item` 为分类显示所需的数据，数据格式见下方示例。`mainActiveIndex` 表示左侧高亮选项的索引，`activeId` 表示右侧高亮选项的 id。

```html
<TreeSelect
  activeId={activeId}
  mainActiveIndex={mainActiveIndex}
  updateActiveId={useCallback((v) => setActiveId(v as number), [])}
  updateMainActiveIndex={useCallback(
    (v) => setMainActiveIndex(v as number),
    []
  )}
  items={items}
/>
```

```js
const [activeId, setActiveId] = useState(1)
const [mainActiveIndex, setMainActiveIndex] = useState(0)
const items = [
  {
    text: '浙江',
    children: [
      { text: '杭州', id: 1 },
      { text: '温州', id: 2 },
    ],
  },
  {
    text: '江苏',
    children: [
      { text: '南京', id: 5 },
      { text: '无锡', id: 6 },
    ],
  },
]
```

### 多选模式

`activeId` 为数组格式时，可以选中多个右侧选项。

```html
<TreeSelect
  activeId={activeId}
  mainActiveIndex={mainActiveIndex}
  updateActiveId={useCallback((v) => setActiveId(v as number[]), [])}
  updateMainActiveIndex={useCallback(
    (v) => setMainActiveIndex(v as number),
    []
  )}
  items={zhCNData}
/>
```

```js
const [activeId, setActiveId] = useState([1, 2])
const [mainActiveIndex, setMainActiveIndex] = useState(0)
const items = [
  {
    text: '浙江',
    children: [
      { text: '杭州', id: 1 },
      { text: '温州', id: 2 },
    ],
  },
  {
    text: '江苏',
    children: [
      { text: '南京', id: 5 },
      { text: '无锡', id: 6 },
    ],
  },
]
```

### 自定义内容

通过 `content` 插槽可以自定义右侧区域的内容。

```html
<TreeSelect
  height='70vw'
  mainActiveIndex={mainActiveIndex}
  updateMainActiveIndex={useCallback(
    (v) => setMainActiveIndex(v as number),
    []
  )}
  items={[{ text: '分组 1' }, { text: '分组 2' }]}
  content={mainActiveIndex === 1 ? (
      <Image
        showLoading={false}
        src='https://img.yzcdn.cn/vant/apple-1.jpg'
      />
    ) : (
    <Image showLoading={false} src='https://img.yzcdn.cn/vant/apple-2.jpg' />
  )}
/>
```

```js
const [mainActiveIndex, setMainActiveIndex] = useState(1)
```

### 徽标提示

设置 `dot` 属性后，会在图标右上角展示一个小红点；设置 `badge` 属性后，会在图标右上角展示相应的徽标。

```html
<TreeSelect
  activeId={activeId}
  mainActiveIndex={mainActiveIndex}
  updateActiveId={useCallback((v) => setActiveId(v as number), [])}
  updateMainActiveIndex={useCallback(
    (v) => setMainActiveIndex(v as number),
    []
  )}
  items={badgeItems()}
/>
```

```js
const [activeId, setActiveId] = useState(1)
const [mainActiveIndex, setMainActiveIndex] = useState(0)
const badgeItems = () => {
  const data = deepClone(zhCNData).slice(0, 2)
  data[0].dot = true
  data[1].badge = 5
  return data
}
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| items | 分类显示所需的数据 | _Item[]_ | `[]` |
| height | 高度，默认单位为`px` | _number \| string_ | `300` |
| mainActiveIndex | 左侧选中项的索引 | _number \| string_ | `0` |
| activeId | 右侧选中项的 id，支持传入数组 | _number \| string \|<br>(number \| string)[]_ | `0` |
| max | 右侧项最大选中个数 | _number \| string_ | `Infinity` |
| selectedIcon | 自定义右侧栏选中状态的图标 | _string_ | `success` |

### Events

| 事件名                | 说明                 | 回调参数                  |
| --------------------- | -------------------- | ------------------------- |
| clickNav              | 点击左侧导航时触发   | index：被点击的导航的索引 |
| clickItem             | 点击右侧选择项时触发 | data: 该点击项的数据      |
| updateActiveId        | 更新 activeId        | activeId: 选中项数据      |
| updateMainActiveIndex | 更新 mainActiveIndex | index:  选中项下标        |

### Slots

| 名称    | 说明               |
| ------- | ------------------ |
| content | 自定义右侧区域内容 |

### Item 数据结构

`items` 整体为一个数组，数组内包含一系列描述分类的对象，每个分类里，`text`表示当前分类的名称，`children`表示分类里的可选项。

```js
[
  {
    // 导航名称
    text: '所有城市',
    // 导航名称右上角徽标
    badge: 3,
    // 是否在导航名称右上角显示小红点
    dot: true,
    // 导航节点额外类名
    className: 'my-class',
    // 该导航下所有的可选项
    children: [
      {
        // 名称
        text: '温州',
        // id，作为匹配选中状态的标识符
        id: 1,
        // 禁用选项
        disabled: true,
      },
      {
        text: '杭州',
        id: 2,
      },
    ],
  },
];
```

### Scss样式变量

| 名称                                  | 默认值              | 描述 |
| ------------------------------------- | ------------------- | ---- |
| $tree-select-font-size                | `$font-size-md`     | -    |
| $tree-select-nav-background-color     | `$background-color` | -    |
| $tree-select-content-background-color | `$white`            | -    |
| $tree-select-nav-item-padding         | `14px $padding-sm`  | -    |
| $tree-select-item-height              | `48px`              | -    |
| $tree-select-item-active-color        | `$red`              | -    |
| $tree-select-item-disabled-color      | `$gray-5`           | -    |
| $tree-select-item-selected-size       | `16px`              | -    |
