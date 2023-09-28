import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './modules/scope/full/navbar/navbar.component';
import { FooterComponent } from './modules/scope/full/footer/footer.component';
import { CartComponent } from './modules/scope/full/cart/cart.component';
import { LandingComponent } from './components/landing/landing.component';
import { IntroComponent } from './modules/scope/landing/intro/intro.component';
import { GalleryComponent } from './modules/scope/landing/gallery/gallery.component';
import { ServicesComponent } from './modules/scope/landing/services/services.component';
import { PromotionalComponent } from './modules/scope/landing/promotional/promotional.component';
import { SeasonalComponent } from './modules/scope/landing/seasonal/seasonal.component';
import { HolidayComponent } from './modules/scope/landing/holiday/holiday.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarComponent,
    FooterComponent,
    CartComponent,
    LandingComponent,
    IntroComponent,
    GalleryComponent,
    ServicesComponent,
    PromotionalComponent,
    SeasonalComponent,
    HolidayComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
