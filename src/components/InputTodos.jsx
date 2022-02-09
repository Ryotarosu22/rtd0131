//入力コンポーネント
export const InputTodo = (props) => {
  //もらってきたpropsを各値に代入
  const { inputTodo, onChangeInputTodo, onClickAdd } = props;
  return (
    <div>
      <h2>入力エリア</h2>
      <input
        //薄灰色で何を入力すべきかを誘導
        placeHolder="TODOを入力"
        value={inputTodo}
        onChange={onChangeInputTodo}
      />
      <button onClick={onClickAdd}>追加</button>
    </div>
  );
};
