import {Component, OnInit} from "@angular/core";
import {Todo} from "./todo.model";
import {TodoService} from "./todo.service";

@Component({
    selector: 'app-todo-list',
    template: `
        <section class="col-md-8 col-md-offset-2">
            <my-todo *ngFor="let todo of todos" [todo]="todo" (editClicked)="todo.content=$event"></my-todo>
        </section>
    `
})

export class TodoListComponent implements OnInit {

    todos: Todo[];

    constructor(private _todoService: TodoService) {}

    // We set up the map method to return an array of todos in the todos service.
    ngOnInit() {
        this._todoService.getTodos()
            .subscribe(
                (todos:Todo[]) => {
                    this.todos = todos;
                }
            );
    }
}