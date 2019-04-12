import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EntranceExit } from 'app/model/entrance-exit.enum';
import { Entrance } from 'app/model/entrance.model';
import { EntranceService } from 'app/service/entrance/entrance.service';
import { GenericFormComponent } from 'app/views/generic/generic-form/generic-form.component';

declare var $: any;

@Component({
  selector: 'app-vehicle-exit',
  templateUrl: './vehicle-exit.component.html',
  styleUrls: ['./vehicle-exit.component.scss']
})
export class VehicleExitComponent extends GenericFormComponent<Entrance, EntranceService> {

  constructor(
    service: EntranceService,
    router: Router,
    activatedRoute: ActivatedRoute,
    location: Location
  ) {
    super(router, activatedRoute, service, location, Entrance);
  }

  public initModal(vehicleEntranceId: string): void {
    this.edit = false;
    this.getEntrance(vehicleEntranceId);
    $('#vehicleExitModal').modal('show');
  }

  closeModal(): void {
    $('#vehicleExitModal').modal('hide');
  }

  getEntrance(id: string) {
    this.service.getOne(id).subscribe(
      success => {
        this.obj = success;
      }
    );
  }

  beforeSave() {
    this.obj.id = '';
    this.obj.type = EntranceExit.OUT;
  }

  getHourEntrance(date: Date) {
    return new Date(date).toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
  }

}
