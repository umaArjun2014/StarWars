import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { UserDetails } from '../user-details';

import { Router,ActivatedRoute } from "@angular/router";
import { from } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public users;
  public currentUser;
   constructor(private router: Router, private route: ActivatedRoute,private service: UserServiceService) {
   this.currentUser ={id:'',name:'',imageUrl:'',about:''}

  }
  

  ngOnInit(){
   this.users = this.service.Users[0].listOfUsers;
   this.getUserInfo();
  }
  
  fetchUser(userData){
    this.currentUser = userData;
  }
  public getUserInfo(){
    this.currentUser['id'] = '111';
    let userId= this.route.snapshot.params.id;
    for(let i=0; i<this.users.length;i++){
      if(userId == this.users[i].id)
        {
          this.fetchUser(this.users[i]);
        }
    }

}
}
