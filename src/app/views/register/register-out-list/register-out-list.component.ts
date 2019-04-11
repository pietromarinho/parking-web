import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Entrance } from 'app/model/entrance.model';
import { EntranceService } from 'app/service/entrance/entrance.service';
import { GenericListComponent } from 'app/views/generic/generic-list/generic-list.component';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-register-out-list',
  templateUrl: './register-out-list.component.html',
  styleUrls: ['./register-out-list.component.scss']
})
export class RegisterOutListComponent extends GenericListComponent<Entrance, EntranceService> {


  constructor(
    service: EntranceService,
    router: Router,
    activedRouter: ActivatedRoute,
    location: Location
  ) {
    super(service, router, activedRouter, location);
  }

  loadList(): Observable<Entrance[]> {
    return this.service.getTypeOut();
  }

}
