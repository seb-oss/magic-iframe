import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'magic-iframe',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme',
      footer: `
## Type \\<MagicIframeEvent\\>
<pre>
MagicIframeEvent {
  event: <a href="/#type-magiciframeeventname">MagicIframeEventName</a>;
  details: any | MouseEvent | KeyboardEvent;
}
</pre>

## Type \\<MagicIframeEventName\\>
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
      `,
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
