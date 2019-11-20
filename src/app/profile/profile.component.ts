import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
public myprod;

  constructor(private service:UserServiceService,private http:HttpClient) { }

  ngOnInit() {
   this.myprofile();
  }
myprofile()
{
  this.service.getinfo().subscribe(data=>
    {
      this.myprod=data;
    });
}
url="http://localhost:8081/profile/update"
update()
{
  const token=sessionStorage.getItem("token");
  const headers=new HttpHeaders({Authorization:'Basic '+token});
  return this.http.put(this.url,this.myprod, {headers}).subscribe(res =>
    {
      sessionStorage.setItem('token',btoa(this.myprod.username+':'+this.myprod.password));
      alert("created");
    });
}
}
