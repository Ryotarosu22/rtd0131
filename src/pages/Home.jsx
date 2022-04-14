import React from "react";
import { Link } from "react-router-dom";
import { memo, useCallback, useMemo } from "react";

export const Home = memo(() => {
  console.log("Home");
  //alert("Home");
  return (
    <div>
      <h1>TODOListアプリへようこそ</h1>
      <Link to="/page1">アプリで管理する</Link>
      <br />
    </div>
  );
});
