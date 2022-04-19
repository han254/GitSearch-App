import { Component, OnInit } from '@angular/core';
import { GithubApiService } from '../github-api.service';

@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.css']
})
export class GithubReposComponent implements OnInit {
  public repos: any =[];

  constructor(private GithubApiService: GithubApiService) {  

    this.GithubApiService.getRepo().subscribe((response: any) => {
    this.repos = response;
    console.log(response);
    
  })
}

  ngOnInit(): void {
  }

}
