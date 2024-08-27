
import { FormGroup } from '@angular/forms';
import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddItemAction } from '@store/todos.actions';

export interface TodoModel {
  id: number;
  isDone: boolean;
  title: string;
}
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {

  newItemName: string;

  public todoForm: FormGroup;
  public editTodo = false;

  constructor(private store: Store) {}

  addItem(): void {
    this.store.dispatch(new AddItemAction(this.newItemName));
    this.newItemName = '';
  }

}
