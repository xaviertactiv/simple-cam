import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/commons/services/post/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
})
export class PostsComponent implements OnInit {

  public posts: any;
  
  private navigator = window.navigator;
  
  constructor(
    private Posts: PostsService
  ) {}

  ngOnInit() {
    this.Posts.getPosts()
      .then((resp: any) => {
        this.posts = resp;
      })
  }

  async onShare(post: any) {
    console.log(post);

    const sharedData = {
      title: post.title,
      text: post.body,
      url: 'https://testlink.org/'
    }

    if (this.navigator.share) {
      this.navigator.share(sharedData)
        .then(() => {alert("shared successfully!")})
        .catch(() => {alert("share error")})
    } else {
      alert("Web share not Supported")
    }
  }
}
