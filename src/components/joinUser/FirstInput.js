import styled from 'styled-components';
import { mobile } from '../../utils/responsive';

const FirstInput = ({ activeIndex, hospitalName, patientId, patientName, patientBirth, relation }) => {
  // 병원 검색(현재는 임의 값)
  const searchHospital = () => {
    hospitalName.onChange('서울요양병원');
  };

  // 환자 확인(현재는 임의 값)
  const checkPatient = () => {
    if (patientId.value == '') alert('환자의 고유번호를 입력해주세요.');
    else {
      patientName.onChange('김대식');
      patientBirth.onChange('1968.08.12');
    }
  };

  // 필터 변경
  const changeFilter = (e) => {
    relation.onChange(e.target.value);
  };

  // null값이 있는지 확인
  const checkNull =
    hospitalName.value == '' || patientId.value == '' || patientName.value == '' || patientBirth.value == '';

  // 다음 버튼 눌렀을 때
  const onClick = () => {
    activeIndex.onChange(1);
  };

  return (
    <Container>
      <Wrap>
        <Title>병원 이름</Title>
        <Right>
          <Input disabled value={hospitalName.value} placeholder="병원을 입력해주세요." />
          <RightButton onClick={() => searchHospital()}>병원검색</RightButton>
        </Right>
      </Wrap>
      <Wrap>
        <Title>환자 고유 번호</Title>
        <Right>
          <Input
            value={patientId.value}
            onChange={(e) => patientId.onChange(e.target.value)}
            placeholder="환자 고유 번호를 입력해주세요."
          />
          <RightButton onClick={() => checkPatient()}>환자확인</RightButton>
        </Right>
      </Wrap>
      <Wrap>
        <Title>환자 이름</Title>
        <FullInput disabled value={patientName.value} placeholder="환자 이름을 입력해주세요." />
      </Wrap>
      <Wrap>
        <Title>환자 생년월일</Title>
        <FullInput disabled value={patientBirth.value} placeholder="환자의 생년월일을 입력해주세요." />
      </Wrap>
      <Wrap>
        <Title>환자와의 관계</Title>
        <Select placeholder="환자와의 관계를 입력해주세요." onChange={changeFilter}>
          <option value="sun">아들</option>
          <option value="daughter">딸</option>
        </Select>
      </Wrap>
      <NextButton disabled={checkNull} onClick={() => onClick()}>
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
  &:disabled {
    cursor: default;
    background-color: #d8d8d8;
  }
`;

const Select = styled.select`
  padding: 10px;
  width: 332px;
  border: 1px solid #d7d7d7;
  &:focus {
    outline: none;
  }
  ${mobile({ width: 240 })}
`;

export default FirstInput;
