import { Component, OnInit } from '@angular/core';
import { OfferService } from '../../services/offers/offer.service';
import { MatDialog } from '@angular/material/dialog';
import { OfferDetailsModalComponent } from '../offer-details-modal/offer-details-modal.component';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
  offers;

  constructor(private _offerService: OfferService, public dialog: MatDialog) { }

  ngOnInit() {
    return this._offerService.getAll().subscribe(offers =>
      {
        this.offers = offers;
      });
  }

  openModal(): void{
    const dialogRef = this.dialog.open(OfferDetailsModalComponent, {
      width: '500px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
