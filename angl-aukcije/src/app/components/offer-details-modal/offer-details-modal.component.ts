import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-offer-details-modal',
  templateUrl: './offer-details-modal.component.html',
  styleUrls: ['./offer-details-modal.component.css']
})
export class OfferDetailsModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<OfferDetailsModalComponent>) {}

    ngOnInit() {
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
