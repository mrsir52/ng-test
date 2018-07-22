import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app';
  readonly ROOT_URL = 'https://swapi.co/api/';
  posts: any;
  constructor(private http: HttpClient) {}

  getPosts() {
    this.posts.get(this.ROOT_URL + '/people');
  }
}
