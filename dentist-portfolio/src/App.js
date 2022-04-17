import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Pages/Shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import Services from "./Pages/Home/Services/Services";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/services" element={<Services></Services>}></Route>
      </Routes>
    </div>
  );
}

export default App;
