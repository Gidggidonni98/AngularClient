import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Commen } from 'src/app/interface/Comment';
import { CommentService } from 'src/app/service/comment.service';

@Component({
  selector: 'app-add-update-comment',
  templateUrl: './add-update-comment.component.html',
  styleUrls: ['./add-update-comment.component.css']
})
export class AddUpdateCommentComponent implements OnInit {
  formComment : FormGroup;

  constructor(private fb : FormBuilder, private _commentService: CommentService, private router: Router ) {
    this.formComment = this.fb.group({
      title :['', Validators.required],
      author : ['', Validators.required],
      description : ['', Validators.required]
    })
  }
  ngOnInit(): void {
    
  }

  addCommnet(){
    console.log(this.formComment.value)
    const comment : Commen = {
      title : this.formComment.get('title')?.value,
      author : this.formComment.get('author')?.value,
      description : this.formComment.get('description')?.value,
      createAt : new Date()
    }
    this._commentService.storeComment(comment).subscribe(data=>{
      this.router.navigate(['/']);
    })
  }
}
