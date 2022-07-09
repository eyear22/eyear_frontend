import styled from 'styled-components';
import ButtonLayout from './ButtonLayout';
import { hospitalInfoData } from './HospitalInfoData';
import InputLayout from './InputLayout';
import useInput from '../../utils/useInput';
import DaumPostCode from 'react-daum-postcode';

const FirstInfo = ({ activeIndex, hosNum, hosName, hosPhone, hosAdress, hosAdressDetail }) => {
  // 다음 버튼 눌렀을 때
  const clickNextButton = () => {
    activeIndex.onChange(1);
    console.log(hosNum.value);
    console.log(hosName.value);
    console.log(hosPhone.value);
    console.log(hosAdress.value);
    console.log(hosAdressDetail.value);
  };

  const checkHosNumAndSetHosName = () => {
    const hospital = hospitalInfoData.filter((info) => hosNum.value == info.num);
    try {
      hosName.onChange(hospital[0].name);
    } catch (e) {
      alert('일치하는 병원이 없습니다.');
      hosNum.onChange('');
    }
  };

  const modalOpen = useInput(false);

  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    hosAdress.onChange(fullAddress);
    modalOpen.onChange(false);
  };

  const checkNull =
    hosNum.value == '' ||
    hosName.value == '' ||
    hosPhone.value == '' ||
    hosAdress.value == '' ||
    hosAdressDetail.value == '';

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
        btnClick={checkHosNumAndSetHosName}
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
        disabled
        btnClick={() => modalOpen.onChange(true)}
      />
      {modalOpen.value ? (
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            background: 'rgba(200, 200, 200, 0.8)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              width: 800,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <button title="닫기" onClick={() => modalOpen.onChange(false)}>
              닫기
            </button>
            <AddressModal height={700} onComplete={handleComplete} />
          </div>
        </div>
      ) : null}
      <InputLayout
        title="상세주소"
        value={hosAdressDetail.value}
        onChange={(e) => hosAdressDetail.onChange(e.target.value)}
        placeholder="상세주소를 입력해주세요."
      />
      <NextButton disabled={checkNull} onClick={clickNextButton}>
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

const AddressModal = styled(DaumPostCode)``;

export default FirstInfo;
