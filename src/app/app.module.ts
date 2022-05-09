import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from 'C:/Users/thummana.pavani/AngularProject2/src/app/features/header/header.component';
import { TableComponent } from 'C:/Users/thummana.pavani/AngularProject2/src/app/features/table/table.component';
import { LeaveManegmentComponent } from './Pages/leave-manegment/leave-manegment.component';
import { FooterComponent } from 'C:/Users/thummana.pavani/AngularProject2/src/app/features/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableComponent,
    LeaveManegmentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
