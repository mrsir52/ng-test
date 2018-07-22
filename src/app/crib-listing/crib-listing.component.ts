import { Component, OnInit } from '@angular/core';
import { cribs } from './../data/cribs';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})


export class CribListingComponent { }
//   readonly ROOT_URL = 'https://swapi.co/api/people/4';
//   posts: any;
//   constructor(private http: HttpClient) {}
//
//   getPosts() {
//     this.posts.get(this.ROOT_URL);
//   }
// }

// const configUrl = 'https://render-us-west-2.impossible.io/v2/render/V2:us-west-2:87950831-4674-4ef4-991c-3592fcf6a461.mp4';

// export class CribListingComponent implements OnInit {
//
//   cribs: Array<any> = cribs;
//   constructor(private http: HttpClient) { }
//
//   ngOnInit() {
//   }
//   this.http.get(url).map(res => res.json())
// }
