import { useCallback, useState } from "react";
import { memo } from "react";

const TodoForm = memo(({ add }) => {
  console.log("TodoForm");
  //alert("TodoForm");
  const [newTodo, setNewTodo] = useState("");
  const handleChange = (event) => {
    setNewTodo(event.target.value);
  };
  const addTodo = () => {
    if (newTodo === "") return;
    add(newTodo);
    setNewTodo("");
  };

  return (
    <>
      <h3>Todo List</h3>
      <input
        value={newTodo}
        onChange={handleChange}
        placeholder="ここに入力してください"
      />
      <button onClick={addTodo}>追加</button>
    </>
  );
});

export default TodoForm;
