import { Routes } from '@angular/router';
import { RegisterListComponent } from './register-list/register-list.component';
export const RegisterRouter: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: RegisterListComponent,
            },
        ]
    }
];
