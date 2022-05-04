import styled from 'styled-components';
import { mobile } from '../../utils/responsive';

const FirstInput = ({ activeIndex }) => {
  // 다음 버튼 눌렀을 때
  const onClick = () => activeIndex.onChange(1);
  return (
    <Container>
      <Wrap>
        <Title>병원 이름</Title>
        <Right>
          <Input placeholder="병원을 입력해주세요." />
          <RightButton>병원검색</RightButton>
        </Right>
      </Wrap>
      <Wrap>
        <Title>환자 고유 번호</Title>
        <Right>
          <Input placeholder="환자 고유 번호를 입력해주세요." />
          <RightButton>환자확인</RightButton>
        </Right>
      </Wrap>
      <Wrap>
        <Title>환자 이름</Title>
        <FullInput placeholder="환자 이름을 입력해주세요." />
      </Wrap>
      <Wrap>
        <Title>성별</Title>
        <FullInput placeholder="환자 이름을 입력해주세요." />
      </Wrap>
      <Wrap>
        <Title>환자 생년월일</Title>
        <FullInput placeholder="환자 이름을 입력해주세요." />
      </Wrap>
      <Wrap>
        <Title>환자와의 관계</Title>
        <Input placeholder="환자 이름을 입력해주세요." />
      </Wrap>
      <NextButton onClick={() => onClick()}>다음</NextButton>
    </Container>
  );
};

const Container = styled.div`
  padding: 18px;
  display: flex;
  flex-direction: column;
`;

const Wrap = styled.div`
  width: 100%;
  margin-bottom: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column', alignItems: 'normal' })}
`;

const Title = styled.text`
  margin-right: 20px;
`;

const Right = styled.div``;

const Input = styled.input`
  padding: 10px;
  width: 200px;
  border: 1px solid #d7d7d7;
  ::placeholder {
    color: #d9d9d9;
  }
  ::-ms-input-placeholder {
    color: #d9d9d9;
  }
  ${mobile({ width: 130 })}
`;

const FullInput = styled.input`
  padding: 10px;
  width: 310px;
  border: 1px solid #d7d7d7;
  ::placeholder {
    color: #d9d9d9;
  }
  ::-ms-input-placeholder {
    color: #d9d9d9;
  }
  ${mobile({ width: 130 })}
`;

const RightButton = styled.button`
  cursor: pointer;
  margin-left: 10px;
  padding: 10px;
  border: none;
  background-color: #889287;
  color: #fff;
  width: 100px;
`;

const NextButton = styled.button`
  border: none;
  cursor: pointer;
  margin-top: 20px;
  background-color: #626a61;
  color: #fff;
  padding: 10px;
`;

export default FirstInput;
