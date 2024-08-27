import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsModule } from '@ngxs/store';

import { TodoState } from '@store/todos.state';
import { environment } from '@envs/environment.prod';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxsModule.forRoot([TodoState], {
      developmentMode: !environment.production,
    }),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    // NgxsStoragePluginModule.forRoot({ key: ['todo'] }),
  ],
})
export class StateModule {}
