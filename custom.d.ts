/*
declare var document: Document;
declare var window: Window;

interface Window {
  pageYOffset: number;
  scrollTo(x: number, y: number): void;
  requestAnimationFrame(callback: (timestamp: number) => void): number;
}

interface Document {
  getElementById(elementId: string): HTMLElement | null;
}

interface HTMLElement {
  getBoundingClientRect(): ClientRect;
}

interface ClientRect {
  top: number;
}

declare global {
  interface Window {
    pageYOffset: number;
    scrollTo(x: number, y: number): void;
    requestAnimationFrame(callback: (timestamp: number) => void): number;
    scrollBy(options: ScrollToOptions): void;
  }
}




*/

/*declare var document: Document;
declare var window: Window;

interface Window {
  pageYOffset: number;
  scrollTo(x: number, y: number): void;
  requestAnimationFrame(callback: (timestamp: number) => void): number;
  scrollBy(options: ScrollToOptions): void;
  addEventListener(
    type: string,
    listener: (event: Event) => void,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener(
    type: string,
    listener: (event: Event) => void,
    options?: boolean | EventListenerOptions
  ): void;
  readonly scrollY: number;
  readonly innerHeight: number;
}

interface Document {
  getElementById(elementId: string): HTMLElement | null;
}

interface HTMLElement {
  getBoundingClientRect(): ClientRect;
  style: CSSStyleDeclaration;
}

interface ClientRect {
  top: number;
}

declare global {
  interface Window {
    pageYOffset: number;
    scrollTo(x: number, y: number): void;
    requestAnimationFrame(callback: (timestamp: number) => void): number;
    scrollBy(options: ScrollToOptions): void;
  }
}*/

declare var document: Document;
declare var window: Window;

interface Window {
  pageYOffset: number;
  scrollTo(x: number, y: number): void;
  requestAnimationFrame(callback: (timestamp: number) => void): number;
  scrollBy(options: ScrollToOptions): void;
  addEventListener(
    type: string,
    listener: (event: Event) => void,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener(
    type: string,
    listener: (event: Event) => void,
    options?: boolean | EventListenerOptions
  ): void;
  readonly scrollY: number;
  readonly innerHeight: number;
}

interface Document {
  getElementById(elementId: string): HTMLElement | null;
}

interface HTMLElement {
  getBoundingClientRect(): ClientRect;
  style: CSSStyleDeclaration;
}

interface ClientRect {
  top: number;
}

declare global {
  interface Window {
    pageYOffset: number;
    scrollTo(x: number, y: number): void;
    requestAnimationFrame(callback: (timestamp: number) => void): number;
    scrollBy(options: ScrollToOptions): void;
  }
}
