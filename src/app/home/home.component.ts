import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public Users: any;
  title = 'star-wars';
  terms="";
  // url = 'https://swapi.co';     /* This code has been commented due service is unavailable */
  constructor(private route: Router,private service: UserServiceService) {
  /* This code has been commented due service is unavailable */

  //   http.get('url').subscribe( res => {
  //     this.Users = res;
  //     console.log(res)
  // });
  this.Users = service.Users[0].listOfUsers;

  }


  ngOnInit(): void {
  }

}
