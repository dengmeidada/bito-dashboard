import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {
  model: any[] = [];

  constructor(public layoutService: LayoutService) {}

  ngOnInit() {
    this.model = [
      {
        label: '首頁',
        items: [
          {
            label: '首頁',
            // icon: 'pi pi-fw pi-home',
            routerLink: ['/backstage'],
          },
        ],
      },
      {
        label: '個人資料',
        items: [
          {
            label: '個人資料',
            // icon: 'pi pi-fw pi-home',
            routerLink: ['/backstage/userEditor'],
          },
        ],
      },
      {
        label: '系統管理',
        items: [
          {
            label: '系統管理',
            items: [
              {
                label: '使用者管理',
                // icon: 'pi pi-fw pi-home',
                routerLink: ['/backstage/system/userManagement'],
              },
              {
                label: '組織單位管理',
                // icon: 'pi pi-fw pi-home',
                routerLink: ['/backstage/system/organizationalUnit'],
              },
            ],
          },
        ],
      },
      {
        label: '法務諮詢',
        items: [
          {
            label: '法務諮詢',
            // icon: 'pi pi-fw pi-id-card',
            // routerLink: ['/backstage/product/list'],
            items: [
              {
                label: '新進件開單建檔區',
                // icon: 'pi pi-fw pi-id-card',
                routerLink: ['/backstage/legalConsultation/newOncomingBill'],
              },
              {
                label: '案件綜合查詢調閱區',
                // icon: 'pi pi-fw pi-prime',
                routerLink: ['/backstage/legalConsultation/IntegratedQuery'],
              },
              {
                label: '已開單案件列表',
                // icon: 'pi pi-fw pi-globe',
                routerLink: ['/backstage/legalConsultation/billingList'],
              },
            ],
          },
        ],
      },
      {
        label: '合約審核',
        items: [
          {
            label: '合約審核',
            items: [
              {
                label: '新進件開單建檔區',
                // icon: 'pi pi-fw pi-id-card',
                routerLink: ['/backstage/contractReview/list'],
              },
              {
                label: '案件綜合查詢調閱區',
                // icon: 'pi pi-fw pi-prime',
                routerLink: ['/backstage/contractReview/expertList'],
              },
              {
                label: '已開單案件列表',
                // icon: 'pi pi-fw pi-globe',
                routerLink: ['/backstage/contractReview/externalLinkList'],
              },
            ],
          },
        ],
      },
      {
        label: '合約特件',
        items: [
          {
            label: '合約特件',
            // icon: 'pi pi-fw pi-id-card',
            // routerLink: ['/backstage/contractFeatures/list'],
            items: [
              {
                label: '新進件開單建檔區',
                // icon: 'pi pi-fw pi-id-card',
                routerLink: ['/backstage/contractFeatures/list'],
              },
              {
                label: '案件綜合查詢調閱區',
                // icon: 'pi pi-fw pi-prime',
                routerLink: ['/backstage/contractFeatures/expertList'],
              },
              {
                label: '已開單案件列表',
                // icon: 'pi pi-fw pi-globe',
                routerLink: ['/backstage/contractFeatures/externalLinkList'],
              },
            ],
          },
        ],
      },
      {
        label: '待處理案件',
        items: [
          {
            label: '待處理案件',
            // icon: 'pi pi-fw pi-home',
            routerLink: ['/backstage/pendingCase'],
          },
        ],
      },
    ];
  }
}
