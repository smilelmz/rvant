# Loading

### Install

```js
import { Loading } from 'rvant';`
```

## Usage

### Type

```html
<Loading />
<Loading type='spinner' />`
```

### Color

```html
<Loading color='#1989fa' />
<Loading type='spinner' color='#1989fa' />`
```

### Size

```html
<Loading size='24' />
<Loading size='24' type='spinner' />`
```

### Text

```html
<Loading size='24px'>加载中...</Loading>`
```

### Vertical

```html
<Loading size='24px' vertical>加载中...</Loading>`
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| color | Loading color | _string_ | `#c9c9c9` |
| type | Can be set to `spinner` | _string_ | `circular` |
| size | Icon size | _number \| string_ | `30px` |
| textSize | Text font size | _number \| string_ | `14px` |
| vertical | Whether to arrange icons and text content vertically | _boolean_ | `false` |

### Slots

| Name    | Description  |
| ------- | ------------ |
| default | Loading text |
