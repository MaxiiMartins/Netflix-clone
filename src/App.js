import "./App.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import LandingPage from "./pages/Landing/LandingPage";
import Detalles from "./pages/Detalles/Detalles";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/page/*" element={<Header />}>
          <Route path="home" element={<Home />} />
          <Route path="detalle/:id" element={<Detalles />} />
          <Route path="*" element={<Navigate replace to="/page/home" />} />
        </Route>
        <Route path="*" element={<p>404 NOT FOUND</p>} />
      </Routes>
    </Router>
  );
}

export default App;
