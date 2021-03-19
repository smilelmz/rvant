# Overlay

### Install

```js
import { Overlay } from 'rvant'
```

## Usage

### Basic Usage

```html
<Button
  type='primary'
  click={() => setShow(true)}
  style={{ marginLeft: 16 }}
>
  Show Overlay
</Button>
<Overlay show={show} click={() => setShow(false)} />
```

```js
const [show, setShow] = useState(false)
```

### Embedded Content

```html
<Overlay show={show} click={() => setShow(false)}>
  <div className='wrapper'>
    <div className='block' />
  </div>
</Overlay>

<style>
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .block {
    width: 120px;
    height: 120px;
    background-color: #fff;
  }
</style>
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| show | Whether to show overlay | _boolean_ | `false` |
| zIndex | z-index | _number \| string_ | `1` |
| duration | Animation duration | _number \| string_ | `0.3` |
| className | ClassName | _string_ | - |
| customClass | Custom style | _object_ | - |
| lockScroll | Whether to lock background scroll | _boolean_ | `true` |

### Events

| Event | Description                       | Arguments           |
| ----- | --------------------------------- | ------------------- |
| click | Emitted when component is clicked | _event: MouseEvent_ |

### Scss Variables

How to use: [Custom Theme](#/en-US/theme).

| Name                      | Default Value        | Description |
| ------------------------- | -------------------- | ----------- |
| $overlay-z-index          | `1`                  | -           |
| $overlay-background-color | `rgba(0, 0, 0, 0.7)` | -           |
