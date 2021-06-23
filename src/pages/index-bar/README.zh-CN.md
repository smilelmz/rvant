# IndexBar 索引栏

### 介绍

用于列表的索引分类显示和快速定位。

### 引入

```js
import { IndexBar, IndexAnchor } from 'rvant'
```

## 代码演示

### 基础用法

点击索引栏时，会自动跳转到对应的 `IndexAnchor` 锚点位置。

```html
<IndexBar>
  {indexList.map((item, index) => {
    return (
      <IndexAnchor anchor={item} key={index} index={item}>
        <Cell title={`文本 ${item}`} />
        <Cell title={`文本 ${item}`} />
        <Cell title={`文本 ${item}`} />
      </IndexAnchor>
    )
  })}
</IndexBar>
```

```js
const indexList = []
const charCodeOfA = 'A'.charCodeAt(0)

for (let i = 0; i < 26; i++) {
  indexList.push(String.fromCharCode(charCodeOfA + i))
}
```

### 自定义索引列表

可以通过 `indexList` 属性自定义展示的索引字符列表。

```html
<IndexBar indexList={customIndexList}>
  {customIndexList.map((item, index) => {
    return (
      <IndexAnchor anchor={`标题 ${item}`} key={index} index={item}>
        <Cell title={`文本 ${item}`} />
        <Cell title={`文本 ${item}`} />
        <Cell title={`文本 ${item}`} />
      </IndexAnchor>
    )
  })}
</IndexBar>
```

```js
const customIndexList = [1, 2, 3, 4, 5, 6, 8, 9, 10]
```

## API

### IndexBar Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| indexList | 索引字符列表 | _string[] \| number[]_ | `A-Z` |
| zIndex | z-index 层级 | _number \| string_ | `1` |
| sticky | 是否开启锚点自动吸顶 | _boolean_ | `true` |
| stickyOffsetTop | 锚点自动吸顶时与顶部的距离 | _number_ | `0` |
| highlightColor | 索引字符高亮颜色 | _string_ | `#ee0a24` |
| teleport | 指定挂载的节点,默认为body | _boolean \| Element_ | - |
| teleportClassName | 指定挂载的节点的样式名称 | _string_ | - |
| teleportStyle | 指定挂载的节点的样式 | _object_ | - |

### IndexAnchor Props

| 参数  | 说明     | 类型               | 默认值 |
| ----- | -------- | ------------------ | ------ |
| index | 索引字符 | _number \| string_ | -      |
| anchor | 锚点内容 | _number \| React.ReactNode \| React.ReactNode[]_ | -      |

### IndexBar Events

| 事件名 | 说明                         | 回调参数                  |
| ------ | ---------------------------- | ------------------------- |
| select | 点击索引栏的字符时触发       | _index: number \| string_ |
| change | 当前高亮的索引字符变化时触发 | _index: number \| string_ |

### 方法

通过 ref 可以获取到 IndexBar 实例并调用实例方法。

| 方法名   | 说明           | 参数                      | 返回值 |
| -------- | -------------- | ------------------------- | ------ |
| scrollTo | 滚动到指定锚点 | _index: number \| string_ | -      |
