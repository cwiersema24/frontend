import { createEffect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class DemoEffects {

  logIt$ = createEffect(() => this.actions$.pipe(
    map(a => a.type),
    tap(t => console.log(`Just got an action of type ${t}`))

  ), { dispatch: false });
  constructor(private actions$: Actions) { }
}
