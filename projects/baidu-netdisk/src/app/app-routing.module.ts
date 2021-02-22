import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckBaiduAuthCodeGuard } from './check-baidu-auth-code.guard';
import { FileListComponent } from './file-list/file-list.component';

const routes: Routes = [
  {
    path: "",
    component: FileListComponent,
    canActivate: [
      CheckBaiduAuthCodeGuard
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: "reload"
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
