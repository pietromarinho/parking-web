import { Routes } from '@angular/router';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';

export const VehicleRouter: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: VehicleListComponent
            },
        ]
    }
];
