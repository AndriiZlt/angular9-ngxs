import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddItemAction } from '@store/todos.actions';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  newItemName: string;

  constructor(private store: Store) {}

  addItem(): void {
    this.store.dispatch(new AddItemAction(this.newItemName));
    this.newItemName = '';
  }
}
