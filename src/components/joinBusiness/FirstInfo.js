import styled from 'styled-components';
import { mobile } from '../../utils/responsive';
import ButtonLayout from './ButtonLayout';
import InputLayout from './InputLayout';

const FirstInfo = ({ activeIndex }) => {
  // 다음 버튼 눌렀을 때
  const onClick = () => {
    activeIndex.onChange(1);
  };
  return (
    <Container>
      <ButtonLayout title="병원 고유 번호" placeholder="병원 고유 번호를 입력해주세요." btnText="병원인증" />
      <Wrap>
        <Title>병원 고유 번호</Title>
        <Right>
          <Input
            // value={patientNum.value}
            // onChange={(e) => {
            //   patientNum.onChange(e.target.value);
            //   checkPaientNum.onChange(false);
            //   patientId.onChange('');
            //   patientName.onChange('');
            //   patientBirth.onChange('');
            //   hospitalName.onChange('');
            // }}
            placeholder="병원 고유 번호를 입력해주세요."
          />
          <RightButton>병원인증</RightButton>
        </Right>
      </Wrap>
      <Wrap>
        <Title>병원 이름</Title>
        <FullInput disabled placeholder="병원 이름을 입력해주세요." />
      </Wrap>
      <Wrap>
        <Title>전화번호</Title>
        <FullInput placeholder="병원 전화번호를 공백없이 입력해주세요." />
      </Wrap>
      <Wrap>
        <Title>주소</Title>
        <Right>
          <Input
            // value={patientNum.value}
            // onChange={(e) => {
            //   patientNum.onChange(e.target.value);
            //   checkPaientNum.onChange(false);
            //   patientId.onChange('');
            //   patientName.onChange('');
            //   patientBirth.onChange('');
            //   hospitalName.onChange('');
            // }}
            placeholder="주소를 입력해주세요."
          />
          <RightButton>주소검색</RightButton>
        </Right>
      </Wrap>
      <ButtonLayout title="주소" placeholder="주소를 입력해주세요." btnText="주소검색" />
      <Wrap>
        <Title>상세주소</Title>
        <FullInput placeholder="상세주소를 입력해주세요." />
      </Wrap>
      <NextButton disabled={false} onClick={() => onClick()}>
        다음
      </NextButton>
    </Container>
  );
};

const Container = styled.div`
  padding: 24px 18px;
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

const Title = styled.div`
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

const RightButton = styled.button`
  cursor: pointer;
  margin-left: 10px;
  padding: 10px;
  border: none;
  background-color: #889287;
  color: #fff;
  width: 100px;
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
  ${mobile({ width: 240 })}
`;

const NextButton = styled.button`
  border: none;
  cursor: pointer;
  margin-top: 20px;
  background-color: #626a61;
  color: #fff;
  padding: 10px;
  &:disabled {
    cursor: default;
    background-color: #d8d8d8;
  }
`;

export default FirstInfo;
