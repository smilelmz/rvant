# ShareSheet

### Install

```js
import { ShareSheet } from 'rvant';
```

## Usage

### Basic Usage

```html
<Cell isLink title='Show ShareSheet' click={() => setShow(true)} />
<ShareSheet
  show={show}
  title='Share'
  options={[
    { name: 'wechat', icon: 'wechat' },
    { name: 'weibo', icon: 'weibo' },
    { name: 'link', icon: 'link' },
    { name: 'poster', icon: 'poster' },
    { name: 'qrcode', icon: 'qrcode' }
  ]}
  cancel={() => setShow(false)}
  select={onSelect}
/>
```

```js
const [show, setShow] = useState(false)
const onSelect = (option: ShareSheetOption) => {
  Toast.info(option.name)
  setShow(false)
}
```

### Multi Line

```html
<ShareSheet
  show={show}
  title='Share'
  options={[
    [
      { name: 'Wechat', icon: 'wechat' },
      { name: 'Wechat Moments', icon: 'wechat-moments' },
      { name: 'Weibo', icon: 'weibo' },
      { name: 'QQ', icon: 'qq' }
    ],
    [
      { name: 'Link', icon: 'link' },
      { name: 'Poster', icon: 'poster' },
      { name: 'Qrcode', icon: 'qrcode' },
      { name: 'Weapp Qrcode', icon: 'weapp-qrcode' }
    ]
  ]}
  cancel={() => setShow(false)}
/>
```

### Custom Icon

```html
<ShareSheet
  show={show}
  title='Share'
  options={[
    {
      name: 'Name',
      icon: 'https://img.yzcdn.cn/vant/custom-icon-fire.png'
    },
    {
      name: 'Name',
      icon: 'https://img.yzcdn.cn/vant/custom-icon-light.png'
    },
    {
      name: 'Name',
      icon: 'https://img.yzcdn.cn/vant/custom-icon-water.png'
    }
  ]}
  cancel={() => setShow(false)}
/>
```

### Show Description

```html
<ShareSheet
  show={show}
  title='Share'
  options={[
    { name: 'Wechat', icon: 'wechat' },
    { name: 'Wechat', icon: 'wechat' },
    {
      name: 'Link',
      icon: 'link',
      description: 'Description'
    },
    { name: 'Poster', icon: 'poster' },
    { name: 'Qrcode', icon: 'qrcode' }
  ]}
  cancel={() => setShow(false)}
/>
```

## API

### Props

| Attribute           | Description                                   | Type                                             | Default    |
| ------------------- | --------------------------------------------- | ------------------------------------------------ | ---------- |
| show                | Whether to show ShareSheet                    | _boolean_                                        | `false`    |
| options             | Share options                                 | _Option[]_                                       | `[]`       |
| title               | Title                                         | _string \| React.ReactNode \| React.ReactNode[]_ | -          |
| cancelText          | Cancel button text                            | _string \| React.ReactNode \| React.ReactNode[]_ | `'Cancel'` |
| description         | Description                                   | _string \| React.ReactNode \| React.ReactNode[]_ | -          |
| duration            | Transition duration, unit second              | _number \| string_                               | `0.3`      |
| overlay             | Whether to show overlay                       | _boolean_                                        | `true`     |
| overlayClass        | Custom overlay class                          | _string \| Array \| object_                      | -          |
| overlayStyle        | Custom overlay style                          | _object_                                         | -          |
| lockScroll          | Whether to lock background scroll             | _boolean_                                        | `true`     |
| closeOnPopstate     | Whether to close when popstate                | _boolean_                                        | `true`     |
| closeOnClickOverlay | Whether to close when overlay is clicked      | _boolean_                                        | `true`     |
| safeAreaInsetBottom | Whether to enable bottom safe area adaptation | _boolean_                                        | `true`     |

### Data Structure of Option

| Key | Description | Type |
| --- | --- | --- |
| name | Option name | _string_ |
| description | Option description | _string_ |
| icon | Option icon，can be set to `wechat` `weibo` `qq` `link` `qrcode` `poster` `weapp-qrcode` `wechat-moments` or image URL | _string_ |
| className | Option className is used to set the class props to the share item | _string_ |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| select | Emitted when an option is clicked | _option: Option, index: number_ |
| cancel | Emitted when the cancel button is clicked | - |
| opened | Emitted when ShareSheet is opened | - |
| closed | Emitted when ShareSheet is closed | - |

### Scss Variables

| Name | Default Value | Description |
| --- | --- | --- |
| $share-sheet-header-padding | `$padding-sm $padding-md $padding-base` | - |
| $share-sheet-title-color | `$text-color` | - |
| $share-sheet-title-font-size | `$font-size-md` | - |
| $share-sheet-title-line-height | `$line-height-md` | - |
| $share-sheet-description-color | `$gray-6` | - |
| $share-sheet-description-font-size | `$font-size-sm` | - |
| $share-sheet-description-line-height | `16px` | - |
| $share-sheet-icon-size | `48px` | - |
| $share-sheet-option-name-color | `$gray-7` | - |
| $share-sheet-option-name-font-size | `$font-size-sm` | - |
| $share-sheet-option-description-color | `$gray-5` | - |
| $share-sheet-option-description-font-size | `$font-size-sm` | - |
| $share-sheet-cancel-button-font-size | `$font-size-lg` | - |
| $share-sheet-cancel-button-height | `48px` | - |
| $share-sheet-cancel-button-background | `$white` | - |
