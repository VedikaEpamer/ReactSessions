import type { Todo } from "./todos";

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, title: string) => void;
};

const TodoItem = ({ todo, onToggle, onDelete, onEdit }: TodoItemProps) => {
  return (
    <div
      style={{
        marginBottom: "10px",
        border: "1px solid #ccc",
        display: "flex",
        justifyContent: "space-between",
        // justifyItems: "",
      }}
    >
      <div style={{ padding: "5px" }}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />

        <input
          type="text"
          value={todo.title}
          onChange={(e) => onEdit(todo.id, e.target.value)}
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
            marginLeft: "8px",
          }}
        />

        <span style={{ marginLeft: "8px" }}>({todo.priority})</span>

        <button onClick={() => onDelete(todo.id)} style={{ marginLeft: "8px" }}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
