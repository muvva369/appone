import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompOneComponent } from './comp-one/comp-one.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { BookDescriptionComponent } from './book-description/book-description.component';

const routes: Routes = [
  {path:'',component:CompOneComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path: 'home',component:HomeComponent},
  {path:'bookdescription', component:BookDescriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
