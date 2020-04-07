import React from 'react';
import { Image, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Block, Text, Input, Button } from '../../components';
import Logo from '../../assets/images/Base/Logo.png';

const Register = () => {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.Os == 'ios' ? 'padding' : 'height'} //'height'
    >
      <Block center middle>
        <Block middle>
          <Image source={Logo} style={{ height: 28, width: 102 }} />
        </Block>
        <Block flex={2.5} center>
          <Text h3 style={{ marginBottom: 6 }}>
            Get started for free
          </Text>
          <Text paragraph color="gray">
            Free forever. No credit card needed.
          </Text>
          <Block style={{ marginTop: 44 }} center>
          <Input
              style={{ marginBottom: 20 }}
              full
              label="Full name"
            />
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
                Sign In
              </Text>
            </Button>
            <Text paragraph color="gray">
              Don't have an account?{' '}
              <Text
                onPress={() => navigation.navigate('Register')}
                height={18}
                color="#2E5BFF"
              >
                Sign up
              </Text>
            </Text>
          </Block>
        </Block>
      </Block>
    </KeyboardAvoidingView>
  );
};

export default Register;
