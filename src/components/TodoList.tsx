import { VFC } from "react";
import { Todo } from "../lib/todo";
import { TodoListItem } from "./TodoListItem";

type Props = {
  todoList: Todo[];
  onChangeDone: (todoId: Todo["id"], done: boolean) => void;
  onRemove: (todoId: Todo["id"]) => void;
};

export const TodoList: VFC<Props> = ({ todoList, onChangeDone, onRemove }) => {
  return (
    <ul className="TodoList">
      {todoList.map((todo) => (
        <TodoListItem
          todo={todo}
          onChangeDone={onChangeDone}
          onRemove={onRemove}
          key={todo.id}
        />
      ))}
    </ul>
  );
};
