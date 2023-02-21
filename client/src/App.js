import "./App.css";
import Index from "./pages/index";
import { Route, Routes } from "react-router-dom";
import Layouts from "./Layouts";
import Login from "./pages/login";
import Register from "./pages/register";
function App() {
  return (
    <Routes>
      <Route element={<Layouts />}>
        <Route index element={<Index />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
