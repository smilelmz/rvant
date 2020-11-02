# 内置样式

### 介绍

Vant 中默认包含了一些常用样式，可以直接通过 className 的方式使用。

### 文字省略

当文本内容长度超过容器最大宽度时，自动省略多余的文本。

```html
<!-- 最多显示一行 -->
<div class="smile-ellipsis">这是一段最多显示一行的文字，多余的内容会被省略</div>

<!-- 最多显示两行 -->
<div class="smile-multi-ellipsis--l2">
  这是一段最多显示两行的文字，多余的内容会被省略
</div>

<!-- 最多显示三行 -->
<div class="smile-multi-ellipsis--l3">
  这是一段最多显示三行的文字，多余的内容会被省略
</div>
```

### 1px 边框

为元素添加 Retina 屏幕下的 1px 边框（即 hairline），基于伪类 transform 实现。

```html
<!-- 上边框 -->
<div class="smile-hairline--top"></div>

<!-- 下边框 -->
<div class="smile-hairline--bottom"></div>

<!-- 左边框 -->
<div class="smile-hairline--left"></div>

<!-- 右边框 -->
<div class="smile-hairline--right"></div>

<!-- 上下边框 -->
<div class="smile-hairline--top-bottom"></div>

<!-- 全边框 -->
<div class="smile-hairline--surround"></div>
```

### 动画

可以通过 `CSSTransition` 组件使用内置的动画

```js
import CSSTransition from 'react-transition-group/CSSTransition'
```

```html
<!-- 淡入 -->
<CSSTransition
    in={visible}
    classNames='smile-fade'
    timeout={300}
    unmountOnExit
>
  <div className='demo-animate-block'>Fade</div>
</CSSTransition>

<!-- 上滑进入 -->
<CSSTransition
    in={visible}
    classNames='smile-slide-up'
    timeout={300}
    unmountOnExit
>
  <div className='demo-animate-block'>Slide Up</div>
</CSSTransition>

<!-- 下滑进入 -->
<CSSTransition
    in={visible}
    classNames='smile-slide-down'
    timeout={300}
    unmountOnExit
>
  <div className='demo-animate-block'>Slide Down</div>
</CSSTransition>

<!-- 左滑进入 -->
<CSSTransition
    in={visible}
    classNames='smile-slide-left'
    timeout={300}
    unmountOnExit
>
  <div className='demo-animate-block'>Slide Left</div>
</CSSTransition>

<!-- 右滑进入 -->
<CSSTransition
    in={visible}
    classNames='smile-slide-right'
    timeout={300}
    unmountOnExit
>
  <div className='demo-animate-block'>Slide Right</div>
</CSSTransition>
```
