# Divider

### Install

```js
import { Divider } from 'rvant';
```

## Usage

### Basic Usage

```html
<Divider />
```

### With Text

```html
<Divider>Text</Divider>
```

### Content Position

```html
<Divider contentPosition='left'>Text</Divider>
<Divider contentPosition='right'>Text</Divider>
```

### Dashed

```html
<Divider dashed hairline={false}>
  Text
</Divider>
```

### Custom Style

```html
<Divider
  style={{
    borderColor: '#1989fa',
    color: '#1989fa',
    padding: '0 16px'
  }}
>
  Text
</Divider>
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| dashed | Whether to use dashed border | _boolean_ | `false` |
| hairline | Whether to use hairline | _boolean_ | `true` |
| contentPosition | Content position，can be set to `left` `right` | _string_ | `center` |

### Scss Variables

| Name                         | Default Value   | Description |
| ---------------------------- | --------------- | ----------- |
| $divider-margin              | `$padding-md 0` | -           |
| $divider-text-color          | `$gray-6`       | -           |
| $divider-font-size           | `$font-size-md` | -           |
| $divider-line-height         | `24px`          | -           |
| $divider-border-color        | `$border-color` | -           |
| $divider-content-padding     | `$padding-md`   | -           |
| $divider-content-left-width  | `10%`           | -           |
| $divider-content-right-width | `10%`           | -           |
