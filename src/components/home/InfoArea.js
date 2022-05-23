import styled from 'styled-components';
import { mobile } from '../../utils/responsive';
import Icon1 from '../../assets/icon_contact1.png';
import Icon2 from '../../assets/icon_contact2.png';
import Icon3 from '../../assets/icon_contact3.png';

const items = [
  {
    key: 0,
    img: Icon1,
    title: '주소',
    desc: '서울특별시 노원구 화랑로 621' + '\n' + '서울특별시 노원구 공릉동 126 서울여자대학교',
  },
  {
    key: 1,
    img: Icon2,
    title: '연락처',
    desc: '02-970-5114' + '\n' + '02-970-5921',
  },
  {
    key: 2,
    img: Icon3,
    title: '주소',
    desc: 'eyear@gmail.com' + '\n' + 'eyear@naver.com',
  },
];

const InfoArea = () => {
  return (
    <Container>
      {items.map(({ key, img, title, desc }) => (
        <Wrap key={key}>
          <Image src={img} />
          <Right>
            <Title>{title}</Title>
            <Desc>{desc}</Desc>
          </Right>
        </Wrap>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  width: 400px;
  ${mobile({ width: '80vw', marginLeft: 0 })}
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
`;

const Image = styled.img`
  width: 26px;
  height: 26px;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  height: 26px;
`;

const Desc = styled.div`
  margin-top: 5px;
  color: #5c5c5c;
  white-space: pre-wrap;
`;

export default InfoArea;
