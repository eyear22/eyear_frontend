import Home from './pages/Home';
import Video from './pages/Video';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video" element={<Video />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
