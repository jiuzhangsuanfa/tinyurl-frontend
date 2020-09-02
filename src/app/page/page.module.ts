import { NgModule } from '@angular/core';
import { MaterialModule } from '../module/material.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [MaterialModule],
  exports: [HomeComponent]
})
export class PageModule { }
