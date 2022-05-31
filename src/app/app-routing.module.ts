import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth-guard.service';
import { DashboardCComponent } from './DashBoard/dashboard-c/dashboard-c.component';
import { ApplyleaveComponent } from './features/applyleave/applyleave.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LeaveManegmentComponent } from './Pages/leave-manegment/leave-manegment.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
const JKRoutes : Routes = [
  {path:'',component:LoginPageComponent}, 
  {path:'signup',component: SignUpPageComponent},
  {path:'leave-manegment',component:LeaveManegmentComponent}, 
  {path:'dashboard-c',component:DashboardCComponent}, 
  {path:'applyleave',component:ApplyleaveComponent},
  {path:'appRoute',component:AppComponent} ,//canActivate:[AuthGuard],
  
];



@NgModule({
  imports: [RouterModule.forRoot(JKRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
