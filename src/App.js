import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Home from './components/Views/Home/Home';




function App() {
  return (
    <BrowserRouter>
   <main>
    <Routes>
    <Route exact path="/" element={<Home/>} />

    </Routes>
   </main>
  </BrowserRouter>
 
  );
}

export default App;
