import React from 'react';
import { Text } from '.';
import Block from './Block';

const Header = ({ title }) => (
  <Block row middle center>
    <Text h4>{title}</Text>
  </Block>
);

export default Header;
