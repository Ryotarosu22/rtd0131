import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Home";
import { Page1 } from "../Page1";
import { Page404 } from "../Page404";

export const Router = () => {
  return (
    <Routes>
      {/*exactはパスの完全一致を求める */}
      <Route exact path="" element={<Home />} />
      <Route exact path="page1" element={<Page1 />} />
      <Route exact path="*" element={<Page404 />} />
    </Routes>
  );
};
