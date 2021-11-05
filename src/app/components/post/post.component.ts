import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor() { }

  newPost = 'No Content';
  enteredValue = '';
  enteredTitle = '';
  @Output() postCreated = new EventEmitter();

  ngOnInit(): void {
  }

  onAddPost(){
    const post = {title: this.enteredTitle, content: this.enteredValue};
    this.postCreated.emit(post);
  }
}
