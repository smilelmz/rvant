# NoticeBar

### Install

```js
import { NoticeBar } from 'rvant';
```

## Usage

### Basic Usage

```html
<NoticeBar
  text='Notice Content'
  scrollable
  leftIcon='volume-o'
/>
```

### Scrollable

```html
<NoticeBar text='Notice Content' scrollable />
<NoticeBar
  text='Technology is the common soul of the people who developed it.'
  scrollable={false}
/>
```

### Wrapable

```html
<NoticeBar
  text='Notice Content'
  wrapable
  scrollable={false}
/>
```

### Mode

```html
<NoticeBar mode='closeable' text='Notice Content' />
<NoticeBar mode='link' text='Notice Content' />
```

### Custom Style

```html
<NoticeBar
  text='Notice Content'
  color='#1989fa'
  background='#ecf9ff'
  leftIcon='info-o'
/>
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| mode | Mode, can be set to `closeable` `link` | _string_ | `''` |
| text | Notice text content | _string_ | `''` | - |
| color | Text color | _string_ | `#f60` |
| background | Background color | _string_ | `#fff7cc` |
| leftIcon | Left Icon | _string \| React.ReactNode_ | - |
| rightIcon | Left Icon | _React.ReactNode_ | - |
| delay | Animation delay (s) | _number \| string_ | `1` |
| speed | Scroll speed (px/s) | _number \| string_ | `50` |
| scrollable | Whether to scroll content | _boolean_ | - |
| wrapable | Whether to enable text wrap | _boolean_ | `false` | - |

### Events

| Event  | Description                        | Arguments           |
| ------ | ---------------------------------- | ------------------- |
| click  | Emitted when NoticeBar is clicked  | _event: MouseEvent_ |
| close  | Emitted when NoticeBar is closed   | _event: MouseEvent_ |
| replay | Emitted when NoticeBar is replayed | -                   |

### Scss Variables

| Name                         | Default Value             | Description |
| ---------------------------- | ------------------------- | ----------- |
| $notice-bar-height           | `40px`                    | -           |
| $notice-bar-padding          | `0 $padding-md`           | -           |
| $notice-bar-wrapable-padding | `$padding-xs $padding-md` | -           |
| $notice-bar-text-color       | `$orange-dark`            | -           |
| $notice-bar-font-size        | `$font-size-md`           | -           |
| $notice-bar-line-height      | `24px`                    | -           |
| $notice-bar-background-color | `$orange-light`           | -           |
| $notice-bar-icon-size        | `16px`                    | -           |
| $notice-bar-icon-min-width   | `24px`                    | -           |
