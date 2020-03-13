import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OfferComponent } from './components/offer/offer.component';
import { OfferService } from './services/offers/offer.service';
import { UserService } from './services/users/user.service';
import { BidService } from './services/bids/bid.service';
import { HttpClientModule } from '@angular/common/http';
import { AppConfig } from './config/config';
import { CreateOfferComponent } from './components/create-offer/create-offer.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    OfferComponent,
    CreateOfferComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    OfferService,
    AppConfig,
    UserService,
    BidService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
