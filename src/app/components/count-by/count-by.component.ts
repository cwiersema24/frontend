import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { applicationStarted } from 'src/app/actions/app.actions';
import { AppState, selectCountBy } from 'src/app/reducers';
import { countBySet } from '../../actions/counter.actions';

@Component({
  selector: 'app-count-by',
  templateUrl: './count-by.component.html',
  styleUrls: ['./count-by.component.css']
})
export class CountByComponent implements OnInit {

  by$: Observable<number>;
  constructor(private store: Store<AppState>) {
    store.dispatch(applicationStarted());
  }

  ngOnInit(): void {
    this.by$ = this.store.pipe(select(selectCountBy));
  }

  countBySet(by: number): void {
    this.store.dispatch(countBySet({ by }));
  }
}
