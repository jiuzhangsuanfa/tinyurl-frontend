import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { PolicyComponent } from './page/policy/policy.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'policy', component: PolicyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
