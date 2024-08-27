import { Selector } from '@ngxs/store';
import { TodoModel } from '@app/shared/form/form.component';
import { TodoState, TodoStateModel } from './todos.state';

export class TodoSelectors {
  @Selector([TodoState])
  static todoItems(state: TodoStateModel): TodoModel[] {
    return state.items;
  }
}
