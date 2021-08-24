import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ListContactsService {
  constructor(private _http:HttpClient) {
   }
   createAuthrorizationHeader(): HttpHeaders {

    let headers = new HttpHeaders();
    const token = localStorage.getItem('token');
    headers = headers.set('access_token',JSON.parse(token||'null'));
    return headers
  }
 chooseContact:any
  base_url="http://localhost:3000";
  getAllContacts():Observable<any>{
    let headers = this.createAuthrorizationHeader();
    return this._http.get<any>(this.base_url+'/getContacts',{headers:headers})
  }
  login(name:any,email:any):Observable<any>{ 
    return this._http.post<any>(this.base_url+'/login',{name,email});
  }
}
