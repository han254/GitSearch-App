import { Component, OnInit } from '@angular/core';
import { GithubApiService } from '../github-api.service';

@Component({
  selector: 'app-github-user',
  templateUrl: './github-user.component.html',
  styleUrls: ['./github-user.component.css']
})
export class GithubUserComponent implements OnInit {
  public user: any =[];
  public username:any =[];
  public repos:any =[];

  constructor(private githubApiService:GithubApiService ) { 
    this.githubApiService.getUserInfo().subscribe((response: any) => {
    this.user = response;
    console.log(response);
      
    });
  }
  search() {
    this.githubApiService.getUsername(this.username)
    this.githubApiService.getUserInfo().subscribe((response: any) => {
        this.user = response;
        console.log(response);
    });
       this.githubApiService.getRepo().subscribe((response: any) => {
        this.repos = response;
      });
    }

  ngOnInit(): void {
  }
}
