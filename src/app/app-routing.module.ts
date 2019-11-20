import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { BlogprofileComponent } from './blogprofile/blogprofile.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { AddblogComponent } from './addblog/addblog.component';
import { MainComponent } from './main/main.component';
import { PeopleComponent } from './people/people.component';
import { PostComponent } from './post/post.component';


const routes: Routes = [
  {
    path:'', redirectTo:'/signup' , pathMatch:'full'
  },
  {
    path: 'login' , component: LoginComponent,
  },
  {
    
      path: 'signup' , component: SignupComponent,
    
  },
  {
    
    path: 'home' , component: BlogprofileComponent,
  
},
{
    
  path: 'profile' , component: ProfileComponent,

},
{
  path:'home/editBlog/:blogid', component: EditBlogComponent
},
{
  path:'addblog' , component:AddblogComponent
},

{
  path:'main', component:MainComponent
},
{
  path:'people/:id',component:PeopleComponent
},
{
  path:'main/post/:id', component:PostComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
