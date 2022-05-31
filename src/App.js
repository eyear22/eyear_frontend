import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Post from './pages/Post';
import Login from './pages/Login';
import Join from './pages/Join';
import JoinUser from './pages/JoinUser';
import JoinBusiness from './pages/JoinBusiness';
import Detail from './pages/Detail';
import Receive from './pages/Receive';
import JoinDone from './pages/JoinDone';
import PostSuccess from './pages/PostSuccess';
import Send from './pages/Send';
import Header from './components/home/Header';
import ScrollToTop from './utils/ScrollToTop';
import Footer from './components/home/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/post/success" element={<PostSuccess />} />
        <Route path="/receive" element={<Receive />} />
        <Route path="/send" element={<Send />} />
        <Route path="/detail/:postId" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/join/user" element={<JoinUser />} />
        <Route path="/join/business" element={<JoinBusiness />} />
        <Route path="/join/done" element={<JoinDone />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
