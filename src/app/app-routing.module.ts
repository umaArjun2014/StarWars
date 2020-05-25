import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { DashboardChartsComponent } from './dashboard-charts/dashboard-charts.component'

const routes: Routes = [
  {path:'', component: DashboardChartsComponent},
  {path:'dashboard', component: DashboardChartsComponent},
  {path:'home', component: HomeComponent},
  {path:'user', component: UserComponent},
  {path:'home/:id', component: UserComponent},
  {path:'**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
