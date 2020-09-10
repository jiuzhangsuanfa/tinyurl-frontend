import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalysisComponent } from './page/analysis/analysis.component';
import { HistoryComponent } from './page/history/history.component';
import { HomeComponent } from './page/home/home.component';
import { PolicyComponent } from './page/policy/policy.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'policy', component: PolicyComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'analysis', component: AnalysisComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
