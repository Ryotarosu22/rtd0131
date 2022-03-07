import "./App.css";
import { Router } from "./router/Router";
import { BrowserRouter } from "react-router-dom";
//import { useState } from "react";
//import { InputTodo } from "./components/InputTodos";
//import { IncompleteTodos } from "./components/IncompleteTodos";
//import { CompleteTodos } from "./components/CompleteTodos";

export default function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}
