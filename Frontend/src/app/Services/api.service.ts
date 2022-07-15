import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http:HttpClient) { }
  logindata(data:any){
    console.log(data)
    return this.http.post<any>('http://localhost:3000/user/login',data)
  }
  signupdata(data:any){
    console.log( data)
    return this.http.post<any>('http://localhost:3000/user/signup',data)
  }
}
