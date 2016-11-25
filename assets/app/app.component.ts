/**
 * The Angular 2 root component file.
 */
import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <div class="container">
      
        <h2>MEAN Todo Project</h2>
        <div class="row spacing">
            <app-todo-input></app-todo-input>
        </div><!-- row-->
        <div class="row spacing">
            <app-todo-list></app-todo-list>
        </div><!-- row-->
    </div> <!--container-->
    `,
    styles: [`
        h2 {
            text-align: center;
        }
    `]
})
export class AppComponent { }
