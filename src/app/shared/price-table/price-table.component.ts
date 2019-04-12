import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'app/app.module';

@Component({
  selector: 'app-price-table',
  templateUrl: './price-table.component.html',
  styleUrls: ['./price-table.component.scss']
})
export class PriceTableComponent {

}
@NgModule({
  declarations: [PriceTableComponent],
  imports: [
  ],
  exports: [PriceTableComponent]
})
export class PriceTableModule { }
