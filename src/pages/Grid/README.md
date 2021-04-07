# Grid

### Install

```js
import { Grid, GridItem } from 'rvant';
```

## Usage

### Basic Usage

```html
<Grid>
  <GridItem icon="photo-o" text="Text" />
  <GridItem icon="photo-o" text="Text" />
  <GridItem icon="photo-o" text="Text" />
  <GridItem icon="photo-o" text="Text" />
</Grid>
```

### Column Num

```html
<Grid columnNum={3}>
  {new Array(6).fill(1).map((_, index) => (
    <GridItem key={index} text='Text' icon='photo-o' />
  ))}
</Grid>
```

### Custom Content

```html
<Grid border={false} columnNum={3}>
  <GridItem>
    <Image fit='contain' src='https://img.yzcdn.cn/vant/apple-1.jpg' />
  </GridItem>
  <GridItem>
    <Image fit='contain' src='https://img.yzcdn.cn/vant/apple-2.jpg' />
  </GridItem>
  <GridItem>
    <Image fit='contain' src='https://img.yzcdn.cn/vant/apple-3.jpg' />
  </GridItem>
</Grid>
```

### Square

```html
<Grid square>
  {new Array(8).fill(1).map((_, index) => (
    <GridItem key={index} text='Text' icon='photo-o' />
  ))}
</Grid>
```

### Gutter

```html
<Grid gutter={10}>
  {new Array(8).fill(1).map((_, index) => (
    <GridItem key={index} text='Text' icon='photo-o' />
  ))}
</Grid>
```

### Horizontal

```html
<Grid direction='horizontal' columnNum={3}>
  <GridItem text='Text' icon='photo-o' />
  <GridItem text='Text' icon='photo-o' />
  <GridItem text='Text' icon='photo-o' />
</Grid>
```

### Click Event

```html
<Grid columnNum={2}>
  <GridItem text='Text' icon='home-o' click={() => Toast.info('click GridItem 1')} />
  <GridItem text='Text' icon='search' click={() => Toast.info('click GridItem 2')} />
</Grid>
```

### Show Badge

```html
<Grid columnNum={2}>
  <GridItem text='Text' icon='home-o' dot />
  <GridItem text='Text' icon='search' badge='99+' />
</Grid>
```

## API

### Grid Props

| Attribute | Description                                               | Type               | Default    |
| --------- | --------------------------------------------------------- | ------------------ | ---------- |
| columnNum | Column Num                                                | _number \| string_ | `4`        |
| iconSize  | Icon size                                                 | _number \| string_ | `28px`     |
| gutter    | Gutter                                                    | _number \| string_ | `0`        |
| border    | Whether to show border                                    | _boolean_          | `true`     |
| center    | Whether to center content                                 | _boolean_          | `true`     |
| square    | Whether to be square shape                                | _boolean_          | `false`    |
| clickable | Whether to show click feedback when clicked               | _boolean_          | `false`    |
| direction | Content arrangement direction, can be set to `horizontal` | _string_           | `vertical` |

### GridItem Props

| Attribute  | Description             | Type                        | Default    |
| ---------- | ----------------------- | --------------------------- | ---------- |
| text       | Text                    | _string \| React.ReactNode_ | -          |
| icon       | Icon name or URL        | _string \| React.ReactNode_ | -          |
| iconPrefix | Icon className prefix   | _string_                    | `van-icon` |
| dot        | Whether to show red dot | _boolean_                   | `false`    |
| badge      | Content of the badge    | _number \| string_          | -          |

### GridItem Events

| Event | Description                       | Arguments           |
| ----- | --------------------------------- | ------------------- |
| click | Emitted when component is clicked | _event: MouseEvent_ |

### Scss Variables

| Name | Default Value | Description |
| --- | --- | --- |
| $grid-item-content-padding | `$padding-md $padding-xs` | - |
| $grid-item-content-background-color | `$white` | - |
| $grid-item-content-active-color | `$active-color` | - |
| $grid-item-icon-size | `28px` | - |
| $grid-item-text-color | `$gray-7` | - |
| $grid-item-text-font-size | `$font-size-sm` | - |
