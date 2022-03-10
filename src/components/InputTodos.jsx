import toast, { Toaster } from "react-hot-toast";
import styled from "styled-components";

const notify = () =>
  toast.success("ToDoを熟していきましょう！", {
    duration: 5000,
  });

const div = styled.div({
  backgroundColor: "gray",
  color: "black",
  marginTop: "20px",
  marginBottom: "20px",
  padding: "0px 20px",
});

//入力コンポーネント
export const InputTodo = (props) => {
  //もらってきたpropsを各値に代入
  const { inputTodo, onChangeInputTodo, onClickAdd } = props;
  return (
    <div>
      <h2>ここで入力</h2>
      <input
        //薄灰色で何を入力すべきかを誘導
        placeHolder="TODOを入力"
        value={inputTodo}
        onChange={onChangeInputTodo}
      />
      <button onClick={onClickAdd}>追加</button>

      <button onClick={notify}>気合だ</button>
      <Toaster />
    </div>
  );
};
