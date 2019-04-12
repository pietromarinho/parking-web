import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { PeriodComponent } from './reports/period/period.component';

export const AppRoutes: Routes = [
    {
        path: '',
        component: AdminLayoutComponent,
        children: [
            {
                path: 'dashboard',
                loadChildren: './views/dashboard/dashboard.module#DashboardModule',
            },
            {
                path: 'vehicle',
                loadChildren: './views/vehicle/vehicle.module#VehicleModule'
            },
            {
                path: 'register',
                loadChildren: './views/register/register.module#RegisterModule'
            },
        ]
    },
    {
        path: '',
        component: AuthLayoutComponent,
        children: [{
            path: 'pages',
            loadChildren: './pages/pages.module#PagesModule'
        },
        ]
    },
    {
        path: 'report',
        component: PeriodComponent,
    },
];
