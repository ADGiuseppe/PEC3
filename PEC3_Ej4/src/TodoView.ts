import Todo from './Todo';

interface TodoView {
  render(todos: Todo[]): void;
  renderTodo(todo: Todo): string;
}

class TodoViewImpl implements TodoView {
  private todoListElement: HTMLElement;

  constructor(todoListElement: HTMLElement) {
    this.todoListElement = todoListElement;
  }

  render(todos: Todo[]): void {
    const todoListHtml = todos.map((todo) => this.renderTodo(todo)).join('');
    this.todoListElement.innerHTML = todoListHtml;
  }

  renderTodo(todo: Todo): string {
    return `
        <li data-id="${todo.id}">
          <input type="checkbox" ${todo.completed ? 'checked' : ''}>
          <span>${todo.text}</span>
          <button class="remove">Remove</button>
        </li>
      `;
  }
}

export default TodoViewImpl;
