# Sticky

### Install

```js
import { Loading } from 'rvant';`
```

## Usage

### Basic Usage

```html
<Sticky>
  <Button type="primary">基础用法</Button>
</Sticky>
```

### Offset Top

```html
<Sticky offsetTop="50">
  <Button type="info">吸顶距离</Button>
</Sticky>
```

### Set Container

```html
<div style={{ height: 150, background: '#fff' }} ref={e => renderEle(e)}>
  <Sticky container={container}>
    <Button type='info' style={{ marginLeft: 215 }}>
      吸顶距离
    </Button>
  </Sticky>
</div>
```

```js
const [container, setContainer] = useState<HTMLElement | null>(null)
const renderEle = (ele: any) => {
  if (ele) {
    setContainer(ele)
  }
}
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| offsetTop | Offset top, supports `px` `vw` `rem` unit, default `px` | _number \| string_ | `0` |
| z-index | z-index when sticky | _number \| string_ | `99` |
| container | Container DOM | _Element_ | - |

### Events

| Event  | Description           | Arguments                      |
| ------ | --------------------- | ------------------------------ |
| scroll | Triggered when scroll | object: { scrollTop, isFixed } |
