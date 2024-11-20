import TodoModel from './TodoModel';
import TodoViewImpl from './TodoView';
import TodoController from './TodoController';

const model = new TodoModel();
const view = new TodoViewImpl(document.getElementById('todo-list') as HTMLElement);
const controller = new TodoController(model, view);

controller.init();