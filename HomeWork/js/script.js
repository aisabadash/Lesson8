"use strict";

// Напишіть код, щоб вибрати елемент з атрибутом data-widget-name з документа та прочитати його значення.
//  <!DOCTYPE html>
//  <html>
//  <body>
//  <div data-widget-name="menu">Виберіть жанр</div>
//  <script>/* ваш код */</script>
//  </body>
//  </html>

const widget = document.querySelector("[data-widget-name]");
console.log(widget.textContent);