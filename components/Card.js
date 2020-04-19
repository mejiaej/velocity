import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Block from './Block';
import { colors } from '../constants/theme';
import Icon from './Icon';
import Text from './Text';

const Card = ({ shadow, border, children, style, title, ...rest }) => {
  const renderHeader = () => {
    if (title) {
      return (
        <Block row space="between" style={styles.header}>
          <Text caption>{title}</Text>
          <TouchableOpacity>
            <Icon options />
          </TouchableOpacity>
        </Block>
      );
    }

    return null;
  };

  const cardStyles = [
    styles.card,
    shadow && styles.shadow,
    border && styles.border,
    style,
  ];

  return (
    <Block style={cardStyles} {...rest}>
      {renderHeader()}
      {children}
    </Block>
  );
};

Card.defaultProps = {
  shadow: true,
  border: true,
  title: null,
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.white,
  },
  header: {
    paddingBottom: 24,
  },
  border: {
    borderColor: colors.card,
    borderWidth: 1,
  },
  shadow: {
    shadowColor: colors.shadow,
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    elevation: 2,
  },
});

export default Card;
