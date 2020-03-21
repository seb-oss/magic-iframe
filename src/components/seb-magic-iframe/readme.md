# SEB Magic Iframe

Most options (properties) below can be set using element attributes e.g.
```html
<seb-magic-iframe auto-resize="false"></seb-magic-iframe>
```

For more complex options or when you need to pass objects or arrays like for `styleUrls`, you need to pass the value using JavaScript e.g.

**html**
```html
<seb-magic-iframe id="magicIframe"></seb-magic-iframe>
```
**js**
```js
const magicIframe = document.getElementById('magicIframe');
magicIframe.styleUrls = ['/css/external-stylesheet.css', '/css/fonts.css']
```


<!-- Auto Generated Below -->


## Properties

| Property            | Attribute             | Description                                                                                                                                                            | Type                | Default     |
| ------------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ----------- |
| `autoResize`        | `auto-resize`         | Resize the iframe when the inner content changes height.                                                                                                               | `boolean`           | `true`      |
| `debug`             | `debug`               | Print debug log (console log).                                                                                                                                         | `boolean`           | `false`     |
| `matchContentWidth` | `match-content-width` | Set width of magic iframe to width of iframe content, useful when iframing fixed width pages.                                                                          | `"auto" \| boolean` | `false`     |
| `maxHeight`         | `max-height`          | Prevent the iframe from growing infinitely by setting a max height i.e. prevent infinite loop for height value when iframe content height depends on container height. | `string`            | `'10000vh'` |
| `minWidth`          | `min-width`           | Set a min width for the iframe.                                                                                                                                        | `string`            | `undefined` |
| `resizeDebounce`    | `resize-debounce`     | Debounce time in milliseconds for resize event.                                                                                                                        | `number`            | `0`         |
| `sanitizeSource`    | `sanitize-source`     | Sanitize url:s (both for iframe and external stylesheets) to prevent XSS attacks.                                                                                      | `boolean`           | `true`      |
| `scaleContent`      | `scale-content`       | Scale content inside iframe to match with of iframe, useful when iframing fixed width pages.                                                                           | `boolean`           | `false`     |
| `scaleDebounce`     | `scale-debounce`      | Debounce time in milliseconds for scale event.                                                                                                                         | `number`            | `0`         |
| `source`            | `source`              | Url to iframe content.                                                                                                                                                 | `string`            | `undefined` |
| `styleUrls`         | --                    | Add one or more stylesheets to the iframe, note that the iframe won't be visible until they've loaded.                                                                 | `string[]`          | `undefined` |
| `styles`            | `styles`              | Apply/inject inline styles to the iframe.                                                                                                                              | `string`            | `undefined` |


## Events

| Event              | Description                                                                                                                                                                                                        | Type                            |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------- |
| `magicIframeEvent` | Listen to events emitted by magic iframe e.g. <pre> const magicIframe = document.getElementById('magicIframe');<br> magicIframe.addEventListener('magicIframeEvent', $event => console.log($event.detail)); </pre> | `CustomEvent<MagicIframeEvent>` |


----------------------------------------------


## Type \<MagicIframeEvent\>
<pre>
MagicIframeEvent {
  event: <a href="#type-magiciframeeventname">MagicIframeEventName</a>;
  details: any | MouseEvent | KeyboardEvent;
}
</pre>

## Type \<MagicIframeEventName\>
|Event                            |Description|
|:--------------------------------|:-----------|
| iframe-click                    | Emitted when element inside iframe has been clicked.
| iframe-keyup                    | Emitted when keyup event emitted inside iframe.
| iframe-styles-added             | Emitted when styles have been added.
| iframe-styles-removed           | Emitted when styles have been removed.
| iframe-stylesheet-load          | Emitted when external stylesheets start loading.
| iframe-stylesheet-loaded        | Emitted when external stylesheets have finished loading.
| iframe-all-stylesheets-loaded   | Emitted when all external stylesheets have finished loading (only emitted if more than one external stylesheets).
| iframe-all-stylesheets-removed  | Emitted when all external stylesheets have been removed.
| iframe-loaded                   | Emitted when iframe has finished loading (including optional styles and/or stylesheets).
| iframe-loaded-with-errors       | Emitted when iframe has encountered errors after loading (usually related to CORS and inability to access iframe content).
| iframe-unloaded                 | Emitted when iframe triggers unload event (url in iframe changes).
| iframe-removed                  | Emitted when iframe element is removed from DOM (no source provided).
| iframe-resized                  | Emitted when iframe is resized to fit content height.
| iframe-content-scaled           | Emitted when iframe content is scaled to fit iframe size.
| iframe-title-change             | Emitted when the page title for the iframe content has changed.
      
