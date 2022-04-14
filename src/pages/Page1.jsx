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
import { memo, useCallback, useMemo } from "react";
import axios from "axios";

const Title = styled.h1({
  fontSize: "2em",
  color: "blue",
});

const Wrapper = styled.section({
  padding: "1em",
  background: "gray",
});

const SimpleDatePicker = memo(() => {
  console.log("SimpleDatePicker");
  //alert("SimpleDatePicker");
  const initialDate = new Date();
  const [startDate, setStartDate] = useState(initialDate);
  const handleChange = (date) => {
    setStartDate(date);
  };
  return <DatePicker selected={startDate} onChange={handleChange} />;
});

export const Page1 = memo(() => {
  console.log("Page1");
  //alert("Page1");
  const [inputTodo, setInputTodo] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeInputTodo = useCallback((e) => {
    setInputTodo(e.target.value);
  }, []);
  const onClickAdd = useCallback(() => {
    if (inputTodo === "") return;
    const newTodos = [...incompleteTodos, inputTodo];
    setIncompleteTodos(newTodos);
    setInputTodo("");
    toast.success("追加しました！", {
      duration: 5000,
    });
  }, [inputTodo]);
  const onClickDelete = useCallback(
    (i) => {
      const newTodos = [...incompleteTodos];
      newTodos.splice(i, 1);
      setIncompleteTodos(newTodos);
      toast.success("削除しました！", {
        duration: 5000,
      });
    },
    [incompleteTodos]
  );
  const onClickComplete = useCallback(
    (i) => {
      const newIncompleteTodos = [...incompleteTodos];
      const newCompleteTodos = [...completeTodos, incompleteTodos[i]];
      newIncompleteTodos.splice(i, 1);
      setCompleteTodos(newCompleteTodos);
      setIncompleteTodos(newIncompleteTodos);
      toast.success("完了ゾーンに移動しました！", {
        duration: 5000,
      });
    },
    [incompleteTodos, completeTodos]
  );

  const onClickReturn = useCallback(
    (i) => {
      const newIncompleteTodos = [...incompleteTodos, completeTodos[i]];
      const newCompleteTodos = [...completeTodos];
      newCompleteTodos.splice(i, 1);
      setIncompleteTodos(newIncompleteTodos);
      setCompleteTodos(newCompleteTodos);
      toast.success("未完了ゾーンに移動しました！", {
        duration: 5000,
      });
    },
    [incompleteTodos, completeTodos]
  );
  return (
    <div>
      <Wrapper>
        <Title>ToDoList App</Title>
      </Wrapper>
      <h1>TODOを管理しよう</h1>
      <Link to="/">Homeに戻る</Link>
      <DatePicker SimpleDatePicker={SimpleDatePicker} />
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
});
