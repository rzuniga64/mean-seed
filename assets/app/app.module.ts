import {NgModule}                   from '@angular/core';
import {BrowserModule}              from '@angular/platform-browser';
import {FormsModule}                from '@angular/forms';
import {ReactiveFormsModule}        from '@angular/forms';
import {RouterModule}               from "@angular/router";
import {HttpModule}                 from "@angular/http";

import {AppComponent}               from './app.component';
import {HashLocationStrategy}       from "@angular/common";
import {LocationStrategy}           from "@angular/common";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
    ],
    bootstrap: [ AppComponent ],
    providers:     [
        [{ provide: LocationStrategy, useClass: HashLocationStrategy }]
    ]
})
export class AppModule { }
