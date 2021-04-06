# Empty

### Install

```js
import { Empty } from 'rvant';
```

## Usage

### Basic Usage

```html
<Empty description="Description" />
```

### Image Type

Use the image prop to display different placeholder images.

```html
<!-- Error -->
<Empty image='error' description='Description' />
<!-- Network -->
<Empty image='network' description='Description' />
<!-- Search -->
<Empty image='search' description='Description' />
```

### Custom Image

```html
<Empty
  className='custom-image'
  image='https://img.yzcdn.cn/vant/custom-empty-image.png'
  description='Description'
/>

<style>
  .custom-image img {
    border-radius: 100%;
  }
</style>
```

### Bottom Content

```html
<Empty description='Description'>
  <Button round type='danger' className='bottom-button'>
    Button
  </Button>
</Empty>

<style>
  .bottom-button {
    width: 160px;
    height: 40px;
  }
</style>
```

## API

### Props

| Attribute   | Description                                                       | Type                        | Default   |
| ----------- | ----------------------------------------------------------------- | --------------------------- | --------- |
| image       | Image type，can be set to `error` `network` `search` or image URL | _string \| React.ReactNode_ | `default` |
| imageSize   | Image size                                                        | _number \| string_          | -         |
| description | Desciption                                                        | _string \| React.ReactNode_ | -         |

### Scss Variables

| Name                           | Default Value     | Description |
| ------------------------------ | ----------------- | ----------- |
| $empty-padding                 | `$padding-xl 0`   | -           |
| $empty-image-size              | `160px`           | -           |
| $empty-description-margin-top  | `$padding-md`     | -           |
| $empty-description-padding     | `0 60px`          | -           |
| $empty-description-color       | `$gray-6`         | -           |
| $empty-description-font-size   | `$font-size-md`   | -           |
| $empty-description-line-height | `$line-height-md` | -           |
| $empty-bottom-margin-top       | `24px`            | -           |
