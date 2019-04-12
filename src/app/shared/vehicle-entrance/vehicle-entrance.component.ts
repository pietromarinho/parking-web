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
import { MessageType } from 'app/service/toast-notification-service/message-type.enum';

declare var $: any;

@Component({
  selector: 'app-vehicle-entrance',
  templateUrl: './vehicle-entrance.component.html',
  styleUrls: ['./vehicle-entrance.component.scss']
})
export class VehicleEntranceComponent extends GenericFormComponent<Entrance, EntranceService> {

  vehicle: Vehicle = new Vehicle();
  entranceCheck: Entrance[] = [];

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
    this.getAllEntranceIn();

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

  getAllEntranceIn() {
    this.service.getTypeIn().subscribe(
      sucess => {
        this.entranceCheck = sucess;
        console.log('this.entranceCheck');
        console.log(this.entranceCheck);
      }
    );
  }

  verifyEntrance(): boolean {
    const found = this.entranceCheck.find((entrance) => entrance.car_id === this.obj.car_id);
    if (found) {
      return false;
    }
    return true;
  }

  updateOrCreate() {
    try {
      if (this.verifyEntrance()) {

        this.service.save(this.obj).subscribe(
          success => {
            this.obj = success;
            this.closeModal();
            this.toast(this.recordSaveMsg, MessageType.SUCCESS);
          });
      } else {
        console.log('entrou');
        this.toast('Veículo já estacionado', MessageType.WARNING);
      }
    } catch {
      this.toast('Algo deu errado', MessageType.ERROR);
    }
  }

}
