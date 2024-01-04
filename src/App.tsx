import Home from "./pages/home/home";
import List from "./pages/list/list";
import Login from "./pages/login/login";
import New from "./pages/new/new";
import Single from "./pages/single/single";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="users">
                <Route index element={<List />} />
                <Route path=":userId" element={<Single />} />
                <Route path="new" element={<New />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
      <Home />
      <List />
      <Login />
      <New />
      <Single />
    </>
  );
}

export default App;
