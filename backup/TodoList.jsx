const TodoList = ({ todos, del }) => {
  return (
    <>
      <h5>Todo List</h5>
      <ul>
        {todos.map((todo) => {
          return (
            <li index={todo.id}>
              {todo.text}
              <button onClick={() => del(todo.id)}>削除</button>
              <button onClick={() => comp(todo.id)}>完了</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TodoList;
