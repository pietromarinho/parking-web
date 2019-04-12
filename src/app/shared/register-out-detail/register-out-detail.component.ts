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

  constructor(
    private entranceService: EntranceService,
  ) { }


  public initModal(registerOutId: string): void {
    this.getEntrance(registerOutId);
    $('#registerOutDetailModal').modal('show');
  }

  closeModal(): void {
    $('#registerOutDetailModal').modal('hide');
  }

  getEntrance(id: string) {
    this.entranceService.getOne(id).subscribe(
      success => {
        this.register = success;
      }
    );
  }

  getHourEntrance(date: Date) {
    return new Date(date).toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
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
