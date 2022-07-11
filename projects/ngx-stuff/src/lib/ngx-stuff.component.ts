import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-stuff',
  template: `
    <button class="custom" [ngClass]="customClass" [ngStyle]="customStyle">
      {{ name }}
    </button>
  `,
  styles: ['button {color: blue;} .custom{background-color: yellow}'],
})
export class NgxStuffComponent implements OnInit {
  @Input() name = 'button stuff';
  @Input() customClass: string = '';
  @Input() customStyle = {};

  constructor() {}

  ngOnInit(): void {}
}
