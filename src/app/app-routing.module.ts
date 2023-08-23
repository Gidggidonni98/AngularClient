import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUpdateCommentComponent } from './components/add-update-comment/add-update-comment.component';
import { ListCommentsComponent } from './components/list-comments/list-comments.component';
import { ShowCommentComponent } from './components/show-comment/show-comment.component';

const routes: Routes = [
  { path: '', component: ListCommentsComponent },
  { path: 'addComment', component: AddUpdateCommentComponent },
  { path: 'Show/:id', component: ShowCommentComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
