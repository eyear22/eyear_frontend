import Home from './pages/Home';
import Video from './pages/Video';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Send from './pages/Send';
import VideoDetail from './pages/VideoDetail';
import Login from './pages/Login';
import Join from './pages/Join';
import JoinUser from './pages/JoinUser';
import JoinBusiness from './pages/JoinBusiness';
import Detail from './pages/Detail';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video" element={<Video />} />
        <Route path="/send" element={<Send />} />
        <Route path="/videoDetail" element={<VideoDetail />} />
        <Route path="/detail/:postId" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/join/user" element={<JoinUser />} />
        <Route path="/join/business" element={<JoinBusiness />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
