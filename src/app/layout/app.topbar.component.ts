import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { LayoutService } from './service/app.layout.service';
import { environment as env } from '@env';

@Component({
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html',
})
export class AppTopBarComponent implements OnInit {
  items!: MenuItem[];
  imageSrc: any = 'assets/layout/images/user-img.jpg';
  imageLogo = 'assets/layout/images/logo.png';

  @ViewChild('menubutton') menuButton!: ElementRef;

  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

  @ViewChild('topbarmenu') menu!: ElementRef;

  constructor(public layoutService: LayoutService, public router: Router) {}

  ngOnInit() {
    console.log('topbar imageSrc', this.imageSrc);
  }
}
