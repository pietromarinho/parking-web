import { Routes } from '@angular/router';
import { RegisterListComponent } from './register-list/register-list.component';
import { RegisterOutListComponent } from './register-out-list/register-out-list.component';
export const RegisterRouter: Routes = [
    {
        path: '',
        children: [
            {
                path: 'parked_cars',
                component: RegisterListComponent,
            },
            {
                path: 'historic',
                component: RegisterOutListComponent,
            },
        ]
    }
];
