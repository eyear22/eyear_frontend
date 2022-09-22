import Home from './pages/Home';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Post from './pages/Post';
import Login from './pages/Login';
import Join from './pages/Join';
import JoinUser from './pages/JoinUser';
import JoinBusiness from './pages/JoinBusiness';
import Receive from './pages/Receive';
import JoinDone from './pages/JoinDone';
import PostSuccess from './pages/PostSuccess';
import Send from './pages/Send';
import Notice from './pages/Notice';
import Header from './components/home/Header';
import ScrollToTop from './utils/ScrollToTop';
import Footer from './components/home/Footer';
import { useSelector } from 'react-redux';
import ReceiveDetail from './pages/ReceiveDetail';
import SendDetail from './pages/SendDetail';
import ManagePatients from './pages/ManagePatients';
import NoticeDetail from './pages/NoticeDetail';
import FindId from './pages/FindId';
import FindIdSuccess from './pages/FindIdSuccess';
import FindPwd from './pages/FindPwd';
import FindPwdSuccess from './pages/FindPwdSuccess';
import ChangePwd from './pages/ChangePwd';

// 로그인된 경우 접근할 수 있는 url
const AuthRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/post" element={<Post />} />
    <Route path="/post/success" element={<PostSuccess />} />
    <Route path="/receive" element={<Receive />} />
    <Route path="/receive/detail/:postId" element={<ReceiveDetail />} />
    <Route path="/send" element={<Send />} />
    <Route path="/send/detail/:postId" element={<SendDetail />} />
    <Route path="/notice" element={<Notice />} />
    <Route path="/notice/:id" element={<NoticeDetail />} />
    <Route path="/managePatients" element={<ManagePatients />} />
    <Route path="*" element={<Navigate replace to="/" />} />
  </Routes>
);

// 로그인안된 경우 접근할 수 있는 url
const HomeRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/join" element={<Join />} />
    <Route path="/join/user" element={<JoinUser />} />
    <Route path="/join/business" element={<JoinBusiness />} />
    <Route path="/join/done" element={<JoinDone />} />
    <Route path="/findId" element={<FindId />} />
    <Route path="/findId/success" element={<FindIdSuccess />} />
    <Route path="/findPwd" element={<FindPwd />} />
    <Route path="/findPwd/success" element={<FindPwdSuccess />} />
    <Route path="*" element={<Navigate replace to="/" />} />
    <Route path="/changePassword" element={<ChangePwd />} />
  </Routes>
);

const App = () => {
  // 로그인한 사용자가 있는지 확인
  const user = useSelector((state) => state.user.currentUser);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      {console.log(user)}
      {user ? <AuthRoutes /> : <HomeRoutes />}
      <Footer />
    </BrowserRouter>
  );
};

export default App;
