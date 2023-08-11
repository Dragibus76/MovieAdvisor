import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TvSeries from "./pages/TvSeries";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar";
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/films" element={<Movies />} />
        <Route path="/series" element={<TvSeries />} />
        <Route path="*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
