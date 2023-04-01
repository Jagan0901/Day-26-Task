import "./App.css";
import { Users } from "./Pages/Users";
import { Routes, Route } from "react-router-dom";
import { UsersInfo } from "./Pages/UsersInfo";
import { UsersEdit } from "./Pages/UsersEdit";
import { AddUser } from "./Pages/AddUser";
import {Home} from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/add" element={<AddUser />} />
        <Route path="/users/:userId" element={<UsersInfo />} />
        <Route path="/users/edit/:userId" element={<UsersEdit />} />
      </Routes>
    </div>
  );
}

export default App;
