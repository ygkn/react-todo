import { FormEvent, useState, VFC } from "react";

type Props = {
  onAdd: (title: string) => void;
};

export const NewTodo: VFC<Props> = ({ onAdd }) => {
  const [title, setTitle] = useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (title === "") {
      return;
    }

    onAdd(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="NewTodo">
      <input
        type="text"
        name="title"
        autoComplete="off"
        onChange={(event) => setTitle(event.currentTarget.value)}
        value={title}
        className="NewTodo__inputTitle"
      />
      <button type="submit">追加</button>
    </form>
  );
};
