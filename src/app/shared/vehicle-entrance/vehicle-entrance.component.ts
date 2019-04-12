import { Location } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicle } from 'app/model/vehicle.model';
import { VehicleService } from 'app/service/vehicle/vehicle.service';
import { GenericFormComponent } from 'app/views/generic/generic-form/generic-form.component';
import { Entrance } from 'app/model/entrance.model';
import { EntranceService } from 'app/service/entrance/entrance.service';
import { EntranceExit } from 'app/model/entrance-exit.enum';

declare var $: any;

@Component({
  selector: 'app-vehicle-entrance',
  templateUrl: './vehicle-entrance.component.html',
  styleUrls: ['./vehicle-entrance.component.scss']
})
export class VehicleEntranceComponent extends GenericFormComponent<Entrance, EntranceService> {

  vehicle: Vehicle = new Vehicle();

  constructor(
    private vehicleService: VehicleService,
    service: EntranceService,
    router: Router,
    activatedRoute: ActivatedRoute,
    location: Location
  ) {
    super(router, activatedRoute, service, location, Entrance);
  }

  public initModal(vehicleId: string): void {
    this.obj.car_id = vehicleId;
    this.obj.type = EntranceExit.IN;
    this.getVehicle(vehicleId);

    $('#vehicleEntranceModal').modal('show');
  }

  closeModal(): void {
    $('#vehicleEntranceModal').modal('hide');
  }

  getVehicle(id: string) {
    this.vehicleService.getOne(id).subscribe(
      success => {
        this.vehicle = success;
      }
    );
  }

}
