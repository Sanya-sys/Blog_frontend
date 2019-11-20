import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {
  id;
  blogs;
  title;
  body;
  constructor(private route :ActivatedRoute,private httpservice:UserServiceService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params : ParamMap) => {
      this.id=params.get('blogid');
    });

    this.httpservice.getblog(this.id).subscribe(res=>{
      this.blogs=res;
      console.log(this.blogs);
});
    
  }
  edit(){
    console.log(this.blogs);
    this.httpservice.editBlog(this.id,this.blogs).subscribe(res=>{
      this.blogs=res;
    
      alert("profile updated");
});
  }


}
