import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { InputTodo } from "./components/InputTodos";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";
import { useState } from "react";
import styled from "styled-components";

const Title = styled.h1({
  fontSize: "2em",
  color: "blue",
});

const Wrapper = styled.section({
  padding: "1em",
  background: "gray",
});

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
  };
  const onClickDelete = (i) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(i, 1);
    setIncompleteTodos(newTodos);
  };
  const onClickComplete = (i) => {
    const newIncompleteTodos = [...incompleteTodos];
    const newCompleteTodos = [...completeTodos, incompleteTodos[i]];
    newIncompleteTodos.splice(i, 1);
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };
  const onClickReturn = (i) => {
    const newIncompleteTodos = [...incompleteTodos, completeTodos[i]];
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(i, 1);
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };
  return (
    <div>
      <Wrapper>
        <Title>ToDoList App</Title>
      </Wrapper>
      <h1>TODOを管理しよう</h1>
      <Link to="/">Home</Link>
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
