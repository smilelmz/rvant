# Steps

### Intro

Used to show the various parts of the action flow and let the user know where the current action fits into the overall flow.

### Install

```js
import { Step, Steps } from 'rvant';
```

## Usage

### Basic Usage

```html
<Steps active={active}>
  <Step>Step1</Step>
  <Step>Step2</Step>
  <Step>Step3</Step>
  <Step>Step4</Step>
</Steps>
```

```js
const [active, setActive] = useState(1)
```

### Custom Style

```html
<Steps
  active={active}
  activeIcon='success'
  inactiveIcon='arrow'
  activeColor='#38f'
>
  <Step>Step1</Step>
  <Step>Step2</Step>
  <Step>Step3</Step>
  <Step>Step4</Step>
</Steps>
```

### Vertical Steps

```html
<Steps active={0} direction='vertical'>
  <Step>
    <h3>【City】Status1</h3>
    <p>2016-07-12 12:40</p>
  </Step>
  <Step>
    <h3>【City】Status2</h3>
    <p>2016-07-11 10:00</p>
  </Step>
  <Step>
    <h3>【City】Status3</h3>
    <p>2016-07-10 09:30</p>
  </Step>
</Steps>
```

## API

### Steps Props

| Attribute     | Description              | Type                                             | Default      |
| ------------- | ------------------------ | ------------------------------------------------ | ------------ |
| active        | Active step              | _number \| string_                               | `0`          |
| direction     | Can be set to `vertical` | _string_                                         | `horizontal` |
| activeColor   | Active step color        | _string_                                         | `#07c160`    |
| inactiveColor | Inactive step color      | _string_                                         | `#969799`    |
| activeIcon    | Active icon name         | _string \| React.ReactNode \| React.ReactNode[]_ | `checked`    |
| inactiveIcon  | Inactive icon name       | _string \| React.ReactNode \| React.ReactNode[]_ | -            |
| finishIcon    | Finish icon name         | _string \| React.ReactNode \| React.ReactNode[]_ | -            |
| iconPrefix    | Icon className prefix    | _string_                                         | `van-icon`   |

### Steps Events

| Event | Description | Arguments |
| --- | --- | --- |
| clickStep | Emitted when a step's title or icon is clicked | _index: number_ |

### Scss Variables

| Name                             | Default Value   | Description |
| -------------------------------- | --------------- | ----------- |
| $step-text-color                 | `$gray-6`       | -           |
| $step-active-color               | `$green`        | -           |
| $step-process-text-color         | `$text-color`   | -           |
| $step-font-size                  | `$font-size-md` | -           |
| $step-line-color                 | `$border-color` | -           |
| $step-finish-line-color          | `$green`        | -           |
| $step-finish-text-color          | `$text-color`   | -           |
| $step-icon-size                  | `12px`          | -           |
| $step-circle-size                | `5px`           | -           |
| $step-circle-color               | `$gray-6`       | -           |
| $step-horizontal-title-font-size | `$font-size-sm` | -           |
| $steps-background-color          | `$white`        | -           |
