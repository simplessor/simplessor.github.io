import { Component } from '@angular/core';

@Component({
  selector: 'bd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = '百度云盘网页版';
  copyrightDate:number = 2021
  author:string = "Simplessor"
  ICP:string = "皖ICP备20010938号"
  constructor(
  ){}
}
