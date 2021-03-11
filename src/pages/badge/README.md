# Badge

### Install

```js
import { Badge } from 'rvant'
```

## Usage

### Basic Usage

```html
<Badge content='5'>
  <div className='child' />
</Badge>
<Badge content='10'>
  <div className='child' />
</Badge>
<Badge content='Hot'>
  <div className='child' />
</Badge>
<Badge dot>
  <div className='child' />
</Badge>

<style>
  .child {
    width: 40px;
    height: 40px;
    background: #f2f3f5;
    border-radius: 4px;
  }
</style>
```

### Max

```html
<Badge content='20' max='9'>
  <div className='child' />
</Badge>
<Badge content='50' max='20'>
  <div className='child' />
</Badge>
<Badge content='200' max='99'>
  <div className='child' />
</Badge>
```

### Custom Color

```html
<Badge content='5' color='#1989fa'>
  <div className='child' />
</Badge>
<Badge content='10' color='#1989fa'>
  <div className='child' />
</Badge>
<Badge dot color='#1989fa'>
  <div className='child' />
</Badge>
```

### Custom Content

Use `content` slot to custom :content of badge.

```html
<Badge content={<Icon name="success" className="badge-icon" />}>
  <div className='child' />
</Badge>
<Badge content={<Icon name="cross" className="badge-icon" />}>
  <div className='child' />
</Badge>
<Badge content={<Icon name="down" className="badge-icon" />}>
  <div className='child' />
</Badge>
```

```css
.badge-icon {
  display: block;
  font-size: 10px;
  line-height: 16px;
}
```

### Standalone

```html
<Badge content='20' style={{ marginLeft: 16 }} />
<Badge content='200' max='99' style={{ marginLeft: 16 }} />
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| dot | Whether to show dot | _boolean_ | `false` |
| max | Max value，show `{max}+` when exceed，only works when content is number | _number \| string_ | - |
| color | Background color | _string_ | `#ee0a24` |
| offset `v3.0.5` | Offset of badge dot | _[number, number]_ | - |
| content | Badge content | _number \| string \| React.ReactNode \| React.ReactNode[]_ | - |
