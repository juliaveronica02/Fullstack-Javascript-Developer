# CSS Basic

## CSS Introduction

CSS (Cascading Style Sheets) is used to style markup languages (like HTML or XML). So you still need to have HTML first in order to use CSS.

CSS can enhance HTML by applying colors, defining margins, positioning elements, animating interactions, choosing fonts, and much more.

## CSS File

- The latest version is CSS3
- CSS has `.css` extension
- Most of the CSS files is named as `index.css`, not `main.css` or `something.css`. Some people use `style.css`, but we will use `index.css` as the standard
- All of the CSS files are being used as styling purpose
- CSS is not a programming language
- HTML is the content, CSS is the presentation
- HTML is the skeleton, CSS is the flesh and skin.

## CSS Selectors

### Selector Rule Format

```css
who {
  what: how;
}
```

```css
selector {
  property: value;
}
```

- `selector`: define who is targeted, which HTML Element(s)
- `property`: define what charateristic to alter
- `value`: define how to alter that charateristic

```css
h1 {
  color: black;
  background: white;
}
```

## CSS Properties

- `animation`
- `align-items`
- `background`
- `border`
- `color`
- `cursor`
- `display`
- `flex`
- `font`
- `font-family`
- `font-size`
- `font-weight`
- `grid`
- `height`
- `@import`
- `justify-content`
- `@keyframes`
- `line-break`
- `line-height`
- `list-style`
- `margin`
- `max-height`
- `max-width`
- `@media`
- `min-height`
- `min-width`
- `object-fit`
- `opacity`
- `order`
- `outline`
- `overflow`
- `padding`
- `position`
- `text-align`
- `text-decoration`
- `text-transform`
- `vertical-align`
- `visibility`
- `width`
- `word-wrap`
- `z-index`

## CSS Values

- Number: `0`...`100`...`255`
- Percentage: `0%`...`100%`
- Text: `left`, `sans-serif`

## CSS Comments

```css
/* Comment Text */

/*
Comment text with
multiple lines
*/
```

## CSS Inline in HTML Elements

```diff
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>...</title>
  </head>
  <body>
    <header>
+     <h1 style="color: rgb(142, 140, 140);">...</h1>
+     <p style="color: red;">...</p>
    </header>
  </body>
</html>
```

This is not recommended anymore in plain HTML.

## CSS Embed in HTML Head, in `style` Tag

```diff
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>...</title>
    <style>
+     h1 {
+       color: black;
+     }
+     p {
+       color: red;
+     }
    </style>
  </head>
  <body>
    <header>
      <h1>...</h1>
      <p>...</p>
    </header>
  </body>
</html>
```

## CSS Module in Separated File, `link` in HTML

`index.html`

```diff
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>...</title>
+   <link rel="stylesheet" href="index.css" />
  </head>
  <body>
    <header>
      <h1>...</h1>
      <p>...</p>
    </header>
  </body>
</html>
```

`index.css`

```css
h1 {
  color: black;
}
p {
  color: red;
}
```

## CSS `@import` declaration

```css
@import url('./fonts/index.css');
@import url('./colors/index.css');

/* CSS code */
```

## CSS Style Target to HTML Element, Class, ID

### Style aN HTML Element

```html
<element-name>
  ...
</element-name>
```

```css
element-name {
  property: value;
}
```

#### Combination of Multiple Elements

```css
element-name,
other-element-name,
another-element-name {
  property: value;
}
```

### Style an HTML Class

```html
<div class="class-name">
  ...
</div>
```

```css
.class-name {
  property: value;
}
```

```html
<!-- class can be more than one -->
<div class="class-name other-class-name">
  ...
</div>
```

```css
.class-name {
  property: value;
}

.other-class-name {
  property: value;
}
```

#### Combination of Multiple Classes

```css
/* there's no space between */
.class-name.other-class-name {
  property: value;
}
```

#### Parent to Child (Hierarchical) Selector

```html
<div class="parent-class-name other-class-name">
  <h1 class="child-class-name">...</h1>
</div>
```

```css
/* there's a space between */
.parent-class-name .child-class-name {
  property: value;
}
```

### Style an HTML ID

```html
<!-- ID is only used once -->
<div id="id-name">
  ...
</div>
```

```css
#id-name {
  property: value;
}
```

#### Parent to Child Selector

```html
<div id="parent-id-name">
  <h1 id="child-id-name">...</h1>
</div>
```

```css
/* there's a space between */
#parent-id-name #child-id-name {
  property: value;
}
```

## CSS from CDN

- [Google Fonts](https://fonts.google.com)
- [Font Awesome](https://fontawesome.com)

## CSS Web Safe Fonts

The `font-family` property should hold several font names as a "fallback" system, to ensure maximum compatibility between browsers/operating systems. If the browser does not support the first font, it tries the next font.

Start with the font you want, and end with a generic family, to let the browser pick a similar font in the generic family, if no other fonts are available.

```CSS
code {
  font-family: "Fira Code", "Lucida Console", monaco, monospace;
}
```

## CSS Basic References

- [MarkSheet: a free HTML and CSS tutorial](https://marksheet.io)
  - [CSS Basics](https://marksheet.io/css-basics.html)
- [DevDocs CSS](https://devdocs.io/css)
- [CSS Diner Selector](https://flukeout.github.io)
- [REM vs EM – The Great Debate](https://zellwk.com/blog/rem-vs-em)
- [Web Design in 4 minutes](https://jgthms.com/web-design-in-4-minutes)
- [CSS Fundamentals from @iamtylerwclark on @eggheadio](https://egghead.io/courses/css-fundamentals)
- [ColorKitty - Find the perfect color palettes from pictures](https://colorkitty.com)
