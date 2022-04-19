import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {
  getUsername(username: any) {
    throw new Error('Method not implemented.');
  }
  private username:any;


  constructor(private http: HttpClient) { 
    console.log(this.username)
    this.username="han254"

  }
  getUserInfo(){
    return this.http.get("https://api.github.com/users/" + this.username).pipe(map(data =>{
      return data;
    }));
  }
  getRepo() {
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?api_key=" + environment.apikey).pipe(map(data => {
      return data;
    }));
  }
}