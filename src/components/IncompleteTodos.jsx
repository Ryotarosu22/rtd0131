// import styled from "styled-components";
import { memo } from "react";
// import axios from "axios";
// 未完了コンポーネント

/* const div = styled.div({
  backgroundColor: "yellow",
  color: "black",
  marginTop: "20px",
  marginBottom: "20px",
  padding: "0px 20px",
}); */

/*
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json)); */

export const IncompleteTodos = memo((props) => {
  console.log("IncompleteTodos");
  // alert("IncompleteTodos");
  // もらってきたpropsを各値に代入
  const { incompleteTodos, onClickComplete, onClickDelete } = props;
  console.log(`配列の中身は${incompleteTodos[0]}です。`);

  return (
    <div>
      <h2>未完了のTODO</h2>
      {/* 順不同リスト */}
      <ul>
        {/* incompleteTodos配列にmapでtodoを添字indexで入れ直して */}

        {incompleteTodos.map((todo, index) => {
          {
            /* return内をincompleteTodosで返す */
          }
          return (
            <div>
              <li key={todo.toString()}>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>

              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
});

export default IncompleteTodos;
