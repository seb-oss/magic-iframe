export interface MagicIframeEvent {
  event: MagicIframeEventName;
  details: any | MouseEvent | KeyboardEvent;
}
export type MagicIframeEventName = 'iframe-click'
  | 'iframe-removed'
  | 'iframe-loaded'
  | 'iframe-loaded-with-errors'
  | 'iframe-unloaded'
  | 'iframe-styles-added'
  | 'iframe-styles-removed'
  | 'iframe-stylesheet-load'
  | 'iframe-stylesheet-loaded'
  | 'iframe-all-stylesheets-removed'
  | 'iframe-all-stylesheets-loaded'
  | 'iframe-keyup'
  | 'iframe-content-scaled'
  | 'iframe-resized'
  | 'iframe-error';
