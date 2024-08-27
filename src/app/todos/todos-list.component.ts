import { Component } from '@angular/core';
import { Select, StateContext, Store } from '@ngxs/store';
import {
  AddItemAction,
  DeleteItemAction,
  ToggleItemAction,
} from '../../state/todos.actions';

import { TodoSelectors } from '@store/todo-selectors';
import { Observable } from 'rxjs';
import { UtilsService } from '@app/shared/services/utils.service';

export interface TodoModel {
  id: number;
  isDone: boolean;
  title: string;
}
@Component({
  selector: 'app-todo-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss'],
})
export class TodoListComponent {
  @Select(TodoSelectors.todoItems) todoItems$!: Observable<TodoModel[]>;

  constructor(private store: Store) {
  }

  trackById(index: number, item: TodoModel): number {
    return item.id;
  }

  onEdit(todo: TodoModel): void {
    this.store.dispatch(new ToggleItemAction(todo.id));
  }

  onDelete(id: number): void {
    const confirmation = confirm('Are you sure?');
    if (confirmation) {
      this.store.dispatch(new DeleteItemAction(id));
    }
  }

  // onCompletedTodo(todo: TodoModel): void {
  //   const todoObj: TodoModel = {
  //     title: todo.title,
  //     completed: true,
  //     _id: todo._id,
  //   };
  //   this.store.dispatch(new UpdateTodo(todo._id, todoObj));
  // }

  trackByFunction({ item }) {
    if (!item) return null;
    return item._id;
  }
}
