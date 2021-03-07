import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [LoadingComponent],
  imports: [CommonModule],
  exports: [LoadingComponent],
})
export class ComponentModule { }
