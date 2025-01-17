import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { TodoModel } from '@app/todos/todos-list.component';
import {
  AddItemAction,
  DeleteItemAction,
  ToggleItemAction,
} from './todos.actions';

export interface TodoStateModel {
  items: TodoModel[];
}

@State<TodoStateModel>({
  name: 'todo',
  defaults: {
    items: [],
  },
})
@Injectable()
export class TodoState {
  @Action(AddItemAction)
  addItem(ctx: StateContext<TodoStateModel>, action: AddItemAction) {
    const { name } = action;
    if (!name) {
      return;
    }

    const state = ctx.getState();

    const todoItem: TodoModel = {
      id: Math.floor(Math.random() * 1000),
      isDone: false,
      title: name,
    };

    ctx.setState({
      ...state,
      items: [...state.items, todoItem],
    });

    console.log('State:', ctx.getState());
  }

  @Action(ToggleItemAction)
  toggleItem(ctx: StateContext<TodoStateModel>, action: ToggleItemAction) {
    const state = ctx.getState();
    const newTodoItems = state.items.map((item) => {
      if (item.id === action.id) {
        return {
          ...item,
          isDone: !item.isDone,
        };
      }
      return item;
    });

    ctx.setState({
      items: [...newTodoItems],
    });
  }

  @Action(DeleteItemAction)
  deleteItem(ctx: StateContext<TodoStateModel>, action: DeleteItemAction) {
    console.log('DELETE', action.id);
    const state = ctx.getState();

    const newTodoItems = state.items.filter((item) => item.id != action.id);
    ctx.setState({
      items: [...newTodoItems],
    });
    console.log('State:', ctx.getState());
  }
}
