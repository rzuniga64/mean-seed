import {Component, Input} from "@angular/core";
import {Todo} from "./todo.model";
import {TodoService} from "./todo.service";

@Component ({
    selector: 'my-todo',
    template: ` 
        <article class="'panel panel-default">
            <div class="panel-body">
                {{ todo.content }}
            </div>
            <footer class="panel-footer">
            <div class="author">
                {{ todo.username }}
            </div>
            <div class="config">
                <a  (click)="onEdit()">Edit</a>
                <a  (click)="onDelete()">Delete</a>
            </div>
            </footer>
        </article>    
    `,
    styles: [`
        .author {
            display: inline-block;
            font-style: italic;
            font-size: 12px;
            width: 80%;
        }
        .config {
            display: inline-block;
            text-align: right;
            font-size: 12px;
            width: 19%;
        }
    `]
})

export class TodoComponent {
    @Input() todo: Todo;  //message is now bindable from outside

    constructor(private _todoService: TodoService){}

    onEdit() {
        this._todoService.editTodo(this.todo);
    }

    onDelete() {
        this._todoService.deleteTodo(this.todo)
            .subscribe(
                data => console.log(data)
            );
    }
}