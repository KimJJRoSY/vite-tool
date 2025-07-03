export interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

export type TodoList = Todo[];

// config erasable 어쩌구 끔
export enum StorageKey {
  TODOS = "todos",
}
