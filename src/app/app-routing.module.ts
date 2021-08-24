import { NgModule } from '@angular/core';
import { RouterModule, Route} from '@angular/router';
import { ListContactsComponent } from './components/list-contacts/list-contacts.component';
import { ContactInformationComponent } from './components/contact-information/contact-information.component';
import { LoginComponent } from './components/login/login.component';

const routes: Route[] = [

  { path: '', component: LoginComponent},
  { path: 'listContacts', component: ListContactsComponent},
  { path: 'openContactInformation', component: ContactInformationComponent},
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
