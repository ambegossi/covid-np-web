import styled from 'styled-components';

export const Container = styled.div`
  height: 175px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #C4C4C4;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 80%;
  height: 100%;
  margin: 0 auto;
  padding: 20px 0;
  justify-content: space-between;
  align-items: center;

  p {
    width: 210px;
    text-align: center;
    font-weight: bold;
  }
`;

export const Secretary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  img {
    width: 50px;
    height: 50px;
    margin-bottom: 7px;
  }

  >p {
    width: 150px;
  }
`;

export const Copy = styled.div`
  background-color: #F9A340;

  p {
    width: 80%;
    margin: 0 auto;
    text-align: right;
    color: #fff;
    padding: 3px 0;
  }
`;