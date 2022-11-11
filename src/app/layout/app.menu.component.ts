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
        label: '新進件開單建檔區',
        items: [
          {
            label: '新進件開單建檔區',
            // icon: 'pi pi-fw pi-id-card',
            routerLink: ['/backstage/product/list'],
          },
        ],
      },
      {
        label: '案件綜合查詢調閱區',
        items: [
          {
            label: '案件綜合查詢調閱區',
            // icon: 'pi pi-fw pi-prime',
            routerLink: ['/backstage/expert/expertList'],
          },
        ],
      },
      {
        label: '已開單案件列表',
        items: [
          {
            label: '已開單案件列表',
            // icon: 'pi pi-fw pi-globe',
            routerLink: ['/backstage/externalLink/externalLinkList'],
          },
        ],
      },
    ];
  }
}
