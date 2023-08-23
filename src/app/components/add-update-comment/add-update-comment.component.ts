import { Component } from '@angular/core';
import { FormGroup , FormBuilder, Validators} from '@angular/forms';
import { Commen } from 'src/app/interface/Comment';

@Component({
  selector: 'app-add-update-comment',
  templateUrl: './add-update-comment.component.html',
  styleUrls: ['./add-update-comment.component.css']
})
export class AddUpdateCommentComponent {
  formComment : FormGroup;

  constructor(private formBuilder : FormBuilder) {
    this.formComment = this.formBuilder.group({
      title :['', Validators.required],
      author : ['', Validators.required],
      description : ['', Validators.required]
    })
  }

  addCommnet(){
    console.log(this.formComment.value)
    const comment : Commen = {
      title : this.formComment.value.title,
      author : this.formComment.value.author,
      description : this.formComment.value.description,
      createAt : new Date()
    }
    console.log(comment)
  }
}
