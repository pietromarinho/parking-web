import { Injectable } from '@angular/core';
import { CrudService } from '../generic-crud/generic-crud.service';
import { Vehicle } from 'app/model/vehicle.model';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { ErrorService } from '../toast-notification-service/error-service/error.service';
import { Constant } from 'app/constant/constant';

@Injectable()
export class VehicleService extends CrudService<Vehicle> {

  constructor(http: Http,
    public activatedRoute: ActivatedRoute,
    errorHandler?: ErrorService) {
    super(http, Constant.VEHICLE, errorHandler, activatedRoute);
  }

}
