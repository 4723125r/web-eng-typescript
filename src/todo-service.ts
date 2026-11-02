import type { Todo } from "./types.js";

const todos: Todo[] = [
  { id: 1, title: "型を定義する", completed: true },
  { id: 2, title: "関数を作る", completed: false },
];

export async function fetchTodos(): Promise<Todo[]> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return todos;
}

export async function findTodo(
  id: number
): Promise<Todo | undefined> {
  const currentTodos = await fetchTodos();
  return currentTodos.find((todo) => todo.id === id);
}

import { fetchTodos, findTodo } from "./todo-service.js";

const found = await findTodo(2);

if (found === undefined) {
  console.log("TODOが見つからない");
} else {
  console.log(found.title);
}

export async function toggleTodo(id: number): Promise<Todo[]> {
  const currentTodos = await fetchTodos();
  return currentTodos.map((todo) =>
    todo.id === id
      ? { ...todo, completed: !todo.completed }
      : todo
  );
}
