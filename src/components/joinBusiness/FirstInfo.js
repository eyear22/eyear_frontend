import styled from 'styled-components';
import ButtonLayout from './ButtonLayout';
import InputLayout from './InputLayout';

const FirstInfo = ({ activeIndex, hosNum, hosName, hosPhone, hosAdress, hosAdressDetail }) => {
  // 다음 버튼 눌렀을 때
  const clickNextButton = () => {
    activeIndex.onChange(1);
  };

  // TODO: 병원 고유 번호?
  const checkHos = () => {
    hosName.onChange('참사랑병원');
  };

  return (
    <Container>
      <ButtonLayout
        title="병원 고유 번호"
        placeholder="병원 고유 번호를 입력해주세요."
        btnText="병원인증"
        value={hosNum.value}
        onChange={(e) => {
          hosNum.onChange(e.target.value);
          hosName.onChange('');
        }}
        btnClick={checkHos}
      />
      <InputLayout title="병원 이름" value={hosName.value} disabled placeholder="병원 이름을 입력해주세요." />
      <InputLayout
        title="전화번호"
        value={hosPhone.value}
        onChange={(e) => hosPhone.onChange(e.target.value)}
        placeholder="병원 전화번호를 공백없이 입력해주세요."
      />
      <ButtonLayout
        title="주소"
        placeholder="주소를 입력해주세요."
        btnText="주소검색"
        value={hosAdress.value}
        onChange={(e) => {
          hosAdress.onChange(e.target.value);
        }}
        btnClick={checkHos}
      />
      <InputLayout
        title="상세주소"
        value={hosAdressDetail.value}
        onChange={(e) => hosAdressDetail.onChange(e.target.value)}
        placeholder="상세주소를 입력해주세요."
      />
      <NextButton disabled={false} onClick={clickNextButton}>
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
