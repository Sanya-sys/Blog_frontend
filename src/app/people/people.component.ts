import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  id; result; myVar = true; following;
  constructor(private route: ActivatedRoute, private httpservice: UserServiceService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
      console.log(this.id);
    });

    this.httpservice.getprofile(this.id).subscribe(res => {
      this.result = res;
      console.log(this.result);
      this.httpservice.getfollowing().subscribe(res => {
        this.following = res;
        console.log(this.following);

        for (let a = 0; a < this.following.length; a++) {
          if (this.following[a].userid == this.result.userid) {
            this.myVar = false;
          }
        }
      });
    });
  }

  
    unfollow(id){
      this.httpservice.unfollow(id).subscribe(res=>{
        this.ngOnInit();
      });
    }

    follow(id){
      this.httpservice.follow(id).subscribe(res=>{
        this.ngOnInit();
      });
    }
}
