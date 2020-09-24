import { createAction } from '@ngrx/store';

export const sortByTitle = createAction(
  '[book sort] sort by title'
);

export const sortByAuthor = createAction(
  '[book sort] sort by author'
);
