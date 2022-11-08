import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService, TreeNode } from 'primeng/api';
import { Table } from 'primeng/table';
import { Product } from 'src/app/demo/api/product';
import { NodeService } from 'src/app/demo/service/node.service';
import { ProductService } from 'src/app/demo/service/product.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

interface Role {
  roleId: string;
  roleName: string;
}

@Component({
  templateUrl: './treedemo.component.html',
  providers: [MessageService],
})
export class TreeDemoComponent implements OnInit {
  items!: MenuItem[];

  items2!: MenuItem[];

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

  list2 = [
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

  display2: boolean = false;

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

  constructor(
    private productService: ProductService,
    public layoutService: LayoutService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.list = [
      {
        id: '2019005',
        code: 'f230fh0g3',
        name: '話題商品',
        email: 'xxx@cathayholdings.com',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        permission: '管理員',
      },
      {
        id: '2010010',
        code: 'nvklal433',
        name: '產品總覽',
        email: 'ooo@cathayholdings.com',
        description: 'Product Description',
        image: 'black-watch.jpg',
        permission: '主管',
      },
    ];
    this.list2 = [
      {
        id: '2019005',
        code: 'f230fh0g3',
        name: '投資小學堂',
        email: 'xxx@cathayholdings.com',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        permission: '管理員',
      },
      {
        id: '2010010',
        code: 'nvklal433',
        name: 'Podcast',
        email: 'ooo@cathayholdings.com',
        description: 'Product Description',
        image: 'black-watch.jpg',
        permission: '主管',
      },
      {
        id: '2018005',
        code: '244wgerg2',
        name: 'FB社群',
        email: 'oxo@cathayholdings.com',
        description: 'Product Description',
        image: 'blue-t-shirt.jpg',
        permission: '一般員工',
      },
      {
        id: '2022015',
        code: 'h456wer53',
        name: 'IG社群',
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
          this.update('product');
        },
      },
      {
        label: '刪除',
        command: () => {
          this.delete('product');
        },
      },
    ];

    this.items2 = [
      {
        label: '編輯/查看',
        command: () => {
          this.update('video');
        },
      },
      {
        label: '刪除',
        command: () => {
          this.delete('video');
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

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  submit() {
    this.display = false;
  }
  update(type: string): void {
    console.log('type', type);
    if (type === 'product') {
      this.display = true;
    } else {
      this.display2 = true;
    }
  }

  delete(type: string): void {
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
