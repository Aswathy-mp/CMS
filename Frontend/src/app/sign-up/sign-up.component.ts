import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(public fb:FormBuilder,public router:Router,public Service:ApiService) { }
  signupform=this.fb.group({
    name:new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/)]),
    email:new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z0-9.%+]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]),
    userrole:new FormControl('user',Validators.required),
    password:new FormControl('',[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/)])
  })

  ngOnInit(): void {
  }

  SignUp(){
    let signup=this.signupform.value
    console.log(signup)
    this.Service.signupdata(signup).subscribe((data)=>{
      console.log('subscribed data'+ data);
    })
    alert('You have successfully registered')
    this.router.navigate(['/login'])
  }
}
