import { ChangeEvent, MouseEvent, VFC } from "react";
import { Todo } from "../lib/todo";

type Props = {
  todo: Todo;
  onChangeDone: (todoId: Todo["id"], done: boolean) => void;
  onRemove: (todoId: Todo["id"]) => void;
};

export const TodoListItem: VFC<Props> = ({ todo, onChangeDone, onRemove }) => {
  const handleChangeTodo = (event: ChangeEvent<HTMLInputElement>) => {
    const changedTodoId = event.currentTarget.value;
    const checked = event.currentTarget.checked;

    onChangeDone(changedTodoId, checked);
  };

  const handleClickRemove = (event: MouseEvent<HTMLButtonElement>) => {
    if (event.currentTarget.dataset.id === undefined) {
      return;
    }
    onRemove(event.currentTarget.dataset.id);
  };

  return (
    <li className="TodoListItem">
      <label
        className={`TodoListItem__label ${
          todo.done ? "TodoListItem__label--done" : ""
        }`}
      >
        <input
          type="checkbox"
          checked={todo.done}
          value={todo.id}
          onChange={handleChangeTodo}
        />
        {todo.title}
      </label>
      <button data-id={todo.id} onClick={handleClickRemove}>
        削除
      </button>
    </li>
  );
};
