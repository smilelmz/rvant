# List

### Intro

A list component to show items and control loading status.

### Install

```js
import { List } from 'rvant'
```

## Usage

### Basic Usage

```html
<List
  loading={loading}
  finished={finished}
  finishedText='Finished'
  load={onLoad}
  updateLoading={(v) => setLoading(v)}
>
  {items.map((item, index) => (
    <Cell title={item} key={index} />
  ))}
</List>
```

```js
const [items, setItems] = useState<string[]>([])
const [loading, setLoading] = useState(false)
const [finished, setFinished] = useState(false)

const onLoad = () => {
  setLoading(true)
  setTimeout(() => {
    for (let i = 0; i < 10; i++) {
      const text = items.length + 1
      items.push(text < 10 ? `0${text}` : String(text))
    }

    setItems(items)
    setLoading(false)

    if (items.length >= 40) {
      setFinished(true)
    }
  }, 2000)
}
```

### Error Info

```html
<List
  loading={loading}
  error={error}
  finished={finished}
  finishedText='Finished'
  errorText='Request failed. Click to reload'
  load={onLoad}
  updateLoading={(v) => setLoading(v)}
  updateError={(v) => setError(v)}
>
  {items.map((item, index) => (
    <Cell title={item} key={index} />
  ))}
</List>
```

```js
const [items, setItems] = useState<string[]>([])
const [loading, setLoading] = useState(false)
const [error, setError] = useState(false)
const [finished, setFinished] = useState(false)

const onLoad = () => {
  setLoading(true)
  setTimeout(() => {
    const newItems = items
    for (let i = 0; i < 10; i++) {
      const text = newItems.length + 1
      newItems.push(text < 10 ? `0${text}` : String(text))
    }

    setItems(newItems)
    setLoading(false)

    if (newItems.length === 10 && !error) {
      setError(true)
    } else {
      setError(false)
    }

    if (newItems.length >= 40) {
      setFinished(true)
    }
  }, 2000)
}
```

### PullRefresh

```html
<PullRefresh
  value={refreshing}
  change={useCallback((v: boolean) => setRefreshing(v), [])}
  refresh={() => onRefresh()}
>
  <List
    loading={loading}
    finished={finished}
    finishedText='Finished'
    load={onLoad}
    updateLoading={(v) => setLoading(v)}
  >
    {items.map((item, index) => (
      <Cell title={item} key={index} />
    ))}
  </List>
</PullRefresh>
```

```js
const [items, setItems] = useState<string[]>([])
const [loading, setLoading] = useState(false)
const [refreshing, setRefreshing] = useState(false)
const [finished, setFinished] = useState(false)

const onLoad = () => {
  setLoading(true)
  setTimeout(() => {
    let newItems = items
    if (refreshing) {
      newItems = []
    }
    for (let i = 0; i < 10; i++) {
      const text = newItems.length + 1
      newItems.push(text < 10 ? `0${text}` : String(text))
    }

    setItems(newItems)
    setLoading(false)
    setRefreshing(false)

    if (newItems.length >= 40) {
      setFinished(true)
    }
  }, 2000)
}

const onRefresh = () => {
  setFinished(false)
  onLoad()
}
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| error | Whether loading is error，the `load` event will be Emitted only when error text clicked | _boolean_ | `false` |
| loading | Whether to show loading info，the `load` event will not be Emitted when loading | _boolean_ | `false` |
| finished | Whether loading is finished，the `load` event will not be Emitted when finished | _boolean_ | `false` |
| errorText | Error loaded text | _string_ | - |
| loadingText | Loading text | _string_ | `加载中...` |
| finishedText | Finished text | _string_ | - |
| immediateCheck | Whether to check loading position immediately after mounted | _boolean_ | `true` |
| offset | The load event will be Emitted when the distance between the scrollbar and the bottom is less than offset | _number \| string_ | `300` |
| direction | Scroll direction，can be set to `up` | _string_ | `down` |
| customLoading | Custom loading tips | _React.ReactNode \| React.ReactNode[]_ | `down` |
| customFinished | Custom finished tips | _React.ReactNode \| React.ReactNode[]_ | `down` |
| customError | Custom error tips | _React.ReactNode \| React.ReactNode[]_ | `down` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| load | Emitted when the distance between the scrollbar and the bottom is less than offset | - |

### Methods

Use ref to get List instance and call instance methods.

| Name  | Description           | Attribute | Return value |
| ----- | --------------------- | --------- | ------------ |
| check | Check scroll position | -         | -            |

### CSS Variables

| Name                    | Default Value   | Description |
| ----------------------- | --------------- | ----------- |
| $list-text-color        | `$gary-6`       | -           |
| $list-text-font-size    | `$font-size-md` | -           |
| $list-text-line-height  | `50px`          | -           |
| $list-loading-icon-size | `16px`          | -           |
