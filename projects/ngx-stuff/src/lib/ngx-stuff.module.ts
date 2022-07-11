import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxStuffComponent } from './ngx-stuff.component';

@NgModule({
  declarations: [NgxStuffComponent],
  imports: [CommonModule],
  exports: [NgxStuffComponent],
})
export class NgxStuffModule {}
