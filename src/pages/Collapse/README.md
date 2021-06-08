# Collapse

### Intro

Place a group of content in multiple collapsible panels, click the title of the panel to expand or contract its content.

### Install

```js
import { Collapse, CollapseItem } from 'rvant'
```

## Usage

### Basic Usage

Use `value` to control the name of active panels.

```html
<Collapse
  value={active}
  change={useCallback((v) => setActive(v as number[]), [])}
>
  <CollapseItem title='Title1'>
    Content
  </CollapseItem>
  <CollapseItem title='Title2'>
    Content
  </CollapseItem>
  <CollapseItem title='Title3'>
    Content
  </CollapseItem>
</Collapse>
```

```js
const [active, setActive] = useState([0])
```

### Accordion

In accordion mode, only one panel can be expanded at the same time.

```html
<Collapse
  value={active}
  accordion
  change={useCallback((v) => setActive(v as number), [])}
>
  <CollapseItem title='Title1'>
    Content
  </CollapseItem>
  <CollapseItem title='Title2'>
    Content
  </CollapseItem>
  <CollapseItem title='Title3'>
    Content
  </CollapseItem>
</Collapse>
```

```js
const [active, setActive] = useState(0)
```

### Disabled

Use the `disabled` prop to disable CollapseItem.

```html
<Collapse
  value={active}
  change={useCallback((v) => setActive(v as number[]), [])}
>
  <CollapseItem title='Title1'>
    Content
  </CollapseItem>
  <CollapseItem title='Title2' disabled>
    Content
  </CollapseItem>
  <CollapseItem title='Title3' disabled>
    Content
  </CollapseItem>
</Collapse>
```

### Custom title

```html
<Collapse
  value={active}
  change={useCallback((v) => setActive(v as number[]), [])}
>
  <CollapseItem title={
    <div>Title1 <Icon name="question-o" /></div>
  }>
    Content
  </CollapseItem>
  <CollapseItem title='Title2' value="Content" icon="shop-o">
    Content
  </CollapseItem>
</Collapse>
```

```js
const [active, setActive] = useState([])
```

## API

### Collapse Props

| Attribute | Description                    | Type                                                                              | Default |
| --------- | ------------------------------ | --------------------------------------------------------------------------------- | ------- |
| value     | Names of current active panels | accordion mode： _number \| string_<br>non-accordion mode：_(number \| string)[]_ | -       |
| accordion | Whether to be accordion mode   | _boolean_                                                                         | `false` |
| border    | Whether to show outer border   | _boolean_                                                                         | `true`  |

### Collapse Events

| Event  | Description                  | Arguments   |
| ------ | ---------------------------- | ----------- |
| change | Emitted when switching panel | activeNames |

### CollapseItem Props

| Attribute  | Description                       | Type                                                       | Default |
| ---------- | --------------------------------- | ---------------------------------------------------------- | ------- |
| name       | Name                              | _number \| string_                                         | `index` |
| icon       | Left Icon                         | _string_                                                   | -       |
| size       | Title size，can be set to `large` | _string_                                                   | -       |
| value      | Right text                        | _number \| string \| React.ReactNode \| React.ReactNode[]_ | -       |
| label      | Description below the title       | _string \| React.ReactNode \| React.ReactNode[]_           | -       |
| border     | Whether to show inner border      | _boolean_                                                  | `true`  |
| isLink     | Whether to show link icon         | _boolean_                                                  | `true`  |
| disabled   | Whether to disabled collapse      | _boolean_                                                  | `false` |
| readonly   | Whether to be readonly            | _boolean_                                                  | `false` |
| titleClass | Title className                   | _string_                                                   | -       |
| valueClass | Value className                   | _string_                                                   | -       |
| labelClass | Label className                   | _string_                                                   | -       |
| title      | Title                             | _number \| string \| React.ReactNode \| React.ReactNode[]_ | -       |
| url        | link url                          | _string_                                                   | -       |
| rightIcon  | Custom right icon                 | _string \| React.ReactNode \| React.ReactNode[]_           | -       |

### CollapseItem Methods

Use ref to get CollapseItem instance and call instance methods.

| Name   | Description            | Attribute           | Return value |
| ------ | ---------------------- | ------------------- | ------------ |
| toggle | Toggle expanded status | _expanded: boolean_ | -            |

### Scss Variables

| Name                                    | Default Value              | Description |
| --------------------------------------- | -------------------------- | ----------- |
| $collapse-item-transition-duration      | `$animation-duration-base` | -           |
| $collapse-item-content-padding          | `$padding-sm $padding-md`  | -           |
| $collapse-item-content-font-size        | `$font-size-md`            | -           |
| $collapse-item-content-line-height      | `1.5`                      | -           |
| $collapse-item-content-text-color       | `$gray-6`                  | -           |
| $collapse-item-content-background-color | `$white`                   | -           |
| $collapse-item-title-disabled-color     | `$gray-5`                  | -           |
