import { Component, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private postService: PostService) { }

  newPost = 'No Content';
  enteredValue = '';
  enteredTitle = '';


  ngOnInit(): void {
  }

  onAddPost(form: NgForm){
    if(form.invalid){
      return;
    }
    const post: Post = {id: null, title: form.value.title, content: form.value.content};
    this.postService.addPost(post);
    form.resetForm();
  }
}
