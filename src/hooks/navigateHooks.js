import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

// 뒤로가기
export const useGoBack = () => {
  const navigate = useNavigate();
  return useCallback(() => navigate(-1), []);
};

// 홈페이지로 이동
export const useGoHome = () => {
  window.scrollTo(0, 0);
  const navigate = useNavigate();
  return useCallback(() => navigate('/'), []);
};

// 로그인 페이지로 이동
export const useGoLogin = () => {
  const navigate = useNavigate();
  return useCallback(() => navigate('/login'), []);
};

// 회원가입 페이지로 이동
export const useGoJoin = () => {
  const navigate = useNavigate();
  return useCallback(() => navigate('/join'), []);
};

// 개인 회원가입 페이지로 이동
export const useGoJoinUser = () => {
  const navigate = useNavigate();
  return useCallback(() => navigate('/join/user'), []);
};

// 기업 회원가입 페이지로 이동
export const useGoBusiness = () => {
  const navigate = useNavigate();
  return useCallback(() => navigate('/join/business'), []);
};

// 편지쓰기 페이지로 이동
export const useGoPost = () => {
  const navigate = useNavigate();
  return useCallback(() => navigate('/post'), []);
};

// 받은편지 페이지로 이동
export const useGoReceive = () => {
  const navigate = useNavigate();
  return useCallback(() => navigate(`/receive`), []);
};

// 보낸편지 페이지로 이동
export const useGoSend = () => {
  const navigate = useNavigate();
  return useCallback(() => navigate(`/send`), []);
};

// 공지사항 페이지로 이동
export const useGoNotice = () => {
  const navigate = useNavigate();
  return useCallback(() => navigate(`/notice`), []);
};

// 환자관리 페이지로 이동
export const useGoManagePatients = () => {
  const navigate = useNavigate();
  return useCallback(() => navigate(`/managePatients`), []);
};
