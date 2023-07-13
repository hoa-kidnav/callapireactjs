import HomePage from "./pages/HomePages/HomePage";
import NotFaundPage from "./pages/NotfaundPage/NotFaundPage";
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import ProductActionPage from "./pages/ProductActionPage/ProductActionPage";

const routes = [
  { path: "/", exact: true, main: <HomePage /> },
  { path: "/product-list", main: <ProductListPage /> },
  { path: "/product/add", main: <ProductActionPage /> },
  { path: "/product/:id/edit", main: <ProductActionPage /> },
  { path: "*", main: <NotFaundPage /> },
];

export default routes;
