import styled from 'styled-components';
import Layout from '../common/Layout';
import ChangePwdInput from './ChangePwdInput';

const ChangePwdContainter = () => {
  return (
    <>
      <Layout title="비밀번호 변경하기" width={500} bgColor="#fff">
        <ChangePwdInput />
      </Layout>
      <Desc>
        {'8~30자의 영문 대/소문자, 숫자, 특수기호 조합을 사용할 수 있습니다.' +
          '\n' +
          '생년월일, 전화번호 등 개인정보와 관련된 연속된 숫자의 비밀번호는 타인이 쉽게 알아낼 수 있으니 사용을 자제해 주세요.'}
      </Desc>
    </>
  );
};

const Desc = styled.div`
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  text-align: center;
  color: #5c5c5c;
  white-space: pre-line;
`;

export default ChangePwdContainter;
