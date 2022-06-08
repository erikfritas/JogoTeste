import React from 'react';

import { Container } from './styles';

const RADIUS = 40;

const Finger: React.FC<{position: number[]}> = (props: {position: number[]}) => {
  const x = props.position[0] - RADIUS / 2;
  const y = props.position[1] - RADIUS / 2;

  return <Container RADIUS={RADIUS} style={{left: x, top: y}}/>;
}

export { Finger };