import { Injectable } from '@angular/core';
import SampleJson from "../app/mockData.json";
import { HttpClient,HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  // url = 'https://swapi.co';     /* This code has been commented due service is unavailable */
  public Users: any = SampleJson;
  constructor(private http: HttpClient) {
  /* This code has been commented due service is unavailable */

  //   http.get('url').subscribe( res => {
  //     this.Users = res;
  //     console.log(res)
  // });
  }
 
}
