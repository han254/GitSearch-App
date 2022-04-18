import { Injectable } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GithubApiService {
  private username:any;


  constructor(private http: HttpClient) { 
    console.log(this.username)
    this.username="han254"

  
  }
  getUserInfo(){
    return this.http.get("https://api.github.com/users/" + this.username)
  }
}
