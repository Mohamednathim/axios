import "./App.css";
import GetUsers from "./components/GetUsers";
import AddUsers from "./components/AddUsers";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<GetUsers />}></Route>
        <Route path="/AddUser/:id" element={<AddUsers />}></Route>
      </Routes>
    </>
  );
}

export default App;
