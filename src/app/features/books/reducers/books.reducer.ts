import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import * as actions from '../actions/book.actions';

export interface BookEntity {
  id: string;
  title: string;
  author: string;
  numberOfPages: number;
}

export interface BookListState extends EntityState<BookEntity> {

}

export const adapter = createEntityAdapter<BookEntity>();


// const initialState: BookListState = {
//   ids: ['1', '2'],
//   entities: {
//     1: { id: '1', title: 'XObject Oriented Ontology', author: 'AHarman', numberOfPages: 217 },
//     2: { id: '2', title: 'AMusic Theory for Computer Musicians', author: 'XAbrams', numberOfPages: 189 }
//   }
// };
const initialState = adapter.getInitialState();

const reducerFunction = createReducer(
  initialState,
  on(actions.bookCreated, (oldState, action) => adapter.addOne(action.payload, oldState)),
  on(actions.loadBookDataSucceeded, (oldState, action) => adapter.setAll(action.payload, oldState)),
  on(actions.bookCreatedFailure, (oldState, action) => adapter.removeOne(action.payload.id, oldState)),
  on(actions.bookCreatedSucess, (oldState, action) => {
    const tempState = adapter.removeOne(action.oldId, oldState);
    return adapter.addOne(action.payload, tempState);
  })
);

export function reducer(state: BookListState = initialState, action: Action): BookListState {
  return reducerFunction(state, action);
}



