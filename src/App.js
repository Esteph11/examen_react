import { BrowserRouter, Routes, Route } from "react-router-dom"
import Empleado from './components/Entrada'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Empleado />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

