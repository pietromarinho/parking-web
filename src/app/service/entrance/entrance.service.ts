import { Injectable } from '@angular/core';
import { CrudService } from '../generic-crud/generic-crud.service';
import { Entrance } from 'app/model/entrance.model';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { ErrorService } from '../toast-notification-service/error-service/error.service';
import { Constant } from 'app/constant/constant';
import { Observable } from 'rxjs';

@Injectable()
export class EntranceService extends CrudService<Entrance> {

  constructor(http: Http,
    public activatedRoute: ActivatedRoute,
    errorHandler?: ErrorService) {
    super(http, Constant.ENTRANCE, errorHandler, activatedRoute);
  }

  public getTypeOut(): Observable<Entrance[]> {
    return this.get(`${this.baseURL}search?query=type==${'OUT'}&valid==true`);
  }

  public getTypeIn(): Observable<Entrance[]> {
    return this.get(`${this.baseURL}search?query=type==${'IN'};valid==true`);
  }

  public generateReport(): Observable<Entrance[]> {
    const url = `${this.baseURL}report?start=${'2019-04-10'}&end=${'2019-04-12'}`;
    return this.get(url);
  }

}
