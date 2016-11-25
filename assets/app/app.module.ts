/**
 * File which specfies all application dependencies and application.
 */
import {NgModule}                   from '@angular/core';
import {BrowserModule}              from '@angular/platform-browser';
import {FormsModule}                from '@angular/forms';
import {ReactiveFormsModule}        from '@angular/forms';
import {RouterModule}               from "@angular/router";
import {HttpModule}                 from "@angular/http";

import {AppComponent}               from "./app.component";
import {TodoComponent}              from "./todos/todo.component";
import {TodoInputComponent}         from "./todos/todos-input.component";
import {TodoListComponent}          from "./todos/todo-list.component";
import {HashLocationStrategy}       from "@angular/common";
import {LocationStrategy}           from "@angular/common";

import {TodoService}                from "./todos/todo.service";

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
        TodoComponent,
        TodoInputComponent,
        TodoListComponent
    ],
    bootstrap: [ AppComponent ],
    providers:     [
        TodoService,
        [{ provide: LocationStrategy, useClass: HashLocationStrategy }]
    ]
})
export class AppModule { }
