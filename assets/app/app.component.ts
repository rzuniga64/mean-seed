import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <div class="container">
      
        <h2>Node MondoDB example</h2>
        <p>POST to Mongo database example</p>
        <div class="row">
            <app-todo-input></app-todo-input>
        </div><!-- row-->
    </div> <!--container-->
    `
})
export class AppComponent { }
