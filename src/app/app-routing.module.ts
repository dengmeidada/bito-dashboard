import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from './layout/app.layout.component';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        // {
        //   path: '',
        //   redirectTo: 'backstage',
        //   pathMatch: 'full',
        // },
        {
          path: 'login',
          loadChildren: () =>
            import('./demo/components/auth/login/login.module').then(
              (m) => m.LoginModule
            ),
        },
        {
          path: 'backstage',
          component: AppLayoutComponent,
          children: [
            {
              path: '',
              loadChildren: () =>
                import('./demo/components/dashboard/dashboard.module').then(
                  (m) => m.DashboardModule
                ),
            },
            // {
            //   path: 'product',
            //   loadChildren: () =>
            //     import('./demo/components/uikit/uikit.module').then(
            //       (m) => m.UikitModule
            //     ),
            // },
            {
              path: 'systemParams',
              loadChildren: () =>
                import('./demo/components/uikit/uikit.module').then(
                  (m) => m.UikitModule
                ),
            },
            // {
            //   path: 'expert',
            //   loadChildren: () =>
            //     import('./demo/components/uikit/uikit.module').then(
            //       (m) => m.UikitModule
            //     ),
            // },
            {
              path: 'legalConsultation',
              loadChildren: () =>
                import('./demo/components/uikit/uikit.module').then(
                  (m) => m.UikitModule
                ),
              // data: { bc: '法律諮詢' },
            },
            {
              path: 'pages',
              loadChildren: () =>
                import('./demo/components/pages/pages.module').then(
                  (m) => m.PagesModule
                ),
            },
            {
              path: 'page',
              loadChildren: () =>
                import('src/app/page/page.module').then((m) => m.PageModule),
            },
            {
              path: 'userEditor',
              loadChildren: () =>
                import(
                  './demo/components/documentation/documentation.module'
                ).then((m) => m.DocumentationModule),
              data: { bc: '個人資料' },
            },
          ],
        },
        {
          path: 'auth',
          loadChildren: () =>
            import('./demo/components/auth/auth.module').then(
              (m) => m.AuthModule
            ),
        },
        {
          path: 'landing',
          loadChildren: () =>
            import('./demo/components/landing/landing.module').then(
              (m) => m.LandingModule
            ),
        },

        // { path: 'pages/notfound', component: NotfoundComponent },
        // { path: '**', redirectTo: 'pages/notfound' },
      ],
      {
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
        onSameUrlNavigation: 'reload',
      }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
