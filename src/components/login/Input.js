import { Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { login } from '../../api/auth';
import ButtomArea from './ButtomArea';
import SmallMenu from './SmallMenu';

const Input = ({ id, password, flag }) => {
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  // 로그인
  const HandleLogin = (e) => {
    e.preventDefault();
    const userId = id.value;
    const userPwd = password.value;
    login(dispatch, flag, { id: userId, password: userPwd });
  };

  const user = useSelector((state) => state.user.currentUser);

  return (
    <>
      <Wrap>
        {console.log(error)}
        <MyInput placeholder="아이디" onChange={(e) => id.onChange(e.target.value)} />
        <MyInput placeholder="비밀번호" onChange={(e) => password.onChange(e.target.value)} type="password" />
        <FormGroup>
          <FormControlLabel
            control={<Checkbox size="small" sx={{ color: '#d7d7d7' }} />}
            label={<Typography sx={{ fontSize: 12 }}>로그인 상태유지</Typography>}
          />
        </FormGroup>
        <Button onClick={HandleLogin} disabled={false}>
          로그인
        </Button>
        {error && <Error>Someting went wrong...</Error>}
        <SmallMenu />
      </Wrap>
      <Line />
      <Wrap>
        <ButtomArea />
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 30px;
`;

const MyInput = styled.input`
  padding: 10px;
  margin-top: 14px;
  border: 1px solid #d7d7d7;
`;

const Button = styled.button`
  padding: 10px;
  color: white;
  background-color: #889287;
  border: none;
  cursor: pointer;
  margin-top: 20px;
`;

const Line = styled.div`
  background-color: #889287;
  height: 1px;
`;

const Error = styled.span`
  color: red;
`;

export default Input;
