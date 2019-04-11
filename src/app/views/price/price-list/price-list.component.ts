import { Location } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Price } from 'app/model/price.model';
import { PriceService } from 'app/service/price/price.service';
import { GenericListComponent } from 'app/views/generic/generic-list/generic-list.component';
import { PriceFormComponent } from '../price-form/price-form.component';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.scss']
})
export class PriceListComponent extends GenericListComponent<Price, PriceService> {

  @ViewChild('priceModal') priceModal: PriceFormComponent;

  constructor(
    service: PriceService,
    router: Router,
    activedRouter: ActivatedRoute,
    location: Location
  ) {
    super(service, router, activedRouter, location);
  }

  showModal(price?: Price): void {
    this.priceModal.initModal(price);
  }

}
