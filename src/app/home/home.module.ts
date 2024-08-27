import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from '@shared/form/form.component';
import { HeaderComponent } from '@shared/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TodosListComponent } from '@app/todos/components/todos-list/todos-list.component';
import { TodosModule } from '@serverAPI/todos/todos.module';

@NgModule({
  declarations: [FormComponent, HeaderComponent, TodosListComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [FormComponent, HeaderComponent],
})
export class HomeModule {}
