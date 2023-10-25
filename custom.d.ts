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




