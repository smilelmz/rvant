# Steps 步骤条

### 介绍

用于展示操作流程的各个环节，让用户了解当前的操作在整体流程中的位置。

### 引入

```js
import { Step, Steps } from 'rvant';
```

## 代码演示

### 基础用法

`active` 属性表示当前步骤的索引，从 0 起计。

```html
<Steps active={active}>
  <Step>买家下单</Step>
  <Step>商家接单</Step>
  <Step>买家提货</Step>
  <Step>交易完成</Step>
</Steps>
```

```js
const [active, setActive] = useState(1)
```

### 自定义样式

可以通过 `activeIcon` 和 `activeColor` 属性设置激活状态下的图标和颜色。

```html
<Steps
  active={active}
  activeIcon='success'
  inactiveIcon='arrow'
  activeColor='#38f'
>
  <Step>买家下单</Step>
  <Step>商家接单</Step>
  <Step>买家提货</Step>
  <Step>交易完成</Step>
</Steps>
```

### 竖向步骤条

可以通过设置 `direction` 属性来改变步骤条的显示方向。

```html
<Steps active={0} direction='vertical'>
  <Step>
    <h3>【城市】物流状态2</h3>
    <p>2016-07-12 12:40</p>
  </Step>
  <Step>
    <h3>【城市】物流状态1</h3>
    <p>2016-07-11 10:00</p>
  </Step>
  <Step>
    <h3>快件已发货</h3>
    <p>2016-07-10 09:30</p>
  </Step>
</Steps>
```

## API

### Steps Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| active | 当前步骤对应的索引值 | _number \| string_ | `0` |
| direction | 步骤条方向，可选值为 `vertical` | _string_ | `horizontal` |
| activeIcon | 当前步骤对应的底部图标，可选值见 Icon 组件 | _string \| React.ReactNode \| React.ReactNode[]_ | `checked` |
| inactiveIcon | 非当前步骤对应的底部图标，可选值见 Icon 组件 | _string \| React.ReactNode \| React.ReactNode[]_ | - |
| finishIcon | 已完成步骤对应的底部图标，优先级高于 `inactiveIcon`，可选值见 Icon 组件 | _string \| React.ReactNode \| React.ReactNode[]_ | - |
| activeColor | 当前步骤和已完成步骤的颜色 | _string_ | `#07c160` |
| inactiveColor | 未激活步骤的颜色 | _string_ | `#969799` |
| iconPrefix | 图标类名前缀，同 Icon 组件的 classPrefix 属性 | _string_ | `van-icon` |

### Steps Events

| 事件名     | 说明                       | 回调参数        |
| ---------- | -------------------------- | --------------- |
| clickStep | 点击步骤的标题或图标时触发 | _index: number_ |

### Scss样式变量

| 名称                             | 默认值          | 描述 |
| -------------------------------- | --------------- | ---- |
| $step-text-color                 | `$gray-6`       | -    |
| $step-active-color               | `$green`        | -    |
| $step-process-text-color         | `$text-color`   | -    |
| $step-font-size                  | `$font-size-md` | -    |
| $step-line-color                 | `$border-color` | -    |
| $step-finish-line-color          | `$green`        | -    |
| $step-finish-text-color          | `$text-color`   | -    |
| $step-icon-size                  | `12px`          | -    |
| $step-circle-size                | `5px`           | -    |
| $step-circle-color               | `$gray-6`       | -    |
| $step-horizontal-title-font-size | `$font-size-sm` | -    |
| $steps-background-color          | `$white`        | -    |
