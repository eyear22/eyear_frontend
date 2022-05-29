import styled from 'styled-components';
import { tablet } from '../../utils/responsive';
import Footer from '../home/Footer';
import Header from '../home/Header';
import JoinCircle from './JoinCircle';

const JoinLayout = ({ title, num, children }) => {
  return (
    <>
      <Wrap>
        <Title>{title}</Title>
        <JoinCircle num={num} />
        {children}
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  margin-top: 70px;
  padding: 50px 0;
  ${tablet({ padding: '20px 10vw' })}
  background-color: #f9f9fa;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 34px;
`;

export default JoinLayout;
