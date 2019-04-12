import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RegisterRouter } from './register.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdModule } from 'app/md/md.module';
import { MaterialModule } from 'app/app.module';
import { RegisterListComponent } from './register-list/register-list.component';
import { VehicleExitComponent } from '../../shared/vehicle-exit/vehicle-exit.component';
import { RegisterOutListComponent } from './register-out-list/register-out-list.component';
import { RegisterOutDetailModule } from 'app/shared/register-out-detail/register-out-detail.component';

@NgModule({
  imports: [
    RouterModule.forChild(RegisterRouter),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MdModule,
    MaterialModule,
    RegisterOutDetailModule
  ],
  declarations: [RegisterListComponent, VehicleExitComponent, RegisterOutListComponent]
})
export class RegisterModule { }
