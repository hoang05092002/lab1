import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from './../services/post-services/post.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  id: string | undefined;
  post: any;
  postForm: FormGroup;
  constructor(
    private PostService: PostService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.postForm = new FormGroup({
      title: new FormControl('', Validators.required),
      content: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      status: new FormControl(0)
    })
  }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    if (this.id) {
      this.PostService.getPost(this.id).subscribe(data => {
        this.post = data;
      })
    } else {
      this.post = {
        title: '',
        content: '',
        status: 0
      }
    }
  }

  onSubmit(obj: { title: string, content: string, status: number }) {
    if (this.id) {
      return this.PostService.updatePost(this.id, obj).subscribe(data => {
        this.router.navigate(['/posts', this.id]);
      });
    }

    return this.PostService.createPost(obj).subscribe(data => {
      this.router.navigate(['/posts']);
    });
  }
}
