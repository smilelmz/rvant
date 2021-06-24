# PullRefresh 下拉刷新

### 介绍

用于提供下拉刷新的交互操作。

### 引入

```js
import { PullRefresh } from 'rvant'
```

## 代码演示

### 基础用法

下拉刷新时会触发 `refresh` 事件，在事件的回调函数中可以进行同步或异步操作，操作完成后将 `value` 设置为 `false`，表示加载完成。

```html
<PullRefresh
  value={loading}
  change={useCallback((v: boolean) => setLoading(v), [])}
  refresh={() => onRefresh(true)}
>
  <p>刷新次数: {{ state.count }}</p>
</PullRefresh>
```

```js
const [loading, setLoading] = useState(false)
const [count, setCount] = useState(0)
const onRefresh = (showToast: boolean) => {
  setTimeout(() => {
    if (showToast) {
      Toast.info('刷新成功')
    }
    setLoading(false)
    setCount(count + 1)
  }, 1000)
}
```

### 成功提示

通过 `successText` 可以设置刷新成功后的顶部提示文案。

```html
<PullRefresh
  value={loading}
  successText='刷新成功'
  change={useCallback((v: boolean) => setLoading(v), [])}
  refresh={() => onRefresh(false)}
>
  <p>刷新次数: {{ count }}</p>
</PullRefresh>
```

### 自定义提示

```html
<PullRefresh
  value={loading}
  headHeight={80}
  change={useCallback((v: boolean) => setLoading(v), [])}
  refresh={() => onRefresh(true)}
  <!-- 下拉提示，通过 scale 实现一个缩放效果 -->
  pulling={({ distance }) => (
    <img
      className='doge'
      src='https://b.yzcdn.cn/vant/doge.png'
      style={{ transform: `scale(${distance / 80})` }}
    />
  )}
  <!-- 释放提示 -->
  loosing={() => (
    <img src='https://b.yzcdn.cn/vant/doge.png' className='doge' />
  )}
  <!-- 加载提示 -->
  loading={() => (
    <img src='https://b.yzcdn.cn/vant/doge-fire.jpg' className='doge' />
  )}
>
  <p>刷新次数: {{ count }}</p>
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

| 参数              | 说明                     | 类型                                       | 默认值               |   |
| ----------------- | ------------------------ | ------------------------------------------ | -------------------- | - |
| value             | 是否处于加载中状态       | _boolean_                                  | -                    |   |
| pullingText       | 下拉过程提示文案         | _string_                                   | `下拉即可刷新...`    |   |
| loosingText       | 释放过程提示文案         | _string_                                   | `释放即可刷新...`    |   |
| loadingText       | 加载过程提示文案         | _string_                                   | `加载中...`          |   |
| successText       | 刷新成功提示文案         | _string_                                   | -                    |   |
| successDuration   | 刷新成功提示展示时长(ms) | _number \| string_                         | `500`                |   |
| animationDuration | 动画时长                 | _number \| string_                         | `300`                |   |
| headHeight        | 顶部内容高度             | _number \| string_                         | `50`                 |   |
| pullDistance      | 触发下拉刷新的距离       | _number \| string_                         | 与 `headHeight` 一致 |   |
| disabled          | 是否禁用下拉刷新         | _boolean_                                  | `false`              |   |
| normal            | 非下拉状态时顶部内容     | _({ distance: number }) => React.ReactNode \| React.ReactNode[]_   | - |
| pulling           | 下拉过程中顶部内容       | _({ distance: number }) => React.ReactNode \| React.ReactNode[]_   | - |
| loosing           | 释放过程中顶部内容       | _({ distance: number }) => React.ReactNode \| React.ReactNode[]_   | - |
| loading           | 加载过程中顶部内容       | _({ distance: number }) => React.ReactNode \| React.ReactNode[]_   | - |
| success           | 刷新成功提示内容         | _({ distance: number }) => React.ReactNode \| React.ReactNode[]_   | - |

### Events

| 事件名  | 说明             | 回调参数 |
| ------- | ---------------- | -------- |
| refresh | 下拉刷新时触发   | -        |
| change  | 下拉刷新状态变更 | -        |

### Scss样式变量

| 名称                                 | 默认值                    | 描述 |
| ------------------------------------ | ------------------------- | ---- |
| $pull-refresh-head-height       | `50px`                    | -    |
| $pull-refresh-head-font-size    | `$font-size-md` | -    |
| $pull-refresh-head-text-color   | `$gary-6`       | -    |
| $pull-refresh-loading-icon-size | `16px`                   | -    |
