import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Table } from 'primeng/table';
import { MessageService, ConfirmationService, SelectItem } from 'primeng/api';
import { Customer, Representative } from 'src/app/demo/api/customer';
import { Product } from 'src/app/demo/api/product';
import { CustomerService } from 'src/app/demo/service/customer.service';
import { ProductService } from 'src/app/demo/service/product.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Router } from '@angular/router';

interface expandedRows {
  [key: string]: boolean;
}

@Component({
  templateUrl: './tabledemo.component.html',
  providers: [MessageService, ConfirmationService],
  styles: [
    `
      :host ::ng-deep .p-frozen-column {
        font-weight: bold;
      }

      :host ::ng-deep .p-datatable-frozen-tbody {
        font-weight: bold;
      }

      :host ::ng-deep .p-progressbar {
        height: 0.5rem;
      }
    `,
  ],
})
export class TableDemoComponent implements OnInit {
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

  display2: boolean = false;

  htmlData = '';

  public Editor = ClassicEditor;

  cities: SelectItem[] = [];

  selectedDrop: SelectItem = { value: '' };

  cities2: SelectItem[] = [];

  selectedDrop2: SelectItem = { value: '' };

  uploadedFiles: any[] = [];

  type: string = 'video';

  customers1: Customer[] = [];

  customers2: Customer[] = [];

  customers3: Customer[] = [];

  selectedCustomers1: Customer[] = [];

  selectedCustomer: Customer = {};

  representatives: Representative[] = [];

  statuses: any[] = [];

  products: Product[] = [];

  rowGroupMetadata: any;

  expandedRows: expandedRows = {};

  activityValues: number[] = [0, 100];

  isExpanded: boolean = false;

  idFrozen: boolean = false;

  loading: boolean = true;

  /** ???????????????????????? */
  searchFields = {
    dateSelect: null,
    billingRequirements: '',
    contractNo: '',
    SectorDropdownItems: '',
    applicantsDropdownItems: '',
    contractObject: '',
    contractType: '',
    caseStatus: '',
  };

  dialogTitle = '';
  caseStatusDialog = '';

  @ViewChild('filter') filter!: ElementRef;

  constructor(
    private customerService: CustomerService,
    private productService: ProductService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    public router: Router
  ) {}

  ngOnInit() {
    this.list = [
      {
        id: 'A1111017001',
        code: 'f230fh0g3',
        grade: '???',
        department: '????????????',
        name: '????????? Rebecca Huang',
        contractName: '?????????????????????',
        contractType: '??????',
        TaxContractAmount: '???',
        caseStatusName: '???????????????',
        caseStatus: '15',
        caseDate: '2?????????',
        archiveCode: 'A222017001',
        principal: '????????? | ????????? Vera Huang',
        updateTime: '2022/11/10 09:00:00',
      },
      {
        id: 'A1111017002',
        code: 'nvklal433',
        grade: '???',
        department: '????????????',
        name: '???????????????????????????',
        contractName: '?????????????????????',
        contractType: '??????',
        TaxContractAmount: '???',
        caseStatusName: '?????????',
        caseStatus: '10',
        caseDate: '1?????????',
        archiveCode: 'A222017002',
        principal: '???????????? | ????????? Rebecca Huang',
        updateTime: '2022/11/10 13:05:50',
      },
    ];
    this.caseHistoryList = [
      {
        id: '1003',
        code: 'A1111017001',
        name: '???????????? | ????????? Rebecca Huang',
        updateTime: '2022/11/09 09:27:39',
        action: '??????',
        file: 'V1.pdf',
        description: 'Product Description',
        image: 'blue-t-shirt.jpg',
        category: 'Accessories',
      },
      {
        id: '1004',
        code: 'A1111017002',
        name: '????????? | ????????? Kevin Cheng',
        updateTime: '2022/11/14 15:18:43',
        action: '??????',
        file: 'V2.pdf',
        description: 'Product Description',
        image: 'bracelet.jpg',
        category: 'Accessories',
      },
    ];

    this.cities = [
      { label: '????????????1', value: { id: 1, name: '????????????1', code: 'NY' } },
      { label: '????????????2', value: { id: 2, name: '????????????2', code: 'RM' } },
      { label: '????????????3', value: { id: 3, name: '????????????3', code: 'LDN' } },
      { label: '????????????4', value: { id: 4, name: '????????????4', code: 'IST' } },
      { label: '????????????5', value: { id: 5, name: '????????????5', code: 'PRS' } },
    ];

    this.cities2 = [
      { label: '????????????1', value: { id: 1, name: '????????????1', code: 'NY' } },
      { label: '????????????2', value: { id: 2, name: '????????????2', code: 'RM' } },
      { label: '????????????3', value: { id: 3, name: '????????????3', code: 'LDN' } },
      { label: '????????????4', value: { id: 4, name: '????????????4', code: 'IST' } },
      { label: '????????????5', value: { id: 5, name: '????????????5', code: 'PRS' } },
    ];

    // this.customerService.getCustomersLarge().then((customers) => {
    //   this.customers1 = customers;
    //   this.loading = false;

    //   // @ts-ignore
    //   this.customers1.forEach(
    //     (customer) => (customer.date = new Date(customer.date))
    //   );
    // });
    this.customerService
      .getCustomersMedium()
      .then((customers) => (this.customers2 = customers));
    this.customerService
      .getCustomersLarge()
      .then((customers) => (this.customers3 = customers));
    this.productService
      .getProductsWithOrdersSmall()
      .then((data) => (this.products = data));

    this.representatives = [
      { name: 'Amy Elsner', image: 'amyelsner.png' },
      { name: 'Anna Fali', image: 'annafali.png' },
      { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
      { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
      { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
      { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
      { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
      { name: 'Onyama Limba', image: 'onyamalimba.png' },
      { name: 'Stephen Shaw', image: 'stephenshaw.png' },
      { name: 'XuXue Feng', image: 'xuxuefeng.png' },
    ];

    this.statuses = [
      { label: 'Unqualified', value: 'unqualified' },
      { label: 'Qualified', value: 'qualified' },
      { label: 'New', value: 'new' },
      { label: 'Negotiation', value: 'negotiation' },
      { label: 'Renewal', value: 'renewal' },
      { label: 'Proposal', value: 'proposal' },
    ];
  }

  caseStatusClick(caseStatus: string): void {
    console.log('caseStatus', caseStatus);
    this.caseStatusDialog = caseStatus;
    this.display = true;
    if (caseStatus === '10') {
      this.dialogTitle = '????????????';
    } else if (caseStatus === '15') {
      this.dialogTitle = '???????????????';
    }
  }

  onSort() {
    this.updateRowGroupMetaData();
  }

  updateRowGroupMetaData() {
    this.rowGroupMetadata = {};

    if (this.customers3) {
      for (let i = 0; i < this.customers3.length; i++) {
        const rowData = this.customers3[i];
        const representativeName = rowData?.representative?.name || '';

        if (i === 0) {
          this.rowGroupMetadata[representativeName] = { index: 0, size: 1 };
        } else {
          const previousRowData = this.customers3[i - 1];
          const previousRowGroup = previousRowData?.representative?.name;
          if (representativeName === previousRowGroup) {
            this.rowGroupMetadata[representativeName].size++;
          } else {
            this.rowGroupMetadata[representativeName] = { index: i, size: 1 };
          }
        }
      }
    }
  }

  expandAll() {
    if (!this.isExpanded) {
      this.products.forEach((product) =>
        product && product.name ? (this.expandedRows[product.name] = true) : ''
      );
    } else {
      this.expandedRows = {};
    }
    this.isExpanded = !this.isExpanded;
  }

  formatCurrency(value: number) {
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = '';
  }

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

  addData() {
    if (this.type === 'video') {
      console.log('----');
      this.display = true;
    } else {
      this.display2 = true;
    }
  }

  handleChange(e: any) {
    if (e.index === 1) {
      this.type = 'financialManagement';
    } else {
      this.type = 'video';
    }
  }
}
