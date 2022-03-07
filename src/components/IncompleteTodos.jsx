//未完了コンポーネント
export const IncompleteTodos = (props) => {
  ////もらってきたpropsを各値に代入
  const { incompleteTodos, onClickComplete, onClickDelete } = props;
  return (
    <div
      style={{
        backgroundColor: "yellow",
        color: "black",
        marginTop: "20px",
        marginBottom: "20px",
        padding: "0px 20px",
      }}
    >
      <h2>未完了のTODO</h2>
      {/* 順不同リスト*/}
      <ul>
        {/*incompleteTodos配列にmapでtodoを添字indexで入れ直して*/}
        {incompleteTodos.map((todo, index) => {
          {
            /*return内をincompleteTodosで返す*/
          }
          return (
            <div key={todo}>
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>

              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
