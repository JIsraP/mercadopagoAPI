import { Routes, Route } from "react-router-dom";
import { Product } from "../pages";

export const AppRoutes = () => {

  const renderRoutes = () => (
    <>
      <Route path="/product" element={<Product />} />
      <Route path="/*" element={<Product />} />
    </>
  );

  return (
    <Routes>
      {renderRoutes()}
    </Routes>
  );
};