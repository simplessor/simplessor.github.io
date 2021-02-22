import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckBaiduAuthCodeGuard } from './check-baidu-auth-code.guard';
import { FileListComponent } from './file-list/file-list.component';

const routes: Routes = [
  {
    path:"list",
    component:FileListComponent,
    canActivate:[
      CheckBaiduAuthCodeGuard
    ]
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
