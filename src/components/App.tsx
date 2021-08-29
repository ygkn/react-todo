import { useState, VFC } from "react";
import { Todo } from "../lib/todo";
import { NewTodo } from "./NewTodo";
import { TodoList } from "./TodoList";

export const App: VFC = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const addTodo = (title: string) => {
    const newTodo = {
      title,
      done: false,
      id: Math.random().toString(),
    };

    setTodoList((oldTodoList) => [...oldTodoList, newTodo]);
  };

  const handleChangeDone = (todoId: Todo["id"], done: boolean) => {
    setTodoList((oldTodoList) =>
      oldTodoList.map((todo) => {
        if (todo.id !== todoId) {
          return todo;
        }

        return { ...todo, done };
      })
    );
  };

  const handleRemove = (todoId: Todo["id"]) => {
    setTodoList((oldTodoList) =>
      oldTodoList.filter((todo) => todo.id !== todoId)
    );
  };

  return (
    <div className="App">
      <NewTodo onAdd={addTodo} />
      <TodoList
        todoList={todoList}
        onChangeDone={handleChangeDone}
        onRemove={handleRemove}
      />
    </div>
  );
};
