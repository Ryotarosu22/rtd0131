import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>TODOListアプリへようこそ</h1>
      <Link to="/page1">アプリで管理する</Link>
      <br />
    </div>
  );
};
