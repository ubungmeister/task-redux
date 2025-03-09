export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  date: string;
}

export interface TodosState {
  todos: Todo[];
  filter: Filter;
  sort: Sort;
}

export enum Filter {
  All = 'all',
  Completed = 'completed',
  Active = 'active',
}
export enum Sort {
  Asc = 'asc',
  Desc = 'desc',
}
