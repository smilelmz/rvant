# Tag

### Install

```js
import { Tag } from 'rvant';
```

## Usage

### Basic Usage

```html
<Tag type="primary">Tag</Tag>
<Tag type="success">Tag</Tag>
<Tag type="danger">Tag</Tag>
<Tag type="warning">Tag</Tag>
```

### Plain style

```html
<Tag plain type="primary">Tag</Tag>
```

### Round style

```html
<Tag round type="primary">Tag</Tag>
```

### Mark style

```html
<Tag mark type="primary">Tag</Tag>
```

### Closeable

```html
<Tag show={show} closeable size="medium" type="primary" close={close}>
  标签
</Tag>
```

```js
const [show, setShow] = useState(true)
const close = () => {
  setShow(false)
}
```

### Custom Size

```html
<Tag type="primary">Tag</Tag>
<Tag type="primary" size="medium">Tag</Tag>
<Tag type="primary" size="large">Tag</Tag>
```

### Custom Color

```html
<Tag color="#7232dd">Tag</Tag>
<Tag color="#ffe1e1" textColor="#ad0000">Tag</Tag>
<Tag color="#7232dd" plain>Tag</Tag>
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| type | Type, can be set to `primary` `success` `danger` `warning` | _string_ | `default` |
| size | Size, can be set to `large` `medium` | _string_ | - |
| color | Custom color | _string_ | - |
| show | Whether to show tag | _boolean_ | `true` |
| plain | Whether to be plain style | _boolean_ | `false` |
| round | Whether to be round style | _boolean_ | `false` |
| mark | Whether to be mark style | _boolean_ | `false` |
| textColor | Text color | _string_ | `white` |
| closeable | Whether to be closeable | _boolean_ | `false` |

### Events

| Event | Description                        | Arguments           |
| ----- | ---------------------------------- | ------------------- |
| click | Emitted when component is clicked  | _event: MouseEvent_ |
| close | Emitted when close icon is clicked | _event: MouseEvent_ |

### Scss Variables

| Name                        | Default Value               | Description |
| --------------------------- | --------------------------- | ----------- |
| $tag-padding                | `0 $padding-base`           | -           |
| $tag-text-color             | `$white`                    | -           |
| $tag-font-size              | `$font-size-sm`             | -           |
| $tag-border-radius          | `2px`                       | -           |
| $tag-line-height            | `16px`                      | -           |
| $tag-medium-padding         | `2px 6px`                   | -           |
| $tag-large-padding          | `$padding-base $padding-xs` | -           |
| $tag-large-border-radius    | `$border-radius-md`         | -           |
| $tag-large-font-size        | `$font-size-md`             | -           |
| $tag-round-border-radius    | `$border-radius-max`        | -           |
| $tag-danger-color           | `$red`                      | -           |
| $tag-primary-color          | `$blue`                     | -           |
| $tag-success-color          | `$green`                    | -           |
| $tag-warning-color          | `$orange`                   | -           |
| $tag-default-color          | `$gray-6`                   | -           |
| $tag-plain-background-color | `$white`                    | -           |
