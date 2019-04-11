import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RegisterRouter } from './register.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdModule } from 'app/md/md.module';
import { MaterialModule } from 'app/app.module';
import { RegisterListComponent } from './register-list/register-list.component';

@NgModule({
  imports: [
    RouterModule.forChild(RegisterRouter),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MdModule,
    MaterialModule,
  ],
  declarations: [RegisterListComponent]
})
export class RegisterModule { }
