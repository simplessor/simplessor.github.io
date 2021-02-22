import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BaiduNetdiskService } from '../baidu-netdisk.service';

@Component({
  selector: 'bd-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileListComponent implements OnInit {
  constructor(
    private baiduNetdiskService:BaiduNetdiskService
  ) { }

  ngOnInit(): void {
    
  }

}
