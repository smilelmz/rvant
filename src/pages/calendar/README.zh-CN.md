# Calendar 日历

### 介绍

日历组件用于选择日期或日期区间。

### 引入

```js
import { Calendar } from 'rvant';
```

## 代码演示

### 选择单个日期

下面演示了结合单元格来使用日历组件的用法，日期选择完成后会触发 `confirm` 事件。

```html
<Cell
  title='选择单个日期'
  isLink
  value={date}
  click={() => setShow(true)}
/>
<Calendar show={show} confirm={onConfirm} />
```

```js
const [show, setShow] = useState(false)
const [date, setDate] = useState('')
const formatDate = (date) => `${date.getMonth() + 1}/${date.getDate()}`
const onConfirm = (value) => {
  setShow(false)
  value && setDate(formatDate(value))
}
```

### 选择多个日期

设置 `type` 为 `multiple` 后可以选择多个日期，此时 `confirm` 事件返回的 date 为数组结构，数组包含若干个选中的日期。

```html
<Cell
  title='选择多个日期'
  isLink
  value={date}
  click={() => setShow(true)}
/>
<Calendar show={show} confirm={onConfirm} type="multiple" />
```

```js
const [show, setShow] = useState(false)
const [date, setDate] = useState('')
const onConfirm = (dates) => {
  setShow(false)
  dates && setDate(`选择了 ${dates.length} 个日期`)
}
```

### 选择日期区间

设置 `type` 为 `range` 后可以选择日期区间，此时 `confirm` 事件返回的 date 为数组结构，数组第一项为开始时间，第二项为结束时间。

```html
<Cell
  title='选择日期区间'
  isLink
  value={date}
  click={() => setShow(true)}
/>
<Calendar show={show} confirm={onConfirm} type="range" />
```

```js
const [show, setShow] = useState(false)
const [date, setDate] = useState('')
const formatDate = (date) => `${date.getMonth() + 1}/${date.getDate()}`
const onConfirm = (dates) => {
  const [start, end] = dates;
  setShow(false)
  dates && setDate(`${formatDate(start)} - ${formatDate(end)}`)
}
```

> Tips: 默认情况下，日期区间的起止时间不能为同一天，可以通过设置 allowSameDay 属性来允许选择同一天。

### 快捷选择

将 `showConfirm` 设置为 `false` 可以隐藏确认按钮，这种情况下选择完成后会立即触发 `confirm` 事件。

```html
<Calendar show={show} showConfirm={false} confirm={onConfirm} />
```

### 自定义颜色

通过 `color` 属性可以自定义日历的颜色，对选中日期和底部按钮生效。

```html
<Calendar show={show} color="#1989fa" confirm={onConfirm} />
```

### 自定义日期范围

通过 `minDate` 和 `maxDate` 定义日历的范围。

```html
<Calendar 
  show={show}
  minDate={new Date(2010, 0, 1)}
  maxDate={new Date(2010, 0, 31)}
  confirm={onConfirm}
/>
```

### 自定义按钮文字

通过 `confirmText` 设置按钮文字，通过 `confirmDisabledText` 设置按钮禁用时的文字。

```html
<Calendar 
  show={show}
  type="range"
  confirmText="完成"
  confirmDisabledText="请选择结束时间"
/>
```

### 自定义日期文案

通过传入 `formatter` 函数来对日历上每一格的内容进行格式化。

```html
<Calendar show={show} type="range" formatter={formatter} />
```

```js
const formatter = (day) => {
  const month = day.date.getMonth() + 1;
  const date = day.date.getDate();

  if (month === 5) {
    if (date === 1) {
      day.topInfo = '劳动节';
    } else if (date === 4) {
      day.topInfo = '青年节';
    } else if (date === 11) {
      day.text = '今天';
    }
  }

  if (day.type === 'start') {
    day.bottomInfo = '入住';
  } else if (day.type === 'end') {
    day.bottomInfo = '离店';
  }

  return day;
}
```

### 自定义弹出位置

通过 `position` 属性自定义弹出层的弹出位置，可选值为 `top`、`left`、`right`。

```html
<Calendar show={show} round={false} position="right" />
```

### 日期区间最大范围

选择日期区间时，可以通过 `maxRange` 属性来指定最多可选天数，选择的范围超过最多可选天数时，会弹出相应的提示文案。

```html
<Calendar show={show} maxRange="3" type="range" style={{ height: '500px' }} />
```

### 自定义周起始日

通过 `firstDayOfWeek` 属性设置一周从哪天开始。

```html
<Calendar show={show} firstDayOfWeek={1} />
```

### 平铺展示

将 `poppable` 设置为 `false`，日历会直接展示在页面内，而不是以弹层的形式出现。

```html
<Calendar 
  title="日历"
  poppable={false}
  showConfirm={false}
  style={{ height: '500px' }}
/>
```

## API

### Props

| 参数                | 说明                                                                            | 类型                                             | 默认值             |
| ------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------ | ------------------ |
| show                | 显示日历                                                                        | _boolean_                                        | `false`            |
| type                | 选择类型:`single` 单个日期，`multiple` 多个日期，`range` 日期区间               | _string_                                         | `single`           |
| title               | 日历标题                                                                        | _string \| React.ReactNode \| React.ReactNode[]_ | `日期选择`         |
| color               | 主题色，对底部按钮和选中日期生效                                                | _string_                                         | `#ee0a24`          |
| footer              | 自定义底部区域内容                                                              | _string \| React.ReactNode \| React.ReactNode[]_ | `null`          |
| minDate             | 可选择的最小日期                                                                | _Date_                                           | 当前日期           |
| maxDate             | 可选择的最大日期                                                                | _Date_                                           | 当前日期的六个月后 |
| defaultDate         | 默认选中的日期，`type` 为 `multiple` 或 `range` 时为数组，`null` 表示默认不选择 | _Date \| Date[] \| null_                         | 今天               |
| rowHeight           | 日期行高                                                                        | _number \| string_                               | `64`               |
| formatter           | 日期格式化函数                                                                  | _(day: Day) => Day_                              | -                  |
| poppable            | 是否以弹层的形式展示日历                                                        | _boolean_                                        | `true`             |
| lazyRender          | 是否只渲染可视区域的内容                                                        | _boolean_                                        | `true`             |
| showMark            | 是否显示月份背景水印                                                            | _boolean_                                        | `true`             |
| showTitle           | 是否展示日历标题                                                                | _boolean_                                        | `true`             |
| showSubtitle        | 是否展示日历副标题（年月）                                                      | _boolean_                                        | `true`             |
| showConfirm         | 是否展示确认按钮                                                                | _boolean_                                        | `true`             |
| readonly            | 是否为只读状态，只读状态下不能选择日期                                          | _boolean_                                        | `false`            |
| confirmText         | 确认按钮的文字                                                                  | _string_                                         | `确定`             |
| confirmDisabledText | 确认按钮处于禁用状态时的文字                                                    | _string_                                         | `确定`             |
| firstDayOfWeek      | 设置周起始日                                                                    | _0-6_                                            | `0`                |

### Poppable Props

当 Canlendar 的 `poppable` 为 `true` 时，支持以下 props:

| 参数                | 说明                                    | 类型      | 默认值   |
| ------------------- | --------------------------------------- | --------- | -------- |
| position            | 弹出位置，可选值为 `top` `right` `left` | _string_  | `bottom` |
| round               | 是否显示圆角弹窗                        | _boolean_ | `true`   |
| closeOnClickOverlay | 是否在点击遮罩层后关闭                  | _boolean_ | `true`   |
| safeAreaInsetBottom | 是否开启[底部安全区适配]                | _boolean_ | `true`   |

### Range Props

当 Canlendar 的 `type` 为 `range` 时，支持以下 props:

| 参数           | 说明                                 | 类型               | 默认值                   |
| -------------- | ------------------------------------ | ------------------ | ------------------------ |
| maxRange      | 日期区间最多可选天数                 | _number \| string_ | 无限制                   |
| rangePrompt   | 范围选择超过最多可选天数时的提示文案 | _string_           | `选择天数不能超过 xx 天` |
| allowSameDay | 是否允许日期范围的起止时间为同一天   | _boolean_          | `false`                  |

### Multiple Props

当 Canlendar 的 `type` 为 `multiple` 时，支持以下 props:

| 参数         | 说明                             | 类型               | 默认值                   |
| ------------ | -------------------------------- | ------------------ | ------------------------ |
| maxRange    | 日期最多可选天数                 | _number \| string_ | 无限制                   |
| rangePrompt | 选择超过最多可选天数时的提示文案 | _string_           | `选择天数不能超过 xx 天` |

### Day 数据结构

日历中的每个日期都对应一个 Day 对象，通过`formatter`属性可以自定义 Day 对象的内容

| 键名       | 说明                                                                | 类型     |
| ---------- | ------------------------------------------------------------------- | -------- |
| date       | 日期对应的 Date 对象                                                | _Date_   |
| type       | 日期类型，可选值为 `selected`、`start`、`middle`、`end`、`disabled` | _string_ |
| text       | 中间显示的文字                                                      | _string_ |
| topInfo    | 上方的提示信息                                                      | _string_ |
| bottomInfo | 下方的提示信息                                                      | _string_ |
| className  | 额外类名                                                            | _string_ |

### Events

| 事件名     | 说明                                                                  | 回调参数                        |
| ---------- | --------------------------------------------------------------------- | ------------------------------- |
| select     | 点击并选中任意日期时触发                                              | _value: Date \| Date[]_         |
| confirm    | 日期选择完成后触发，若 `show-confirm` 为 `true`，则点击确认按钮后触发 | _value: Date \| Date[]_         |
| close      | 关闭弹出层时触发                                                      | -                               |
| opened     | 打开弹出层且动画结束后触发                                            | -                               |
| closed     | 关闭弹出层且动画结束后触发                                            | -                               |
| unselect   | 当日历组件的 `type` 为 `multiple` 时，取消选中日期时触发              | _value: Date_                   |
| monthShow | 当某个月份进入可视区域时触发                                          | _{ date: Date, title: string }_ |


### 方法

通过 ref 可以获取到 Calendar 实例并调用实例方法。

| 方法名       | 说明                                                 | 参数                    | 返回值 |
| ------------ | ---------------------------------------------------- | ----------------------- | ------ |
| reset        | 将选中的日期重置到指定日期，未传参时会重置到默认日期 | _date?: Date \| Date[]_ | -      |
| scrollToDate | 滚动到某个日期                                       | _date: Date_            | -      |

### Scss样式变量

| 名称                                      | 默认值                                 | 描述 |
| ----------------------------------------- | -------------------------------------- | ---- |
| $calendar-background-color                | `$white`                               | -    |
| $calendar-popup-height                    | `80%`                                  | -    |
| $calendar-header-box-shadow               | `0 2px 10px rgba(125, 126, 128, 0.16)` | -    |
| $calendar-header-title-height             | `44px`                                 | -    |
| $calendar-header-title-font-size          | `$font-size-lg`                        | -    |
| $calendar-header-subtitle-font-size       | `$font-size-md`                        | -    |
| $calendar-weekdays-height                 | `30px`                                 | -    |
| $calendar-weekdays-font-size              | `$font-size-sm`                        | -    |
| $calendar-month-title-font-size           | `$font-size-md`                        | -    |
| $calendar-month-mark-color                | `fade($gray-2, 80%)`                   | -    |
| $calendar-month-mark-font-size            | `160px`                                | -    |
| $calendar-day-height                      | `64px`                                 | -    |
| $calendar-day-font-size                   | `$font-size-lg`                        | -    |
| $calendar-range-edge-color                | `$white`                               | -    |
| $calendar-range-edge-background-color     | `$red`                                 | -    |
| $calendar-range-middle-color              | `$red`                                 | -    |
| $calendar-range-middle-background-opacity | `0.1`                                  | -    |
| $calendar-selected-day-size               | `54px`                                 | -    |
| $calendar-selected-day-color              | `$white`                               | -    |
| $calendar-info-font-size                  | `$font-size-xs`                        | -    |
| $calendar-info-line-height                | `$line-height-xs`                      | -    |
| $calendar-selected-day-background-color   | `$red`                                 | -    |
| $calendar-day-disabled-color              | `$gray-5`                              | -    |
| $calendar-confirm-button-height           | `36px`                                 | -    |
| $calendar-confirm-button-margin           | `7px 0`                                | -    |

## 常见问题

### 在 iOS 系统上初始化组件失败？

如果你遇到了在 iOS 上无法渲染组件的问题，请确认在创建 Date 对象时没有使用`new Date('2020-01-01')`这样的写法，iOS 不支持以中划线分隔的日期格式，正确写法是`new Date('2020/01/01')`。
