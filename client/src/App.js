import "./App.css";
import Index from "./pages/index";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layouts";
import Login from "./pages/login";
import { UserContextProvider } from "./UserContext";
import Register from "./pages/register";
import CreatePost from "./pages/CreatePost";
function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />{" "}
          <Route path="/createpost" element={<CreatePost />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
