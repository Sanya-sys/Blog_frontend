import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';

import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { BlogprofileComponent } from './blogprofile/blogprofile.component';
import { AddblogComponent } from './addblog/addblog.component';
import { MainComponent } from './main/main.component';
import { PeopleComponent } from './people/people.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
   
    EditBlogComponent,
    BlogprofileComponent,
    AddblogComponent,
    MainComponent,
    PeopleComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

