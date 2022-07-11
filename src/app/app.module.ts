import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxStuffModule } from 'ngx-stuff';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxStuffModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
