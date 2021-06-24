# PullRefresh

### Intro

Used to provide interactive operations for pull-down refresh.

### Install

```js
import { PullRefresh } from 'rvant'
```

## Usage

### Basic Usage

The `refresh` event will be Emitted when pull refresh, you should set `value` to `false` to reset loading status after process refresh event.

```html
<PullRefresh
  value={loading}
  change={useCallback((v: boolean) => setLoading(v), [])}
  refresh={() => onRefresh(true)}
>
  <p>Refresh Count: {{ state.count }}</p>
</PullRefresh>
```

```js
const [loading, setLoading] = useState(false)
const [count, setCount] = useState(0)
const onRefresh = (showToast: boolean) => {
  setTimeout(() => {
    if (showToast) {
      Toast.info('Refresh Success')
    }
    setLoading(false)
    setCount(count + 1)
  }, 1000)
}
```

### Success Tip

Use `successText` to set the success prompt after the refresh is successful

```html
<PullRefresh
  value={loading}
  successText='刷新成功'
  change={useCallback((v: boolean) => setLoading(v), [])}
  refresh={() => onRefresh(false)}
>
  <p>Refresh Count: {{ count }}</p>
</PullRefresh>
```

### Custom Tips

Use slots to custom tips.

```html
<PullRefresh
  value={loading}
  headHeight={80}
  change={useCallback((v: boolean) => setLoading(v), [])}
  refresh={() => onRefresh(true)}
  pulling={({ distance }) => (
    <img
      className='doge'
      src='https://b.yzcdn.cn/vant/doge.png'
      style={{ transform: `scale(${distance / 80})` }}
    />
  )}
  loosing={() => (
    <img src='https://b.yzcdn.cn/vant/doge.png' className='doge' />
  )}
  loading={() => (
    <img src='https://b.yzcdn.cn/vant/doge-fire.jpg' className='doge' />
  )}
>
  <p>Refresh Count: {{ count }}</p>
</PullRefresh>

<style>
  .doge {
    width: 140px;
    height: 72px;
    margin-top: 8px;
    border-radius: 4px;
  }
</style>
```

## API

### Props

| Attribute             | Description                              | Type                                                             | Default               |
| --------------------- | ---------------------------------------- | ---------------------------------------------------------------- | --------------------- |
| value                 | Loading status                           | _boolean_                                                        | -                     |
| pullingText           | Text to show when pulling                | _string_                                                         | `Pull to refresh...`  |
| loosingText           | Text to show when loosing                | _string_                                                         | `Loose to refresh...` |
| loadingText           | Text to show when loading                | _string_                                                         | `Loading...`          |
| successText           | Text to show when loading success        | _string_                                                         | -                     |
| successDuration       | Success text display duration(ms)        | _number \| string_                                               | `500`                 |
| animationDuration     | Animation duration                       | _number \| string_                                               | `300`                 |
| headHeight            | Height of head                           | _number \| string_                                               | `50`                  |
| pullDistance `v3.0.8` | The distance to trigger the pull refresh | _number \| string_                                               | same as `head-height` |
| disabled              | Whether to disable pull refresh          | _boolean_                                                        | `false`               |
| normal                | Content of head when at normal status    | _({ distance: number }) => React.ReactNode \| React.ReactNode[]_ | -                     |
| pulling               | Content of head when at pulling          | _({ distance: number }) => React.ReactNode \| React.ReactNode[]_ | -                     |
| loosing               | Content of head when at loosing          | _({ distance: number }) => React.ReactNode \| React.ReactNode[]_ | -                     |
| loading               | Content of head when at loading          | _({ distance: number }) => React.ReactNode \| React.ReactNode[]_ | -                     |
| success               | Content of head when succeed             | _({ distance: number }) => React.ReactNode \| React.ReactNode[]_ | -                     |

### Events

| Event   | Description                   | Parameters |
| ------- | ----------------------------- | ---------- |
| refresh | Emitted after pulling refresh | -          |

### SCSS Variables

| Name                            | Default Value   | Description |
| ------------------------------- | --------------- | ----------- |
| $pull-refresh-head-height       | `50px`          | -           |
| $pull-refresh-head-font-size    | `$font-size-md` | -           |
| $pull-refresh-head-text-color   | `$gary-6`       | -           |
| $pull-refresh-loading-icon-size | `16px`          | -           |
