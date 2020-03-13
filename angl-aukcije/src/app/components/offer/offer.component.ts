import { Component, OnInit } from '@angular/core';
import { OfferService } from '../../services/offers/offer.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
  offers;

  constructor(private _offerService: OfferService) { }

  ngOnInit() {
    console.log("ss");
    return this._offerService.getAll().subscribe(offers =>
      {
        this.offers = offers;
        console.log(this.offers);
      });
  }

}
