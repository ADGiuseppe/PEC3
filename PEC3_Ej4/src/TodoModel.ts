import Todo from './Todo';

class TodoModel {
  private todos: Todo[] = [];
  private idCounter: number = 1;

  public addTodo(text: string): void {
    const todo: Todo = {
      id: this.idCounter,
      text,
      completed: false,
    };
    this.todos.push(todo);
    this.idCounter++;
  }

  public removeTodo(id: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  public toggleCompleted(id: number): void {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  }

  public getTodos(): Todo[] {
    return this.todos;
  }
}

export default TodoModel;  