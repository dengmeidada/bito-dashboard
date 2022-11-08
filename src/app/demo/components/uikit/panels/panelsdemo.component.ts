import { Component, OnInit } from '@angular/core';
import {
  ConfirmationService,
  MenuItem,
  MessageService,
  SelectItem,
} from 'primeng/api';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  templateUrl: './panelsdemo.component.html',
  providers: [MessageService, ConfirmationService],
})
export class PanelsDemoComponent implements OnInit {
  list = [
    {
      id: '',
      code: '',
      name: '',
      description: '',
      image: '',
      category: '',
    },
  ];
  externalList = [
    {
      id: '',
      code: '',
      name: '',
      description: '',
      image: '',
      category: '',
    },
  ];

  display: boolean = false;

  htmlData = '';

  public Editor = ClassicEditor;

  cities: SelectItem[] = [];

  selectedDrop: SelectItem = { value: '' };

  uploadedFiles: any[] = [];

  items: MenuItem[] = [];

  cardMenu: MenuItem[] = [];

  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.list = [
      {
        id: '1000',
        code: 'f230fh0g3',
        name: '王富貴',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        category: 'Accessories',
      },
      {
        id: '1001',
        code: 'nvklal433',
        name: '張美女',
        description: 'Product Description',
        image: 'black-watch.jpg',
        category: 'Accessories',
      },
    ];
    this.externalList = [
      {
        id: '1003',
        code: '244wgerg2',
        name: '王曉明',
        description: 'Product Description',
        image: 'blue-t-shirt.jpg',
        category: 'Accessories',
      },
      {
        id: '1004',
        code: 'h456wer53',
        name: '陳美美',
        description: 'Product Description',
        image: 'bracelet.jpg',
        category: 'Accessories',
      },
    ];
    this.items = [
      {
        label: 'Angular.io',
        icon: 'pi pi-external-link',
        url: 'http://angular.io',
      },
      { label: 'Theming', icon: 'pi pi-bookmark', routerLink: ['/theming'] },
    ];

    this.cardMenu = [
      {
        label: 'Save',
        icon: 'pi pi-fw pi-check',
      },
      {
        label: 'Update',
        icon: 'pi pi-fw pi-refresh',
      },
      {
        label: 'Delete',
        icon: 'pi pi-fw pi-trash',
      },
    ];

    this.cities = [
      { label: '測試類型1', value: { id: 1, name: '測試類型1', code: 'NY' } },
      { label: '測試類型2', value: { id: 2, name: '測試類型2', code: 'RM' } },
      { label: '測試類型3', value: { id: 3, name: '測試類型3', code: 'LDN' } },
      { label: '測試類型4', value: { id: 4, name: '測試類型4', code: 'IST' } },
      { label: '測試類型5', value: { id: 5, name: '測試類型5', code: 'PRS' } },
    ];
  }

  // onUpload(event: any) {
  //   for (const file of event.files) {
  //     this.uploadedFiles.push(file);
  //   }

  //   this.messageService.add({
  //     severity: 'info',
  //     summary: 'Success',
  //     detail: 'File Uploaded',
  //   });
  // }

  confirm1() {
    this.confirmationService.confirm({
      key: 'confirm1',
      message: 'Are you sure to perform this action?',
    });
  }

  submit() {
    this.display = false;
    console.log('htmlData', this.htmlData);
  }
}
