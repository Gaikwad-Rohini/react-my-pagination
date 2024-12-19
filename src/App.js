import "./App.css";
import ServerSide from "./Components/ServerSide";
import NavComponent from "./Components/NavComponent";
import SaveData from "./Components/SaveData";
import ShowData from "./Components/ShowData";
import EditData from "./Components/EditData";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <NavComponent />
      <Routes>
        <Route path="/" element={<ShowData />} />
        <Route path="/create-post" element={<SaveData />} />
        <Route path="/pagination" element={<ServerSide />} />
        <Route path="/edit-post/:id" element={<EditData />} />
      </Routes>
    </div>
  );
}

export default App;
