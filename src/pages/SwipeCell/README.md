# SwipeCell

### Intro

Used for cell components that can slide left and right to display operation buttons.

### Install

```js
import { SwipeCell } from 'rvant'
```

## Usage

### Basic Usage

```html
<SwipeCell
  left={<Button square type='primary' text='Select' />}
  right={[
    <Button key='delete' square type='danger' text='Delete' />,
    <Button key='collect' square type='primary' text='Collect' />
  ]}
>
  <Cell border={false} title='Cell' value='Cell Content' />
</SwipeCell>
```

### Custom Content

```html
<SwipeCell
  right={
    <Button
      className='delete-button'
      key='delete'
      square
      type='danger'
      text='Delete'
    />
  }
>
  <div style={{ width: '100%', height: 200, background: '#fff' }}>
    Custom Content
  </div>
</SwipeCell>
```

### Before Close

```html
<SwipeCell
  beforeClose={beforeClose as Interceptor}
  left={
    <Button className='delete-button' square type='primary' text='Select' />
  }
  right={
    <Button className='delete-button' square type='danger' text='Delete' />
  }
>
  <Cell border={false} title='Cell' value='Cell Content' />
</SwipeCell>
```

```js
const beforeClose = ({ position }: { position: string }) => {
  switch (position) {
    case 'left':
    case 'cell':
    case 'outside':
      return true
    case 'right':
      return new Promise((resolve) => {
        Toast.loading({
          onClose: () => {
            resolve(1)
          }
        })
      })
    default:
  }
}
```

## API

### Props

| Attribute        | Description                                 | Type                           | Default |
| ---------------- | ------------------------------------------- | ------------------------------ | ------- |
| name             | Identifier of SwipeCell                     | _number \| string_             | -       |
| leftWidth       | Width of the left swipe area                | _number \| string_             | `auto`  |
| rightWidth      | Width of the right swipe area               | _number \| string_             | `auto`  |
| beforeClose     | Callback function before close              | _(args) => boolean \| Promise_ | -       |
| disabled         | Whether to disabled swipe                   | _boolean_                      | `false` |
| stopPropagation | Whether to stop touchmove event propagation | _boolean_                      | `false` |
| left       | content of left scrollable area                           | _React.ReactNode \| React.ReactNode[]_             | `auto`  |
| right      | content of right scrollabe area                          | _React.ReactNode \| React.ReactNode[]_             | `auto`  |

### Events

| Event | Description                       | Arguments                                                                        |
| ----- | --------------------------------- | -------------------------------------------------------------------------------- |
| click | Emitted when SwipeCell is clicked | _position: 'left' \| 'right' \| 'cell' \| 'outside'_                             |
| open  | Emitted when SwipeCell is opened  | _{ name: string \| number, position: 'left' \| 'right' }_                        |
| close | Emitted when SwipeCell is closed  | _{ name: string \| number, position: 'left' \| 'right' \| 'cell' \| 'outside' }_ |

### beforeClose Params

| Attribute | Description   | Type                                       |
| --------- | ------------- | ------------------------------------------ |
| name      | Name          | _string \| number_                         |
| position  | Click positon | _'left' \| 'right' \| 'cell' \| 'outside'_ |

### Methods

Use [ref](https://v3.vuejs.org/guide/component-template-refs.html) to get SwipeCell instance and call instance methods.

| Name  | Description     | Attribute                                    | Return value |
| ----- | --------------- | -------------------------------------------- | ------------ |
| open  | open SwipeCell  | side: `left \| right`                        | -            |
| close | close SwipeCell | position: `left \| right \| cell \| outside` | -            |

### Scss Variables

| Name                              | Default Value                        | Description |
| --------------------------------- | ------------------------------------ | ----------- |
| $switch-cell-padding-top          | `$cell-vertical-padding - 1px`       | -           |
| $switch-cell-padding-bottom       | `$cell-vertical-padding - 1px`       | -           |
| $switch-cell-large-padding-top    | `$cell-large-vertical-padding - 1px` | -           |
| $switch-cell-large-padding-bottom | `$cell-large-vertical-padding - 1px` | -           |
