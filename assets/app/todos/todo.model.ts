export class Todo {
    username: string;
    content: string;
    isDone: Boolean;
    hasAttachment: Boolean;

    constructor (username: string, content: string, isDone?: Boolean, hasAttachment?: Boolean) {
        this.username = username;
        this.content = content;
        this.isDone = isDone;
        this.hasAttachment = hasAttachment;
    }
}