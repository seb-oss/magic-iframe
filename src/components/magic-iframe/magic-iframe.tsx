import {Component, EventEmitter, h, Host, Prop, State, Watch} from '@stencil/core';
import elementResizeDetectorMaker from 'element-resize-detector';
import {BehaviorSubject, forkJoin, fromEvent, Observable, ReplaySubject, Subject} from 'rxjs';
// import {debounceTime, distinctUntilChanged, filter, map, skip, takeUntil, tap} from 'rxjs/operators';

const erd = elementResizeDetectorMaker({
  strategy: "scroll" //<- For ultra performance.
});


@Component({
  tag: 'seb-magic-iframe',
  styleUrl: 'magic-iframe.css',
  shadow: true
})
export class MagicIframe {

  iframe!: HTMLIFrameElement;
  styleElement: HTMLStyleElement;

  /**
   * Properties
   *
   */

  @Prop() source: string;
  @Prop() styles: string;
  @Prop() styleUrls: Array<string>;
  @Prop() autoResize: boolean;
  @Prop() resizeDebounceMillis: number;
  @Prop() matchContentWidth: boolean | 'auto';
  @Prop() resizeContent: boolean;
  @Prop() height: string;
  @Prop() minWidth: string;
  @Prop() sanitizeSource: boolean;
  @Prop() debug: string;


  /**
   * Watchers
   *
   */
  @Watch('source')
  sourceChangeHandler(newValue: boolean, oldValue: boolean) {
    if(newValue !== oldValue){ this.loaded = false; }
  }

  @Watch('resizeContent')
  resizeContentChangeHandler(newValue: boolean, oldValue: boolean) {
    console.log(newValue);
    if(newValue !== oldValue){
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

  @Watch('loaded')
  loadedHandler(newValue: boolean, oldValue: boolean) {
    if(newValue){

      // prevent overflow for iframe body
      this.preventOverflow();

      this.addCss();
      // add external stylesheets
      this.addStyleSheets();
      if(this.autoResize) {
        this.addElementResizeDetector(this.iframe.contentDocument.body, this.iframe.contentWindow.getComputedStyle(this.iframe.contentDocument.body));
      }
      this.addUnloadListener();
      this.addClickListener();
      this.addKeyUpListener();

      if (this.resizeContent) {
        this.scale();
        if (!this._resizeListener) {
          addEventListener('resize', ($event) => this.scale($event))
        }
      } else if (this._resizeListener)  {
        this._resizeListener();
        this._resizeListener = null;
        this._previousScale = this._scale;
        this._scale = 1;
      }
    } else {
      this.loading = true;
    }
  }

  // @ts-ignore
  @Event() magicIframeEvent: EventEmitter;
  magicIframeEventHandler(eventType: any, details: any) {
    const event: any = { event: eventType, details};
    if (this.debug) {
      console.log(event);
    }
    this.magicIframeEvent.emit(event);
  }

  onIframeLoad($event: any) {
    this.loaded = true;
  }
  @State() loaded: boolean = false;
  @State() loading: boolean = true;

  private _previousScale: number;
  private _scale: number = 1;
  private _hasBodyWidthRule = false;
  private _resizeListener: Function;
  private _styleElement: HTMLStyleElement;
  private _stylesheets: Array<HTMLLinkElement> = [];


  render() {
    return <Host>
            <div>
              { this.loading ?
                <div class="seb-iframe-loading"><slot></slot></div> : ''
              }
              <iframe src={this.source}
                      ref={(el) => this.iframe = el as HTMLIFrameElement}
                      class="seb-iframe"
                      frameborder="0"
                      scrolling="no"
                      onLoad={ev => this.onIframeLoad(ev)}>
              </iframe>
            </div>
      </Host>;
  }

  private addElementResizeDetector(body: HTMLElement, style: any) {
    erd.listenTo(body, () => {
      this.updateSize(body, style);
    });
  }

  private updateSize(body?: HTMLElement, style?: any) {
    const computedStyle =  style || this.iframe.contentWindow.getComputedStyle(this.iframe.contentDocument.body);
    const offsetHeight = this.iframe.contentDocument.body.offsetHeight;
    const marginTop = parseInt(computedStyle.getPropertyValue('margin-top'), 10);
    const marginBottom = parseInt(computedStyle.getPropertyValue('margin-bottom'), 10);
    const height = (offsetHeight + marginTop + marginBottom) * this._scale;
    const width = this.iframe.contentDocument.body.offsetWidth;
    this.iframe.style.height = `${height}px`;
    // this.iframe.style.minWidth = `${width}px`;
    // const iframeSize = {height: height * this._scale + 'px', minWidth: width + 'px'};
    // this.$iframeSize.next(iframeSize);
  }

  private addUnloadListener() {
    this.iframe.contentWindow.addEventListener('unload',($event: Event) => {
      this.loaded = false;
      this.iframe.contentDocument.body.style.overflow = 'hidden';
      this.magicIframeEventHandler('unload', $event)


    });
  }
  private addClickListener() {
    this.iframe.contentDocument.addEventListener('click',($event: MouseEvent) => {
      this.magicIframeEventHandler('click', $event)
    });
  }
  private addKeyUpListener() {
    this.iframe.contentDocument.addEventListener('keyup',($event: KeyboardEvent) => {
      this.magicIframeEventHandler('keyup', $event)
    });
  }

  private addCss() {
    // if styles are defined...
    if(this.styles && this.styles.length > 0) {
      // check if style element has been created...
      if (!this._styleElement) {
        // ...if not create it
        this._styleElement = this.iframe.contentDocument.createElement('style');
        // ..and give it a unique id so that we can remove it later on
        this._styleElement.setAttribute('id', 'sebMagicIframeStyles');
        // ...add styles to the created node
        this._styleElement.appendChild(this.iframe.contentDocument.createTextNode(this.styles));
      } else {
        // ...if style element exists, replace the content with new styles
        this._styleElement.innerText = this.styles;
      }
      // add element to DOM
      this.iframe.contentDocument.getElementsByTagName('head')[0].appendChild(this._styleElement);
      this.magicIframeEventHandler('iframe-styles-added', {styles: this.styles});
    } else
      // if no styles are passed and style element exists...
      if(this._styleElement) {
      // ...get style element inside iframe
      let styleElement = this.iframe.contentDocument.getElementById('sebMagicIframeStyles');
      // ...remove style element from DOM
      styleElement.parentNode.removeChild(styleElement);
      // ...clear styleElement
      this._styleElement = null;
      styleElement = null;
      this.magicIframeEventHandler('iframe-styles-removed', {styles: this.styles});

    }
  }
  private preventOverflow() {
    const styleElement = this.iframe.contentDocument.createElement('style');
    this.styleElement = styleElement;
    styleElement.appendChild(this.iframe.contentDocument.createTextNode('html { overflow: hidden; }'));
    this.iframe.contentDocument.getElementsByTagName('head')[0].appendChild(styleElement);
  }

  private addStyleSheets() {

    // remove stylesheets if present
    if(this._stylesheets && this._stylesheets.length > 0) {
      const stylesheets = this.iframe.contentDocument.head.querySelectorAll('link[data-seb-magic-iframe="true"]');
      for (var i = 0; i < stylesheets.length; i++) {
        stylesheets[i].parentNode.removeChild(stylesheets[i]);
      }
      this.magicIframeEventHandler('iframe-stylesheets-removed', {styleUrls: this.styleUrls});

    }

    if (this.styleUrls && this.styleUrls.length > 0) {

      // create placeholder for subjects
      const loadSubjects: Array<Subject<string>> = [];

      // loop through all style sheets...
      this.styleUrls.map((styleUrl: string) => {

        // create link element
        const linkElement: HTMLLinkElement  = this.iframe.contentDocument.createElement('link');
        this._stylesheets = [...this._stylesheets, linkElement];
        //linkElement['data-seb-magic-iframe'] = 'true';
        linkElement.setAttribute('data-seb-magic-iframe', 'true');
        linkElement['rel'] = 'stylesheet';
        linkElement['type'] = 'text/css';
        linkElement['href'] = styleUrl;

        // create load subject that will emit once the stylesheet has loaded
        const loadSubject: Subject<string> = new Subject<string>();
        loadSubjects.push(loadSubject);

        // listen to load event on link
        linkElement.addEventListener('load', () => {
          this.iframe.contentDocument.body.style.overflow = 'inherit';
          this.magicIframeEventHandler('iframe-stylesheet-loaded', {styleUrl});
          loadSubject.next(styleUrl);
          loadSubject.complete();
          return true;
        });

        // push listener to array so that we can remove them later
        // this.eventListeners.push(stylesheetLoadListener);

        // add link to iframe head
        this.iframe.contentDocument.head.insertBefore(linkElement, this.styleElement);

        // emit load event
        this.magicIframeEventHandler('iframe-stylesheet-load', {styleUrl});
      });

      forkJoin(loadSubjects)
        .pipe(
          //takeUntil(this.$unsubscribe)
        )
        .subscribe(() => {
          if (this.styleUrls.length > 1) {
            this.magicIframeEventHandler('iframe-all-stylesheets-loaded', {styleUrls: this.styleUrls});
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

  private scale(event?: Event) {
    const zoom = this._previousScale && this._hasBodyWidthRule ?
      this._previousScale : (this.iframe.clientWidth / this.iframe.contentDocument.body.offsetWidth);
    this._previousScale = null;
    this._scale = zoom > 1 ? 1 : zoom;
    this.iframe.contentDocument.body.style.transformOrigin = 'top left';
    this.iframe.contentDocument.body.style.transform = 'scale3d(' + this._scale + ',' + this._scale + ',1)';
    this.updateSize();

    // emit content resized event
    this.magicIframeEventHandler('iframe-content-resized', {scale: this._scale});
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

  private hasBodyWidthRule() {
    if (this.matchContentWidth !== 'auto') {
      this._hasBodyWidthRule = this.matchContentWidth;
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
    } catch (error) {
      console.log('Can\'t read css rules from stylesheet loaded from external domain.');
      console.warn(error);
    }
  }

}
