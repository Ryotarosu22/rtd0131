import React from "react";
import { Link } from "react-router-dom";
import { memo, useCallback, useMemo } from "react";

export const Page404 = memo(() => {
  console.log("Page404");
  //alert("Page404");
  return (
    <div>
      <h1>ページが見つかりません</h1>
      <Link to="/">Homeに戻る</Link>
      <br />
    </div>
  );
});
