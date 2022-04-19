import Home from './pages/Home';
import Video from './pages/Video';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VideoDetail from './pages/VideoDetail';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video" element={<Video />} />
        <Route path="/videoDetail" element={<VideoDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
