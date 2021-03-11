# Button

### Install

```js
import { Button } from 'SmileUI'
```

## Usage

### Type

```html
<Button type="primary">Primary</Button>
<Button type="info">Info</Button>
<Button type="default">Default</Button>
<Button type="danger">Danger</Button>
<Button type="warning">Warning</Button>
```

### Plain

```html
<Button plain type="primary">Primary</Button>
<Button plain type="info">Danger</Button>
```

### Hairline

```html
<Button plain hairline type="primary">Hairline</Button>
<Button plain hairline type="info">Hairline</Button>
```

### Disabled

```html
<Button disabled type="primary">Diabled</Button>
<Button disabled type="info">Diabled</Button>
```

### Loading

```html
<Button loading type="primary" />
<Button loading type="primary" loadingType="spinner" />
<Button loading type="info" loadingText="Loading..." />
```

### Shape

```html
<Button square type="primary">Square</Button>
<Button round type="info">Round</Button>
```

### Icon

```html
<Button icon="plus" type="primary" />
<Button icon="plus" type="primary">Button</Button>
<Button icon="https://img.yzcdn.cn/vant/user-active.png" type="info">
  Button
</Button>
```

### Size

```html
<Button type="primary" size="large">Large</Button>
<Button type="primary" size="normal">Normal</Button>
<Button type="primary" size="small">Small</Button>
<Button type="primary" size="mini">Mini</Button>
```

### Block Element

```html
<Button type="primary" block>Block Element</Button>
```

### Route

```html
<Button tag='a' type='primary' url='https://www.baidu.com'>
  new tips page
</Button>
<Button tag='a' type='primary' url='https://www.baidu.com' replace>
  current page
</Button>
```

### Custom Color

```html
<Button color="#7232dd">Pure</Button>
<Button color="#7232dd" plain fontColor='#ee0a24'>Pure</Button>
<Button color="linear-gradient(to right, #ff6034, #ee0a24)">
  Gradient
</Button>
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| type | Can be set to `primary` `info` `warning` `danger` | _string_ | `default` |
| text | Text | _string_ | - |
| color | Color, support linear-gradient | _string_ | - |
| fontColor | button font color | _string_ | - |
| loading | Whether show loading status | _boolean_ | `false` |
| loadingIcon | Custom react loading icon | _ReactNode_ | - |
| loadingText | Loading text | _string_ | - |
| loadingType | Loading type, can be set to`spinner` `circular` | _string_ | `circular` |
| loadingSize | Loading icon size | _string_ | `20px` |
| size | Can be set to `large` `small` `mini` `normal` | _string_ | `normal` |
| icon | Left Icon | _string_ | - |
| iconPrefix | Icon className prefix | _string_ | `van-icon` |
| block | Whether to set display block | _boolean_ | `false` |
| plain | Whether to be plain button | _boolean_ | `false` |
| square | Whether to be square button | _boolean_ | `false` |
| round | Whether to be round button | _boolean_ | `false` |
| disabled | Whether to disable button | _boolean_ | `false` |
| hairline | Whether to use 0.5px border | _boolean_ | `false` |
| tag | Root element HTML tag, can be set to `button` `a` | _string_ | `button` |
| nativeType |  button type, can be set to `button` `submit` `reset` | _string_ | - |
| url | jump url in tap | _string_ | - |
| replace | Whether replace current page | _boolean_ | `false` |
| iconPosition | Icon position, can be set to `right` | _string_ | `left` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| click | Triggered when click button and not disabled or loading | _event: Event_ |
