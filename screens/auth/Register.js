import React, { useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Block, Text, Input, Button } from '../../components';
import Logo from '../../assets/images/Base/Logo.png';
import EnergyIcon from '../../assets/images/icons/energy.png';
import MessageIcon from '../../assets/images/icons/message.png';
import CheckIcon from '../../assets/images/icons/check.png';
import { colors } from '../../constants/theme';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Register = () => {
  const navigation = useNavigation();
  const [active, setActive] = useState(null);

  const adminIcon = (
    <Image source={EnergyIcon} style={{ height: 16, width: 14 }} />
  );
  const operatorIcon = (
    <Image source={MessageIcon} style={{ height: 14, width: 14 }} />
  );
  const checkIcon = (
    <Image source={CheckIcon} style={{ height: 18, width: 18 }} />
  );

  const handleTypeChange = (type) => {
    if (active !== type) {
      setActive(type);
    } else {
      setActive(null);
    }
  };

  return (
    <Block style={{ backgroundColor: colors.white }}>
      <KeyboardAwareScrollView
        style={{ marginVertical: 40 }}
        showsVerticalScrollIndicator={false}
      >
        <Block center middle style={{ marginBottom: 40, marginTop: 20 }}>
          <Image source={Logo} style={{ height: 28, width: 102 }} />
        </Block>
        <Block flex={1} center>
          <Text h3 style={{ marginBottom: 6 }}>
            Get started for free
          </Text>
          <Text paragraph color="gray">
            Free forever. No credit card needed.
          </Text>
          <Block row style={{ marginHorizontal: 28, marginTop: 40 }}>
            <TouchableWithoutFeedback
              onPress={() => handleTypeChange('administrator')}
            >
              <Block
                center
                middle
                style={[
                  styles.card,
                  { marginRight: 20 },
                  active === 'administrator' ? styles.active : null,
                ]}
              >
                {active === 'administrator' && (
                  <Block center middle style={styles.check}>
                    {checkIcon}
                  </Block>
                )}
                <Block center middle style={styles.icon}>
                  {adminIcon}
                </Block>
                <Text h4 style={{ marginBottom: 11 }}>
                  Administrator
                </Text>
                <Text paragraph center color="black3">
                  Full access to all settings
                </Text>
              </Block>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => handleTypeChange('operator')}
            >
              <Block
                center
                middle
                style={[
                  styles.card,
                  active === 'operator' ? styles.active : null,
                ]}
              >
                {active === 'operator' && (
                  <Block center middle style={styles.check}>
                    {checkIcon}
                  </Block>
                )}
                <Block center middle style={styles.icon}>
                  {operatorIcon}
                </Block>
                <Text h4 style={{ marginBottom: 11 }}>
                  Operator
                </Text>
                <Text paragraph center color="black3">
                  Service desk and chat permissions
                </Text>
              </Block>
            </TouchableWithoutFeedback>
          </Block>
          <Block center style={{ marginTop: 25 }}>
            <Input style={{ marginBottom: 20 }} full label="Full name" />
            <Input
              style={{ marginBottom: 20 }}
              email
              full
              label="Email address"
            />
            <Input
              rightComponent={
                <Text
                  onPress={() => navigation.navigate('Forgot')}
                  paragraph
                  color="gray"
                >
                  Forgot password?
                </Text>
              }
              style={{ marginBottom: 25 }}
              full
              label="Password"
              password
            />
            <Button
              full
              onPress={() => console.log('click')}
              style={{ marginBottom: 12 }}
            >
              <Text
                weight="bold"
                center
                height={21}
                size={15}
                spacing={0}
                color="white"
              >
                Create account
              </Text>
            </Button>
            <Text paragraph color="gray">
              Already have an account?{' '}
              <Text
                onPress={() => navigation.navigate('Login')}
                height={18}
                color="#2E5BFF"
              >
                Sign in
              </Text>
            </Text>
          </Block>
        </Block>
      </KeyboardAwareScrollView>
    </Block>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 5,
  },
  active: {
    borderColor: colors.blue,
    // shadowOffset: { width: 0, height: 0 },
    // shadowColor: colors.blue,
    //elevation: 2,
  },
  icon: {
    flex: 0,
    height: 48,
    width: 48,
    borderRadius: 48,
    marginBottom: 15,
    backgroundColor: colors.lightblue,
  },
  check: {
    position: 'absolute',
    right: -9,
    top: -9,
    flex: 0,
    height: 20,
    width: 20,
    borderRadius: 20,
    backgroundColor: colors.blue,
  },
});

export default Register;
