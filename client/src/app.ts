import { Component } from './utils/component';
import { Router } from './router/index';
import { Header } from './components/header/header';

export class App {
  private main;
  private router;
  private header: Header;

  constructor(private rootElement: HTMLElement) {
    this.header = new Header(this.rootElement);
    this.main = new Component(this.rootElement, 'main', ['main']);
    this.router = new Router(this.main.element);
  }

  init(): void {
    this.router.initRouter();
  }
}
