import { Component, OnInit } from '@angular/core';
import {
  ConfirmationService,
  MenuItem,
  MessageService,
  SelectItem,
} from 'primeng/api';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ProductService } from 'src/app/demo/service/product.service';
import { DataView } from 'primeng/dataview';
import { Table } from 'primeng/table';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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

interface OptionItem {
  name: string;
  code: string;
}

@Component({
  templateUrl: './panelsdemo.component.html',
  providers: [MessageService, ConfirmationService],
})
export class PanelsDemoComponent implements OnInit {
  citiesOption: OptionItem[] = [];
  value1 = '';
  value2 = '';
  /** 搜尋表單 */
  searchForm?: FormGroup;
  /** 搜尋表單建立器 */
  searchFormBuilder = {
    insuranceCompany: null,
    policyNo: '',
    contractNo: '',
    plateNo: '',
  };
  /** 搜尋表單欄位名稱 */
  searchFields = {
    dateSelect: {
      label: '',
      value: '',
    },
    selectedCity1: {
      name: '',
      code: '',
    },
    billingRequirements: {
      label: '',
      value: '',
    },
    contractNo: {
      label: '',
      value: '',
    },
    SectorDropdownItems: {
      label: '',
      value: '',
    },
    applicantsDropdownItems: {
      label: '',
      value: '',
    },
    contractObject: '',
    contractType: {
      label: '',
      value: '',
    },
    caseStatus: {
      label: '',
      value: '',
    },
  };

  optionData = {
    dateSelect: {
      options: [
        {
          type: '1',
          label: '今日',
        },
      ],
    },
    billingRequirements: {
      options: [
        {
          type: 'C',
          label: '法務諮詢',
        },
        {
          type: 'A',
          label: '合約審核',
        },
        {
          type: 'S',
          label: '合約特件',
        },
      ],
    },
    caseStatus: {
      options: [
        {
          type: '1',
          label: '新進件',
        },
        {
          type: '2',
          label: '待補正',
        },
        {
          type: '3',
          label: '待分配',
        },
        {
          type: '4',
          label: '待審核',
        },
        {
          type: '5',
          label: '可終審',
        },
        {
          type: '6',
          label: '待終確',
        },
        {
          type: '7',
          label: '待終確',
        },
        {
          type: '8',
          label: '待比對',
        },
        {
          type: '9',
          label: '待用印',
        },
        {
          type: '10',
          label: '待歸檔',
        },
        {
          type: '11',
          label: '已歸檔',
        },
        {
          type: '12',
          label: '到期通知',
        },
        {
          type: '13',
          label: '待驗收',
        },
        {
          type: '14',
          label: '待付款',
        },
      ],
    },
    contractType: {
      options: [
        {
          type: '1',
          label: '廠商合約',
        },
      ],
    },
    SectorDropdownItems: {
      options: [
        { label: '部門 1', code: 'Option 1' },
        { label: '部門 2', code: 'Option 2' },
        { label: '部門 3', code: 'Option 3' },
      ],
    },
    applicantsDropdownItems: {
      options: [
        { label: '人員 1', code: 'Option 1' },
        { label: '人員 2', code: 'Option 2' },
        { label: '人員 3', code: 'Option 3' },
      ],
    },
  };
  list = [
    {
      id: '',
      code: '',
      grade: '',
      department: '',
      name: '',
      contractName: '',
      contractType: '',
      TaxContractAmount: '',
      caseStatusName: '',
      caseStatus: '',
      caseDate: '',
      archiveCode: '',
      principal: '',
      updateTime: '',
    },
  ];
  caseHistoryList = [
    {
      id: '',
      code: '',
      name: '',
      updateTime: '',
      action: '',
      file: '',
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

  blockOptions: SelectItem[] = [];
  selectTableType = '1';

  productList: list[] = [];

  display2 = false;

  dialogTitle = '';
  caseStatusDialog = '';

  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private productService: ProductService,
    public router: Router
  ) {}

  ngOnInit() {
    this.citiesOption = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
    this.getProducts1();
    this.blockOptions = [
      { label: '產品與服務', value: '1' },
      { label: '投資觀點', value: '2' },
    ];

    this.list = [
      {
        id: 'A1111017001',
        code: 'f230fh0g3',
        grade: '急',
        department: '執行長室',
        name: '黃相云 Rebecca Huang',
        contractName: '○○○合作協議',
        contractType: '合作',
        TaxContractAmount: '無',
        caseStatusName: '可申請確認',
        caseStatus: '15',
        caseDate: '2工作天',
        archiveCode: 'A222017001',
        principal: '法遵部 | 黃曉薇 Vera Huang',
        updateTime: '2022/11/10 09:00:00',
      },
      {
        id: 'A1111017002',
        code: 'nvklal433',
        grade: '普',
        department: '執行長室',
        name: '○○○系統設計契約',
        contractName: '○○○合作協議',
        contractType: '廠商',
        TaxContractAmount: '無',
        caseStatusName: '待歸檔',
        caseStatus: '10',
        caseDate: '1工作天',
        archiveCode: 'A222017002',
        principal: '執行長室 | 黃相云 Rebecca Huang',
        updateTime: '2022/11/10 13:05:50',
      },
    ];
    this.caseHistoryList = [
      {
        id: '1003',
        code: 'A1111017001',
        name: '執行長室 | 黃相云 Rebecca Huang',
        updateTime: '2022/11/09 09:27:39',
        action: '送審',
        file: 'V1.pdf',
        description: 'Product Description',
        image: 'blue-t-shirt.jpg',
        category: 'Accessories',
      },
      {
        id: '1004',
        code: 'A1111017002',
        name: '法遵部 | 鄭學豐 Kevin Cheng',
        updateTime: '2022/11/14 15:18:43',
        action: '分配',
        file: 'V2.pdf',
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

  onBlockChange(event: any) {
    const value = event.value;
    console.log('val-', value);
    // if (value === '1') {
    //   this.getProducts1();
    // } else if (value === '2') {
    //   this.getProducts2();
    // }
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  caseStatusClick(caseStatus: string): void {
    console.log('caseStatus', caseStatus);
    this.caseStatusDialog = caseStatus;
    this.display = true;
    if (caseStatus === '10') {
      this.dialogTitle = '歸檔處理';
    } else if (caseStatus === '15') {
      this.dialogTitle = '可申請確認';
    }
  }

  getProducts1(): void {
    this.productService.getBlockProducts().then((data) => {
      // this.list = data;
      this.productList = data;
    });
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
  }
}
