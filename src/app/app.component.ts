import { Component, inject, OnInit } from '@angular/core';
import { NgxStuffService } from 'ngx-stuff';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'library-app';
  stuff = inject(NgxStuffService);

  ngOnInit() {
    console.log(this.stuff.doStuff());
    console.log(this.stuff.doStuffWithInput('stuff library with input'));
  }
}
