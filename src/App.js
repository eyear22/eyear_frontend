import Home from './pages/Home';
import Video from './pages/Video';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Send from './pages/Send';
import VideoDetail from './pages/VideoDetail';
import Login from './pages/Login';
import Join from './pages/Join';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video" element={<Video />} />
        <Route path="/send" element={<Send />} />
        <Route path="/videoDetail" element={<VideoDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
