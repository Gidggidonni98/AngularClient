import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/service/comment.service';
import { Commen } from 'src/app/interface/Comment';

@Component({
  selector: 'app-list-comments',
  templateUrl: './list-comments.component.html',
  styleUrls: ['./list-comments.component.css']
})
export class ListCommentsComponent implements OnInit {
  
  listComments : Commen[] = []

  constructor(private _commentarioService: CommentService){}
  ngOnInit(): void {
    this.getComments();
  }

  getComments(){
    this._commentarioService.getComments().subscribe(data =>{
      console.log(data);
      this.listComments = data;
    },
    
    error =>{
      console.log(error)
    })
  }

  deleteComment(id:any){
    this._commentarioService.deleteComment(id).subscribe(()=> {
      this.getComments()
    })
  }
}

