# CountDown

### Install

```js
import { CountDown } from 'rvant';
```

## Usage

### Basic Usage

```html
<CountDown time={time} />
```

```js
const time = 30 * 60 * 60 * 1000
```

### Custom Format

```html
<CountDown time={time} format='DD 天 HH 时 mm 分 ss 秒' />
```

### Millisecond

```html
<CountDown time={time} millisecond format='HH:mm:ss:SS' />
```

### Custom Style

```html
<CountDown
  time={time}
  millisecond
  format='HH:mm:ss:SS'
  customRender={(currentTime) => {
    return (
      <div>
        <span className='block'>{currentTime.hours}</span>
        <span className='colon'>:</span>
        <span className='block'>{currentTime.minutes}</span>
        <span className='colon'>:</span>
        <span className='block'>{currentTime.seconds}</span>
      </div>
    )
  }}
/>
```

```css
.colon {
  display: inline-block;
  margin: 0 4px;
  color: #ee0a24;
}

.block {
  display: inline-block;
  width: 22px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #ee0a24;
}
```

### Manual Control

```html
<CountDown
  ref={countDownRef}
  time={3000}
  millisecond
  autoStart={false}
  format='ss:SSS'
  finish={onFinish}
/>
```

```js
const countDownRef = useRef<CountDownHandler>(null)
const start = () => {
  countDownRef.current?.start()
}
const pause = () => {
  countDownRef.current?.pause()
}
const reset = () => {
  countDownRef.current?.reset()
}
const onFinish = () => Toast.info('倒计时结束')
```

## API

### Props

| Attribute    | Description                          | Type                          | Default    |
| ------------ | ------------------------------------ | ----------------------------- | ---------- |
| time         | Total time                           | _number \| string_            | `0`        |
| format       | Time format                          | _string_                      | `HH:mm:ss` |
| autoStart    | Whether to auto start count down     | _boolean_                     | `true`     |
| millisecond  | Whether to enable millisecond render | _boolean_                     | `false`    |
| customRender | custom render                        | _function(time: CurrentTime)_ | `-`        |

### Available formats

| Format | Description           |
| ------ | --------------------- |
| DD     | Day                   |
| HH     | Hour                  |
| mm     | Minute                |
| ss     | Second                |
| S      | Millisecond, 1-digit  |
| SS     | Millisecond, 2-digits |
| SSS    | Millisecond, 3-digits |

### Events

| Event  | Description                      | Arguments                  |
| ------ | -------------------------------- | -------------------------- |
| finish | Emitted when count down finished | -                          |
| change | Emitted when count down changed  | _currentTime: CurrentTime_ |

### TimeData Structure

| Name         | Description                   | Type     |
| ------------ | ----------------------------- | -------- |
| total        | Total time, unit milliseconds | _number_ |
| days         | Remain days                   | _number_ |
| hours        | Remain hours                  | _number_ |
| minutes      | Remain minutes                | _number_ |
| seconds      | Remain seconds                | _number_ |
| milliseconds | Remain milliseconds           | _number_ |

### Methods

Use ref to get CountDown instance and call instance methods.

| Name  | Description      | Attribute | Return value |
| ----- | ---------------- | --------- | ------------ |
| start | Start count down | -         | -            |
| pause | Pause count down | -         | -            |
| reset | Reset count down | -         | -            |

### Scss Variables

| Name                    | Default Value     | Description |
| ----------------------- | ----------------- | ----------- |
| $count-down-text-color  | `$text-color`     | -           |
| $count-down-font-size   | `$font-size-md`   | -           |
| $count-down-line-height | `$line-height-md` | -           |
