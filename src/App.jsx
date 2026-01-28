import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import GamesGallery from './pages/GamesGallery/GamesGallery';
import TacticalPuzzles from './pages/TacticalPuzzles/TacticalPuzzles';
import PlayStyle from './pages/PlayStyle/PlayStyle';
import Biography from './pages/Biography/Biography';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<GamesGallery />} />
          <Route path="/puzzles" element={<TacticalPuzzles />} />
          <Route path="/playstyle" element={<PlayStyle />} />
          <Route path="/biography" element={<Biography />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
