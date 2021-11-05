import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from 'src/app/models/post';

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
  @Output() postCreated = new EventEmitter<Post>();

  ngOnInit(): void {
  }

  onAddPost(form: NgForm){
    if(form.invalid){
      return;
    }
    const post: Post = {title: form.value.title, content: form.value.content};
    this.postCreated.emit(post);
  }
}
