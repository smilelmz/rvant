# Pagination 分页

### 引入

```js
import { Pagination } from 'rvant';
```

## 代码演示

### 基础用法

通过 `value` 来绑定当前页码。

```html
<Pagination
  value={currentPage1}
  totalItems='24'
  itemsPerPage='5'
  prevText='上一页'
  nextText='下一页'
  change={(v) => setCurrentPage1(v)}
/>
```

```js
const [currentPage1, setCurrentPage1] = useState(1)
```

### 简单模式

 将 `mode` 设置为 `simple` 来切换到简单模式，此时分页器不会展示具体的页码按钮。

```html
<Pagination
  value={currentPage2}
  pageCount={12}
  prevText='上一页'
  nextText='下一页'
  mode="simple"
  change={(v) => setCurrentPage2(v)}
/>
```

### 显示省略号

设置 `forceEllipses` 后会展示省略号按钮，点击后可以快速跳转。

```html
<Pagination
  value={currentPage3}
  forceEllipses
  totalItems='125'
  showPageSize='3'
  prevText='上一页'
  nextText='下一页'
  change={(v) => setCurrentPage3(v)}
/>
```

### 自定义按钮

通过 `prevText`、`nextText` 等插槽来自定义分页按钮的内容。

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

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前页码 | _number_ | - |
| mode | 显示模式，可选值为 `simple` | _string_ | `multi` |
| prevText | 上一页按钮文字 | _string \| React.ReactNode_ | `上一页` |
| nextText | 下一页按钮文字 | _string \| React.ReactNode_ | `下一页` |
| pageCount | 总页数 | _number \| string_ | 根据页数计算 |
| totalItems | 总记录数 | _number \| string_ | `0` |
| itemsPerPage | 每页记录数 | _number \| string_ | `10` |
| showPageSize | 显示的页码个数 | _number \| string_ | `5` |
| forceEllipses | 是否显示省略号 | _boolean_ | `false` |
| pageDesc | 自定义Desc | _React.ReactNode_ | `-` |
| renderPage | 自定义渲染页码 | _(page: PageItem) => React.ReactNode | React.ReactNode_ | `-` |

### Events

| 事件名 | 说明           | 回调参数 |
| ------ | -------------- | -------- |
| change | 页码改变时触发 | -        |

### Scss样式变量

| 名称                                       | 默认值              | 描述 |
| ------------------------------------------ | ------------------- | ---- |
| $pagination-height                         | `40px`              | -    |
| $pagination-font-size                      | `$font-size-md`     | -    |
| $pagination-item-width                     | `36px`              | -    |
| $pagination-item-default-color             | `$blue`             | -    |
| $pagination-item-disabled-color            | `$gray-7`           | -    |
| $pagination-item-disabled-background-color | `$background-color` | -    |
| $pagination-background-color               | `$white`            | -    |
| $pagination-desc-color                     | `$gray-7`           | -    |
| $pagination-disabled-opacity               | `$disabled-opacity` | -    |
