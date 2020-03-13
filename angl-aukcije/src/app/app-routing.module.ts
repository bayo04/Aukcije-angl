import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfferComponent } from './components/offer/offer.component'
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CreateOfferComponent } from './components/create-offer/create-offer.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  { path: 'offer', component: OfferComponent },
  { path: 'offer/create', component: CreateOfferComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [OfferComponent, HeaderComponent, NavbarComponent];