# Tabbar

### Intro

Used to switch between different pages.

### Install

```js
import { Tabbar, TabbarItem } from 'rvant'
```

## Usage

### Basic Usage

```html
<Tabbar
  value={active}
  change={useCallback((v) => setActive(v as number), [])}
>
  <TabbarItem icon='home-o'>Tab</TabbarItem>
  <TabbarItem icon='search'>Tab</TabbarItem>
  <TabbarItem icon='friends-o'>Tab</TabbarItem>
  <TabbarItem icon='setting-o'>Tab</TabbarItem>
</Tabbar>
```

```js
const [active, setActive] = useState(0)
```

### Match by name

```html
<Tabbar
  value={active}
  change={useCallback((v) => setActive(v as string), [])}
>
  <TabbarItem name='home' icon='home-o'>
    Tab
  </TabbarItem>
  <TabbarItem name='search' icon='search'>
    Tab
  </TabbarItem>
  <TabbarItem name='friends' icon='friends-o'>
    Tab
  </TabbarItem>
  <TabbarItem name='setting' icon='setting-o'>
    Tab
  </TabbarItem>
</Tabbar>
```

### Show Badge

```html
<Tabbar
  value={active}
  change={useCallback((v) => setActive(v as number), [])}
>
  <TabbarItem icon='home-o'>Tab</TabbarItem>
  <TabbarItem icon='search' dot>
    Tab
  </TabbarItem>
  <TabbarItem icon='friends-o' badge='5'>
    Tab
  </TabbarItem>
  <TabbarItem icon='setting-o' badge='20'>
    Tab
  </TabbarItem>
</Tabbar>
```

### Custom Icon

Use `customIcon` slot to custom icon.

```html
<Tabbar
  value={active}
  change={useCallback((v) => setActive(v as number), [])}
>
  <TabbarItem
    customIcon={(active) => (
      <img src={active ? icon.active : icon.inactive} />
    )}
  >
    Tab
  </TabbarItem>
  <TabbarItem icon='search'>Tab</TabbarItem>
  <TabbarItem icon='setting-o'>Tab</TabbarItem>
</Tabbar>
```

```js
const [active, setActive] = useState(0)
const icon = {
  active: 'https://img.yzcdn.cn/vant/user-active.png',
  inactive: 'https://img.yzcdn.cn/vant/user-inactive.png'
}
```

### Custom Color

```html
<Tabbar
  value={active}
  activeColor='#ee0a24'
  inactiveColor='#000'
  change={useCallback((v) => setActive(v as number), [])}
>
  <TabbarItem icon='home-o'>Tab</TabbarItem>
  <TabbarItem icon='search'>Tab</TabbarItem>
  <TabbarItem icon='friends-o'>Tab</TabbarItem>
  <TabbarItem icon='setting-o'>Tab</TabbarItem>
</Tabbar>
```

### Change Event

```html
<Tabbar value={active} change={onChange}>
  <TabbarItem icon='home-o'>Tab</TabbarItem>
  <TabbarItem icon='search'>Tab</TabbarItem>
  <TabbarItem icon='friends-o'>Tab</TabbarItem>
  <TabbarItem icon='setting-o'>Tab</TabbarItem>
</Tabbar>
```

```js
const [active, setActive] = useState(0)
const onChange = useCallback((v) => {
  Toast.info(v)
  setActive(v as number)
}, [])
```

### Route Mode

```html
<router-view />

<van-tabbar route>
  <van-tabbar-item replace to="/home" icon="home-o">Tab</van-tabbar-item>
  <van-tabbar-item replace to="/search" icon="search">Tab</van-tabbar-item>
</van-tabbar>
```

## API

### Tabbar Props

| Attribute           | Description                                                                                      | Type                           | Default   |
| ------------------- | ------------------------------------------------------------------------------------------------ | ------------------------------ | --------- |
| value               | Identifier of current tab                                                                        | _number \| string_             | `0`       |
| fixed               | Whether to fixed bottom                                                                          | _boolean_                      | `true`    |
| border              | Whether to show border                                                                           | _boolean_                      | `true`    |
| zIndex              | Z-index                                                                                          | _number \| string_             | `1`       |
| activeColor         | Color of active tab item                                                                         | _string_                       | `#1989fa` |
| inactiveColor       | Color of inactive tab item                                                                       | _string_                       | `#7d7e80` |
| placeholder         | Whether to generage a placeholder element when fixed                                             | _boolean_                      | `false`   |
| safeAreaInsetBottom | Whether to enable bottom safe area adaptation                                                    | _boolean_                      | `false`   |
| beforeChange        | Callback function before changing tabs，return `false` to prevent change，support return Promise | _(name) => boolean \| Promise_ | -         |

### Tabbar Events

| Event  | Description                      | Arguments                  |
| ------ | -------------------------------- | -------------------------- |
| change | Emitted when changing active tab | _active: number \| string_ |

### TabbarItem Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| name | Identifier | _number \| string_ | Item index |
| icon | Icon name | _string_ | - |
| iconPrefix | Icon className prefix | _string_ | `van-icon` |
| dot | Whether to show red dot | _boolean_ | - |
| badge | Content of the badge | _number \| string_ | `''` |
| customIcon | custom icon | _(active: boolean) => React.ReactNode_ | - |

### TabbarItem Events

| Event | Description | Arguments           |
| ----- | ----------- | ------------------- |
| click | click event | _event: MouseEvent_ |

### Scss Variables

| Name                                 | Default Value   | Description |
| ------------------------------------ | --------------- | ----------- |
| $tabbar-height                       | `50px`          | -           |
| $tabbar-z-index                      | `1`             | -           |
| $tabbar-background-color             | `$white`        | -           |
| $tabbar-item-font-size               | `$font-size-sm` | -           |
| $tabbar-item-text-color              | `$gray-7`       | -           |
| $tabbar-item-active-color            | `$blue`         | -           |
| $tabbar-item-active-background-color | `$white`        | -           |
| $tabbar-item-line-height             | `1`             | -           |
| $tabbar-item-icon-size               | `22px`          | -           |
| $tabbar-item-margin-bottom           | `4px`           | -           |
