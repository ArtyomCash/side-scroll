/*declare var document: Document;
declare var window: Window;

interface Window {
  pageYOffset: number;
  scrollTo(x: number, y: number): void;
}

interface Element {
  getBoundingClientRect(): ClientRect;
}

/!*interface Window {
  requestAnimationFrame(callback: (timestamp: number) => void): number;
}*!/

interface Window {
  requestAnimationFrame(callback: FrameRequestCallback): number;
}

declare global {
  interface Window {
    // Здесь вы можете добавить свойства и методы, которые используются в вашем проекте
    pageYOffset: number;
    scrollTo(x: number, y: number): void;
    requestAnimationFrame(callback: FrameRequestCallback): number;
  }
}*/

/*
declare var document: Document;
declare var window: Window;

interface Window {
  pageYOffset: number;
  scrollTo(x: number, y: number): void;
  requestAnimationFrame(callback: FrameRequestCallback): number;
}

interface Element {
  getBoundingClientRect(): ClientRect;
}*/

/*
import { FrameRequestCallback } from 'dom';

declare var document: Document;
declare var window: Window;

interface Window {
  pageYOffset: number;
  scrollTo(x: number, y: number): void;
  requestAnimationFrame(callback: FrameRequestCallback): number;
}

interface Document {
  getElementById(elementId: string): HTMLElement | null;
}

interface HTMLElement {
  getBoundingClientRect(): ClientRect;
}

interface ClientRect {
  top: number;
  // Добавьте другие свойства ClientRect, если они используются
}

declare global {
  interface Window {
    // Здесь вы можете добавить свойства и методы, которые используются в вашем проекте
    pageYOffset: number;
    scrollTo(x: number, y: number): void;
    requestAnimationFrame(callback: FrameRequestCallback): number;
  }
}
*/

// import { FrameRequestCallback } from 'global';

declare var document: Document;
declare var window: Window;

interface Window {
  pageYOffset: number;
  scrollTo(x: number, y: number): void;
  // requestAnimationFrame(callback: FrameRequestCallback): number;
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
  // Добавьте другие свойства ClientRect, если они используются
}

declare global {
  interface Window {
    // Здесь вы можете добавить свойства и методы, которые используются в вашем проекте
    pageYOffset: number;
    scrollTo(x: number, y: number): void;
    requestAnimationFrame(callback: (timestamp: number) => void): number;
    // requestAnimationFrame(callback: FrameRequestCallback): number;
  }
}




