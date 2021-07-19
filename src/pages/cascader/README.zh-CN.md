# Cascader 级联选择

### 介绍

级联选择框，用于多层级数据的选择，典型场景为省市区选择。

### 引入

```js
import { Cascader } from 'rvant'
```

## 代码演示

### 基础用法

级联选择组件可以搭配 Field 和 Popup 组件使用，示例如下：

```html
<Field
  value={result}
  isLink
  readonly
  label='地区'
  placeholder='请选择地区'
  click={useCallback(() => setShow(true), [])}
/>
<Popup
  show={show}
  round
  teleport={true}
  position='bottom'
  close={() => setShow(false)}
>
  <Cascader
    value={value}
    title='请选择地区'
    options={options}
    close={useCallback(() => setShow(false), [])}
    finish={onFinish}
  />
</Popup>
```

```js
const options = [
  {
    text: '浙江省',
    value: '330000',
    children: [{ text: '杭州市', value: '330100' }],
  },
  {
    text: '江苏省',
    value: '320000',
    children: [{ text: '南京市', value: '320100' }],
  },
];
const [value, setValue] = useState('')
const [show, setShow] = useState(false)
const [result, setResult] = useState('')
const onFinish = ({ value, selectedOptions }: CascaderEventParams) => {
  const result = selectedOptions
    .map((option) => option.text || option.name)
    .join('/')

  setShow(false)
  setValue(value)
  setResult(result)
}
```

### 自定义颜色

通过 `activeColor` 属性来设置选中状态的高亮颜色。

```html
<Cascader
  value={value}
  title='请选择地区'
  options={zhCNOptions}
  activeColor='#1989fa'
  close={useCallback(() => setShow(false), [])}
  finish={onFinish}
/>
```

### 异步加载选项

可以监听 `change` 事件并动态设置 `options`，实现异步加载选项。

```html
<Field
  value={result}
  isLink
  readonly
  label='地区'
  placeholder='请选择地区'
  click={useCallback(() => setShow(true), [])}
/>
<Popup
  show={show}
  round
  teleport={true}
  position='bottom'
  close={() => setShow(false)}
>
  <Cascader
    value={value}
    title='请选择地区'
    options={options}
    change={loadDynamicOptions}
    close={useCallback(() => setShow(false), [])}
    finish={onFinish}
  />
</Popup>
```

```js
const asyncOptions1 = [
  {
    text: '浙江省',
    value: '330000',
    children: []
  }
]
const asyncOptions2 = [
  { text: '杭州市', value: '330100' },
  { text: '宁波市', value: '330200' }
]
const [options, setOptions] = useState(asyncOptions1)
const [value, setValue] = useState('')
const [show, setShow] = useState(false)
const [result, setResult] = useState('')
const loadDynamicOptions = ({ value }: CascaderOption) => {
  setValue(value as string)
  if (value === '330000') {
    const newOptions = [...options]
    setTimeout(() => {
      newOptions[0].children = asyncOptions2
      setOptions(newOptions)
    }, 500)
  }
}
const onFinish = ({ value, selectedOptions }: CascaderEventParams) => {
  const result = selectedOptions
    .map((option) => option.text || option.name)
    .join('/')

  setShow(false)
  setValue(value)
  setResult(result)
}
```

### 自定义字段名

通过 `field-names` 属性可以自定义 `options` 里的字段名称。

```html
<Cascader
  value={value}
  title='请选择地区'
  options={options}
  fieldNames={{
    text: 'name',
    value: 'code',
    children: 'items'
  }}
  close={useCallback(() => setShow(false), [])}
  finish={onFinish}
/>
```

```js
const [value, setValue] = useState('')
const [show, setShow] = useState(false)
const [result, setResult] = useState('')
const options = [
  {
    name: '浙江省',
    code: '330000',
    items: [{ name: '杭州市', code: '330100' }],
  },
  {
    name: '江苏省',
    code: '320000',
    items: [{ name: '南京市', code: '320100' }],
  },
]
const onFinish = ({ value, selectedOptions }: CascaderEventParams) => {
  const result = selectedOptions
    .map((option) => option.text || option.name)
    .join('/')

  setShow(false)
  setValue(value)
  setResult(result)
}
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 顶部标题 | _string \| ReactNode \| ReactNode[]_ | - |
| value | 选中项的值 | _string \| number_ | - |
| options | 可选项数据源 | _Option[]_ | `[]` |
| placeholder | 未选中时的提示文案 | _string_ | `请选择` |
| activeColor | 选中状态的高亮颜色 | _string_ | `#ee0a24` |
| swipeable | 是否开启手势左右滑动切换 | _boolean_ | `false` |
| closeable | 是否显示关闭图标 | _boolean_ | `true` |
| closeIcon | 关闭图标名称或图片链接 | _string_ | `cross` |
| fieldNames | 自定义 `options` 结构中的字段 | _object_ | `{ text: 'text', value: 'value', children: 'children' }` |

### Events

| 事件      | 说明                   | 回调参数                               |
| --------- | ---------------------- | -------------------------------------- |
| change    | 选中项变化时触发       | `{ value, selectedOptions, tabIndex }` |
| finish    | 全部选项选择完成后触发 | `{ value, selectedOptions, tabIndex }` |
| close     | 点击关闭图标时触发     | -                                      |
| clickTab | 点击标签时触发         | _tabIndex: number, title: string_      |

### SCSS样式变量

| 名称                              | 默认值          | 描述 |
| --------------------------------- | --------------- | ---- |
| $cascader-header-height           | `48px`          | -    |
| $cascader-header-padding          | `0 $padding-md` | -    |
| $cascader-title-font-size         | `$font-size-lg` | -    |
| $cascader-title-line-height       | `20px`          | -    |
| $cascader-close-icon-size         | `22px`          | -    |
| $cascader-close-icon-color        | `$gary-5`       | -    |
| $cascader-close-icon-active-color | `$gary-6`       | -    |
| $cascader-selected-icon-size      | `18px`          | -    |
| $cascader-tabs-height             | `48px`          | -    |
| $cascader-active-color            | `$danger-color` | -    |
| $cascader-options-height          | `384px`         | -    |
| $cascader-tab-color               | `$text-color`   | -    |
| $cascader-unselected-tab-color    | `$gary-6`       | -    |
