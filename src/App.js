import "./App.css";
import Form from "./Component/Form";
import Navbar from "./Component/Navbar";
import { Routes, Route } from "react-router-dom";
import ShowDetails from "./Component/ShowDetails";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/show" element={<ShowDetails />} />
        {/* <Route path="/" element={<Form />} /> */}
        
      </Routes>
      </div>

    </>
  );
}

export default App;
