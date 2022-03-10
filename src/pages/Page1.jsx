import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { InputTodo } from "../components/InputTodos";
import { IncompleteTodos } from "../components/IncompleteTodos";
import { CompleteTodos } from "../components/CompleteTodos";
import { useState } from "react";
import styled from "styled-components";
//import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import toast, { Toaster } from "react-hot-toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Title = styled.h1({
  fontSize: "2em",
  color: "blue",
});

const Wrapper = styled.section({
  padding: "1em",
  background: "gray",
});

const SimpleDatePicker = () => {
  const initialDate = new Date();
  const [startDate, setStartDate] = useState(initialDate);
  const handleChange = (date) => {
    setStartDate(date);
  };
  return <DatePicker selected={startDate} onChange={handleChange} />;
};

export function Page1() {
  const [inputTodo, setInputTodo] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  const onChangeInputTodo = (e) => {
    setInputTodo(e.target.value);
  };
  const onClickAdd = () => {
    if (inputTodo === "") return;
    const newTodos = [...incompleteTodos, inputTodo];
    setIncompleteTodos(newTodos);
    setInputTodo("");
    toast.success("追加しました！", {
      duration: 5000,
    });
  };
  const onClickDelete = (i) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(i, 1);
    setIncompleteTodos(newTodos);
    toast.success("削除しました！", {
      duration: 5000,
    });
  };
  const onClickComplete = (i) => {
    const newIncompleteTodos = [...incompleteTodos];
    const newCompleteTodos = [...completeTodos, incompleteTodos[i]];
    newIncompleteTodos.splice(i, 1);
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
    toast.success("完了ゾーンに移動しました！", {
      duration: 5000,
    });
  };
  const onClickReturn = (i) => {
    const newIncompleteTodos = [...incompleteTodos, completeTodos[i]];
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(i, 1);
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
    toast.success("未完了ゾーンに移動しました！", {
      duration: 5000,
    });
  };
  return (
    <div>
      <Wrapper>
        <Title>ToDoList App</Title>
      </Wrapper>
      <h1>TODOを管理しよう</h1>
      <Link to="/">Homeに戻る</Link>
      <DatePicker>SimpleDatePicker={SimpleDatePicker}</DatePicker>
      <InputTodo
        inputTodo={inputTodo}
        onChangeInputTodo={onChangeInputTodo}
        onClickAdd={onClickAdd}
      />

      <IncompleteTodos
        incompleteTodos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />

      <CompleteTodos
        completeTodos={completeTodos}
        onClickReturn={onClickReturn}
      />
    </div>
  );
}
