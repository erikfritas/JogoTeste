import styled from 'styled-components/native';

export const Container = styled.View`
  border-color: #ccc;
  border-width: 4px;
  border-radius: ${(props: {RADIUS: number}) => props.RADIUS}px;
  width: ${(props: {RADIUS: number}) => props.RADIUS * 2}px;
  height: ${(props: {RADIUS: number}) => props.RADIUS * 2}px;
  background-color: pink;
  position: absolute;
`;
