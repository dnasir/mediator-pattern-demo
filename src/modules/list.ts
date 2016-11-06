import { Mediator } from '../mediator';

/**
 * Todo list module
 */
class TodoList {
    constructor(private list: HTMLUListElement) {
        Mediator.subscribe('addNewTask', this, this.addNewTask);
    }

    /**
     * Adds a new task to the list.
     * @param task The task to add to the list.
     */
    addNewTask(task: string) {
        const li = document.createElement('li');
        li.innerText = task;
        this.list.appendChild(li);
    }
}


var todoInputs = document.querySelectorAll('[data-todo-list]');
for (let i = 0; i < todoInputs.length; i++) {
    new TodoList(todoInputs[i] as HTMLUListElement);
}