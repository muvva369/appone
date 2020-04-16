import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompOneComponent } from './comp-one/comp-one.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import {HttpClientModule} from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import {HomeService} from './home/home.service';
import { BookDescriptionComponent } from './book-description/book-description.component'
import { BookService } from './book-description/book.service';
import { GetpercentPipe } from './home/getpercent.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CompOneComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    BookDescriptionComponent,
    GetpercentPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,HttpClientModule
  ],
  providers: [LoginService, SignupComponent, HomeService, BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
