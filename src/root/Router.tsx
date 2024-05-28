import { Route, Routes } from "react-router-dom";

import paths from "constants/paths";
import Home from "pages/HomePage";
import NotFound from "pages/NotFoundPage";

const Router = () => {
  return (
    <Routes>
      <Route path={paths.home} element={<Home />} />
      <Route path={paths.any} element={<NotFound />} />
    </Routes>
  );
};

export default Router;
