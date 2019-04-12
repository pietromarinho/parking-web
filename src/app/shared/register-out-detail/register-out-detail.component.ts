import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { MaterialModule } from 'app/app.module';
import { Entrance } from 'app/model/entrance.model';
import { EntranceService } from 'app/service/entrance/entrance.service';

declare var $: any;

@Component({
  selector: 'app-register-out-detail',
  templateUrl: './register-out-detail.component.html',
  styleUrls: ['./register-out-detail.component.scss']
})
export class RegisterOutDetailComponent {

  register: Entrance = new Entrance();

  public initModal(registerOut: Entrance): void {
    console.log(registerOut);
    this.register = registerOut;
    $('#registerOutDetailModal').modal('show');
  }

  closeModal(): void {
    $('#registerOutDetailModal').modal('hide');
  }

}


@NgModule({
  declarations: [RegisterOutDetailComponent],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [RegisterOutDetailComponent]
})
export class RegisterOutDetailModule { }
