import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
declare let jQuery: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  sticky_relocate() {
    let window_top = jQuery(window).scrollTop();
    let div_top = jQuery('#sticky-anchor').offset().top;
    if (window_top > div_top) {
        jQuery('#tf-menu').addClass('stick');
    } else {
        jQuery('#tf-menu').removeClass('stick');
    }
  }

  ngOnInit() {
    jQuery(window).scroll(this.sticky_relocate);
    this.sticky_relocate();

    jQuery('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
        let target = jQuery(this.hash);
        target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          jQuery('html,body').animate({
            scrollTop: target.offset().top - 70
          }, 1000);
          return false;
        }
      }
    });
  }

}
