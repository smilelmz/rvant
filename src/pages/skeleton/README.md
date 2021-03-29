# Skeleton

### Install

```js
import { Skeleton } from 'rvant';
```

## Usage

### Basic Usage

```html
<Skeleton title row="3" />
```

### Show Avatar

```html
<Skeleton title avatar row="3" />
```

### Show Children

```html
<Skeleton title avatar row="3" loading={loading}>
  <div>Content</div>
</Skeleton>
```

```js
const [show, setShow] = useState(false)
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| row | Row count | _number \| string_ | `0` |
| rowWidth | Row width, can be array | _number \| string \|<br>(number \| string)[]_ | `100%` |
| title | Whether to show title placeholder | _boolean_ | `false` |
| avatar | Whether to show avatar placeholder | _boolean_ | `false` |
| loading | Whether to show skeleton，pass `false` to show child component | _boolean_ | `true` |
| animate | Whether to enable animation | _boolean_ | `true` |
| round | Whether to show round title and row | _boolean_ | `false` |
| titleWidth | Title width | _number \| string_ | `40%` |
| avatarSize | Size of avatar placeholder | _number \| string_ | `32px` |
| avatarShape | Shape of avatar placeholder，can be set to `square` | _string_ | `round` |

### Scss Variables

| Name                              | Default Value   | Description |
| --------------------------------- | --------------- | ----------- |
| $skeleton-row-height              | `16px`          | -           |
| $skeleton-row-background-color    | `$active-color` | -           |
| $skeleton-row-margin-top          | `$padding-sm`   | -           |
| $skeleton-title-width             | `40%`           | -           |
| $skeleton-avatar-size             | `32px`          | -           |
| $skeleton-avatar-background-color | `$active-color` | -           |
| $skeleton-animation-duration      | `1.2s`          | -           |
