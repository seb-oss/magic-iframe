# seb-magic-iframe



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

| Event              | Description                                                                                                                                                                                          | Type                            |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| `magicIframeEvent` | Listen to events emitted by magic iframe. E.g. `const magicIframe = document.getElementById('magicIframe'); magicIframe.addEventListener('magicIframeEvent', $event => console.log($event.detail));` | `CustomEvent<MagicIframeEvent>` |


----------------------------------------------

## Type \<MagicIframeEventName\>
