import { Injectable } from '@angular/core';
import { CrudService } from '../generic-crud/generic-crud.service';
import { Entrance } from 'app/model/entrance.model';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { ErrorService } from '../toast-notification-service/error-service/error.service';
import { Constant } from 'app/constant/constant';

@Injectable()
export class EntranceService extends CrudService<Entrance> {

  constructor(http: Http,
    public activatedRoute: ActivatedRoute,
    errorHandler?: ErrorService) {
    super(http, Constant.ENTRANCE, errorHandler, activatedRoute);
  }

}
