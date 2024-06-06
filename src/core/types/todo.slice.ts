export interface TodoSlice {
  todos: Todo[];
}

export interface Todo {
  title: string;
  completed: boolean;
}
