import { Component, OnInit } from '@angular/core';
import { ListContactsService } from 'src/app/services/list-contacts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.css']
})
export class ContactInformationComponent implements OnInit {

  constructor(public ser:ListContactsService,private router:Router) { }
spesificContact:any;
  ngOnInit(): void {
    this.spesificContact=this.ser.chooseContact;
  }
  back(){
    this.router.navigate(['/listContacts'])
  }
}
