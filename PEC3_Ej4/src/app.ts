import TodoModel from './todo.model';
import TodoViewImpl from './todo.service';
import TodoController from './todo.controller';

const model = new TodoModel();
const view = new TodoViewImpl(document.getElementById('todo-list') as HTMLElement);
const controller = new TodoController(model, view);

controller.init();