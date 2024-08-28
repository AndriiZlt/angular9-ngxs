import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import {
  DeleteItemAction,
  ToggleItemAction,
} from '../../state/todos.actions';

import { TodoSelectors } from '@store/todos.selectors';
import { Observable } from 'rxjs';

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

  trackById(item: TodoModel): number {
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

  trackByFunction({ item }) {
    if (!item) return null;
    return item._id;
  }
}
