import styled from 'styled-components';

const Layout = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Wrap>{children}</Wrap>
    </Container>
  );
};

const Container = styled.div`
  padding: 5vw 0;
`;

const Title = styled.h1`
  padding-left: 10vw;
  text-decoration: underline #ba2b0c;
  text-underline-offset: 8px;
`;

const Wrap = styled.div`
  padding: 40px 0;
`;

export default Layout;
