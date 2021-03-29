# Toast

### Install

```js
import { Toast } from 'rvant';
```

## Usage

### Basic Usage

```html
<Cell title='Text' isLink click={showText} />
<Cell title='Loading' isLink click={showLoading} />
<Cell title='Success' isLink click={showSuccess} />
<Cell title='Failure' isLink click={showFailure} />
```

```js
const showText = () => {
  Toast.info('text content', 5)
}
const showLoading = () => {
  Toast.loading({ message: 'loading text' })
}
const showSuccess = () => {
  Toast.success('success text')
}
const showFailure = () => {
  Toast.fail('fail text')
}
```

### Custom Icon

```html
<Cell title='custom icon' isLink click={showIcon} />
<Cell title='custom image' isLink click={showIconUrl} />
<Cell title='custom loading icon' isLink click={showCommonLoading} />
```

```js
const showIcon = () => {
  Toast.show({
    message: 'custom icon',
    icon: 'like-o'
  })
}
const showIconUrl = () => {
  Toast.show({
    message: 'custom image',
    icon: 'https://img.yzcdn.cn/vant/logo.png'
  })
}
const showCommonLoading = () => {
  Toast.show({
    type: 'loading',
    message: 'loading...',
    loadingType: 'spinner'
  })
}
```

### Custom Position

```html
<Cell title='Top' isLink click={showTop} />
<Cell title='Bottom' isLink click={showBottom} />
```

```js
const showTop = () => {
  Toast.show({
    message: 'Top',
    position: 'top'
  })
}
const showBottom = () => {
  Toast.show({
    message: 'Bottom',
    position: 'bottom'
  })
```

### Set Default Options

The Toast default configuration can be globally modified with the `Toast.setDefaultConfig` function.

```js
Toast.setDefaultConfig({ duration: 3, mask: false, position: 'middle' });
```

### 方法

| Methods                | Description                         | Attribute                     | Return value |
| ---------------------- | ----------------------------------- | ----------------------------- | ------------ |
| Toast.show             | Show toast                          | `options`                     | `void`       |
| Toast.info             | Show info toast                     | `message, duration, position` | `void`       |
| Toast.success          | Show success toast                  | `message, duration`           | `void`       |
| Toast.fail             | Show fail toast                     | `message, duration`           | `void`       |
| Toast.loading          | Show loading toast                  | `options`                     | `void`       |
| Toast.hide             | Close toast                         | -                             | `void`       |
| Toast.setDefaultConfig | Reset default options of all toasts | `IToastConfig`                | `void`       |

### Options

| Attribute   | Description                                            | Type                        | Default    |   |
| ----------- | ------------------------------------------------------ | --------------------------- | ---------- | - |
| type        | Can be set to `text` `loading` `success` `fail` `html` | _string_                    | `text`     |   |
| position    | Can be set to `top` `bottom`                           | _string_                    | `middle`   |   |
| message     | Message                                                | _string_                    | `''`       | - |
| icon        | Custom icon                                            | _string_                    | -          |   |
| iconSize    | Custom icon size                                       | _number \| string_          | `36px`     |   |
| iconPrefix  | Icon className prefix                                  | _string_                    | `van-icon` |   |
| mask        | Whether to show overlay                                | _boolean_                   | `false`    |   |
| loadingType | Loading icon type, can be set to `spinner`             | _string_                    | `circular` |   |
| duration    | Toast duration(ms), won't disappear if value is 0      | _number_                    | `2000`     |   |
| className   | Custom className                                       | _string \| Array \| object_ | -          |   |
| onOpened    | Callback function after opened                         | _Function_                  | -          |   |
| onClose     | Callback function after close                          | _Function_                  | -          |   |

### Scss Variables

| Name                            | Default Value             | Description |
| ------------------------------- | ------------------------- | ----------- |
| $toast-max-width                | `70%`                     | -           |
| $toast-font-size                | `$font-size-md`           | -           |
| $toast-text-color               | `$white`                  | -           |
| $toast-loading-icon-color       | `$white`                  | -           |
| $toast-line-height              | `$line-height-md`         | -           |
| $toast-border-radius            | `$border-radius-lg`       | -           |
| $toast-background-color         | `rgba($black, 70%)`       | -           |
| $toast-icon-size                | `36px`                    | -           |
| $toast-text-min-width           | `96px`                    | -           |
| $toast-text-padding             | `$padding-xs $padding-sm` | -           |
| $toast-default-padding          | `$padding-md`             | -           |
| $toast-default-width            | `88px`                    | -           |
| $toast-default-min-height       | `88px`                    | -           |
| $toast-position-top-distance    | `20%`                     | -           |
| $toast-position-bottom-distance | `20%`                     | -           |
