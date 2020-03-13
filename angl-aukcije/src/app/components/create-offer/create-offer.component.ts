import { Component, OnInit } from '@angular/core';
import { Offer } from '../../models/Offer';
import { OfferService } from 'src/app/services/offers/offer.service';

@Component({
  selector: 'app-create-offer',
  templateUrl: './create-offer.component.html',
  styleUrls: ['./create-offer.component.css']
})
export class CreateOfferComponent implements OnInit {
  offer: Offer = new Offer();
  constructor(private _offerService: OfferService) {
    
  }

  ngOnInit(): void {
  }

  submitForm(){
    this._offerService.createOffer(this.offer);
  }
}