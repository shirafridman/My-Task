import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListContactsComponent } from './components/list-contacts/list-contacts.component';
import { ContactInformationComponent } from './components/contact-information/contact-information.component';
import { RouterModule } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import { SearchPipe } from './pipes/search.pipe'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    ListContactsComponent,
    ContactInformationComponent,
    SearchPipe,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
     NgxPaginationModule,
     FormsModule, ReactiveFormsModule
  ],
  providers: [ HttpClientModule,],
  bootstrap: [AppComponent]
})
export class AppModule { }
