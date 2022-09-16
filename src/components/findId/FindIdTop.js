import styled from 'styled-components';
import { mobile } from '../../utils/responsive';

const FindIdTop = ({ question, desc }) => {
  return (
    <>
      <Container>
        <Question>{question}</Question>
        <Desc>{desc}</Desc>
      </Container>
    </>
  );
};

const Container = styled.section`
  margin-top: 65px;
  ${mobile({ marginTop: 40 })}
`;

const Question = styled.h1`
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 40px;
  text-align: center;
  color: #1a1a1a;
  ${mobile({ fontSize: 22 })}
`;

const Desc = styled.h1`
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  color: #5c5c5c;
  ${mobile({ fontSize: 16 })}
`;

export default FindIdTop;
