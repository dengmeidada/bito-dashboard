import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Product } from 'src/app/demo/api/product';

interface list {
  id: string;
  name: string;
  code: string;
  blockType: string;
  articleClassification: string;
  productCategory: string;
  content: string;
  file: file;
  sortOrder: string;
  createdTime: string;
}

interface file {
  size: string;
  name: string;
  image: string;
}

@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.scss'],
})
export class BasicInformationComponent implements OnInit {
  constructor() {}

  selectedState: any;
  selectedSector: any;
  selectedApplicants: any;

  SectorDropdownItems = [
    { name: '部門 1', code: 'Option 1' },
    { name: '部門 2', code: 'Option 2' },
    { name: '部門 3', code: 'Option 3' },
  ];

  applicantsDropdownItems = [
    { name: '人員 1', code: 'Option 1' },
    { name: '人員 2', code: 'Option 2' },
    { name: '人員 3', code: 'Option 3' },
  ];

  dropdownItems = [
    { name: 'Option 1', code: 'Option 1' },
    { name: 'Option 2', code: 'Option 2' },
    { name: 'Option 3', code: 'Option 3' },
  ];

  value1: any;
  value2: any;

  product: Product = {};

  @ViewChild('fileUploadData') fileUploadData: any;
  fileUpload: file = {
    size: '',
    name: '',
    image: '',
  };

  list: list[] = [];

  productList: list[] = [];

  investList: list[] = [
    {
      id: '1000',
      code: 'f230fh0g3',
      name: '測試1',
      blockType: '2',
      articleClassification: '1',
      productCategory: '1',
      content: '內容1',
      file: {
        size: '1024',
        name: '測試1',
        image: 'assets/demo/images/product/bamboo-watch.jpg',
      },
      sortOrder: '1',
      createdTime: '2022/09/30',
    },
    {
      id: '1001',
      code: 'nvklal433',
      name: '測試2',
      blockType: '2',
      articleClassification: '1',
      productCategory: '2',
      content: '內容2',
      file: {
        size: '1024',
        name: '測試2',

        image: 'assets/demo/images/product/black-watch.jpg',
      },
      sortOrder: '2',
      createdTime: '2022/09/25',
    },
  ];

  display: boolean = false;

  cities: SelectItem[] = [];

  selectedDrop = '';

  uploadedFiles: any[] = [];

  blockOptions: SelectItem[] = [];

  productOptions: SelectItem[] = [];

  sortOptions: SelectItem[] = [];

  selectTableType = '1';

  selectedBlock = '1';

  selectedProduct = '';

  htmlData = '';

  imageSrc: any = null; // 上傳圖片url
  fileName = '';
  fileSize = '';
  isSelectFileUpload = false;

  toolbarConfig = [
    'heading',
    '|',
    'bold',
    'italic',
    'link',
    'bulletedList',
    'numberedList',
    '|',
    'indent',
    'outdent',
    '|',
    'imageUpload',
    'blockQuote',
    'mediaEmbed',
    'undo',
    'redo',
  ];

  title: string = '';

  sortOrderValue: string = '';

  submitType = ''; // new , save

  sortOrder: number = 0;

  index: number = 0;

  sortField: string = '';

  sourceCities: any[] = [];

  targetCities: any[] = [];

  orderCities: any[] = [];

  dialogTitle = '';
  editDialog = '';

  ngOnInit(): void {}

  onFileUploadClicked(event: any) {
    this.isSelectFileUpload = true;
    const reader = new FileReader();
    reader.readAsDataURL(event.files[0]);
    reader.onload = () => {
      this.imageSrc = reader.result;
    };
    this.fileUpload = {
      size: event.files[0].size,
      name: event.files[0].name,
      image: this.imageSrc,
    };
    this.fileSize = event.files[0].size;
    this.fileName = event.files[0].name;
    console.log('this.imageSrc', this.imageSrc);
  }

  onBlockChange(event: any) {
    const value = event.value;
  }

  onSubmit(type: string) {
    this.editDialog = type;
    this.display = true;
    if (type === '0') {
      this.dialogTitle = '退件意見編輯';
    } else if (type === '1') {
      this.dialogTitle = '審核意見編輯';
    }
  }

  submit() {
    this.display = false;
  }
}
