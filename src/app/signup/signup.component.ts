import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  result: any;
  alert: String;
  validate: Boolean;
  username; password; firstname; lastname; email;



  constructor(private _activatedroute: ActivatedRoute, private userservice: UserServiceService, private router: Router) {
    this.userservice.getUsers().subscribe(res => {
      this.result = res;
      console.log(this.result);
    });
  }
  change(e) {
    for (let i = 0; i < this.result.length; i++) {
      if (this.result[i].username == e) {
        this.alert = "username already exist";
        this.validate = true;
        break;
      }
      else {
        this.alert = "";
        this.validate = false;
      }
    }
  }

submit1(){
  alert("Successfully registered");
  const user = {
    active: 1,
    username: this.username,
   
    firstname: this.firstname,
    lastname: this.lastname,
    email: this.email,
    password: this.password,
    followers:[],
    following:[],
    status:"private"
    
    
    
  };
  console.log(user);
  this.userservice.adduser(user);
}
ngOnInit() {
}
 
onselect1()
{
  this.router.navigate(['login'])
}

 

}
