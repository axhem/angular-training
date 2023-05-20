import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/model/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  editPostFormGroup!: FormGroup;

  postEdit!: Post;
  postId!: number;
  constructor(private postService: PostService,private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.postId = params['id'];
    });
    this.createPostForm();

   }

  ngOnInit(): void {
    this.getPostDetails();
  }

  getPostDetails(): void {
    this.postService.getPostByPostId(this.postId).subscribe(rezultati => {
      this.postEdit = rezultati;
      // this.createAlbumForm.
      console.log(this.postEdit);
      const postObject:any = {};
      postObject.profileId = this.postEdit.userId;
      postObject.titulli = this.postEdit.title;
      postObject.content = this.postEdit.body;

      this.editPostFormGroup.patchValue(postObject);
      console.log(this.editPostFormGroup);
      // this.editAlbumFormGroup.controls['content'].setValue(this.postEdit.body);

    });
  }

  createPostForm() {
    this.editPostFormGroup = new FormGroup({
      profileId: new FormControl(null),
      titulli: new FormControl(null, Validators.required),
      content: new FormControl(null, Validators.required),
      cities: new FormArray([
        new FormControl('SF'),
        new FormControl('NY'),
      ]),
    });  
  }

  updatePost() {
    console.log(this.editPostFormGroup);
    // this.postService.updatePost(this.editPostFormGroup.value, this.postId).subscribe(rezultati => {
    //   console.log(rezultati);
    // })
  }

  get cities(): FormArray {
    return this.editPostFormGroup.get('cities') as FormArray;
  }

  addCity() {
    this.cities.push(new FormControl());
  }

  setPreset() {
    this.cities.patchValue(['LA', 'MTV']);
  }
}
