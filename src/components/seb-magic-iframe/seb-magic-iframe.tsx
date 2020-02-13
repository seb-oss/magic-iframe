import {Component, EventEmitter, h, Host, Prop, State, Watch} from '@stencil/core';
import elementResizeDetectorMaker from 'element-resize-detector';
import {sanitizeUrl} from '@braintree/sanitize-url';
import {forkJoin, fromEvent, Subject, Subscription, timer} from 'rxjs';
import {MagicIframeEvent} from "./seb-magic-iframe-event.interface";
import {debounce, take, takeUntil} from "rxjs/operators";

const erd = elementResizeDetectorMaker({
  strategy: "scroll"
});


@Component({
  tag: 'seb-magic-iframe',
  styleUrl: 'seb-magic-iframe.css',
  shadow: true
})
export class SebMagicIframe {

  iframe!: HTMLIFrameElement;
  styleElement: HTMLStyleElement;

  /**
   * Properties
   *
   */

  @Prop() source: string;
  @Prop() styles: string;
  @Prop() styleUrls: Array<string>;
  @Prop() autoResize: boolean = true;
  @Prop() resizeDebounce: number = 0;
  @Prop() scaleDebounce: number = 0;
  @Prop() matchContentWidth: boolean | 'auto' = false;
  @Prop() scaleContent: boolean = false;
  @Prop() height: string;
  @Prop() minWidth: string;
  @Prop() sanitizeSource: boolean = true;
  @Prop() maxHeight: string = '500vh';
  @Prop() debug: boolean = false;

  /**
   * Watchers
   *
   */
  @Watch('source')
  sourceChangeHandler(newValue: boolean, oldValue: boolean) {
    if(newValue !== oldValue){ this.loaded = false; }
  }

  @Watch('scaleContent')
  scaleContentChangeHandler(newValue: boolean, oldValue: boolean) {
    if(newValue !== oldValue){
      this.scale();
      // scale content is true...
      if(newValue) {
        // ...set match content width to false (we can't match and scale at the same time).
        this.matchContentWidth = false;
      }
    }
  }

  @Watch('styles')
  stylesChangeHandler(newValue: boolean, oldValue: boolean) {
    if(newValue !== oldValue){
      this.addCss();
    }
  }

  @Watch('styleUrls')
  styleUrlsChangeHandler(newValue: boolean, oldValue: boolean) {
    if(newValue !== oldValue){
      this.addStyleSheets();
    }
  }

  @Watch('autoResize')
  autoResizeChangeHandler(newValue: boolean, oldValue: boolean) {
    if(newValue !== oldValue){
      //this.addStyleSheets();
      // if falsy...
      if(!newValue) {
        this.removeElementResizeDetector();
      } else if(this.iframe.contentDocument.body.getElementsByClassName('erd_scroll_detection_container').length === 0) {
        this.addElementResizeDetector(this.iframe.contentDocument.body, this.iframe.contentWindow.getComputedStyle(this.iframe.contentDocument.body));
      }
    }
  }

  @Watch('matchContentWidth')
  matchContentWidthChangeHandler(newValue: boolean, oldValue: boolean) {
    if(newValue !== oldValue) {
      this.hasBodyWidthRule();
    }
  }

  @Watch('loaded')
  loadedHandler(newValue: boolean, oldValue: boolean) {
    if(newValue !== oldValue && newValue){

      // prevent overflow for iframe body
      const error = this.preventOverflow();
      if(error) {
        return;
      }
      this.magicIframeEventHandler({event:'iframe-loaded', details: this._loadEvent});
      const pageTitle = this.iframe.contentDocument.title;
      if(pageTitle !== this.pageTitle) {
        this.pageTitle = pageTitle;
        this.magicIframeEventHandler({event: 'iframe-title-change', details: pageTitle});
      }

      this.addCss();
      // add external stylesheets
      this.addStyleSheets();
      if(this.autoResize) {
        this.addElementResizeDetector(this.iframe.contentDocument.body, this.iframe.contentWindow.getComputedStyle(this.iframe.contentDocument.body));
      }
      this.addUnloadListener();
      this.addClickListener();
      this.addKeyUpListener();
      this.scale();
    } else {
      this.loading = true;
    }
  }

  // @ts-ignore
  @Event() magicIframeEvent: EventEmitter<MagicIframeEvent>;
  magicIframeEventHandler(event: MagicIframeEvent) {
    if (this.debug) {
      console.log(event);
    }
    this.magicIframeEvent.emit(event);
  }

  onIframeLoad($event: any) {
    this._loadEvent = $event;
    this.loaded = true;
  }
  @State() loaded: boolean = false;
  @State() loading: boolean = true;
  @State() pageTitle: string = 'SEB Magic Iframe';

  private _loadEvent: Event;
  private _previousScale: number;
  private _scale: number = 1;
  private _hasBodyWidthRule = false;
  private _resizeListener: Subscription;
  private _styleElement: HTMLStyleElement;
  private _stylesheets: Array<HTMLLinkElement> = [];
  private _resizeDebounceTimeout: number;
  private _unsubscribe$ = new Subject<void>();

  getSafeSrc(): string {
    return this.sanitizeSource ? sanitizeUrl(this.source) : this.source;
  }

  render() {
    return <Host class={{'loading' : this.loading}}>
      {this.source ?
        <div>
          <div class={{'seb-iframe-loading': this.loading}} style={!this.loading && {'display':'none'}}>
            <slot/>
          </div>
          <iframe src={this.getSafeSrc()}
                  ref={(el) => this.iframe = el as HTMLIFrameElement}
                  class="seb-iframe"
                  frameborder="0"
                  scrolling="no"
                  title={this.pageTitle}
                  onLoad={ev => this.onIframeLoad(ev)}>
          </iframe>
        </div> : null}
      </Host>;
  }

  private addElementResizeDetector(body: HTMLElement, style: any) {
    erd.listenTo(body, () => {
      // clear timeout
      clearTimeout(this._resizeDebounceTimeout);

      // set timeout (resize complete event)
      this._resizeDebounceTimeout = setTimeout(() => this.updateSize(style), this.resizeDebounce);
    });
  }

  private updateSize(style?: any) {
    const computedStyle =  style || this.iframe.contentWindow.getComputedStyle(this.iframe.contentDocument.body);
    const offsetHeight = this.iframe.contentDocument.body.offsetHeight;
    const marginTop = parseInt(computedStyle.getPropertyValue('margin-top'), 10);
    const marginBottom = parseInt(computedStyle.getPropertyValue('margin-bottom'), 10);
    const height = (offsetHeight + marginTop + marginBottom) * this._scale;
    const width = this.iframe.contentDocument.body.offsetWidth;
    this.iframe.style.height = `${height}px`;
    this.iframe.style.maxHeight = this.maxHeight;
    if((this.matchContentWidth !== false && this._hasBodyWidthRule && width && !this.scaleContent) || this.minWidth) {
      this.iframe.style.minWidth = this.minWidth || `${width}px`;
    } else {
      this.iframe.style.minWidth = '100%';
    }
    this.magicIframeEventHandler({ event: 'iframe-resized', details: {width, height} });

  }

  private addUnloadListener() {
    fromEvent(this.iframe.contentWindow, 'unload')
      .pipe(
        take(1),
        takeUntil(this._unsubscribe$)
      )
      .subscribe(($event: Event) => {
        this.loaded = false;
        this.iframe.contentDocument.body.style.overflow = 'hidden';
        this.magicIframeEventHandler({ event: 'iframe-unloaded', details: $event });
      });
  }
  private addClickListener() {
    fromEvent(this.iframe.contentDocument, 'click')
      .pipe(
        takeUntil(this._unsubscribe$)
      )
      .subscribe(($event: Event) => {
        this.magicIframeEventHandler({ event: 'iframe-click', details: $event });
      });
  }
  private addKeyUpListener() {

    fromEvent(this.iframe.contentDocument, 'keyup')
      .pipe(
        takeUntil(this._unsubscribe$)
      )
      .subscribe(($event: Event) => {
        this.magicIframeEventHandler({ event: 'iframe-keyup', details: $event });
      });
  }

  private addCss() {
    // if styles are defined...
    if(this.styles && this.styles.length > 0) {
      // check if style element has been created...
      if (!this._styleElement) {
        // ...if not create it
        this._styleElement = document.createElement('style');
        // ..and give it a unique id so that we can remove it later on
        this._styleElement.setAttribute('id', 'sebMagicIframeStyles');
        // ...add styles to the created node
        this._styleElement.appendChild(document.createTextNode(this.styles));
      } else {
        // ...if style element exists, replace the content with new styles
        try {this._styleElement.innerText = this.styles;} catch (e) {
          // ...if not create it
          this._styleElement = document.createElement('style');
          // ..and give it a unique id so that we can remove it later on
          this._styleElement.setAttribute('id', 'sebMagicIframeStyles');
          // ...add styles to the created node
          this._styleElement.appendChild(document.createTextNode(this.styles));
        }
      }
      // add element to DOM
      this.iframe.contentWindow.document.getElementsByTagName('head')[0].appendChild(this._styleElement);
      this.magicIframeEventHandler({ event: 'iframe-styles-added', details: this.styles });
    } else
      // if no styles are passed and style element exists...
      if(this._styleElement) {
      // ...get style element inside iframe
      let styleElement = this.iframe.contentWindow.document.getElementById('sebMagicIframeStyles');
      // ...remove style element from DOM
      styleElement.parentNode.removeChild(styleElement);
      // ...clear styleElement
      this._styleElement = null;
      styleElement = null;
      this.magicIframeEventHandler({ event: 'iframe-styles-removed', details: this.styles });

    }
  }
  private preventOverflow(): boolean {
    try {
      const styleElement = this.iframe.contentWindow.document.createElement('style');
      this.iframe.contentWindow.document.body.style.position = 'static';
      this.styleElement = styleElement;
      styleElement.appendChild(document.createTextNode('html { overflow: hidden; }'));
      this.iframe.contentWindow.document.getElementsByTagName('head')[0].appendChild(styleElement);
      return false;
    } catch (error) {
      console.log('Event listeners and/or styles and resize listener could not be added due to a cross-origin frame error.');
      console.warn(error);
      this.magicIframeEventHandler({ event: 'iframe-loaded-with-errors', details: error});
      this.loading = false;
      return true;
    }
  }

  private addStyleSheets() {

    // remove stylesheets if present
    if(this._stylesheets && this._stylesheets.length > 0) {
      const stylesheets = this.iframe.contentDocument.head.querySelectorAll('link[data-seb-magic-iframe="true"]');
      if(stylesheets) {
        for (let i = 0; i < stylesheets.length; i++) {
          stylesheets[i].parentNode.removeChild(stylesheets[i]);
        }
        this.magicIframeEventHandler({ event: 'iframe-all-stylesheets-removed', details: this.styleUrls });
      }
    }

    if (this.styleUrls && this.styleUrls.length > 0) {

      // create placeholder for subjects
      let loadSubjects: Array<Subject<string>> = [];

      // loop through all style sheets...
      this.styleUrls.map((styleUrl: string) => {

        // create link element
        const linkElement: HTMLLinkElement  = this.iframe.contentDocument.createElement('link');
        this._stylesheets = [...this._stylesheets, linkElement];
        //linkElement['data-seb-magic-iframe'] = 'true';
        linkElement.setAttribute('data-seb-magic-iframe', 'true');
        linkElement['rel'] = 'stylesheet';
        linkElement['type'] = 'text/css';
        linkElement['href'] = this.sanitizeSource ? sanitizeUrl(styleUrl) : styleUrl;

        // create load subject that will emit once the stylesheet has loaded
        const loadSubject: Subject<string> = new Subject<string>();
        loadSubjects = [...loadSubjects, loadSubject];

        fromEvent(linkElement, 'load')
          .pipe(
            take(1),
            takeUntil(this._unsubscribe$)
          ).subscribe(_ => {
            this.magicIframeEventHandler({ event: 'iframe-stylesheet-loaded', details: styleUrl});
            loadSubject.next(styleUrl);
            loadSubject.complete();
        });

        // add link to iframe head
        this.iframe.contentDocument.head.insertBefore(linkElement, this.styleElement);

        // emit load event
        this.magicIframeEventHandler({ event: 'iframe-stylesheet-load', details: styleUrl});
      });

      forkJoin(loadSubjects)
        .pipe(
          take(1),
          takeUntil(this._unsubscribe$)
        )
        .subscribe(() => {
          if (this.styleUrls.length > 1) {
            this.magicIframeEventHandler({ event: 'iframe-all-stylesheets-loaded', details: this.styleUrls});
          }
          // check if body has width rule defined
          this.hasBodyWidthRule();
          this.loading = false;
          //this.$loading.next(false);
        });
    } else {
      // check if body has width rule defined
      this.hasBodyWidthRule();
      this.loading = false;
    }
  }

  private setScale(scale?: number) {
    // scale isn't passed...
    if (!scale) {
      // ...set scale value to...
      // 1. if previous zoom value and iframe has width rule set on body element: previous value
      // 2. if no previous value: the relation between iframe width and the width of the iframe content
      const calculatedScale = this._previousScale && this._hasBodyWidthRule ?
        this._previousScale : (this.iframe.clientWidth / this.iframe.contentDocument.body.offsetWidth);
      // reset previous scale value
      this._previousScale = null;
      // restrict scale to max 1
      this._scale = calculatedScale > 1 ? 1 : calculatedScale;
    } else {
      // ...if scale value is passed, use it
      this._previousScale = scale;
      this._scale = scale;
    }
    // set style attribute for iframe body
    this.iframe.contentDocument.body.style.transformOrigin = 'top left';
    this.iframe.contentDocument.body.style.transform = 'scale3d(' + this._scale + ',' + this._scale + ',1)';
    this.updateSize();

    // emit content scale event if it has changed or been reset
    if(scale || this._scale !== 1) {
      this.magicIframeEventHandler({ event: 'iframe-content-scaled', details: this._scale});
    }
  }

  private filterCssRuleBodyWidth(cssRule: CSSRule) {
    return (cssRule && cssRule.type === 1 // filter style rules of type 1 i.e. CSSStyleRule
      && cssRule['selectorText'] === 'body') // filter rules that apply to body
      && (cssRule['style'].width || cssRule['style'].minWidth); // that contains width or minWidth
  }

  private removeElementResizeDetector() {
    if (this.iframe.contentDocument.body && erd) {
      erd.uninstall(this.iframe.contentDocument.body);
    }
  }

  private scale() {
    // if scale content...
    if (this.scaleContent) {
      // ...scale iframe
      this.setScale();

      // ...check if resize listener is defined...
      if (!this._resizeListener) {
        this._resizeListener = fromEvent(window, 'resize')
          .pipe(
            debounce(() => timer(this.scaleDebounce)),
            takeUntil(this._unsubscribe$)
          )
          .subscribe(_ => this.setScale());
      }
    } else if (!this.scaleContent && this._resizeListener)  {
      // remove event listener
      this._resizeListener.unsubscribe();
      this._resizeListener = null;

      // reset scale
      this.setScale(1);
    }
  }

  private hasBodyWidthRule() {
    if (this.matchContentWidth !== 'auto') {
      this._hasBodyWidthRule = this.matchContentWidth;
      this.updateSize();
      return;
    }
    try {
      // return all rules applied to body containing 'width'
      let widthRule = [].slice.call(this.iframe.contentDocument.styleSheets)
        .reduce((prev, styleSheet) => {
          return styleSheet.cssRules ? [...prev, [].slice.call(styleSheet.cssRules)
              .map(rule => rule.type === 4 ? ([].slice.call(rule.cssRules)
              // get last media query rule for selector or return basic css style rule
                .filter(this.filterCssRuleBodyWidth).pop()) : rule)
              .filter(this.filterCssRuleBodyWidth)
              .reduce((prevCss, cssRule: CSSRule) => [...prevCss, cssRule['style'].width || cssRule['style'].minWidth], [])]
            : [...prev];
        }, []);
      widthRule = [].concat.apply([], widthRule);
      this._hasBodyWidthRule = widthRule.length > 0;
      this.updateSize();
    } catch (error) {
      console.log('Can\'t read css rules from stylesheet loaded from external domain.');
      console.warn(error);
    }
  }

  componentDidUnload() {
    this.magicIframeEventHandler({ event: 'iframe-removed', details: this.iframe});
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }

}
