## Templating Engines

https://expressjs.com/en/resources/template-engines.html

**ejs replaces! the HTML can deleted I save them for leaning **

ejs not have layout > using partials or includes > include folder share

```ejs
ex: shop.ejs : <%- include('includes/head.ejs') %>
```

The idea here is that you have some code blocks which you reuse in different parts of your templates
and you can therefore just share them across your templates,so it's a bit like the opposite of a layout,
instead of having one master layout where you put your individual view parts into, you have a couple of separated shared view parts which you can merge into the views you're creating and for that I'll create
a new subfolder in the views folder

---
