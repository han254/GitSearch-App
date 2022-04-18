import { Injectable } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class GithubApiService {
  getUserInfo() {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { 
    
  }
}
