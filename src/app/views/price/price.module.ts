import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'app/app.module';
import { MdModule } from 'app/md/md.module';
import { PriceFormComponent } from './price-form/price-form.component';
import { PriceListComponent } from './price-list/price-list.component';
import { PriceRouter } from './price.routing';

@NgModule({
  imports: [
    RouterModule.forChild(PriceRouter),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MdModule,
    MaterialModule,
  ],
  declarations: [PriceFormComponent, PriceListComponent]
})
export class PriceModule { }
