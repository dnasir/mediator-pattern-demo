import { Mediator } from '../mediator';

/**
 * Todo input module
 */
class TodoInput {
    private input: HTMLInputElement;

    constructor(private form: HTMLFormElement) {
        this.input = this.form.querySelector('input[name="todoInput"]') as HTMLInputElement;

        this.form.onsubmit = (e) => {
            e.preventDefault();

            this.add(this.input.value);
        };
    }

    /**
     * Adds a new task and resets the form.
     * @param task The task to add.
     */
    add(task: string) {
        Mediator.publish('addNewTask', task);

        this.form.reset();
    }
}

var todoInputs = document.querySelectorAll('[data-todo-input]');
for (let i = 0; i < todoInputs.length; i++) {
    new TodoInput(todoInputs[i] as HTMLFormElement);
}