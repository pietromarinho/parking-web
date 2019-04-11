import { Location } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicle } from 'app/model/vehicle.model';
import { VehicleService } from 'app/service/vehicle/vehicle.service';
import { GenericFormComponent } from 'app/views/generic/generic-form/generic-form.component';

declare var $: any;

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.scss']
})
export class VehicleFormComponent extends GenericFormComponent<Vehicle, VehicleService> {
  @ViewChild('vehicleForm') vehicleForm: NgForm;

  constructor(
    service: VehicleService,
    router: Router,
    activatedRoute: ActivatedRoute,
    location: Location
  ) {
    super(router, activatedRoute, service, location, Vehicle);
  }

  public initModal(vehicle?: Vehicle): void {
    if (vehicle) {
      Object.assign(this.obj, vehicle);
      this.edit = true;
    } else {
      this.obj = new Vehicle();
      this.edit = false;
    }
    $('#vehicleModal').modal('show');
  }

  closeModal(): void {
    $('#vehicleModal').modal('hide');
  }
}
