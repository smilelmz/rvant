# TreeSelect

### Intro

Used to select from a set of related data sets.

### Install

```js
import { TreeSelect } from 'rvant'
```

## Usage

### Radio Mode

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
    text: 'Group 1',
    children: [
      { text: 'Delaware', id: 1 },
      { text: 'Florida', id: 2 },
    ],
  },
  {
    text: 'Group 2',
    children: [
      { text: 'Alabama', id: 5 },
      { text: 'Kansas', id: 6 },
    ],
  },
]
```

### Multiple Mode

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
const items =[
  {
    text: 'Group 1',
    children: [
      { text: 'Delaware', id: 1 },
      { text: 'Florida', id: 2 },
    ],
  },
  {
    text: 'Group 2',
    children: [
      { text: 'Alabama', id: 5 },
      { text: 'Kansas', id: 6 },
    ],
  },
]
```

### Custom Content

```html
<TreeSelect
  height='70vw'
  mainActiveIndex={mainActiveIndex}
  updateMainActiveIndex={useCallback(
    (v) => setMainActiveIndex(v as number),
    []
  )}
  items={[{ text: 'Group 1' }, { text: 'Group 2' }]}
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

### Show Badge

```html
<TreeSelect
  activeId={activeId}
  mainActiveIndex={mainActiveIndex}
  updateActiveId={useCallback((v) => setActiveId(v as number), [])}
  updateMainActiveIndex={useCallback(
    (v) => setMainActiveIndex(v as number),
    []
  )}
  items={badgeItems}
/>
```

```js
const [activeId, setActiveId] = useState(1)
const [mainActiveIndex, setMainActiveIndex] = useState(0)
const badgeItems = [
  { text: 'Group 1', children: [], dot: true },
  { text: 'Group 2', children: [], badge: 5 },
]

```

## API

### Props

| Attribute       | Description                         | Type                                          | Default    |
| --------------- | ----------------------------------- | --------------------------------------------- | ---------- |
| items           | Required datasets for the component | _Item[]_                                      | `[]`       |
| height          | Height                              | _number \| string_                            | `300`      |
| mainActiveIndex | The index of selected parent node   | _number \| string_                            | `0`        |
| activeId        | Id of selected item                 | _number \| string \|<br>(number \| string)[]_ | `0`        |
| max             | Maximum number of selected items    | _number \| string_                            | `Infinity` |
| selectedIcon    | Selected icon                       | _string_                                      | `success`  |

### Events

| Event                 | Description                          | Arguments                       |
| --------------------- | ------------------------------------ | ------------------------------- |
| click-nav             | Emitted when parent node is selected | index: index of selected parent |
| click-item            | Emitted when item is selected        | data: selected item             |
| updateActiveId        | update activeId                      | activeId: selected id           |
| updateMainActiveIndex | update mainActiveIndex               | index:  selected index          |

### Data Structure of Item

`items` should be an array contains specified tree objects.

In every tree object, `text` property defines `id` stands for the unique key while the `children` contains sub-tree objects.

```js
[
  {
    // name of the parent node
    text: 'Group 1',
    // badge
    badge: 3,
    // Whether to show red dot
    dot: true,
    // ClassName of parent node
    className: 'my-class',
    // leaves of this parent node
    children: [
      {
        // name of the leaf node
        text: 'Washington',
        // id of the leaf node, component highlights leaf node by comparing the activeId with this.
        id: 1,
        // disable options
        disabled: true,
      },
      {
        text: 'Baltimore',
        id: 2,
      },
    ],
  },
];
```

### Scss Variables

| Name                                  | Default Value       | Description |
| ------------------------------------- | ------------------- | ----------- |
| $tree-select-font-size                | `$font-size-md`     | -           |
| $tree-select-nav-background-color     | `$background-color` | -           |
| $tree-select-content-background-color | `$white`            | -           |
| $tree-select-nav-item-padding         | `14px $padding-sm`  | -           |
| $tree-select-item-height              | `48px`              | -           |
| $tree-select-item-active-color        | `$red`              | -           |
| $tree-select-item-disabled-color      | `$gray-5`           | -           |
| $tree-select-item-selected-size       | `16px`              | -           |
