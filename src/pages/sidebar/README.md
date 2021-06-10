# Sidebar

### Intro

The vertically displayed navigation bar is used to switch between different content areas.

### Install

```js
import { Sidebar, SidebarItem } from 'rvant'
```

## Usage

### Basic Usage

```html
<Sidebar
  value={active}
  change={useCallback((v) => setActive(v as number), [])}
>
  <SidebarItem title='Title' />
  <SidebarItem title='Title' />
  <SidebarItem title='Title' />
</Sidebar>
```

```js
const [active, setActive] = useState(0)
```

### Show Badge

```html
<Sidebar
  value={active}
  change={useCallback((v) => setActive(v as number), [])}
>
  <SidebarItem title='Title' dot />
  <SidebarItem title='Title' badge='5' />
  <SidebarItem title='Title' badge='20' />
</Sidebar>
```

### Disabled

```html
<Sidebar
  value={active}
  change={useCallback((v) => setActive(v as number), [])}
>
  <SidebarItem title='Title' />
  <SidebarItem title='Title' disabled />
  <SidebarItem title='Title' />
</Sidebar>
```

### Change Event

```html
<Sidebar value={active} change={onChange}>
  <SidebarItem title='Title 1' />
  <SidebarItem title='Title 2' />
  <SidebarItem title='Title 3' />
</Sidebar>
```

```js
const [active, setActive] = useState(0)
const onChange = useCallback((v) => {
Toast.info(`Title ${v}`)
setActive(v as number)
}, [])
```

## API

### Sidebar Props

| Attribute | Description          | Type               | Default |
| --------- | -------------------- | ------------------ | ------- |
| value   | Index of chosen item | _number \| string_ | `0`     |

### Sidebar Events

| Event  | Description                      | Arguments       |
| ------ | -------------------------------- | --------------- |
| change | Emitted when chosen item changed | _index: number_ |

### SidebarItem Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| title | Content | _string \| React.ReactNode \| React.ReactNode[]_ | `''` |
| dot | Whether to show red dot | _boolean_ | `false` |
| badge | Content of the badge | _number \| string_ | `''` |
| disabled | Whether to be disabled | _boolean_ | `false` |

### SidebarItem Events

| Event | Description                     | Arguments       |
| ----- | ------------------------------- | --------------- |
| click | Emitted when an item is clicked | _index: number_ |

### Scss Variables

| Name                               | Default Value       | Description |
| ---------------------------------- | ------------------- | ----------- |
| $sidebar-width                     | `80px`              | -           |
| $sidebar-font-size                 | `$font-size-md`     | -           |
| $sidebar-line-height               | `$line-height-md`   | -           |
| $sidebar-text-color                | `$text-color`       | -           |
| $sidebar-disabled-text-color       | `$gray-5`           | -           |
| $sidebar-padding                   | `20px $padding-sm`  | -           |
| $sidebar-active-color              | `$active-color`     | -           |
| $sidebar-background-color          | `$background-color` | -           |
| $sidebar-selected-font-weight      | `$font-weight-bold` | -           |
| $sidebar-selected-text-color       | `$text-color`       | -           |
| $sidebar-selected-border-width     | `4px`               | -           |
| $sidebar-selected-border-height    | `16px`              | -           |
| $sidebar-selected-border-color     | `$red`              | -           |
| $sidebar-selected-background-color | `$white`            | -           |
