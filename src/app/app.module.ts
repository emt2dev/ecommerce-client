import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './modules/scope/full/navbar/navbar.component';
import { FooterComponent } from './modules/scope/full/footer/footer.component';
import { LandingComponent } from './components/landing/landing.component';
import { IntroComponent } from './modules/scope/landing/intro/intro.component';
import { GalleryComponent } from './modules/scope/landing/gallery/gallery.component';
import { ServicesComponent } from './modules/scope/landing/services/services.component';
import { PromotionalComponent } from './modules/scope/landing/promotional/promotional.component';
import { SeasonalComponent } from './modules/scope/landing/seasonal/seasonal.component';
import { HolidayComponent } from './modules/scope/landing/holiday/holiday.component';
import { EntryComponent } from './modules/forms/entry/entry.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AboutComponent } from './modules/scope/landing/about/about.component';
import { ShopComponent } from './components/shop/shop.component';
import { ProductComponent } from './components/product/product.component';
import { CartmodalComponent } from './modules/scope/full/cartmodal/cartmodal.component';
import { CartComponent } from './components/cart/cart.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactmodalComponent } from './modules/scope/full/contactmodal/contactmodal.component';
import { ProductsComponent } from './modules/scope/dashboard/admin/products/products.component';
import { OrdersComponent } from './modules/scope/dashboard/admin/orders/orders.component';
import { InventoryComponent } from './modules/scope/dashboard/admin/inventory/inventory.component';
import { PanelComponent } from './modules/scope/dashboard/admin/panel/panel.component';
import { ReportsComponent } from './modules/scope/dashboard/admin/reports/reports.component';
import { SalesComponent } from './modules/scope/dashboard/admin/sales/sales.component';
import { CrudproductsComponent } from './components/admin/crudproducts/crudproducts.component';
import { UserComponent } from './components/dashboard/user/user.component';
import { AdminComponent } from './components/dashboard/admin/admin.component';
import { ProductcardComponent } from './modules/scope/shop/productcard/productcard.component';
import { LeftpanelComponent } from './modules/scope/shop/leftpanel/leftpanel.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './services/auth/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    EntryComponent,
    UserComponent,
    AdminComponent,
    ReportsComponent,
    ProductcardComponent,
    LeftpanelComponent,
    SalesComponent,
    ProductsComponent,
    OrdersComponent,
    PanelComponent,
    CrudproductsComponent,
    InventoryComponent,
    HttpClientModule,
    ContactComponent,
    ContactmodalComponent,
    ShopComponent,
    CartComponent,
    ProductComponent,
    NotfoundComponent,
    CartmodalComponent,
    AppRoutingModule,
    AboutComponent,
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
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
