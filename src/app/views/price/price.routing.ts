import { Routes } from '@angular/router';
import { PriceListComponent } from './price-list/price-list.component';

export const PriceRouter: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: PriceListComponent
            },
        ]
    }
];
