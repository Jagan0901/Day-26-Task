import './App.css';
import { Users } from './Components/Users';
import { Routes,Route } from 'react-router-dom';
import { UsersInfo } from './Pages/UsersInfo';
import { UsersEdit } from './Pages/UsersEdit';
import { AddUser } from './Pages/AddUser';

function App() {
  return (
    <div className="App">
      
      <Routes>

  <Route path="/" element={<Users/>}/>
  <Route path="/add" element={<AddUser/>}/>
  <Route path="/:userId" element={<UsersInfo />} />
  <Route path="/edit/:userId" element={<UsersEdit />} />

</Routes>
    </div>
  );
}

export default App;
