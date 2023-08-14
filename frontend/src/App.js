import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TvSeries from "./pages/TvSeries";
import MediaDetailsPage from "./pages/MediaDetailsPage"; // Importez le composant MediaDetailsPage
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar";
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/films/*" element={<Movies />} />
        <Route path="/series/*" element={<TvSeries />} />
        <Route path="/details/:mediaType/:id" element={<MediaDetailsPage />} /> {/* Utilisation des paramètres mediaType et id */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
