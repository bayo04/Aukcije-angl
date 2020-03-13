import { Component, OnInit } from '@angular/core';
import { OfferService } from '../../services/offers/offer.service';
import { Offer } from '../../models/Offer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  offer: Offer = new Offer();

  constructor(private _offerService: OfferService) { 
  }

  ngOnInit() {
    return this._offerService.getById(8).subscribe(offer =>
      {
        this.offer = offer;
        console.log(this.offer);
      });
  }


}
