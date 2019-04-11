import { Location } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicle } from 'app/model/vehicle.model';
import { VehicleService } from 'app/service/vehicle/vehicle.service';
import { GenericListComponent } from 'app/views/generic/generic-list/generic-list.component';
import { VehicleEntranceComponent } from '../vehicle-entrance/vehicle-entrance.component';
import { VehicleFormComponent } from '../vehicle-form/vehicle-form.component';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent extends GenericListComponent<Vehicle, VehicleService> {

  @ViewChild('vehicleModal') vehicleModal: VehicleFormComponent;
  @ViewChild('vehicleEntranceModal') vehicleEntranceModal: VehicleEntranceComponent;

  constructor(
    service: VehicleService,
    router: Router,
    activedRouter: ActivatedRoute,
    location: Location
  ) {
    super(service, router, activedRouter, location);
  }

  showModal(vehicle?: Vehicle): void {
    this.vehicleModal.initModal(vehicle);
  }

  showEntranceModal(vehicle: Vehicle) {
    this.vehicleEntranceModal.initModal(vehicle.id);
  }

}
