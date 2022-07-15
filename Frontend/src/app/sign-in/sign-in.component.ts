import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../Services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(public fb:FormBuilder,public Services:ApiService,public router:Router) { }
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
   this.Services.logindata(logindata).subscribe(
    res=>{
        if(res.success){
          localStorage.setItem('username',res.userrole)
          localStorage.setItem('username',res.username)
          localStorage.setItem('useremail',res.useremail)
          if(res.userrole=='user'||res.userrole=='User'){
            this.router.navigate(['/user']);
          }
          else if(res.userrole=='admin'||res.userrole=='Admin'){
            this.router.navigate(['/admin']);
          }
          else{
            this.router.navigate(['/rootuser']);
          }
        }
        else{
          alert(res.message)
        }
    }
   );
  }
}
