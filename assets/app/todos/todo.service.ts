import {Todo} from "./todo.model";
import {Http, Headers, Response} from "@angular/http";
import {Injectable, EventEmitter} from "@angular/core";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

@Injectable()
export class TodoService {
    todos: Todo[] = [];
    todoIsEdit = new EventEmitter<Todo>();

    constructor(private _http: Http) {}

    // get back an array of todos and we want to extract it in a way that it fits the t_odo object we are using on
    // the frontend. We get an array of custom type todos that match the model that we can directly
    // handle with a ngFor loop.
    getTodos() {
        return this._http.get('http://localhost:3000/api/todo')
            .map((response:Response) => {
                const data = response.json().obj;
                let objs: Todo[] = [];
                for (let i=0; i < data.length; i++) {
                    let todo = new Todo(data[i].username, data[i].content, data[i].isDone, data[i].hasAttachment, data[i]._id );
                    objs.push(todo);
                }
                return objs;
            })
    }

    addTodo(todo:Todo) {
        const body = JSON.stringify(todo);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this._http.post('http://localhost:3000/api/todo', body, {headers: headers})
            .map((response:Response) => {
                const data = response.json().obj;
                const todo = new Todo(data.username, data.content, data.isDone, data.hasAttachment, data._id );
                this.todos.push(todo);
                return todo;
            })
    }

    updateTodo(todo:Todo) {
        const body = JSON.stringify(todo);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this._http.patch('http://localhost:3000/api/todo/' + todo.todoId, body, {headers: headers})
            .map((response:Response) => response.json());
    }

    editTodo(todo: Todo) {
        this.todoIsEdit.emit(todo);
    }

    deleteTodo(todo: Todo) {
        this.todos.splice(this.todos.indexOf(todo),1);
        return this._http.delete('http://localhost:3000/api/todo/' + todo.todoId)
            .map((response:Response) => response.json());
    }
}