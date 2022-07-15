import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentsComponent } from './contents/contents.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'login',component:SignInComponent
  },
  {
    path:'signup',component:SignUpComponent
  },
  {
    path:'explore',component:ContentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
