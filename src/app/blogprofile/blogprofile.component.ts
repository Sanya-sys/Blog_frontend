import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blogprofile',
  templateUrl: './blogprofile.component.html',
  styleUrls: ['./blogprofile.component.css']
})
export class BlogprofileComponent implements OnInit {
  uname;lname;fname;email;pass;
  
  result;blogs;;followers;following;
  constructor(private router:Router,private httpservice:UserServiceService,private http:HttpClient) { }

  ngOnInit() {
    this.httpservice.getinfo().subscribe(res=>{
      this.result=res;
      console.log(this.result);
    });
    this.httpservice.getmyblogs().subscribe(res=>{
      this.blogs=res;
      console.log(this.blogs);
    });
    
    this.httpservice.getfollowers().subscribe(res=>{
      this.followers=res;
      console.log(this.followers);
    });

    this.httpservice.getfollowing().subscribe(res=>{
      this.following=res;
      console.log(this.following);
    });
  }
  editProfile(){
    this.router.navigate(['profile']);
  }
  uy()
  {
    this.router.navigate(['/main']);

  }


  delete(id){
    this.httpservice.deleteblog(id).subscribe(res=>{
      this.blogs=res;
      console.log(this.blogs);
    })
  }
  poi()
  {
    this.router.navigate(['addblog']);
  }
  unfollow(id){
    this.httpservice.unfollow(id).subscribe(res=>{
      this.router.navigate(['main']);
    });
  }
  
  remove(id){
    this.httpservice.remove(id).subscribe(res=>{
      this.router.navigate(['main']);
    });
  }
  logout(){
    sessionStorage.removeItem('token');
  this.httpservice.isLoggedIn(false);
  this.router.navigate(['login']);
  }
}
