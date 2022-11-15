import { Component, OnInit } from '@angular/core';
import { environment as env } from '@env';
@Component({
  templateUrl: './documentation.component.html',
})
export class DocumentationComponent implements OnInit {
  // 上傳檔案
  fileUpload = '';
  file: File | null = null;
  fileSize = 0;
  fileSizeInRange = true;
  fileRequiredIsShow = false;
  imageSrc: any = 'assets/layout/images/user-img.jpg';

  imageErr = true; // 非圖片格式 開關

  userName = '王小明';
  account = 'test@gmail.com';
  oldPassword = '1qaz2wsx';
  newPassword = '1qaz2wsx';
  phone = '09110123123';

  ngOnInit() {
    console.log('imageSrc', this.imageSrc);
  }

  uploadFile(event: EventTarget | null): void {
    const val = (event as HTMLInputElement).files;
    const reader = new FileReader();
    if (val) {
      this.file = val[0];

      if (this.file) {
        this.fileSize = this.file.size / 1024 / 1024;
        this.fileSizeInRange = this.fileSize < 10;
        this.fileRequiredIsShow = false;
        // 文件格式 檢核
        let index = this.file.name.lastIndexOf('.');
        let ext = this.file.name.substr(index + 1);
        const pattern = /^(jpg|jpeg|png)$/;
        if (!pattern.test(ext)) {
          console.log('文件格式不支持');
          this.imageSrc = null;
          this.imageErr = false;
        } else {
          reader.readAsDataURL(this.file);
          reader.onload = () => {
            this.imageSrc = reader.result;
            this.imageErr = true;
          };
        }
      } else {
        this.fileSizeInRange = true;
        this.fileRequiredIsShow = true;
        this.imageSrc = null;
        this.imageErr = false;
      }
    }
  }
}
