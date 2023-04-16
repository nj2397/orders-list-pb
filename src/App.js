import { Route, Routes } from "react-router-dom";
import PopulateTable from "./components/TableComponents/PopulateTable.js"
import Login from "./components/Login.js"

import './App.css';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/list" element={<PopulateTable />}>
        </Route>
        <Route path="/" element={<Login />}>
        </Route>
      </Routes>
    </div>
  );
}
 
export default App;
