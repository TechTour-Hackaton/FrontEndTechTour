import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/home/header/header.component';
import { MainComponent } from './modules/home/main/main.component';
import { ListDestinationsComponent } from './modules/destination/list-destinations/list-destinations.component';
import { InfoDestinationComponent } from './modules/destination/info-destination/info-destination.component';
import { LoginComponent } from './modules/authentication/login/login.component';
import { RegisterComponent } from './modules/authentication/register/register.component';
import { OrderComponent } from './modules/shopping-cart/order/order.component';
import { ListOrderComponent } from './modules/shopping-cart/list-order/list-order.component';
import { InfoUserComponent } from './modules/user/info-user/info-user.component';
import { PlanDetailsComponent } from './modules/package/plan-details/plan-details.component';
import { ListPlansComponent } from './modules/package/list-plans/list-plans.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ListDestinationsComponent,
    InfoDestinationComponent,
    LoginComponent,
    RegisterComponent,
    OrderComponent,
    ListOrderComponent,
    InfoUserComponent,
    PlanDetailsComponent,
    ListPlansComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
