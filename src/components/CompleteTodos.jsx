//完了コンポーネント
export const CompleteTodos = (props) => {
  //もらってきたpropsを各値に代入
  const { completeTodos, onClickReturn } = props;
  return (
    <div
      style={{
        backgroundColor: "blue",
        marginTop: "18px",
        marginBottom: "50px",
        padding: "0px 18px",
      }}
    >
      <h2>完了のTODO</h2>
      <ul>
        {completeTodos.map((todo, index) => {
          return (
            <div key={todo}>
              <li>{todo}</li>
              <button onClick={() => onClickReturn(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
