import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/ui/header/header.component';
import { FooterComponent } from './components/ui/footer/footer.component';
import { MassageServiceComponent } from './components/massage-service/massage-service.component';
import { MassageDetailsComponent } from './components/massage-details/massage-details.component';
import { BaseComponent } from './components/base/base.component';
import { DialogBoxComponent } from './components/ui/dialog-box/dialog-box.component';
import {RouterModule, Routes} from "@angular/router";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CareComponent } from './components/care/care.component';
import {MatCardModule} from '@angular/material/card';
import { PriceComponent } from './components/price/price.component';

const routes: Routes = [
  {path: '', component: BaseComponent},
  {path: 'massage-service', component: MassageServiceComponent},
  {path: 'massage-details/:id', component: MassageDetailsComponent},
  {path: 'care', component: CareComponent},
  {path: 'price', component: PriceComponent},
  {path: 'contacts', component: ContactsComponent},

  {path: "**", redirectTo: "", component: BaseComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MassageServiceComponent,
    MassageDetailsComponent,
    BaseComponent,
    DialogBoxComponent,
    ContactsComponent,
    CareComponent,
    PriceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
