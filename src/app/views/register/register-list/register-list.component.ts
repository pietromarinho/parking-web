import { Location } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Entrance } from 'app/model/entrance.model';
import { EntranceService } from 'app/service/entrance/entrance.service';
import { VehicleService } from 'app/service/vehicle/vehicle.service';
import { GenericListComponent } from 'app/views/generic/generic-list/generic-list.component';
import { Observable } from 'rxjs';
import { VehicleExitComponent } from 'app/shared/vehicle-exit/vehicle-exit.component';

@Component({
  selector: 'app-register-list',
  templateUrl: './register-list.component.html',
  styleUrls: ['./register-list.component.scss']
})
export class RegisterListComponent extends GenericListComponent<Entrance, EntranceService> {

  @ViewChild('vehicleExitModal') vehicleExitModal: VehicleExitComponent;

  constructor(
    service: EntranceService,
    router: Router,
    activedRouter: ActivatedRoute,
    location: Location
  ) {
    super(service, router, activedRouter, location);
  }

  loadList(): Observable<Entrance[]> {
    return this.service.getTypeIn();
  }

  showExitModal(entrance: Entrance) {
    this.vehicleExitModal.initModal(entrance.id);
  }

}
