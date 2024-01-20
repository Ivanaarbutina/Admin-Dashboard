import Home from "./pages/home/home";
import List from "./pages/list/list";
import Login from "./pages/login/login";
import New from "./pages/new/new";
import Single from "./pages/single/single";
import "./app.scss";
import "./style/dark.scss";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import { ReactNode, useContext, useState } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";
import Products from "./pages/products/products";
import ProductModal from "./pages/products/productModal";
import { ProductType } from "./pages/products/productData";
// import { AuthContext } from "./context/authContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);
  const [productModal, setProductModal] = useState({
    isOpen: false,
    product: null,
  });
  const RequireAuth = ({ children }: { children: ReactNode }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  const closeProductModal = () => {
    setProductModal({ isOpen: false, product: null });
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route
              index
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route path="users">
              <Route
                index
                element={
                  <RequireAuth>
                    <List />
                  </RequireAuth>
                }
              />
              <Route
                path=":userId"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    {" "}
                    <New inputs={userInputs} title="Add New User" />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="products">
              <Route
                index
                element={
                  <RequireAuth>
                    <Products />
                  </RequireAuth>
                }
              />
              <Route
                path=":productId"
                element={
                  <RequireAuth>
                    <ProductModal
                      isOpen={true}
                      closeModal={closeProductModal}
                      product={productModal.product}
                    />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <New inputs={productInputs} title="Add New Product" />
                  </RequireAuth>
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
