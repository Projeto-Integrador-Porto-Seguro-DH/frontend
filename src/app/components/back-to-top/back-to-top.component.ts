import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Inject, HostListener } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.css', '../menu/menu.component.css'],
})
export class BackToTopComponent implements OnInit {
  windowScrolled: boolean;
  windowOnBottom: boolean;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {}

  scrollToTop(): void {
    window.scroll(0, 0);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop > 200
    ) {
      this.windowScrolled = true;
    } else if (
      (this.windowScrolled && window.scrollY) ||
      document.documentElement.scrollTop ||
      document.body.scrollTop < 100
    ) {
      this.windowScrolled = false;
    }

    // if (
    //   window.scrollY ||
    //   document.documentElement.scrollHeight -
    //     document.documentElement.scrollTop <=
    //     217
    // ) {
    //   this.windowOnBottom = true;
    // } else if (
    //   (this.windowOnBottom && window.scrollY) ||
    //   document.documentElement.scrollHeight -
    //     document.documentElement.scrollTop >
    //     217
    // ) {
    //   this.windowOnBottom = false;
    // }
  }
}
