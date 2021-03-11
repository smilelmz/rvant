# Popup

### Install

```js
import { Popup } from 'rvant';
```

## Usage

### Basic Usage

```html
<Popup
  show={showBase}
  style={{ padding: '30px 50px' }}
  close={() => setShowBase(false)}
>
  center
</Popup>
<Cell title='Show Popup' isLink click={() => setShowBase(true)} />
```

```js
const [showBase, setShowBase] = useState(false)
```

### Position

Use `position` prop to set popup display position.

```html
<Popup
  show={showTop}
  style={{ height: '30%' }}
  position='top'
  close={() => setShowTop(false)}
/>
```

### Close Icon

```html
<Popup
  show={showIconOne}
  style={{ height: '30%' }}
  position='bottom'
  closeable
  close={() => setShowIconOne(false)}
/>
<Popup
  show={showIconTwo}
  style={{ height: '30%' }}
  position='bottom'
  closeable
  closeIcon='close'
  close={() => setShowIconTwo(false)}
/>
<Popup
  show={showIconThree}
  style={{ height: '30%' }}
  closeable
  closeIconPosition='top-left'
  position='bottom'
  close={() => setShowIconThree(false)}
/>
```

### Round Corner

```html
<Popup
  show={showRound}
  style={{ height: '30%' }}
  position='bottom'
  round
  close={() => setShowRound(false)}
/>
```
## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| show | Whether to show popup | _boolean_ | `false` |
| overlay | Whether to show overlay | _boolean_ | `true` |
| overlayClass | Custom overlay class | _string \| Array \| object_ | - |
| overlayStyle | Custom overlay style | _object_ | - |
| position | Can be set to `top` `bottom` `right` `left` | _string_ | `center` |
| duration | Transition duration, unit second | _number \| string_ | `0.3` |
| round | Whether to show round corner | _boolean_ | `false` |
| lockScroll | Whether to lock background scroll | _boolean_ | `true` |
| closeOnClickOverlay | Whether to close when overlay is clicked | _boolean_ | `true` |
| closeable | Whether to show close icon | _boolean_ | `false` |
| closeIcon | Close icon name | _string_ | `cross` |
| closeIconPosition | Close Icon Position，can be set to `top-left` `bottom-left` `bottom-right` | _string_ | `top-right` |
| transition | Transition, equivalent to `name` prop of [transtion](https://v3.vuejs.org/api/built-in-components.html#transition) | _string_ | - |
| transitionAppear | Whether to apply transition on initial render | _boolean_ | `false` |
| teleport | Return the mount node for Popup | _string \| Element_ | - |
| safeAreaInsetBottom | Whether to enable bottom safe area adaptation | _boolean_ | `false` |

### Events

| Event            | Description                        | Arguments           |
| ---------------- | ---------------------------------- | ------------------- |
| click            | Emitted when Popup is clicked      | _event: MouseEvent_ |
| close            | Emitted when closing Popup         | -                   |
| opened           | Emitted when Popup is opened       | -                   |
| closed           | Emitted when Popup is closed       | -                   |
