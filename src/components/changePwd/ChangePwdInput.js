import styled from 'styled-components';
import LockIcon from '../../assets/icon_lock.png';
import { mobile } from '../../utils/responsive';

const ChangePwdInput = () => {
  return (
    <>
      <ImageSection>
        <img src={LockIcon} alt="" />
      </ImageSection>
      <InputSection>
        <Wrap>
          <p>현재 비밀번호</p>
          <input placeholder="비밀번호를 입력해주세요." />
        </Wrap>
        <Wrap>
          <p>새로운 비밀번호</p>
          <input placeholder="새로운 비밀번호를 입력해주세요." />
        </Wrap>
        <Wrap>
          <p>새 비밀번호 확인</p>
          <input placeholder="비밀번호를 입력해주세요." />
        </Wrap>
        <Button>확인</Button>
      </InputSection>
    </>
  );
};

const ImageSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
  img {
    width: 100px;
    height: 100px;
  }
`;

const InputSection = styled.div`
  border: 1px solid #889287;
  padding: 40px;
  ${mobile({ padding: 20 })}
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  input {
    border: 2px solid #d7d7d7;
    padding: 10px;
    width: 280px;
    ${mobile({ width: 180 })}
    ::placeholder {
      color: #d7d7d7;
    }
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background: #626a61;
  border: none;
  color: #fff;
  cursor: pointer;
  margin-top: 20px;
`;

export default ChangePwdInput;
