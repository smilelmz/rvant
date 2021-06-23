# Tab

### Intro

Used to switch between different content areas.

### Install

```js
import { Tab, Tabs } from 'rvant'
```

## Usage

### Basic Usage

The first tab is actived by default, you can set `active` to active specified tab.

```html
<Tabs
  active={active}
  change={useCallback((v) => setActive(v as number), [])}
>
  {tabs.map((tab) => {
    return (
      <Tab title={`tab ${tab}`} key={tab}>
        content of tab {tab}
      </Tab>
    )
  })}
</Tabs>
```

```js
const [active, setActive] = useState(2)
const tabs = [1, 2, 3, 4]
```

### Match By Name

```html
<van-tabs v-model:active="activeName">
  <van-tab title="tab 1" name="a">content of tab 1</van-tab>
  <van-tab title="tab 2" name="b">content of tab 2</van-tab>
  <van-tab title="tab 3" name="c">content of tab 3</van-tab>
</van-tabs>
<Tabs
  active={active}
  change={useCallback((v) => setActive(v as string), [])}
>
  <Tab title={`tab 1`} name='a'>content of tab 1</Tab>
  <Tab title={`tab 2`} name='b'>content of tab 2</Tab>
  <Tab title={`tab 3`} name='c'>content of tab 3</Tab>
</Tabs>
```

```js
const [active, setActive] = useState('b')
```

### Swipe Tabs

By default more than 5 tabs, you can scroll through the tabs. You can set `swipeThreshold` attribute to customize threshold number.

```html
<Tabs>
  {tabs.map((tab, index) => (
    <Tab title={`tab ${tab}`} key={index}>
      content of tab {tab}
    </Tab>
  ))}
</Tabs>
```

### Disabled Tab

You can set `disabled` attribute on the corresponding `Tabs`.

```html
<Tabs disabledFunc={onClickDisabled}>
  {tabs.map((tab, index) => (
    <Tab title={`tab ${tab}`} key={index} disabled={index === 1}>
      content of tab {tab}
    </Tab>
  ))}
</Tabs>
```

```js
const tabs = [1, 2, 3]
const onClickDisabled = (index: number, title: string) => {
  console.log(index, title)
  Toast.info(`${title} 已禁用`)
}
```

### Card Style

Tabs styled as cards.

```html
<Tabs type='card'>
  {tabs.map((tab, index) => (
    <Tab title={`tab ${tab}`} key={index}>
      content of tab {tab}
    </Tab>
  ))}
</Tabs>
```

### Click Event

```html
<Tabs click={onClick}>
  {tabs.map((tab, index) => (
    <Tab title={`tab ${tab}`} key={index}>
      content of tab {tab}
    </Tab>
  ))}
</Tabs>
```

```js
const tabs = [1, 2, 3]
const onClick = (index: number, title: string) => {
  Toast.info(title)
}
```

### Sticky

In sticky mode, the tab will be fixed to top when scroll to top.

```html
<Tabs sticky>
  {tabs.map((tab, index) => (
    <Tab title={`tab ${tab}`} key={index}>
      content of tab {tab}
    </Tab>
  ))}
</Tabs>
```

### Custom title

Use title slot to custom tab title.

```html
<Tabs>
  {tabs.map((tab, index) => (
    <Tab
      customTitle={<><Icon name='more-o' />标签</>}
      key={index}
    >
      content of tab {tab}
    </Tab>
  ))}
</Tabs>
```

### Switch Animation

Use `animated` props to change tabs with animation.

```html
<Tabs animated>
  {tabs.map((tab) => {
    return (
      <Tab title={`tab ${tab}`} key={tab}>
        content of tab {tab}
      </Tab>
    )
  })}
</Tabs>
```

### Swipeable

In swipeable mode, you can switch tabs with swipe gestrue in the content.

```html
<Tabs swipeable>
  {tabs.map((tab) => {
    return (
      <Tab title={`tab ${tab}`} key={tab}>
        content of tab {tab}
      </Tab>
    )
  })}
</Tabs>
```

### Scrollspy

In scrollspy mode, the list of content will be tiled.

```html
<Tabs scrollspy sticky>
  {tabs.map((tab, index) => (
    <Tab title={`tab ${tab}`} key={index}>
      content of tab {tab}
    </Tab>
  ))}
</Tabs>
```

### Before Change

```html
<Tabs beforeChange={beforeChange as Interceptor}>
  {tabs.map((tab) => {
    return (
      <Tab title={`tab ${tab}`} key={tab}>
        content of tab {tab}
      </Tab>
    )
  })}
</Tabs>
```

```js
const tabs = [1, 2, 3, 4]
const beforeChange = (name: number) => {
  if (name === 1) {
    return false
  }
  return new Promise((resolve) => {
    resolve(name !== 3)
  })
}
```

## API

### Tabs Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- | --- |
| active | Index of active tab | _number \| string_ | `0` |
| color | Tab color | _string_ | `#ee0a24` |
| border | Whether to show border when `type="line"` | _boolean_ | `false` |
| sticky | Whether to use sticky mode | _boolean_ | `false` |
| animated | Whether to change tabs with animation | _boolean_ | `false` |
| ellipsis | Whether to ellipsis too long title | _boolean_ | `true` |
| swipeable | Whether to enable gestures to slide left and right | _boolean_ | `false` |
| scrollspy | Whether to use scrollspy mode | _boolean_ | `false` |
| background | Background color | _string_ | `white` |
| lazyRender | Whether to enable tab content lazy render | _boolean_ | `true` |
| lineWidth | Width of tab line | _number \| string_ | `40px` |
| lineHeight | Height of tab line | _number \| string_ | `3px` |
| beforeChange | Callback function before changing tabs，return `false` to prevent change，support return Promise | _(name) => boolean \| Promise_ | - |
| titleActiveColor | Title active color | _string_ | - |
| titleInactiveColor | Title inactive color | _string_ | - |
| type | Can be set to `line` `card` | _string_ | `line` |
| duration | Toggle tab's animation time | _number \| string_ | `0.3` |
| offsetTop | Sticky offset top , supports `px` `vw` `vh` `rem` unit, default `px` | _number \| string_ | `0` |
| swipeThreshold | Set swipe tabs threshold | _number \| string_ | `5` |
| navLeft | Custom nav left content | _React.ReactNode \| React.ReactNode[]_ | `0` |
| navRight | Custom nav right content | _React.ReactNode \| React.ReactNode[]_| `5` |

### Tab Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| title | Title | _string_ | - |
| disabled | Whether to disable tab | _boolean_ | `false` |
| dot | Whether to show red dot on the title | _boolean_ | `false` |
| badge | Content of the badge on the title | _number \| string_ | - |
| name | Identifier | _number \| string_ | Index of tab |
| titleStyle | Custom title style | _string \| Array \| object_ | - |
| titleClass | Custom title class name | _string \| Array \| object_ | - |
| customTitle | Custom title | _React.ReactNode \| React.ReactNode[]_ | - |

### Tabs Events

| Event | Description | Arguments |
| --- | --- | --- |
| click | Emitted when a tab is clicked | _name: string \| number, title: string_ |
| change | Emitted when active tab changed | _name: string \| number, title: string_ |
| disabled | Emitted when a disabled tab is clicked | _name: string \| number, title: string_ |
| rendered | Emitted when content first rendered in lazy-render mode | _name: string \| number, title: string_ |
| scroll | Emitted when tab scrolling in sticky mode | _{ scrollTop: number, isFixed: boolean }_ |

### Tabs Methods

Use ref to get Tabs instance and call instance methods.

| Name | Description | Attribute | Return value |
| --- | --- | --- | --- |
| resize | Resize Tabs when container element resized or visibility changed | - | - |
| scrollTo | Go to specified tab in scrollspy mode | _name: string \| number_ | - |

### SCSS Variables

| Name                       | Default Value       | Description |
| -------------------------- | ------------------- | ----------- |
| $tab-text-color            | $gray-7             | -           |
| $tab-active-text-color     | $text-color         | -           |
| $tab-disabled-text-color   | $gray-5             | -           |
| $tab-font-size             | $font-size-md       | -           |
| $tab-line-height           | $line-height-md     | -           |
| $tabs-default-color        | $red                | -           |
| $tabs-line-height          | 44px                | -           |
| $tabs-card-height          | 30px                | -           |
| $tabs-nav-background-color | $white              | -           |
| $tabs-bottom-bar-width     | 40px                | -           |
| $tabs-bottom-bar-height    | 3px                 | -           |
| $tabs-bottom-bar-color     | $tabs-default-color | -           |
