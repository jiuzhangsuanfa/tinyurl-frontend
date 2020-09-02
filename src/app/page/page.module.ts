import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentModule } from '../component/component.module';
import { MaterialModule } from '../module/material.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentModule
  ],
  exports: [HomeComponent]
})
export class PageModule { }
