# Tutorial - Zero to Hero

https://www.youtube.com/watch?v=1Rs2ND1ryYc&t=1s

## CSS Selectors

### The CSS element Selector

- html

```html
<p>The CSS element Selector</p>
<h2 class="title">The CSS class Selector</h2>
<h2 id="sameId">The CSS id Selector</h2>
```

- css

```css
/* The CSS element Selector */
p {
  text-align: center;
  color: red;
}
/* The CSS class Selector */
.center {
  text-align: center;
  color: red;
}
/* The CSS id Selector 

The id of an element is unique within a page, so the id selector is used to select one unique element!*/
#para1 {
  text-align: center;
  color: red;
}
/* The CSS Universal Selector */
* {
  text-align: center;
  color: blue;
}
```

## CSS Pseudo-classes

Note: a:hover MUST come after a:link and a:visited in the CSS definition in order to be effective! a:active MUST come after a:hover in the CSS definition in order to be effective! Pseudo-class names are not case-sensitive.

```css
/* unvisited link */
a:link {
  color: #ff0000;
}

/* visited link */
a:visited {
  color: #00ff00;
}

/* mouse over link */
a:hover {
  color: #ff00ff;
}

/* selected link */
a:active {
  color: #0000ff;
}
```

```html
!DOCTYPE html>
<html>
  <head>
    <style>
      p:first-child {
        color: blue;
      }
      p:nth-child(2) {
        color: rgb(136, 18, 18);
      }
      p:only-child {
        color: rgb(136, 18, 18);
      }
    </style>
  </head>
  <body>
    <p>This is some text.[will be blue using first-child]</p>
    <p>This is some text.[will be rgb(136, 18, 18) using nth-child(2) ]</p>
  </body>
</html>
```

https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors

```css
/* /_ <a> elements with a title attribute _/ */
a[title] {
  color: purple;
}

/* /_ <a> elements with an href matching "https://example.org" _/ */
a[href="https://example.org"]
{
  color: green;
}

/* /_ <a> elements with an href containing "example" _/ */
a[href*="example"] {
  font-size: 2em;
}

/* /_ <a> elements with an href ending ".org" _/ */
a[href$=".org"] {
  font-style: italic;
}

/* /_ <a> elements whose class attribute contains the word "logo" _/ */
a[class~="logo"] {
  padding: 2px;
}
```

for more : https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors
