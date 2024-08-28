import { Selector } from '@ngxs/store';
import { TodoModel } from '@app/todos/todos-list.component';
import { TodoState, TodoStateModel } from './todos.state';

export class TodoSelectors {
  @Selector([TodoState])
  static todoItems(state: TodoStateModel): TodoModel[] {
    return state.items;
  }
}
