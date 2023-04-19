import React from "react";
import { Routes, Route } from "react-router-dom";

import Error from "./Error";
import Home from "./stocks/Home";
import News from "./stocks/News";

function CustomerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="news" element={<News />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default CustomerRoutes;
