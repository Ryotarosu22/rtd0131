import toast, { Toaster } from "react-hot-toast";
import styled from "styled-components";
import { memo } from "react";

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
export const InputTodo = memo((props) => {
  console.log("InputTodo");
  //alert("InputTodo");
  //もらってきたpropsを各値に代入
  const { inputTodo, onChangeInputTodo, onClickAdd } = props;
  return (
    <div>
      <h2>ここで入力</h2>
      <input
        //薄灰色で何を入力すべきかを誘導
        placeholder="TODOを入力"
        value={inputTodo}
        onChange={onChangeInputTodo}
      />
      <button onClick={onClickAdd}>追加</button>

      <button onClick={notify}>気合だ</button>
      <Toaster />
    </div>
  );
});
