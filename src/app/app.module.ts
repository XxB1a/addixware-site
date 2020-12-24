import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app.routing';

import {AppComponent} from './app.component';
import {LandingComponent} from './landing/landing.component';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {FooterComponent} from './shared/footer/footer.component';
import {CardComponent} from './shared/card/card.component';
import {ContactComponent} from './landing/contact/contact.component';
import {PhiloComponent} from './landing/philo/philo.component';
import {FormComponent} from './landing/contact/form/form.component';
import {ServicesComponent} from './landing/services/services.component';
import {SponsoringComponent} from './sponsoring/sponsoring.component';
import {JobsComponent} from './jobs/jobs.component';
import {HttpClientModule} from '@angular/common/http';
import { OfferCardComponent } from './shared/offer-card/offer-card.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
    declarations: [
        AppComponent,
        LandingComponent,
        NavbarComponent,
        FooterComponent,
        CardComponent,
        ContactComponent,
        PhiloComponent,
        FormComponent,
        ServicesComponent,
        SponsoringComponent,
        JobsComponent,
        OfferCardComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        AppRoutingModule,
        NgxPaginationModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
