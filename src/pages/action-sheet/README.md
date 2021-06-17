# ActionSheet

### Install

```js
import { ActionSheet } from 'rvant';
```

## Usage

### Basic Usage

Use `actions` prop to set options of action-sheet.

```html
<Cell isLink title='Basic Usage' click={() => setShow(true)} />
<ActionSheet
  show={show}
  actions={[{ name: 'Option 1' }, { name: 'Option 2' }, { name: 'Option 3' }]}
  cancel={() => setShow(false)}
  select={onSelect}
/>
```

```js
const [show, setShow] = useState(false)
const onSelect = (item: ActionSheetAction) => {
  setShow(false)
  Toast.info(item.name)
}
```

### Show Cancel Button

```html
<ActionSheet
  show={show}
  closeOnClickAction
  actions={[{ name: 'Option 1' }, { name: 'Option 2' }, { name: 'Option 3' }]}
  cancel={() => setShow(false)}
  cancelText='Cancel'
/>
```

### Show Description

```html
<ActionSheet
  show={show}
  closeOnClickAction
  actions={[
    { name: 'Option 1' },
    { name: 'Option 2' },
    { name: 'Option 3', subname: 'Description' }
  ]}
  cancelText='Cancel'
  description='Description'
  cancel={() => setShow(false)}
/>
```

### Option Status

```html
<ActionSheet
  show={show}
  closeOnClickAction
  actions={[
    { name: 'Colored Option', color: '#ee0a24' },
    { name: 'Disabled Option', disabled: true },
    { name: 'Loading Option', loading: true }
  ]}
  cancel={() => setShow(false)}
  cancelText='Cancel'
/>
```

### Custom Panel

```html
<ActionSheet show={show} title='Title' cancel={() => setShow(false)}>
  <div className='demo-action-sheet-content'>Content</div>
</ActionSheet>

<style>
  .content {
    padding: 16px 16px 160px;
  }
</style>
```

## API

### Props

| Attribute           | Description                                   | Type                                             | Default |   |   |
| ------------------- | --------------------------------------------- | ------------------------------------------------ | ------- | - | - |
| show                | Whether to show ActionSheet                   | _boolean_                                        | `false` |   |   |
| actions             | Options                                       | _Action[]_                                       | `[]`    |   |   |
| title               | Title                                         | _string_                                         | -       |   |   |
| cancelText          | Text of cancel button                         | _string \| React.ReactNode \| React.ReactNode[]_ | -       |   |   |
| description         | Description above the options                 | _string \| React.ReactNode \| React.ReactNode[]_ | -       |   |   |
| closeable           | Whether to show close icon                    | _boolean_                                        | `true`  |   |   |
| closeIcon           | Close icon name                               | _string_                                         | `cross` |   |   |
| duration            | Transition duration, unit second              | _number \| string_                               | `0.3`   |   |   |
| round               | Whether to show round corner                  | _boolean_                                        | `true`  |   |   |
| overlay             | Whether to show overlay                       | _boolean_                                        | `true`  |   |   |
| overlayClass        | Custom overlay class                          | _string \| Array \| object_                      | -       |   |   |
| overlayStyle        | Custom overlay style                          | _object_                                         | -       |   |   |
| lockScroll          | Whether to lock background scroll             | _boolean_                                        | `true`  |   |   |
| closeOnPopstate     | Whether to close when popstate                | _boolean_                                        | `false` |   |   |
| closeOnClickAction  | Whether to close when an action is clicked    | _boolean_                                        | `false` |   |   |
| closeOnClickOverlay | Whether to close when overlay is clicked      | _boolean_                                        | `true`  |   |   |
| safeAreaInsetBottom | Whether to enable bottom safe area adaptation | _boolean_                                        | `true`  |   |   |

### Data Structure of Action

| Key       | Description                     | Type                        |
| --------- | ------------------------------- | --------------------------- |
| name      | Title                           | _string_                    |
| subname   | Subtitle                        | _string_                    |
| color     | Text color                      | _string_                    |
| className | className for the option        | _string \| Array \| object_ |
| loading   | Whether to be loading status    | _boolean_                   |
| disabled  | Whether to be disabled          | _boolean_                   |
| callback  | Callback function after clicked | _action: Action_            |

### Events

| Event         | Description                               | Arguments                       |
| ------------- | ----------------------------------------- | ------------------------------- |
| select        | Emitted when an option is clicked         | _action: Action, index: number_ |
| cancel        | Emitted when the cancel button is clicked | -                               |
| opened        | Emitted when ActionSheet is opened        | -                               |
| closed        | Emitted when ActionSheet is closed        | -                               |

### Scss Variables

| Name                                   | Default Value       | Description |
| -------------------------------------- | ------------------- | ----------- |
| $action-sheet-max-height               | `80%`               | -           |
| $action-sheet-header-height            | `48px`              | -           |
| $action-sheet-header-font-size         | `$font-size-lg`     | -           |
| $action-sheet-description-color        | `$gray-6`           | -           |
| $action-sheet-description-font-size    | `$font-size-md`     | -           |
| $action-sheet-description-line-height  | `$line-height-md`   | -           |
| $action-sheet-item-background          | `$white`            | -           |
| $action-sheet-item-font-size           | `$font-size-lg`     | -           |
| $action-sheet-item-line-height         | `$line-height-lg`   | -           |
| $action-sheet-item-text-color          | `$text-color`       | -           |
| $action-sheet-item-disabled-text-color | `$gray-5`           | -           |
| $action-sheet-subname-color            | `$gray-6`           | -           |
| $action-sheet-subname-font-size        | `$font-size-sm`     | -           |
| $action-sheet-subname-line-height      | `$line-height-sm`   | -           |
| $action-sheet-close-icon-size          | `22px`              | -           |
| $action-sheet-close-icon-color         | `$gray-5`           | -           |
| $action-sheet-close-icon-active-color  | `$gray-6`           | -           |
| $action-sheet-close-icon-padding       | `0 $padding-md`     | -           |
| $action-sheet-cancel-text-color        | `$gray-7`           | -           |
| $action-sheet-cancel-padding-top       | `$padding-xs`       | -           |
| $action-sheet-cancel-padding-color     | `$background-color` | -           |
| $action-sheet-loading-icon-size        | `22px`              | -           |
