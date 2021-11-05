import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor() { }

  newPost = 'No Content';
  enteredValue = '';

  ngOnInit(): void {
  }

  onAddPost(){
    this.newPost = this.enteredValue;
  }
}
