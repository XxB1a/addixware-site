import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';

import {Routes, RouterModule} from '@angular/router';

import {LandingComponent} from './landing/landing.component';
import {SponsoringComponent} from './sponsoring/sponsoring.component';
import {JobsComponent} from './jobs/jobs.component';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: LandingComponent},
    {path: 'sponsoring', component: SponsoringComponent},
    {path: 'jobs', component: JobsComponent},
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes, {
            useHash: true
        })
    ],
    exports: [],
})
export class AppRoutingModule {
}
