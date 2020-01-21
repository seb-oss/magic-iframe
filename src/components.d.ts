/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface MyComponent {
    /**
    * The first name
    */
    'first': string;
    /**
    * The last name
    */
    'last': string;
    /**
    * The middle name
    */
    'middle': string;
  }
  interface SebMagicIframe {
    'autoResize': boolean;
    'debug': boolean;
    'height': string;
    'matchContentWidth': boolean | 'auto';
    'minWidth': string;
    'resizeDebounce': number;
    'sanitizeSource': boolean;
    'scaleContent': boolean;
    'scaleDebounce': number;
    /**
    * Properties
    */
    'source': string;
    'styleUrls': Array<string>;
    'styles': string;
  }
}

declare global {


  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };

  interface HTMLSebMagicIframeElement extends Components.SebMagicIframe, HTMLStencilElement {}
  var HTMLSebMagicIframeElement: {
    prototype: HTMLSebMagicIframeElement;
    new (): HTMLSebMagicIframeElement;
  };
  interface HTMLElementTagNameMap {
    'my-component': HTMLMyComponentElement;
    'seb-magic-iframe': HTMLSebMagicIframeElement;
  }
}

declare namespace LocalJSX {
  interface MyComponent {
    /**
    * The first name
    */
    'first'?: string;
    /**
    * The last name
    */
    'last'?: string;
    /**
    * The middle name
    */
    'middle'?: string;
  }
  interface SebMagicIframe {
    'autoResize'?: boolean;
    'debug'?: boolean;
    'height'?: string;
    'matchContentWidth'?: boolean | 'auto';
    'minWidth'?: string;
    'onMagicIframeEvent'?: (event: CustomEvent<any>) => void;
    'resizeDebounce'?: number;
    'sanitizeSource'?: boolean;
    'scaleContent'?: boolean;
    'scaleDebounce'?: number;
    /**
    * Properties
    */
    'source'?: string;
    'styleUrls'?: Array<string>;
    'styles'?: string;
  }

  interface IntrinsicElements {
    'my-component': MyComponent;
    'seb-magic-iframe': SebMagicIframe;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'my-component': LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
      'seb-magic-iframe': LocalJSX.SebMagicIframe & JSXBase.HTMLAttributes<HTMLSebMagicIframeElement>;
    }
  }
}


