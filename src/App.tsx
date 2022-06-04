import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';


function App() {
  return (
    <Routes>
      <Route path="/" element={null} />
      <Route path="/fitness" element={null} />
      <Route path="/focus" element={null} />
      <Route path="/food" element={null} />
      <Route path="/account" element={null} />
    </Routes>
  );
}

export default App;
