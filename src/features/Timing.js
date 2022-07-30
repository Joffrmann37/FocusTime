import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { RoundedButton } from '../components/RoundedButton';
import { colors } from '../utils/colors';

export const Timing = ({ onChangeTime }) => {
  return (
    <>
        <View style={styles.timingButton}>
          <RoundedButton
            size={75}
            title="10m"
            onPress={() => onChangeTime(10)}
          />
        </View>
        <View style={styles.timingButton}>
          <RoundedButton
            size={75}
            title="15m"
            onPress={() => onChangeTime(15)}
          />
        </View>
        <View style={styles.timingButton}>
          <RoundedButton
            size={75}
            title="20m"
            onPress={() => onChangeTime(20)}
          />
        </View>
        <View style={styles.timingButton}>
          <RoundedButton
            size={75}
            title="7h"
            onPress={() => onChangeTime(400)}
          />
        </View>
      </>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    justifyContent: 'center',
  },
  header: {
    color: colors.white
  },
  timingButton: {
    flex: 1,
    alignItems: 'center',
  },
});
