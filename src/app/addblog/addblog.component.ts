import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css']
})
export class AddblogComponent implements OnInit {
title;body;
  constructor(private httpClientService: UserServiceService,private router:Router) { }

  ngOnInit() {
  }
  addItem()
  {
  let json={
  "title":this.title,
  "body":this.body,
 
  
  };
  this.httpClientService.addblog(json).subscribe(
  response =>{console.log(response);alert("Blog successfully added");}
  );
  }
  
}
