import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ContentsComponent } from './contents/contents.component';
import { HomeComponent } from './home/home.component';
import { RootuserDashboardComponent } from './rootuser-dashboard/rootuser-dashboard.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

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
  },
  {
    path:'user',component:UserDashboardComponent
  },
  {
    path:'rootuser',component:RootuserDashboardComponent
  },
  {
    path:'admin',component:AdminDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
