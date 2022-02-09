import "./App.css";
import { useState } from "react";
import { InputTodo } from "./components/InputTodos";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

function App() {
  //inputTodo:stateの現在の値(状態変数)、setInputTodo:stateの現在の値を更新するための関数
  //useStateの()の中は状態の初期値
  //入力された文字を保持するため、初期値を「""」とする。
  const [inputTodo, setInputTodo] = useState("");

  //複数の未完了タスクをmapで回して表示するため初期値を空配列とした
  const [incompleteTodos, setIncompleteTodos] = useState([]);

  //複数の完了タスクをmapで回して表示するため初期値を空配列とした
  const [completeTodos, setCompleteTodos] = useState([]);

  //引数：e、e.target.valueで「setInputTodo」のvalueを取得し渡している
  const onChangeInputTodo = (e) => {
    setInputTodo(e.target.value);
  };

  //追加ボタンを押した時の挙動について
  const onClickAdd = () => {
    //空の入力の時の挙動：関数を抜ける
    if (inputTodo === "") return;
    //中身がある入力の場合
    //スプレッッド構文と値を結合している。
    const newTodos = [...incompleteTodos, inputTodo];
    //セットされたnewTodosを引数としてsetIncompleteTodos関数に渡す
    setIncompleteTodos(newTodos);
    //空の入力待ち状態に設定する
    setInputTodo("");
  };

  //削除ボタンが押された時の挙動について
  const onClickDelete = (i) => {
    //「newTodos」に「incompleteTodos」配列の中身を全て渡す
    const newTodos = [...incompleteTodos];
    //「splice」でArrayのメソッドで配列の要素を操作するメソッド
    //要素を取り除く、置き換える、追加する、ができる
    //「i」操作を開始する配列のインデックスを指定
    //[1]指定した数(1)を第1引数で指定した要素以降から取り除く
    //newTodos[i]以降の配列を1つ取り除く
    //newTodos[i,i+1,i+2...]のnewTodos[i+1]を取り除いている
    //削除ボタンを押した時に未完了のTODOエリアから削除を実行している
    newTodos.splice(i, 1);
    //残ったnewTodos配列を再度setIncompleteTodosに渡し最新の未完了リストとしている
    setIncompleteTodos(newTodos);
  };

  //完了ボタンが押された時の挙動について
  const onClickComplete = (i) => {
    //「newIncompleteTodos」に「incompleteTodos」配列の中身を全て渡す
    const newIncompleteTodos = [...incompleteTodos];
    //「newIncompleteTodos」に「completeTodos」配列の中身を全て渡し、incompleteTodos[i]を追加
    const newCompleteTodos = [...completeTodos, incompleteTodos[i]];
    //完了ボタンを押した時に未完了エリアに残らないようにしている
    newIncompleteTodos.splice(i, 1);
    //setCompleteTodosに入れる
    setCompleteTodos(newCompleteTodos);
    //setIncompleteTodosに戻す
    setIncompleteTodos(newIncompleteTodos);
  };
  //完了エリアから戻すボタンを押した時の挙動
  const onClickReturn = (i) => {
    //「newIncompleteTodos」に「incompleteTodos」配列の中身を全て渡し、completeTodos[i]を追加
    const newIncompleteTodos = [...incompleteTodos, completeTodos[i]];
    //「newIncompleteTodos」に「completeTodos」配列の中身を全て渡す
    const newCompleteTodos = [...completeTodos];

    //これで完了エリアから未完了に戻す時に完了エリアから削除している
    newCompleteTodos.splice(i, 1);
    //setIncompleteTodosに入れる
    setIncompleteTodos(newIncompleteTodos);
    //setCompleteTodosに戻す
    setCompleteTodos(newCompleteTodos);
  };
  //画面に返すもの
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
      }}
      className="App-header"
    >
      <h1>TODOリスト</h1>
      {/*jsx内でのコメントの書き方の1つ*/}
      {/*InputTodoコンポーネントを呼んでいる*/}
      <InputTodo //
        //下３行は{}内に記載された変数の値を渡している
        inputTodo={inputTodo}
        onChangeInputTodo={onChangeInputTodo}
        onClickAdd={onClickAdd}
      />
      {/*IncompleteTodosコンポーネントを呼んでいる*/}
      <IncompleteTodos
        incompleteTodos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      {/*CompleteTodosコンポーネントを呼んでいる*/}
      <CompleteTodos
        completeTodos={completeTodos}
        onClickReturn={onClickReturn}
      />
    </div>
  );
}

export default App;
