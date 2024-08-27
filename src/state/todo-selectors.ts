import { Selector } from '@ngxs/store';
import { TodoModel } from '@app/todos/todos-list.component';
import { TodoState, TodoStateModel } from './todos.state';

export class TodoSelectors {
  @Selector([TodoState])
  static todoItems(state: TodoStateModel): TodoModel[] {
    console.log('selector :', state.items);
    return state.items;
  }
}
