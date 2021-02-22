import { Component } from '@angular/core';

@Component({
  selector: 'intr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '更简单点儿';
  copyrightDate:number = 2021
  author:string = "Simplessor"
  ICP:string = "皖ICP备20010938号"
}
