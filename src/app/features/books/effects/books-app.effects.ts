import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import * as appActions from '../../../actions/app.actions';
import * as bookActions from '../actions/book.actions';

@Injectable()
export class BookAppEffects {
  onApplicationStartedLoadBooks$ = createEffect(() =>
    this.action$.pipe(
      ofType(appActions.applicationStarted),
      map(() => bookActions.loadBookData())
    ));

  constructor(private action$: Actions) { }
}


