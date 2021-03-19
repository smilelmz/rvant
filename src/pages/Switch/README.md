# Switch

### Install

```js
import { Switch } from 'rvant';
```

## Usage

### Basic Usage

```html
<Switch
  value={checked}
  change={(v: boolean | ((prevState: boolean) => boolean)) =>
    setChecked(v)
  }
/>
```

```js
const [checked, setChecked] = useState(false)
```

### Disabled

```html
<Switch value={true} disabled />
```

### Loading

```html
<Switch value={true} loading />
```

### Custom Size

```html
<Switch
  value={checked2}
  size='24px'
  change={(v: boolean | ((prevState: boolean) => boolean)) =>
    setChecked2(v)
  }
/>
```

### Custom Color

```html
<Switch
  value={checked3}
  activeColor='#ee0a24'
  inactiveColor='#dcdee0'
  change={(v: boolean | ((prevState: boolean) => boolean)) =>
    setChecked3(v)
  }
/>
```

### Inside a Cell

```html
<Cell
  title='Title'
  rightIcon={
    <Switch
      value={checked4}
      change={(v: boolean | ((prevState: boolean) => boolean)) =>
        setChecked4(v)
      }
      size="24"
    />
  }
/>
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| value | Check status of Switch | _ActiveValue \| InactiveValue_ | `false` |
| loading | Whether to show loading icon | _boolean_ | `false` |
| disabled | Whether to disable switch | _boolean_ | `false` |
| size | Size of switch | _number \| string_ | `30px` |
| activeColor | Background color when active | _string_ | `#1989fa` |
| inactiveColor | Background color when inactive | _string_ | `white` |
| activeValue | Value when active | _any_ | `true` |
| inactiveValue | Value when inactive | _any_ | `false` |

### Events

| Event  | Description                       | Parameters          |
| ------ | --------------------------------- | ------------------- |
| change | Emitted when check status changed | _value: any_        |

### Less Variables

| Name | Default Value | Description |
| --- | --- | --- |
| $switch-size | `30px` | - |
| $switch-width | `2em` | - |
| $switch-height | `1em` | - |
| $switch-node-size | `1em` | - |
| $switch-node-background-color | `$white` | - |
| $switch-node-box-shadow | `0 3px 1px 0 rgba(0, 0, 0, 0.05)` | - |
| $switch-background-color | `$white` | - |
| $switch-on-background-color | `$blue` | - |
| $switch-transition-duration | `$animation-duration-base` | - |
| $switch-disabled-opacity | `$disabled-opacity` | - |
| $switch-border | `$border-width-base solid rgba(0, 0, 0, 0.1)` | - |
