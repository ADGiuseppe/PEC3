import TodoModel from './TodoModel';
import TodoView from './TodoView';

class TodoController {
  private model: TodoModel;
  private view: TodoView;

  constructor(model: TodoModel, view: TodoView) {
    this.model = model;
    this.view = view;
  }

  init(): void {
    const todoListElement = document.getElementById('todo-list');
    if (!todoListElement) {
      throw new Error('Todo list element not found');
    }

    this.view.render(this.model.getTodos());

    document.getElementById('add-todo')?.addEventListener('click', () => {
      const text = (document.getElementById('todo-text') as HTMLInputElement).value;
      this.model.addTodo(text);
      this.view.render(this.model.getTodos());
      (document.getElementById('todo-text') as HTMLInputElement).value = '';
    });

    // Add event listeners for remove buttons
    const removeButtons = todoListElement.querySelectorAll('.remove');
    removeButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const id = parseInt(button.parentElement?.getAttribute('data-id') ?? '', 10);
        this.model.removeTodo(id);
        this.view.render(this.model.getTodos());
      });
    });

    // Add event listeners for checkboxes
    const checkboxes = todoListElement.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', () => {
        const id = parseInt(checkbox.parentElement?.getAttribute('data-id') ?? '', 10);
        this.model.toggleCompleted(id);
        this.view.render(this.model.getTodos());
      });
    });


  }
}

export default TodoController;  