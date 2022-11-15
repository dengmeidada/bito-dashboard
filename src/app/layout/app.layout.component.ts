import {
  Component,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  PRIMARY_OUTLET,
  Router,
  Params,
} from '@angular/router';
import { distinctUntilChanged, filter, Subscription } from 'rxjs';
import { LayoutService } from './service/app.layout.service';
import { AppSidebarComponent } from './app.sidebar.component';
import { AppTopBarComponent } from './app.topbar.component';
import { MenuItem } from 'primeng/api';

interface IBreadcrumb {
  label: string;
  params?: Params;
  url?: string;
}

@Component({
  selector: 'app-layout',
  templateUrl: './app.layout.component.html',
})
export class AppLayoutComponent implements OnDestroy, OnInit {
  public breadcrumbs: IBreadcrumb[];
  home: MenuItem = { icon: 'pi pi-home' };

  overlayMenuOpenSubscription: Subscription;

  menuOutsideClickListener: any;

  profileMenuOutsideClickListener: any;

  @ViewChild(AppSidebarComponent) appSidebar!: AppSidebarComponent;

  @ViewChild(AppTopBarComponent) appTopbar!: AppTopBarComponent;

  constructor(
    public layoutService: LayoutService,
    public renderer: Renderer2,
    public router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.breadcrumbs = [];
    this.overlayMenuOpenSubscription =
      this.layoutService.overlayOpen$.subscribe(() => {
        if (!this.menuOutsideClickListener) {
          this.menuOutsideClickListener = this.renderer.listen(
            'document',
            'click',
            (event) => {
              const isOutsideClicked = !(
                this.appSidebar.el.nativeElement.isSameNode(event.target) ||
                this.appSidebar.el.nativeElement.contains(event.target) ||
                this.appTopbar.menuButton.nativeElement.isSameNode(
                  event.target
                ) ||
                this.appTopbar.menuButton.nativeElement.contains(event.target)
              );

              if (isOutsideClicked) {
                this.hideMenu();
              }
            }
          );
        }

        if (!this.profileMenuOutsideClickListener) {
          this.profileMenuOutsideClickListener = this.renderer.listen(
            'document',
            'click',
            (event) => {
              const isOutsideClicked = !(
                this.appTopbar.menu.nativeElement.isSameNode(event.target) ||
                this.appTopbar.menu.nativeElement.contains(event.target) ||
                this.appTopbar.topbarMenuButton.nativeElement.isSameNode(
                  event.target
                ) ||
                this.appTopbar.topbarMenuButton.nativeElement.contains(
                  event.target
                )
              );

              if (isOutsideClicked) {
                this.hideProfileMenu();
              }
            }
          );
        }

        if (this.layoutService.state.staticMenuMobileActive) {
          this.blockBodyScroll();
        }
      });

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.hideMenu();
        this.hideProfileMenu();
      });
  }

  ngOnInit() {
    // this.home = {icon: 'pi pi-home'};
    this.breadcrumbs = this.getBreadcrumbs(this.activatedRoute.root);
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        distinctUntilChanged()
      )
      .subscribe((event) => {
        const root: ActivatedRoute = this.activatedRoute.root;
        this.breadcrumbs = this.getBreadcrumbs(root);
      });
  }

  private getBreadcrumbs(
    route: ActivatedRoute,
    url: string = '',
    breadcrumbs: IBreadcrumb[] = []
  ): IBreadcrumb[] {
    console.log('route-', route);
    console.log('url-', url);
    console.log('breadcrumbs-', breadcrumbs);
    const ROUTE_DATA_BREADCRUMB = 'bc';

    // get the child routes
    const children: ActivatedRoute[] = route.children;
    console.log('children', children);
    // return if there are no more children
    if (children.length === 0) {
      return breadcrumbs;
    }

    // iterate over each children
    for (const child of children) {
      // verify primary route
      if (child.outlet !== PRIMARY_OUTLET) {
        continue;
      }
      // verify the custom data property "bc" is specified on the route
      // if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
      //   return this.getBreadcrumbs(child, url, breadcrumbs);
      // }

      const hasDataBc = child.snapshot.data.hasOwnProperty(
        ROUTE_DATA_BREADCRUMB
      );
      // get the route's URL segment
      const routeURL: string = child.snapshot.url
        .map((segment) => segment.path)
        .join('/');
      // append route URL to URL
      if (routeURL === '/' || (routeURL === '' && !hasDataBc)) {
        return this.getBreadcrumbs(child, url, breadcrumbs);
      } else {
        url += `/${routeURL}`;
      }
      // add breadcrumb
      const breadcrumb: IBreadcrumb = {
        label: child.snapshot.data[ROUTE_DATA_BREADCRUMB],
        params: child.snapshot.params,
        url,
      };
      breadcrumbs.push(breadcrumb);
      // recursive
      return this.getBreadcrumbs(child, url, breadcrumbs);
    }

    // we should never get here, but just in case
    return breadcrumbs;
  }

  hideMenu() {
    this.layoutService.state.overlayMenuActive = false;
    this.layoutService.state.staticMenuMobileActive = false;
    this.layoutService.state.menuHoverActive = false;
    if (this.menuOutsideClickListener) {
      this.menuOutsideClickListener();
      this.menuOutsideClickListener = null;
    }
    this.unblockBodyScroll();
  }

  hideProfileMenu() {
    this.layoutService.state.profileSidebarVisible = false;
    if (this.profileMenuOutsideClickListener) {
      this.profileMenuOutsideClickListener();
      this.profileMenuOutsideClickListener = null;
    }
  }

  blockBodyScroll(): void {
    if (document.body.classList) {
      document.body.classList.add('blocked-scroll');
    } else {
      document.body.className += ' blocked-scroll';
    }
  }

  unblockBodyScroll(): void {
    if (document.body.classList) {
      document.body.classList.remove('blocked-scroll');
    } else {
      document.body.className = document.body.className.replace(
        new RegExp(
          '(^|\\b)' + 'blocked-scroll'.split(' ').join('|') + '(\\b|$)',
          'gi'
        ),
        ' '
      );
    }
  }

  get containerClass() {
    return {
      'layout-theme-light': this.layoutService.config.colorScheme === 'light',
      'layout-theme-dark': this.layoutService.config.colorScheme === 'dark',
      'layout-overlay': this.layoutService.config.menuMode === 'overlay',
      'layout-static': this.layoutService.config.menuMode === 'static',
      'layout-slim': this.layoutService.config.menuMode === 'slim',
      'layout-horizontal': this.layoutService.config.menuMode === 'horizontal',
      'layout-static-inactive':
        this.layoutService.state.staticMenuDesktopInactive &&
        this.layoutService.config.menuMode === 'static',
      'layout-overlay-active': this.layoutService.state.overlayMenuActive,
      'layout-mobile-active': this.layoutService.state.staticMenuMobileActive,
      'p-input-filled': this.layoutService.config.inputStyle === 'filled',
      'p-ripple-disabled': !this.layoutService.config.ripple,
    };
  }

  ngOnDestroy() {
    if (this.overlayMenuOpenSubscription) {
      this.overlayMenuOpenSubscription.unsubscribe();
    }

    if (this.menuOutsideClickListener) {
      this.menuOutsideClickListener();
    }
  }
}
