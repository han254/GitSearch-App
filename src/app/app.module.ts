import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GithubApiService } from './github-api.service';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchAppDirective } from './search-app.directive';
import { GithubuserComponent } from './users/githubuser/githubuser.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchAppDirective,
    GithubuserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [GithubApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
