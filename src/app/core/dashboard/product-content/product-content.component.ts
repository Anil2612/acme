import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-content',
  templateUrl: './product-content.component.html',
  styleUrls: ['./product-content.component.scss']
})
export class ProductContentComponent implements OnInit {
  @Input() isSmall = false;
  constructor() { }

  ngOnInit(): void {
  }

  openVideo() {
    window.open('https://www.youtube.com/watch?v=Oy6hk6Y7VHQ', '_blank')
  }

}
