import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(public fb:FormBuilder,public Services:ApiService) { }
  loginform=this.fb.group({
    email:new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z0-9.%+]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]),
    password:new FormControl('',[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/)])
  })
  ngOnInit(): void {
    
  }
  alert(){
    alert('hello')
  }
  login(){
   let logindata=this.loginform.value;
   console.log(logindata)
   this.Services.logindata(logindata).subscribe();
  }
}
