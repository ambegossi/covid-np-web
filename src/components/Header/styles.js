import styled from 'styled-components';

export const Container = styled.div`
  height: 70px;
  width: 100%;
  background-color: #F9A340;
  display: flex;
  @media (max-width: 760px) {
    height: 110px;
    align-items: center;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 760px) {
    flex-direction: column;
  }
`;

export const Logo = styled.div`
    img {
    width: 50px;
    height: 50px;
    }
`;

export const Title = styled.h1`
  color: #fff;
  text-align: center;
  @media (max-width: 760px) {
    font-size: 22px;
  }
`;

export const Right = styled.div`
  width: 50px;
`;