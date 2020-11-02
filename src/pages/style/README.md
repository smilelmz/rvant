# Built-in Style

### Intro

Vant contains some common styles that can be used directly by the className.

### Text ellipsis

When the text content length exceeds the maximum container width, the excess text is automatically omitted.

```html
<div class="smile-ellipsis">
  This is a paragraph that displays up to one line of text, and the rest of the
  text will be omitted.
</div>

<div class="smile-multi-ellipsis--l2">
  This is a paragraph that displays up to two lines of text, and the rest of the
  text will be omitted.
</div>

<div class="smile-multi-ellipsis--l3">
  This is a paragraph that displays up to three lines of text, and the rest of
  the text will be omitted.
</div>
```

### Hairline

Add 1px border under the Retina screen for the element, based on a pseudo element.

```html
<!-- border top -->
<div class="smile-hairline--top"></div>

<!-- border bottom -->
<div class="smile-hairline--bottom"></div>

<!-- border left -->
<div class="smile-hairline--left"></div>

<!-- border right -->
<div class="smile-hairline--right"></div>

<!-- border top & bottom -->
<div class="smile-hairline--top-bottom"></div>

<!-- full border -->
<div class="smile-hairline--surround"></div>
```

### Animation

```js
import CSSTransition from 'react-transition-group/CSSTransition'
```

```html
<!-- fade in  -->
<CSSTransition
    in={visible}
    classNames='smile-fade'
    timeout={300}
    unmountOnExit
>
  <div className='demo-animate-block'>Fade</div>
</CSSTransition>

<!-- slide up -->
<CSSTransition
    in={visible}
    classNames='smile-slide-up'
    timeout={300}
    unmountOnExit
>
  <div className='demo-animate-block'>Slide Up</div>
</CSSTransition>

<!-- slide down -->
<CSSTransition
    in={visible}
    classNames='smile-slide-down'
    timeout={300}
    unmountOnExit
>
  <div className='demo-animate-block'>Slide Down</div>
</CSSTransition>

<!-- slide left -->
<CSSTransition
    in={visible}
    classNames='smile-slide-left'
    timeout={300}
    unmountOnExit
>
  <div className='demo-animate-block'>Slide Left</div>
</CSSTransition>

<!-- slide right -->
<CSSTransition
    in={visible}
    classNames='smile-slide-right'
    timeout={300}
    unmountOnExit
>
  <div className='demo-animate-block'>Slide Right</div>
</CSSTransition>
```
