import { Component, OnInit } from '@angular/core';
import { ListContactsService } from 'src/app/services/list-contacts.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css'],
})
export class ListContactsComponent implements OnInit {

  constructor(public ser:ListContactsService,private router:Router) { }
  p: number = 1;
  load:boolean=true;
  searchText=''
  listContacts=[{
    "id": '',
    "first_name": '',
    "last_name": '',
    "email": '',
    "description":'',
    "image": ''
  }]
  name:any=""
  ngOnInit(): void {
    this.name=localStorage.getItem('user');
    this.ser.getAllContacts().subscribe(data => {
      if (data != null) {
        this.listContacts = data;
         this.load=false
        this.listContacts.sort((a, b) => {
          if (a.first_name < b.first_name) return -1;
          else if (a.first_name > b.first_name) return 1;
          else return 0;
        });
      }
    })
  }
  showContactInformation(value:any){
    this.ser.chooseContact=value
     this.router.navigate(['/openContactInformation'])
  }
}
