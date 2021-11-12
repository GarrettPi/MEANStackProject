import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) { }

  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  getPosts(){
    this.http.get<Post[]>('http://localhost:3000/api/posts').subscribe(
      data => {
        this.posts = data;
        this.postsUpdated.next([...this.posts])
      }
    );
  }

  getPostUpdateListener(){
    return this.postsUpdated.asObservable();
  }
  addPost(post: Post){
    this.http.post<{message: string}>('http://localhost:3000/api/posts', post).subscribe(
      data => {
        console.log(data.message);
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
      }
    );
  }
}
