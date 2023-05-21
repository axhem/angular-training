import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post';
import { PostService } from '../services/post.service';
import swal from 'sweetalert2';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
	closeResult = '';
  posts: Post[] | undefined;
  emri!: string;
  newPost!: Post;
  submitted: boolean = false;
  shuma: number = 0;
  constructor(
    private postService: PostService,
    private modalService: NgbModal
    ) { }

  ngOnInit(): void {
    this.getPostComponent();
    this.emri = this.postService.getName();
  }

  editoPostimet(postId:number){
    console.log(postId);
    // this.router.navigate(['post-edit', postId])
  }

  

  getPostComponent(): void {
    this.postService.getPosts().subscribe({
      next: (result)=>{
        console.log('rezultati erdhi');
        this.posts = result;
      },
      error: (error)=>{
        debugger;
        swal.fire({
          position: 'top-end',
          icon: 'error',
          title: error.message,
          showConfirmButton: false,
          timer: 3500
        })
      },
      complete: ()=> console.log('complete')
    })

    this.shuma = 5*3434;
    console.log(this.shuma);
  }


  fshiPostimet(i:number,id:number):void {
    this.postService.deletePostById(id).subscribe({
      next: (result) => {
        console.log(result)
      },
      error: (e) => {
        console.log(e)
      },
      complete: () => console.info('complete')
    })
  }



  open(content:any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

  private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}

  saveForm(postForm: NgForm): void {
    this.submitted = true;
    if(!postForm.valid)
      return;
    this.newPost = postForm.value;
    this.postService.addPost(this.newPost).subscribe(rezultati => {
      this.posts?.push(rezultati);
      this.modalService.dismissAll();
      postForm.reset();
      // swal.fire('Congrats...', 'Post succesfully added!', 'success');
      swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Post succesfully added!',
        showConfirmButton: false,
        timer: 1500
      })
      
    })
  }
}
function next(value: any): void {
  throw new Error('Function not implemented.');
}

