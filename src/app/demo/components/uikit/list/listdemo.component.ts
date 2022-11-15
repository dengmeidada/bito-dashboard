import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService, SelectItem } from 'primeng/api';
import { DataView } from 'primeng/dataview';
import { Product } from 'src/app/demo/api/product';
import { ProductService } from 'src/app/demo/service/product.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { format } from 'date-fns';

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
  templateUrl: './listdemo.component.html',
  providers: [MessageService, ConfirmationService],
})
export class ListDemoComponent implements OnInit {
  selectedState: any;
  selectedSector: any;
  selectedApplicants: any;
  contractSubject: any;
  contractType: any;
  contractAmount: any;
  executiveUnit: any;
  executiveStaff: any;

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

  contractSubjectItems = [
    { name: '分公司', code: 'Option 1' },
    { name: '幣託', code: 'Option 2' },
    { name: '泓科', code: 'Option 3' },
  ];

  contractTypeItems = [
    { name: '廠商合約', code: 'Option 1' },
    { name: '客戶合約', code: 'Option 2' },
    { name: '保密 NDA', code: 'Option 3' },
    { name: '合作 MOU', code: 'Option 4' },
    { name: '其他', code: 'Option 5' },
  ];

  contractAmountItems = [
    { name: '未定', code: 'Option 1' },
    { name: '無', code: 'Option 2' },
  ];

  executiveUnitItems = [
    { name: '執行單位 1', code: 'Option 1' },
    { name: '執行單位 2', code: 'Option 2' },
  ];

  executiveStaffItems = [
    { name: '執行人員 1', code: 'Option 1' },
    { name: '執行人員 2', code: 'Option 2' },
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

  public Editor = ClassicEditor;

  constructor(
    private productService: ProductService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.getProducts1();
    this.cities = [
      { label: '測試文章1', value: '1' },
      { label: '測試文章2', value: '2' },
      { label: '測試文章3', value: '3' },
      { label: '測試文章4', value: '4' },
      { label: '測試文章5', value: '5' },
    ];

    this.sourceCities = [
      { name: 'San Francisco', code: 'SF' },
      { name: 'London', code: 'LDN' },
      { name: 'Paris', code: 'PRS' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Berlin', code: 'BRL' },
      { name: 'Barcelona', code: 'BRC' },
      { name: 'Rome', code: 'RM' },
    ];

    this.targetCities = [];

    this.orderCities = [
      { name: 'San Francisco', code: 'SF' },
      { name: 'London', code: 'LDN' },
      { name: 'Paris', code: 'PRS' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Berlin', code: 'BRL' },
      { name: 'Barcelona', code: 'BRC' },
      { name: 'Rome', code: 'RM' },
    ];

    this.blockOptions = [
      { label: '產品與服務', value: '1' },
      { label: '投資觀點', value: '2' },
    ];

    this.productOptions = [
      { label: '產品分類1', value: '1' },
      { label: '產品分類2', value: '2' },
    ];

    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' },
    ];
  }

  onSelect(event: any) {
    this.uploadedFiles = event.files;
    // for (const file of event.files) {
    //   // this.uploadedFiles.push(file);
    // }
    console.log(`Uploaded files: ${this.uploadedFiles}`);
    // this.messageService.add({
    //   severity: 'info',
    //   summary: 'Success',
    //   detail: 'File Uploaded',
    // });
  }

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
    console.log('val-', value);
    // if (value === '1') {
    //   this.getProducts1();
    // } else if (value === '2') {
    //   this.getProducts2();
    // }
  }

  getProducts1(): void {
    this.productService.getBlockProducts().then((data) => {
      // this.list = data;
      this.productList = data;
    });
  }

  getProducts2(): void {
    this.investList = this.list;
  }

  onSortChange(event: any) {
    const value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  onFilter(dv: DataView, event: Event) {
    dv.filter((event.target as HTMLInputElement).value);
  }

  onDelete(index: number) {
    if (this.list.length > 0) {
      if (this.selectedBlock === '1') {
        this.productList.splice(index, 1);
      } else if (this.selectedBlock === '2') {
        this.investList.splice(index, 1);
      }
    }
  }

  onAdd() {
    this.display = true;
    this.submitType = 'new';
  }

  onEdit(item: list, index: number) {
    this.index = index;
    this.submitType = 'edit';
    console.log('tem.articleClassification', item.articleClassification);
    this.display = true;
    this.title = item.name;
    this.selectedBlock = item.blockType;
    this.selectedDrop = item.articleClassification;
    this.selectedProduct = item.productCategory;
    this.htmlData = item.content;
    this.fileSize = item.file.size;
    this.fileName = item.file.name;
    this.imageSrc = item.file.image;
    this.sortOrderValue = item.sortOrder;
    this.isSelectFileUpload = false;
  }

  submit() {
    if (this.submitType === 'new') {
      if (this.selectedBlock === '1') {
        this.productList = [...this.productList, this.pushData()];
      } else if (this.selectedBlock === '2') {
        this.investList = [...this.investList, this.pushData()];
      }
    } else {
      if (this.selectedBlock === '1') {
        this.productList[this.index] = this.pushData();
        this.productList = [...this.productList];
      } else if (this.selectedBlock === '2') {
        this.investList[this.index] = this.pushData();
        this.productList = [...this.investList];
      }
    }

    this.display = false;
    this.clear();
    this.resetData();
  }

  pushData() {
    return {
      id: '1003',
      code: 'f230fh0g3',
      name: this.title,
      blockType: this.selectedBlock,
      articleClassification: this.selectedDrop,
      productCategory: this.selectedProduct,
      content: this.htmlData,
      file: {
        size: '1024',
        name: '測試2',
        image: this.imageSrc,
      },
      sortOrder: this.sortOrderValue,
      createdTime: format(new Date(), 'yyyy/MM/dd'),
    };
  }

  clear() {
    this.fileUploadData.clear();
  }

  resetData(): void {
    this.title = '';
    this.selectedBlock = '1';
    this.selectedDrop = '';
    this.selectedProduct = '';
    this.htmlData = '';
    this.fileUpload.image = '';
    this.imageSrc = '';
    this.fileName = '';
    this.fileSize = '';
    this.sortOrderValue = '';
    this.isSelectFileUpload = false;
  }
}
