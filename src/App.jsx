import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Router } from "./router/Router";
// import { useState } from "react";
// import { InputTodo } from "./components/InputTodos";
// import { IncompleteTodos } from "./components/IncompleteTodos";
// import { CompleteTodos } from "./components/CompleteTodos";

export default function App() {
  console.log("App");
  // alert("App");
  return (
    <BrowserRouter>
      <DragDropContext>
        <Router />
      </DragDropContext>
    </BrowserRouter>
  );
}
