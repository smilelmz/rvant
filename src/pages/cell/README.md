# Cell

### Install

```js
import { Cell, CellGroup } from 'SmileUI';
```

## Usage

### Basic Usage

```html
<CellGroup>
  <Cell title="Cell title" value="Content" />
  <Cell title="Cell title" value="Content" label="Description" />
</CellGroup>
```

### Size

```html
<CellGroup>
  <Cell title="Cell title" value="Content" size="large" />
  <Cell
    title="Cell title"
    value="Content"
    size="large"
    label="Description"
  />
</CellGroup>
```

### Left Icon

```html
<CellGroup>
  <Cell title="Cell title" icon="location-o" />
</CellGroup>
```

### Value only

```html
<CellGroup>
  <Cell value="Content" />
</CellGroup>
```

### Link

```html
<CellGroup>
  <Cell title="Cell title" isLink />
  <Cell title="Cell title" isLink value="Content" />
  <Cell title="Cell title" isLink arrowDirection="down" value="Content" />
</CellGroup>
```

### Router

```html 
<CellGroup>
  <Cell title='URL jump' isLink url='https://www.baidu.com' />
  <Cell title='URL jump' isLink url='https://www.baidu.com' replace />
</CellGroup>
```

### Group Title

```html
<CellGroup title="Group 1">
  <Cell title="Cell title" value="Content" />
</CellGroup>
<CellGroup title="Group 2">
  <Cell title="Cell title" value="Content" />
</CellGroup>
```

### Use Slots

```html
<Cell
  title={[
  <span className='custom-title' key='1'>
      Cell
  </span>
  ]}
/>
<Cell
  title='Cell'
  icon='shop-o'
  value={<Icon name='search' className='search-icon' />}
/>

<style>
  .custom-title {
    margin-right: 4px;
    vertical-align: middle;
  }

  .search-icon {
    font-size: 16px;
    line-height: inherit;
  }
</style>
```

### Vertical Center

```html
<Cell center title="Cell title" value="Content" label="Description" />
```

## API

### CellGroup Props

| Attribute | Description                  | Type      | Default |
| --------- | ---------------------------- | --------- | ------- |
| title     | Group title                  | _string \| ReactNode \| ReactNode[]_  | -       |
| border    | Whether to show outer border | _boolean_ | `true`  |

### Cell Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| title | Title | _number \| string_ \| ReactNode \| ReactNode[] | - |
| value | Right text | _number \| string_ \| ReactNode \| ReactNode[] | - |
| label | Description below the title | _string_ \| ReactNode \| ReactNode[] | - |
| size | Size，can be set to `large` | _string_ | - |
| icon | Left Icon | _string_ \| ReactNode \| ReactNode[] | - |
| rightIcon | Right Icon | _string \| ReactNode \| ReactNode[]_ | - |
| iconPrefix `v2.5.3` | Icon className prefix | _string_ | `van-icon` |
| border | Whether to show inner border | _boolean_ | `true` |
| center | Whether to center content vertically | _boolean_ | `true` |
| url | Link URL | _string_ | - |
| replace | If true, the navigation will not leave a history record | _boolean_ | `false` |
| clickable | Whether to show click feedback when clicked | _boolean_ | `false` |
| isLink | Whether to show link icon | _boolean_ | `false` |
| required | Whether to show required mark | _boolean_ | `false` |
| arrowDirection | Can be set to `left` `up` `down` | _string_ | `right` |
| titleStyle | Title style | _any_ | - |
| titleClass | Title className | _any_ | - |
| valueClass | Value className | _any_ | - |
| labelClass | Label className | _any_ | - |

### Cell Events

| Event | Description               | Arguments      |
| ----- | ------------------------- | -------------- |
| click | Triggered when click cell | _event: Event_ |
