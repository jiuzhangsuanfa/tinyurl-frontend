import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ComponentModule } from '../component/component.module';
import { MaterialModule } from '../module/material.module';
import { HomeComponent } from './home/home.component';
import { PolicyComponent } from './policy/policy.component';

@NgModule({
  declarations: [HomeComponent, PolicyComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  exports: [HomeComponent]
})
export class PageModule { }
