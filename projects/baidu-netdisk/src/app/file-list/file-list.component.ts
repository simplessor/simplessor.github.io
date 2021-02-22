import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'bd-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
