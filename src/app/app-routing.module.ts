import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { TestDashboardComponent } from './test-dashboard/test-dashboard.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard2', component: DashboardComponent },
  { path: 'dashboard', component: TestDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
