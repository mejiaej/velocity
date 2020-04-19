import React, { useLayoutEffect } from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Text, Block, Icon, Label } from '../components';
import Card from '../components/Card';
import { colors } from '../constants/theme';

const notificationButton = (
  <TouchableOpacity>
    <Icon notification />
  </TouchableOpacity>
);

const Overview = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions(
      {
        headerRightContainerStyle: { marginRight: 24 },
        headerRight: () => notificationButton,
      },
      [navigation],
    );
  });

  return (
    <SafeAreaView style={styles.overview}>
      <ScrollView
        contentContainerStyle={{ paddingVertical: 25 }}
        showsVerticalScrollIndicator={false}
      >
        <Card row middle>
          <Block flex={1.2} center middle style={{ marginRight: 20 }}>
            <Text light height={43} size={36} spacing={-0.45}>
              86
            </Text>
            <Text
              caption
              center
              style={{ paddingHorizontal: 16, marginTop: 3 }}
            >
              OPERATING SCORE
            </Text>
          </Block>
          <Block>
            <Text paragraph color="black3">
              All cards are operation well. There were 1,233 trips since your
              last login.
            </Text>
          </Block>
        </Card>

        <Block row style={{ marginTop: 18 }}>
          <Card middle style={{ marginRight: 7 }}>
            <Icon vehicle />
            <Text h2>1,428</Text>
            <Text paragraph color="gray">
              Vehicles on track
            </Text>
          </Card>
          <Card middle style={{ marginLeft: 7 }}>
            <Icon distance />
            <Text h2>158.3</Text>
            <Text paragraph color="gray">
              Distance driven
            </Text>
          </Card>
        </Block>

        <Card title="TODAY'S TRIPS" style={{ marginTop: 18 }}>
          <Block row right>
            <Block flex={2} row center right>
              <Label />
              <Text paragraph color="gray">
                Today
              </Text>
            </Block>
            <Block row center right>
              <Label purple />
              <Text paragraph color="gray">
                Yesterday
              </Text>
            </Block>
          </Block>
          <Block>
            <Text>Chart</Text>
          </Block>
        </Card>

        <Card title="TOP DRIVERS" style={{ marginTop: 18 }}>
          <Block style={styles.driver}>
            <TouchableOpacity activeOpacity={0.8}>
              <Block row>
                <Block>
                  <Image
                    source={{
                      uri:
                        'https://images.unsplash.com/photo-1506244856291-8910ea843e81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
                    }}
                    style={styles.avatar}
                  />
                </Block>
                <Block flex={2}>
                  <Text h4>Grand Tesoro</Text>
                  <Text paragraph color="gray">
                    Chevrolet Bolt
                  </Text>
                </Block>
                <Block>
                  <Text paragraph right color="black">
                    $6,432
                  </Text>
                  <Text paragraph right color="gray">
                    1,232 miles
                  </Text>
                </Block>
              </Block>
            </TouchableOpacity>
          </Block>
          <Block style={styles.driver}>
            <TouchableOpacity activeOpacity={0.8}>
              <Block row>
                <Block>
                  <Image
                    source={{
                      uri:
                        'https://images.unsplash.com/photo-1521657249896-063c0c611fe5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
                    }}
                    style={styles.avatar}
                  />
                </Block>
                <Block flex={2}>
                  <Text h4>Invision App</Text>
                  <Text paragraph color="gray">
                    Tesla Model X
                  </Text>
                </Block>
                <Block>
                  <Text paragraph right color="black">
                    $6,432
                  </Text>
                  <Text paragraph right color="gray">
                    1,232 miles
                  </Text>
                </Block>
              </Block>
            </TouchableOpacity>
          </Block>
          <Block style={styles.driver}>
            <TouchableOpacity activeOpacity={0.8}>
              <Block row>
                <Block>
                  <Image
                    source={{
                      uri:
                        'https://images.unsplash.com/photo-1536700503339-1e4b06520771?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
                    }}
                    style={styles.avatar}
                  />
                </Block>
                <Block flex={2}>
                  <Text h4>Beboop</Text>
                  <Text paragraph color="gray">
                    Volvo Intellisafe
                  </Text>
                </Block>
                <Block>
                  <Text paragraph right color="black">
                    $6,432
                  </Text>
                  <Text paragraph right color="gray">
                    1,232 miles
                  </Text>
                </Block>
              </Block>
            </TouchableOpacity>
          </Block>
        </Card>

        <Card
          title="TRIPS BY TYPE"
          style={{ marginTop: 18 /* marginBottom: 20 */ }}
        >
          <Block>
            <Text>Chart</Text>
          </Block>
          <Block row space="between" style={{ marginTop: 25 }}>
            <Block>
              <Text h2 light>
                1,744
              </Text>
              <Block row center>
                <Label />
                <Text paragraph color="gray">
                  Confort
                </Text>
              </Block>
            </Block>
            <Block>
              <Text h2 light>
                2,312
              </Text>
              <Block row center>
                <Label purple />
                <Text paragraph color="gray">
                  Premium
                </Text>
              </Block>
            </Block>
          </Block>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  overview: {
    flex: 1,
    marginHorizontal: 25,
  },
  driver: {
    marginBottom: 11,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
});

export default Overview;
