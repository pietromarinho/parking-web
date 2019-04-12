import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Entrance } from 'app/model/entrance.model';
import { EntranceService } from 'app/service/entrance/entrance.service';

declare var $: any;

@Component({
  selector: 'app-period',
  templateUrl: './period.component.html',
  styleUrls: ['./period.component.scss']
})
export class PeriodComponent implements OnInit {

  listReport: Entrance[] = [];
  dateStart: Date = new Date();
  dateEnd: Date = new Date();

  constructor(
    private entranceService: EntranceService,
  ) { }

  ngOnInit(): void {
    this.dateStart = null;
  }

  public printPage(): void {
    window.print();
  }

  private getPieces(date_tart: Date, date_end: Date): void {
    const envDateStart = date_tart.toISOString().slice(0, 10);
    const envDateEnd = date_end.toISOString().slice(0, 10);
    console.log(envDateStart);
    console.log(envDateEnd);

    this.entranceService.generateReport().subscribe(
      a => {
        this.listReport = a;
        console.log(this.listReport);
      }
    );
  }

  checkDates(): boolean {
    if (!this.dateStart || !this.dateEnd) {
      return false;
    }
    return true;
  }

}
