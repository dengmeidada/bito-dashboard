import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { Product } from '../../api/product';
import { ProductService } from '../../service/product.service';
import { Subscription } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { Table } from 'primeng/table';

interface Role {
  roleId: string;
  roleName: string;
}

@Component({
  templateUrl: './dashboard.component.html',
  providers: [MessageService],
})
export class DashboardComponent implements OnInit, OnDestroy {
  items!: MenuItem[];

  list = [
    {
      id: '',
      code: '',
      name: '',
      email: '',
      description: '',
      image: '',
      permission: '',
    },
  ];

  display: boolean = false;

  name: string = '';

  staffCode: string = '';

  roleList = [
    {
      roleId: '1',
      roleName: '管理者',
    },
    {
      roleId: '2',
      roleName: '主管',
    },
    {
      roleId: '3',
      roleName: '一般員工',
    },
    {
      roleId: '4',
      roleName: '工讀生',
    },
  ];

  valSwitch: string = '';

  // 儲存時只需要角色text
  assignedRoleList: string[] = [];

  products!: Product[];

  chartData: any;

  chartOptions: any;

  subscription!: Subscription;
  legalProcessList = [
    {
      type: '1',
      label: '初審',
      count: 0,
    },
    {
      type: '2',
      label: '複審',
      count: 1,
    },
    {
      type: '3',
      label: '回覆意見',
      count: 2,
    },
  ];

  processList = [
    {
      type: '1',
      label: '開單',
      count: 2,
    },
    {
      type: '2',
      label: '初審',
      count: 0,
    },
    {
      type: '3',
      label: '複審',
      count: 1,
    },
    {
      type: '4',
      label: '可申請確認',
      count: 2,
    },
    {
      type: '5',
      label: '終審',
      count: 6,
    },
    {
      type: '6',
      label: '比對',
      count: 1,
    },
    {
      type: '7',
      label: '用印',
      count: 2,
    },
    {
      type: '8',
      label: '歸檔',
      count: 5,
    },
  ];

  SpecialProcessList = [
    {
      type: '1',
      label: '開單',
      count: 0,
    },
    {
      type: '2',
      label: '歸檔',
      count: 1,
    },
  ];

  constructor(
    private productService: ProductService,
    public layoutService: LayoutService,
    private messageService: MessageService
  ) {
    this.subscription = this.layoutService.configUpdate$.subscribe(() => {
      this.initChart();
    });
  }

  ngOnInit() {
    this.list = [
      {
        id: '2019005',
        code: 'f230fh0g3',
        name: '王富貴',
        email: 'xxx@cathayholdings.com',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        permission: '管理員',
      },
      {
        id: '2010010',
        code: 'nvklal433',
        name: '張美女',
        email: 'ooo@cathayholdings.com',
        description: 'Product Description',
        image: 'black-watch.jpg',
        permission: '主管',
      },
      {
        id: '2018005',
        code: '244wgerg2',
        name: '王曉明',
        email: 'oxo@cathayholdings.com',
        description: 'Product Description',
        image: 'blue-t-shirt.jpg',
        permission: '一般員工',
      },
      {
        id: '2022015',
        code: 'h456wer53',
        name: '陳美美',
        email: 'xoo@cathayholdings.com',
        description: 'Product Description',
        image: 'bracelet.jpg',
        permission: '工讀生',
      },
    ];
    this.initChart();
    this.productService
      .getProductsSmall()
      .then((data) => (this.products = data));

    this.items = [
      {
        label: '編輯/查看',
        command: () => {
          this.update();
        },
      },
      {
        label: '刪除',
        command: () => {
          this.delete();
        },
      },
    ];
  }

  initChart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.chartData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          backgroundColor: documentStyle.getPropertyValue('--bluegray-700'),
          borderColor: documentStyle.getPropertyValue('--bluegray-700'),
          tension: 0.4,
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          backgroundColor: documentStyle.getPropertyValue('--green-600'),
          borderColor: documentStyle.getPropertyValue('--green-600'),
          tension: 0.4,
        },
      ],
    };

    this.chartOptions = {
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
      },
    };
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  submit() {
    this.display = false;
  }
  update(): void {
    this.display = true;
  }

  delete() {
    this.messageService.add({
      severity: 'warn',
      summary: 'Delete',
      detail: 'Data Deleted',
    });
  }

  /**
   * 改變角色
   * @param target checkbox Toggle
   * @param role UserRole 單筆資料
   */
  updateCheckboxValue(role: Role): void {
    const roleIdx = this.assignedRoleList.findIndex((item) => {
      return item === role.roleId;
    });
    if (roleIdx > -1) {
      this.assignedRoleList.splice(roleIdx, 1);
    } else {
      this.assignedRoleList.push(role.roleId);
    }

    console.log('this.assignedRoleList', this.assignedRoleList);
  }
}
