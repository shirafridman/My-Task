import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ListContactsService } from 'src/app/services/list-contacts.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    });
    user={"name":'',"email":''}
  constructor(public ser:ListContactsService,private router:Router) { }

  ngOnInit(): void {
    
  }
  loginApp(){
      this.ser.login(this.login.controls["name"].value,this.login.controls["email"].value).subscribe(data => {
        debugger
        this.user = data.user;
        if (this.user != null) {
          this.hello(this.user.name)
          localStorage.setItem('token', JSON.stringify(data.token));
          localStorage.setItem('user', JSON.stringify(data.user));
          this.router.navigate(['/listContacts']) 
        }
        else {
          this.error();
        }
      });

    
  }
  hello(name: string) {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Hello' + ' ' + name,
      showConfirmButton: false,
      timer: 2000
    })
  }
  error() {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'error!',
      text: 'Incorrect username or email',
    })
  }

}
