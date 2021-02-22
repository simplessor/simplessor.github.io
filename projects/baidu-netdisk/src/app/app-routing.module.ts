import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileListComponent } from './file-list/file-list.component';

const routes: Routes = [
  {
    path:"list",
    component:FileListComponent
  },{
    path:"",
    pathMatch:"full",
    redirectTo:"list"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
