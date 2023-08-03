import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Units from './components/Units';
import PropertyList from './components/PropertyList';
import UnitDetails from './components/UnitDetails';
import Messaging from './components/Messaging';
import Navbar from './components/Navbar';
function App() {
  return (
  <BrowserRouter>
<Navbar></Navbar>
  <Routes>
  <Route path="/" element={<PropertyList />} />
  <Route path="/units" element={<Units />} />
  <Route path="/unitDetails" element={<UnitDetails />} />
  <Route path="/messaging" element={<Messaging />} />

  </Routes>
  </BrowserRouter>
  );
}

export default App;
