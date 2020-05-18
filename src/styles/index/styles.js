import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  padding: 40px 0;

  a {
    background-color: #F9A340;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 170px;
    height: 40px;
    margin: 35px 0;
    border-radius: 4px;
    color: #fff;
    border: none;
    transition: background 0.2s;    

    &:hover {
      background: ${darken(0.03, '#F9A340')};
    }
  }

  >p {
    font-size: 16px;
    font-weight: bold;
    color: #1068FF;
    padding: 3px 0;
  }
`;

export const Cases = styled.div`
  width: 100%;
  height: 375px;
  background-color: #F9A340;
  border-radius: 10px 10px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  justify-content: space-between;
`;

export const CaseItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CaseNumber = styled.p`
  font-size: 40px;
  font-weight: bold;
  color: #fff;
`;

export const CaseText = styled.p`
  color: #fff;
`;

export const Flag = styled.div`
  width: 100%;
  height: 165px;
  background-color: #C4C4C4;
  border-radius: 0 0 10px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 30px 100px;
  @media (max-width: 760px) {
    flex-direction: column;
    padding: 30px 20px;
    height: 285px;
  }
`;

export const FlagImage = styled.img`
  width: 110px;
  height: 95px;
  padding: 20px 20px;
  border-radius: 5px;
  background-color: ${props => props.color ==='laranja' ? "#F9A340" : 
  props.color==='amarela' ? "#FFCF03" : props.color==='vermelha' ? "#CC2726" : 
  props.color==='preta' ? "#373435" : "#fff"};
  margin-right: 30px;
  @media (max-width: 760px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

export const FlagContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 95px;
  @media (max-width: 760px) {
    align-items: center;
  }
`;

export const FlagTitle = styled.p`
  margin-bottom: 15px;
  font-weight: bold;
`;

export const FlagDescription = styled.p``

