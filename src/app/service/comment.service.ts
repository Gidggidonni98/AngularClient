import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commen } from '../interface/Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private myAppUrl = 'http://localhost:5207/api'


  constructor(private http: HttpClient) { 
  }

  getComments(): Observable<any>{
    return this.http.get(this.myAppUrl + '/Comment/Index')
  }

  deleteComment(id: number): Observable<any>{
    return this.http.delete(this.myAppUrl + '/Comment/Destroy?id='+ id)
  }

  showComment(id: number): Observable<any>{
    return this.http.get(this.myAppUrl + '/Comment/Show?id='+ id)
  }

  storeComment(comment: Commen): Observable<any>{
    return this.http.post(this.myAppUrl + '/Comment/Store', comment)
  }
}
