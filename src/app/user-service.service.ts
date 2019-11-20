import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  constructor(private http:HttpClient,private router:Router) { }
  getUsers()
  {
    return this.http.get("http://localhost:8081/api/getUsers");
  }
getinfo()
{

  const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.get("http://localhost:8081/profile/get", {headers});
}
  adduser(user){
    console.log("user");
    return this.http.post("http://localhost:8081/api/addUsers",user).subscribe(res=>
    this.router.navigate(['login']));
  }

  authenticate(username,password)
  {
    const headers=new HttpHeaders({Authorization: 'Basic ' + btoa(username+':'+password)});
    return this.http.get ('http://localhost:8081/api/validateUser',{headers}).pipe(
      map(data => {
          sessionStorage.setItem('token',btoa(username+':' + password));
          return data;
        }

      ));
  }

  isLoggedIn(bool:boolean)
  {
    sessionStorage.setItem('auth',String(bool));
    return bool;
  }

  authentication(username: any, password: any) {
    throw new Error("Method not implemented.");
  }
  getmyblogs()
  {
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.get("http://localhost:8081/myblogs/getBlogByCurrentUser",{headers});
  }


  getblog(id)
  {
    console.log(id);
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.get("http://localhost:8081/myblogs/getblogById/"+id,{headers});
  }

  editBlog(id,result)
  {
    
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.put("http://localhost:8081/myblogs/update/"+id,result[0],{headers});
  }

  deleteblog(id){
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.get("http://localhost:8081/myblogs/deleteblog/"+id,{headers});
  }
  addblog(json)
  {
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.post("http://localhost:8081/myblogs/addblog",json,{headers});
  }
  getposts(){
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.get("http://localhost:8081/profile/getblogsoffollowing",{headers});
  }

 
  getfollowers(){
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.get("http://localhost:8081/profile/getfollowers",{headers});
  }

  getfollowing(){
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.get("http://localhost:8081/profile/getfollowing",{headers});
  }
  
  unfollow(id){
    console.log(id);
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.get("http://localhost:8081/profile/unfollow/"+id,{headers});
  }
  follow(id){
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.get("http://localhost:8081/profile/follow/"+id,{headers});
  }
  
  remove(id){
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.get("http://localhost:8081/profile/deletefollowing/"+id,{headers});
  }
  searchblog(key){
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.get("http://localhost:8081/myblogs/search/"+key,{headers});
  }

  getprofile(key){
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.get("http://localhost:8081/profile/get/"+key,{headers});
  }
  search(key){
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.get("http://localhost:8081/profile/search/"+key,{headers});
  }
  getcomments(id){
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.get("http://localhost:8081/comments/getbyblog/"+id,{headers});
  }

  addcomment(id,data){
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.post("http://localhost:8081/comments/addcomment/"+id,data,{headers});
  }
}
