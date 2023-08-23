import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from 'src/app/service/comment.service';

@Component({
  selector: 'app-show-comment',
  templateUrl: './show-comment.component.html',
  styleUrls: ['./show-comment.component.css']
})
export class ShowCommentComponent implements OnInit {

  id: number;
  comment: any;

  constructor(private activateRoute: ActivatedRoute, private _commentService: CommentService){
    this.id = +activateRoute.snapshot.paramMap.get('id')!;
    console.log(this.activateRoute.snapshot.paramMap.get('id')!)
  }
  ngOnInit(): void {
    
  }



}
