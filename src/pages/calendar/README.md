# Calendar

### Intro

Calendar component for selecting dates or date ranges.

### Install

```js
import { Calendar } from 'rvant';
```

## Usage

### Select Single Date

The `confirm` event will be emitted after the date selection is completed.

```html
<Cell
  title='Select Single Date"'
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

### Select Multiple Date

```html
<Cell
  title='Select Multiple Date'
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
  dates && setDate(`${dates.length} dates selected`)
}
```

### Select Date Range

You can select a date range after setting `type` to`range`. In range mode, the date returned by the `confirm` event is an array, the first item in the array is the start time and the second item is the end time.

```html
<Cell
  title='Select Date Range'
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

### Quick Select

Set `showConfirm` to `false` to hide the confirm button. In this case, the `confirm` event will be emitted immediately after the selection is completed.

```html
<Calendar show={show} showConfirm={false} confirm={onConfirm} />
```

### Custom Color

Use `color` prop to custom calendar color.

```html
<Calendar show={show} color="#1989fa" confirm={onConfirm} />
```

### Custom Date Range

Use `minDate` and `maxDate` to custom date range.

```html
<Calendar 
  show={show}
  minDate={new Date(2010, 0, 1)}
  maxDate={new Date(2010, 0, 31)}
  confirm={onConfirm}
/>
```

### Custom Confirm Text

Use `confirmText` and `confirmDisabledText` to custom confirm text.

```html
<Calendar 
  show={show}
  type="range"
  confirmText="OK"
  confirmDisabledText="Select End Time"
/>
```

### Custom Day Text

Use `formatter` to custom day text.

```html
<Calendar show={show} type="range" formatter={formatter} />
```

```js
const formatter = (day) => {
  const month = day.date.getMonth() + 1;
  const date = day.date.getDate();

  if (month === 5) {
    if (date === 1) {
      day.topInfo = 'Labor Day';
    } else if (date === 4) {
      day.topInfo = 'Youth Day';
    } else if (date === 11) {
      day.text = 'Today';
    }
  }

  if (day.type === 'start') {
    day.bottomInfo = 'In';
  } else if (day.type === 'end') {
    day.bottomInfo = 'Out';
  }

  return day;
}
```

### Custom Position

Use `position` to custom popup position，can be set to `top`、`left`、`right`.

```html
<Calendar show={show} round={false} position="right" />
```

### Max Range

When selecting a date range, you can use the `maxRange` prop to specify the maximum number of selectable days.

```html
<Calendar show={show} maxRange="3" type="range" style={{ height: '500px' }} />
```

### Custom First Day Of Week

Use `firstDayOfWeek` to custom the start day of week

```html
<Calendar show={show} firstDayOfWeek={1} />
```

### Tiled display

Set `poppable` to `false`, the calendar will be displayed directly on the page instead of appearing as a popup

```html
<Calendar 
  title="Calendar"
  poppable={false}
  showConfirm={false}
  style={{ height: '500px' }}
/>
```

## API

### Props

| Attribute           | Description                                   | Type                                             | Default                    |
| ------------------- | --------------------------------------------- | ------------------------------------------------ | -------------------------- |
| show                | show calendar                                 | _string_                                         | `false`                    |
| type                | Type，can be set to `range` `multiple`        | _string_                                         | `single`                   |
| title               | Title of calendar                             | _string \| React.ReactNode \| React.ReactNode[]_ | `Calendar`                 |
| color               | Color for the bottom button and selected date | _string_                                         | `#ee0a24`                  |
| footer              | 自定义底部区域内容                            | _string \| React.ReactNode \| React.ReactNode[]_ | `null`                     |
| minDate             | Min date                                      | _Date_                                           | Today                      |
| maxDate             | Max date                                      | _Date_                                           | Six months after the today |
| defaultDate         | Default selected date                         | _Date \| Date[] \| null_                         | Today                      |
| rowHeight           | Row height                                    | _number \| string_                               | `64`                       |
| formatter           | Day formatter                                 | _(day: Day) => Day_                              | -                          |
| poppable            | Whether to show the calendar inside a popup   | _boolean_                                        | `true`                     |
| lazyRender          | Whether to enable lazy render                 | _boolean_                                        | `true`                     |
| showMark            | Whether to show background month mark         | _boolean_                                        | `true`                     |
| showTitle           | Whether to show title                         | _boolean_                                        | `true`                     |
| showSubtitle        | Whether to show subtitle                      | _boolean_                                        | `true`                     |
| showConfirm         | Whether to show confirm button                | _boolean_                                        | `true`                     |
| readonly            | Whether to be readonly                        | _boolean_                                        | `false`                    |
| confirmText         | Confirm button text                           | _string_                                         | `Confirm`                  |
| confirmDisabledText | Confirm button text when disabled             | _string_                                         | `Confirm`                  |
| firstDayOfWeek      | Set the start day of week                     | _0-6_                                            | `0`                        |

### Poppable Props

Following props are supported when the poppable is true

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| position | Popup position, can be set to `top` `right` `left` | _string_ | `bottom` |
| round | Whether to show round corner | _boolean_ | `true` |
| closeOnClickOverlay | Whether to close when overlay is clicked | _boolean_ | `true` |
| safeAreaInsetBottom | Whether to enable bottom safe area adaptation | _boolean_ | `true` |

### Range Props

Following props are supported when the type is range

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| maxRange | Number of selectable days | _number \| string_ | Unlimitied |
| rangePrompt | Error message when exceeded max range | _string_ | `Choose no more than xx days` |
| allowSameDay | Whether the start and end time of the range is allowed on the same day | _boolean_ | `false` |

### Multiple Props

Following props are supported when the type is multiple

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| maxRange | Max count of selectable days | _number \| string_ | Unlimitied |
| rangePrompt | Error message when exceeded max count | _string_ | `Choose no more than xx days` |

### Data Structure of Day

| Key | Description | Type |
| --- | --- | --- |
| date | Date | _Date_ |
| type | Type, can be set to `selected`、`start`、`middle`、`end`、`disabled` | _string_ |
| text | Text | _string_ |
| topInfo | Top info | _string_ |
| bottomInfo | Bottom info | _string_ |
| className | Extra className | _string_ |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| select | Emitted when date is selected | _value: Date \| Date[]_ |
| confirm | Emitted after date selection is complete，if `show-confirm` is `true`, it is Emitted after clicking the confirm button | _value: Date \| Date[]_ |
| close | Emitted when closing Popup | - |
| opened | Emitted when Popup is opened | - |
| closed | Emitted when Popup is closed | - |
| unselect | Emitted when unselect date when type is multiple | _value: Date_ |
| monthShow | Emitted when a month enters the visible area | _{ date: Date, title: string }_ |


### Methods

Use [ref] to get Calendar instance and call instance methods.

| Name | Description | Attribute | Return value |
| --- | --- | --- | --- |
| reset | Reset selected date, will reset to default date when no params passed | _date?: Date \| Date[]_ | - |
| scrollToDate | Scroll to date | _date: Date_ | - |

### Scss Variables

| Name | Default Value | Description |
| --- | --- | --- |
| $calendar-background-color | `$white` | - |
| $calendar-popup-height | `80%` | - |
| $calendar-header-box-shadow | `0 2px 10px rgba(125, 126, 128, 0.16)` | - |
| $calendar-header-title-height | `44px` | - |
| $calendar-header-title-font-size | `$font-size-lg` | - |
| $calendar-header-subtitle-font-size | `$font-size-md` | - |
| $calendar-weekdays-height | `30px` | - |
| $calendar-weekdays-font-size | `$font-size-sm` | - |
| $calendar-month-title-font-size | `$font-size-md` | - |
| $calendar-month-mark-color | `rgba($gray-2, 80%)` | - |
| $calendar-month-mark-font-size | `160px` | - |
| $calendar-day-height | `64px` | - |
| $calendar-day-font-size | `$font-size-lg` | - |
| $calendar-range-edge-color | `$white` | - |
| $calendar-range-edge-background-color | `$red` | - |
| $calendar-range-middle-color | `$red` | - |
| $calendar-range-middle-background-opacity | `0.1` | - |
| $calendar-selected-day-size | `54px` | - |
| $calendar-selected-day-color | `$white` | - |
| $calendar-info-font-size | `$font-size-xs` | - |
| $calendar-info-line-height | `$line-height-xs` | - |
| $calendar-selected-day-background-color | `$red` | - |
| $calendar-day-disabled-color | `$gray-5` | - |
| $calendar-confirm-button-height | `36px` | - |
| $calendar-confirm-button-margin | `7px 0` | - |
