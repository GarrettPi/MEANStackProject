import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  constructor(private postService: PostService) { }

  posts: Post[] = [];
  private postSub: Subscription;


  ngOnInit(): void {
    this.getPosts();
  }

  ngOnDestroy(){
    this.postSub.unsubscribe();
  }

  getPosts(){
    this.postService.getPosts();
    this.postSub = this.postService.getPostUpdateListener().subscribe(
      data => {
        this.posts = data;
      });
  }

}
