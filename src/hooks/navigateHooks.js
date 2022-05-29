import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const useGoHome = () => {
  const navigate = useNavigate();
  return useCallback(() => navigate('/'), []);
};

export const useGoLogin = () => {
  const navigate = useNavigate();
  return useCallback(() => navigate('/login'), []);
};

export const useGoJoin = () => {
  const navigate = useNavigate();
  return useCallback(() => navigate('/join'), []);
};

export const useGoJoinUser = () => {
  const navigate = useNavigate();
  return useCallback(() => navigate('/join/user'), []);
};

export const useGoBusiness = () => {
  const navigate = useNavigate();
  return useCallback(() => navigate('/join/business'), []);
};

export const useGoPost = () => {
  const navigate = useNavigate();
  return useCallback(() => navigate('/post'), []);
};

export const useGoReceive = () => {
  const navigate = useNavigate();
  return useCallback(() => navigate(`/receive`), []);
};

export const useGoSend = () => {
  const navigate = useNavigate();
  return useCallback(() => navigate(`/send`), []);
};
