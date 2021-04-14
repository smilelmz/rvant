# Pagination

### Install

```js
import { Pagination } from 'rvant';
```

## Usage

### Basic Usage

```html
<Pagination
  value={currentPage1}
  totalItems='24'
  itemsPerPage='5'
  prevText='Prev'
  nextText='Next'
  change={(v) => setCurrentPage1(v)}
/>
```

```js
const [currentPage1, setCurrentPage1] = useState(1)
```

### Simple mode

```html
<Pagination
  value={currentPage2}
  pageCount={12}
  prevText='Prev'
  nextText='Next'
  mode="simple"
  change={(v) => setCurrentPage2(v)}
/>
```

### Show ellipses

```html
<Pagination
  value={currentPage3}
  forceEllipses
  totalItems='125'
  showPageSize='3'
  prevText='Prev'
  nextText='Next'
  change={(v) => setCurrentPage3(v)}
/>
```

### Custom Button

```html
<Pagination
  value={currentPage4}
  totalItems='125'
  showPageSize='5'
  prevText={<Icon name="arrow-left" />}
  nextText={<Icon name="arrow" />}
  renderPage={({ text }: PageItem) => text}
  change={(v) => setCurrentPage4(v)}
/>
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| value | Current page number | _number_ | - |
| mode | Mode, can be set to `simple` `multi` | _string_ | `multi` |
| prevText | Previous text | _string \| React.ReactNode_ | `Previous` |
| nextText | Next text | _string \| React.ReactNode_ | `Next` |
| totalItems | Total items | _number \| string_ | `0` |
| itemsPerPage | Item number per page | _number \| string_ | `10` |
| pageCount | The total number of pages, if not set, will be calculated based on `totalItems` and `itemsPerPage` | _number \| string_ | `-` |
| showPageSize | Count of page size to show | _number \| string_ | `5` |
| forceEllipses | Whether to show ellipses | _boolean_ | `false` |
| pageDesc | Custom Desc | _React.ReactNode_ | `-` |
| renderPage | Custom render page | _(page: PageItem) => React.ReactNode | React.ReactNode_ | `-` |

### Events

| Event  | Description                       | Arguments |
| ------ | --------------------------------- | --------- |
| change | Emitted when current page changed | -         |

### Scss Variables

| Name | Default Value | Description |
| --- | --- | --- |
| $pagination-height | `40px` | - |
| $pagination-font-size | `$font-size-md` | - |
| $pagination-item-width | `36px` | - |
| $pagination-item-default-color | `$blue` | - |
| $pagination-item-disabled-color | `$gray-7` | - |
| $pagination-item-disabled-background-color | `$background-color` | - |
| $pagination-background-color | `$white` | - |
| $pagination-desc-color | `$gray-7` | - |
| $pagination-disabled-opacity | `$disabled-opacity` | - |
