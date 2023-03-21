import React, { FC, Suspense } from "react";
import { Navigate, Routes, Route } from "react-router-dom";

// ======= private route ======= //
const PrivateRoute: FC<{ element: any }> = ({ element: Element }) => {
  return true ? (
    <Suspense fallback={<div />}>
      <div><Element /></div>
    </Suspense>
  ) : (
    <Navigate to={""} />
  );
};

// ======= public route ======= //
const PublicRoute: FC<{ element: any }> = ({ element: Element }) => (
  <Suspense fallback={<div />}>
    <Element />
  </Suspense>
);

// ======= pages ======= //
const MainPage = React.lazy(() => import("app/main"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={"/app/*"} element={<PublicRoute element={MainPage} />} />

      {/* DEFAULT */}
      <Route path='*' element={<Navigate to="/app" />} />
    </Routes>
  );
};

export default AppRoutes;
