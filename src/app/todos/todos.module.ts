import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todos-list.component';

@NgModule({
  declarations: [TodoListComponent],
  imports: [CommonModule],
  exports: [TodoListComponent],
})
export class TodosModule {}
