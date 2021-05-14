# Popover

### Intro

Used to display some content on top of another.

### Install

```js
import { Popover } from 'rvant';
```

## Usage

### Basic Usage

```html
<van-popover v-model:show="showPopover" :actions="actions" $select="onSelect">
  <template #reference>
    <van-button type="primary">Light Theme</van-button>
  </template>
</van-popover>
<Popover
  show={lightTheme}
  actions={[{ text: 'Option 1' }, { text: 'Option 2' }, { text: 'Option 3' }]}
  placement='bottom-start'
  select={onSelect}
  updateShow={(v) => setLightTheme(v)}
  reference={<Button type='primary'>Light Theme</Button>}
/>
```

```js
const [lightTheme, setLightTheme] = useState(false)
const onSelect = (action: { text: string }) => Toast.info(action.text)
```

### Dark theme

Using the `theme` prop to change the style of Popover.

```html
<van-popover v-model:show="showPopover" theme="dark" :actions="actions">
  <template #reference>
    <van-button type="primary">Dark Theme</van-button>
  </template>
</van-popover>
<Popover
  show={darkTheme}
  theme='dark'
  actions={[{ text: 'Option 1' }, { text: 'Option 2' }, { text: 'Option 3' }]}
  select={onSelect}
  updateShow={(v: boolean) => setDarkTheme(v)}
  reference={<Button type='primary'>Dark Theme</Button>}
/>
```

```js
const [darkTheme, setDarkTheme] = useState(false)
```

### Placement

```html
<Popover
  show={placement}
  theme='dark'
  actions={[{ text: 'Option 1' }, { text: 'Option 2' }]}
  select={onSelect}
  placement='bottom-start'
  updateShow={(v: boolean) => setPlacement(v)}
  reference={<div className='demo-popover-refer' />}
/>
```

`placement` supports the following values:

```bash
top           # Top middle
top-start     # Top left
top-end       # Top right
left          # Left middle
left-start    # Left top
left-end      # Left bottom
right         # Right middle
right-start   # Right top
right-end     # Right bottom
bottom        # Bottom middle
bottom-start  # Bottom left
bottom-end    # Bottom right
```

### Show Icon

```html
<Popover
  show={showIcon}
  actions={[
    { text: 'Option 1', icon: 'add-o' },
    { text: 'Option 2', icon: 'music-o' },
    { text: 'Option 3', icon: 'more-o' }
  ]}
  placement='bottom-start'
  select={onSelect}
  updateShow={(v: boolean) => setShowIcon(v)}
  reference={<Button type='primary'>Show Icon</Button>}
/>
```

```js
const [showIcon, setShowIcon] = useState(false)
```

### Disable Action

Using the `disabled` option to disable an action.

```html
<Popover
  show={disableAction}
  actions={[
    { text: 'Option 1', disabled: true },
    { text: 'Option 2', disabled: true },
    { text: 'Option 3' }
  ]}
  select={onSelect}
  updateShow={(v: boolean) =>setDisableAction(v)}
  reference={<Button type='primary'>Disable Action</Button>}
/>
```

```js
const [disableAction, setDisableAction] = useState(false)
```

### Custom Content

```html
<Popover
  show={customContent}
  placement='top-start'
  select={onSelect}
  updateShow={(v: boolean) => setCustomContent(v)}
  reference={<Button type='primary'>Custom Content</Button>}
>
  <Grid
    square
    clickable
    border={false}
    columnNum={3}
    style={{ width: 240 }}
  >
    {new Array(6).fill(1).map((_, index) => (
      <GridItem
        key={index}
        text='Option'
        icon='photo-o'
        click={() => setCustomContent(false)}
      />
    ))}
  </Grid>
</Popover>
```

```js
const [customContent, setCustomContent] = useState(false)
```

## API

### Props

| Attribute           | Description                            | Type                                   | Default  |
| ------------------- | -------------------------------------- | -------------------------------------- | -------- |
| show                | Whether to show Popover                | _boolean_                              | `false`  |
| overlay             | Whether to show overlay                | _boolean_                              | `false`  |
| duration            | Transition duration, unit second       | _number \| string_                     | `0.3`    |
| overlayClass        | Custom overlay class                   | _string \| Array \| object_            | -        |
| overlayStyle        | Custom overlay style                   | _object_                               | -        |
| offset              | Distance to reference                  | _[number, number]_                     | `[0, 8]` |
| theme               | Theme，can be set to `dark`            | _string_                               | `light`  |
| trigger             | Trigger mode，can be set to `manual`   | `click`                                |          |
| actions             | Actions                                | _Action[]_                             | `[]`     |
| placement           | Placement                              | _string_                               | `bottom` |
| closeOnClickAction  | Whether to close when clicking action  | _boolean_                              | `true`   |
| closeOnClickOverlay | Whether to close when clicking outside | _boolean_                              | `true`   |
| closeOnClickOutside | Whether to close when clicking overlay | _boolean_                              | `true`   |
| reference           | Reference Element                      | _React.ReactNode \| React.ReactNode[]_ | -        |
| children            | Custom content                         | _React.ReactNode \| React.ReactNode[]_ | -        |

### Data Structure of Action

| Key       | Description             | Type                        |
| --------- | ----------------------- | --------------------------- |
| text      | Action Text             | _string_                    |
| icon      | Icon                    | _string_                    |
| color     | Action Color            | _string_                    |
| disabled  | Whether to be disabled  | _boolean_                   |
| className | className of the option | _string \| Array \| object_ |

### Events

| Event        | Description                       | Arguments                       |
| ------------ | --------------------------------- | ------------------------------- |
| select       | Emitted when an action is clicked | _action: Action, index: number_ |
| updateShow   | Update popover status             | _action: Action, index: number_ |
| opened       | Emitted when Popover is opened    | -                               |
| closed       | Emitted when Popover is closed    | -                               |
| clickOverlay | Emitted when overlay is clicked   | _event: MouseEvent_             |

### Scss Variables

| Name                                      | Default Value       | Description |
| ----------------------------------------- | ------------------- | ----------- |
| $popover-arrow-size                       | `6px`               | -           |
| $popover-border-radius                    | `$border-radius-lg` | -           |
| $popover-action-width                     | `128px`             | -           |
| $popover-action-height                    | `44px`              | -           |
| $popover-action-font-size                 | `$font-size-md`     | -           |
| $popover-action-line-height               | `$line-height-md`   | -           |
| $popover-action-icon-size                 | `20px`              | -           |
| $popover-light-text-color                 | `$text-color`       | -           |
| $popover-light-background-color           | `$white`            | -           |
| $popover-light-action-disabled-text-color | `$gray-5`           | -           |
| $popover-dark-text-color                  | `$white`            | -           |
| $popover-dark-background-color            | `#4a4a4a`           | -           |
| $popover-dark-action-disabled-text-color  | `$gray-6`           | -           |
