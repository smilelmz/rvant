# ShareSheet 分享面板

### 介绍

底部弹起的分享面板，用于展示各分享渠道对应的操作按钮，不含具体的分享逻辑。

### 引入

```js
import { ShareSheet } from 'rvant';
```

## 代码演示

### 基础用法

分享面板通过 `options` 属性来定义分享选项，数组的每一项是一个对象，对象格式见文档下方表格。

```html
<Cell isLink title='显示分享面板' click={() => setShow(true)} />
<ShareSheet
  show={show}
  title='立即分享给好友'
  options={[
    { name: '微信', icon: 'wechat' },
    { name: '微博', icon: 'weibo' },
    { name: '复制链接', icon: 'link' },
    { name: '分享海报', icon: 'poster' },
    { name: '二维码', icon: 'qrcode' }
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

### 展示多行选项

当分享选项的数量较多时，可以将 `options` 定义为数组嵌套的格式，每个子数组会作为一行选项展示。

```html
<ShareSheet
  show={show}
  title='立即分享给好友'
  options={[
    [
      { name: '微信', icon: 'wechat' },
      { name: '朋友圈', icon: 'wechat-moments' },
      { name: '微博', icon: 'weibo' },
      { name: 'QQ', icon: 'qq' }
    ],
    [
      { name: '复制链接', icon: 'link' },
      { name: '分享海报', icon: 'poster' },
      { name: '二维码', icon: 'qrcode' },
      { name: '小程序码', icon: 'weapp-qrcode' }
    ]
  ]}
  cancel={() => setShow(false)}
/>
```

### 自定义图标

除了使用内置的几种图标外，可以直接在 `icon` 中传入图片 URL 来使用自定义的图标。

```html
<ShareSheet
  show={show}
  title='立即分享给好友'
  options={[
    {
      name: '名称',
      icon: 'https://img.yzcdn.cn/vant/custom-icon-fire.png'
    },
    {
      name: '名称',
      icon: 'https://img.yzcdn.cn/vant/custom-icon-light.png'
    },
    {
      name: '名称',
      icon: 'https://img.yzcdn.cn/vant/custom-icon-water.png'
    }
  ]}
  cancel={() => setShow(false)}
/>
```

### 展示描述信息

通过 `description` 属性可以设置标题下方的描述文字, 在 `options` 内设置 `description` 属性可以添加分享选项描述。

```html
<ShareSheet
  show={show}
  title='立即分享给好友'
  options={[
    { name: '微信', icon: 'wechat' },
    { name: '微博', icon: 'weibo' },
    {
      name: '复制链接',
      icon: 'link',
      description: '描述信息'
    },
    { name: '分享海报', icon: 'poster' },
    { name: '二维码', icon: 'qrcode' }
  ]}
  cancel={() => setShow(false)}
/>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| show | 是否显示分享面板 | _boolean_ | `false` |
| options | 分享选项 | _Option[]_ | `[]` |
| title | 顶部标题 | _string \| React.ReactNode \| React.ReactNode[]_ | - |
| cancelText | 取消按钮文字，传入空字符串可以隐藏按钮 | _string \| React.ReactNode \| React.ReactNode[]_ | `'取消'` |
| description | 标题下方的辅助描述文字 | _string \| React.ReactNode \| React.ReactNode[]_ | - |
| duration | 动画时长，单位秒 | _number \| string_ | `0.3` |
| overlay | 是否显示遮罩层 | _boolean_ | `true` |
| overlayClass | 自定义遮罩层类名 | _string \| Array \| object_ | - |
| overlayStyle | 自定义遮罩层样式 | _object_ | - |
| lockScroll | 是否锁定背景滚动 | _boolean_ | `true` |
| closeOnPopstate | 是否在页面回退时自动关闭 | _boolean_ | `true` |
| closeOnClickOverlay | 是否在点击遮罩层后关闭 | _boolean_ | `true` |
| safeAreaInsetBottom | 是否开启底部安全区适配 | _boolean_ | `true` |

### Option 数据结构

`options` 属性为一个对象数组，数组中的每个对象配置一列，对象可以包含以下值：

| 键名 | 说明 | 类型 |
| --- | --- | --- |
| name | 分享渠道名称 | _string_ |
| description | 分享选项描述 | _string_ |
| icon | 图标，可选值为 `wechat` `weibo` `qq` `link` `qrcode` `poster` `weapp-qrcode` `wechat-moments`，支持传入图片 URL | _string_ |
| className | 分享选项类名 | _string_ |

### Events

| 事件名        | 说明                     | 回调参数                        |
| ------------- | ------------------------ | ------------------------------- |
| select        | 点击分享选项时触发       | _option: Option, index: number_ |
| cancel        | 点击取消按钮时触发       | -                               |
| opened        | 打开面板且动画结束后触发 | -                               |
| closed        | 关闭面板且动画结束后触发 | -                               |
| click-overlay | 点击遮罩层时触发         | _event: MouseEvent_             |

### Scss样式变量

| 名称 | 默认值 | 描述 |
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
