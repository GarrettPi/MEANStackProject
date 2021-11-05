import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor() { }

  // posts = [
  //   {title: 'first Post', content: 'first content'},
  //   {title: 'second Post', content: 'second content'},
  //   {title: 'third Post', content: 'third content'}
  // ];


  @Input() posts = [];
  ngOnInit(): void {
  }

}
