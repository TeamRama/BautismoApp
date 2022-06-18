import './App.css';
import Portada from './components/Views/Home/Portada';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
   <main>
    <Routes>
    <Route exact path="/" element={<Portada/>} />

    </Routes>
   </main>
  </BrowserRouter>
 
  );
}

export default App;
