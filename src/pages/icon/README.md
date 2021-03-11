# Icon

### Install

```js
import { Icon } from 'rvant';
```

## Usage

### Basic Usage

Use `name` prop to set icon name or icon URL

```html
<Icon name="chat-o" />
<Icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
```

### Show Badge

Use `dot` prop, a small red dot will be displayed in the upper right corner of the icon.

Use `badge` prop, the badge will be displayed in the upper right corner of the icon.

```html
<Icon name="chat-o" dot />
<Icon name="chat-o" badge="9" />
<Icon name="chat-o" badge="99+" />
```

### Icon Color

Use `color` prop to set icon color

```html
<Icon name="chat-o" color="#1989fa" />
<Icon name="chat-o" color="#07c160" />
```

### Icon Size

Use `size` prop to set icon size

```html
<Icon name="chat-o" size="40" /> <Icon name="chat-o" size="3rem" />
```

### Use local font file

Icon uses font file in `yzcdn.cn` by default，if you want to use the local font file，please import the following css file.

```js
import 'vant/lib/icon/local.css';
```

### Add custom iconfont

```css
@font-face {
  font-family: 'my-icon';
  src: url('./my-icon.ttf') format('truetype');
}

.my-icon {
  font-family: 'my-icon';
}

.my-icon-extra::before {
  content: '\e626';
}
```

```html
<Icon classPrefix="my-icon" name="extra" />
```

## API

### Props

| Attribute      | Description             | Type               | Default    |
| -------------- | ----------------------- | ------------------ | ---------- |
| name           | Icon name or URL        | _string_           | `''`       |
| dot  | Whether to show red dot | _boolean_          | `false`    |
| badge | Content of the badge    | _number \| string_ | `''`       |
| color          | Icon color              | _string_           | `inherit`  |
| size           | Icon size               | _number \| string_ | `inherit`  |
| classPrefix  | ClassName prefix        | _string_           | `Icon` |
| tag            | HTML Tag                | _HTMLElementTagNameMap_           | `i`        |

### Events

| Event | Description               | Arguments      |
| ----- | ------------------------- | -------------- |
| click | Triggered when click icon | _event: Event_ |
