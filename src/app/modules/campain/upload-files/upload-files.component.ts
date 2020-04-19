import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.scss'],
})
export class UploadFilesComponent implements OnInit {
  files: any = [];

  constructor() {}

  ngOnInit(): void {}

  uploadFile(event: FileList) {
    for (const element of Array.from(event)) {
      this.files = [...this.files, element.name];
    }
  }

  deleteAttachment(index) {
    this.files.splice(index, 1);
  }
}
