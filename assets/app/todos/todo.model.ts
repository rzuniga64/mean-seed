/**
 * JavaScript class which mirrors the database layout.
 */
export class Todo {
    username: string;
    content: string;
    isDone: Boolean;
    hasAttachment: Boolean;
    todoId: string;

    constructor (username: string, content: string, isDone?: Boolean, hasAttachment?: Boolean, todoId?: string) {
        this.username = username;
        this.content = content;
        this.isDone = isDone;
        this.hasAttachment = hasAttachment;
        this.todoId = todoId;
    }
}