import { Routes, Route } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu/menu";

import HomePage from "./pages/HomePages/HomePage";
import NotFaundPage from "./pages/NotfaundPage/NotFaundPage";
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import ProductActionPage from "./pages/ProductActionPage/ProductActionPage";
// function showContextMenus(routes) {
//   let result = null;
//   if (routes.length > 0) {
//     result = routes.map((route, index) => {
//       return (
//         <Routes key={index}>
//           <Route exat={route.exact} path={route.path} element={route.main} />
//         </Routes>
//       );
//     });
//   }

//   return result;
// }
function App() {
  return (
    <>
      <Menu />
      <div className="container mb-10 ">
        {/* <div className="row">{showContextMenus(routes)}</div> */}

        <div className="row">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product-list" element={<ProductListPage />} />
            <Route path="/product/add" element={<ProductActionPage />} />
            <Route path="/product/:id/edit" element={<ProductActionPage />} />
            <Route path="*" element={<NotFaundPage />} />
          </Routes>{" "}
        </div>
      </div>
    </>
  );
}

export default App;
