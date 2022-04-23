import { Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';
import styled from 'styled-components';
import ButtomArea from './ButtomArea';
import SmallMenu from './SmallMenu';

const Input = () => {
  return (
    <>
      <Wrap>
        <MyInput placeholder="아이디" />
        <MyInput placeholder="비밀번호" />
        <FormGroup>
          <FormControlLabel
            control={<Checkbox size="small" sx={{ color: '#d7d7d7' }} />}
            label={<Typography sx={{ fontSize: 12 }}>로그인 상태유지</Typography>}
          />
        </FormGroup>
        <Button>로그인</Button>
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

export default Input;
