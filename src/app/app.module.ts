import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from 'C:/Users/thummana.pavani/AngularProject2/src/app/features/header/header.component';
import { TableComponent } from 'C:/Users/thummana.pavani/AngularProject2/src/app/features/table/table.component';
import { LeaveManegmentComponent } from './Pages/leave-manegment/leave-manegment.component';
import { FooterComponent } from 'C:/Users/thummana.pavani/AngularProject2/src/app/features/footer/footer.component';
import { UserSearchFilterPipe } from './user-search-filter.pipe';
//import { NewserviceService } from './newservice.service';
//import { StatusfilterPipe } from './statusfilter.pipe';
//import { TableServiceService } from './table-service.service';
import { DashboardCComponent } from './DashBoard/dashboard-c/dashboard-c.component';
import {HttpClientModule} from '@angular/common/http';
import { ApplyleaveComponent } from './features/applyleave/applyleave.component';
import { FireBaseDataService } from './fire-base-data.service';
//import { Routes,RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { AuthServiceHandler } from './auth.service';
import { AuthGuard } from './auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeaveManegmentComponent,
    TableComponent,
    FooterComponent,
    UserSearchFilterPipe,
    DashboardCComponent,
    ApplyleaveComponent,
    LoginPageComponent,
    SignUpPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FireBaseDataService,AuthServiceHandler,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
