# IndexBar

### Intro

Used for indexed sorting display and quick positioning of lists.

### Install

```js
import { IndexIndexBar, IndexAnchorBar } from 'rvant'
```

## Usage

### Basic Usage

```html
<IndexBar>
  {indexList.map((item, index) => {
    return (
      <IndexAnchor anchor={item} key={index} index={item}>
        <Cell title={`Text ${item}`} />
        <Cell title={`Text ${item}`} />
        <Cell title={`Text ${item}`} />
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

### Custom Index List

```html
<IndexBar indexList={customIndexList}>
  {customIndexList.map((item, index) => {
    return (
      <IndexAnchor anchor={`Title ${item}`} key={index} index={item}>
        <Cell title={`Text ${item}`} />
        <Cell title={`Text ${item}`} />
        <Cell title={`Text ${item}`} />
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

| Attribute | Description | Type | Default |
| --- | --- | --- | --- | --- |
| indexList | Index List | _string[] \| number[]_ | `A-Z` |
| zIndex | z-index | _number \| string_ | `1` |
| sticky | Whether to enable anchor sticky top | _boolean_ | `true` |
| stickyOffsetTop | Anchor offset top when sticky | _number_ | `0` |
| highlightColor | Index character highlight color | _string_ | `#ee0a24` |
| teleport | Specifies a target element where IndexBar will be mounted | _boolean \| Element_ | - |
| teleportClassName | target element class | _string_ | - |
| teleportStyle | target element style | _object_ | - |

### IndexAnchor Props

| Attribute | Description | Type               | Default |
| --------- | ----------- | ------------------ | ------- |
| index     | Index       | _number \| string_ | -       |
| anchor | anchor content | _number \| React.ReactNode \| React.ReactNode[]_ | -      |

### IndexBar Events

| Event  | Description                       | Arguments                 |
| ------ | --------------------------------- | ------------------------- |
| select | Emitted when an index is selected | _index: number \| string_ |
| change | Emitted when active index changed | _index: number \| string_ |

### Methods

Use ref to get IndexBar instance and call instance methods.

| Name | Description | Attribute | Return value |
| --- | --- | --- | --- |
| scrollTo | scroll to target element | _index: number \| string_ | - |
