import styled from "styled-components";
//完了コンポーネント

const div = styled.div({
  backgroundColor: "blue",
  marginTop: "18px",
  marginBottom: "50px",
  padding: "0px 18px",
});

export const CompleteTodos = (props) => {
  //もらってきたpropsを各値に代入
  const { completeTodos, onClickReturn } = props;
  return (
    <div>
      <h2>完了のTODO</h2>
      <ul>
        {completeTodos.map((todo, index) => {
          return (
            <div index={todo}>
              <li>{todo}</li>
              <button onClick={() => onClickReturn(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
