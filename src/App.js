import Home from './pages/Home';
import Video from './pages/Video';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Send from './pages/Send';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video" element={<Video />} />
        <Route path="/send" element={<Send />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
