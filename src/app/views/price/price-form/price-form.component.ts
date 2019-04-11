import { Location } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Price } from 'app/model/price.model';
import { PriceService } from 'app/service/price/price.service';
import { GenericFormComponent } from 'app/views/generic/generic-form/generic-form.component';

declare var $: any;

@Component({
  selector: 'app-price-form',
  templateUrl: './price-form.component.html',
  styleUrls: ['./price-form.component.scss']
})
export class PriceFormComponent extends GenericFormComponent<Price, PriceService> {
  @ViewChild('priceForm') priceForm: NgForm;

  constructor(
    service: PriceService,
    router: Router,
    activatedRoute: ActivatedRoute,
    location: Location
  ) {
    super(router, activatedRoute, service, location, Price);
  }

  public initModal(price?: Price): void {
    if (price) {
      Object.assign(this.obj, price);
      this.edit = true;
    } else {
      this.obj = new Price();
      this.edit = false;
    }
    $('#priceModal').modal('show');
  }

  closeModal(): void {
    $('#priceModal').modal('hide');
  }

}
