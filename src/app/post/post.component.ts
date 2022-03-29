import { PostService } from './../services/post-services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: any;
  constructor(private PostService: PostService) { }

  ngOnInit(): void {
    this.onGetList();
  }
  onGetList() {
    this.PostService.getPosts().subscribe((data) => {
      this.posts = data;
      console.log(data);
    });
  }


  confirmDelete(id: number | string) {
    if (confirm('Bạn có chắc chắn muốn xóa?')) {
      this.onDelete(id);
    }
  }

  onDelete(id: number | string) {
    this.PostService.deletePost(id).subscribe((data) => {
      this.onGetList();
    });
  }
}
