import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { RouterModule } from '@angular/router';
import { VehicleRouter } from './vehicle.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdModule } from 'app/md/md.module';
import { MaterialModule } from 'app/app.module';

@NgModule({
  imports: [
    RouterModule.forChild(VehicleRouter),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MdModule,
    MaterialModule,
  ],
  declarations: [VehicleFormComponent, VehicleListComponent]
})
export class VehicleModule { }
