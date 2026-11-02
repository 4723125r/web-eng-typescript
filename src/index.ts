const todos = [
  { id: 1, title: "型を復習する", completed: true },
  { id: 2, title: "配列を学ぶ", completed: false },
  { id: 3, title: "レポートを書く", completed: false },
];

for (const todo of todos) {
  const status = todo.completed ? "完了" : "未完了";
  console.log(`${todo.id}: ${todo.title} [${status}]`);
}

import { fetchTodos } from "./todo-service.js";

const loaded = await fetchTodos();
console.log(loaded);