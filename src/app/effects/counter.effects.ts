
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { filter, map, tap } from 'rxjs/operators';
import { countBySet } from '../actions/counter.actions';
import { applicationStarted } from '../actions/app.actions';

@Injectable()
export class CounterEffects {

  readBy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(applicationStarted),
      map(() => localStorage.getItem('by')),
      filter(by => by !== null),
      map(by => parseInt(by, 10)),
      filter(by => by === 1 || by === 3 || by === 5),
      map(by => countBySet({ by }))
    ), { dispatch: true });


  saveBy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(countBySet),
      map(action => action.by),
      map(by => by.toString()),
      tap(by => localStorage.setItem('by', by))
    ), { dispatch: false });

  constructor(private actions$: Actions) { }
}
