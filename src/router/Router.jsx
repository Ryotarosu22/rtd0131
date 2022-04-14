import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Page1 } from "../pages/Page1";
import { Page404 } from "../pages/Page404";
import { memo, useCallback, useMemo } from "react";
//import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export const Router = memo(() => {
  console.log("Router");
  //alert("Router");
  return (
    <Routes>
      {/*exactはパスの完全一致を求める */}
      <Route exact path="" element={<Home />} />
      <Route exact path="page1" element={<Page1 />} />
      <Route exact path="*" element={<Page404 />} />
    </Routes>
  );
});
