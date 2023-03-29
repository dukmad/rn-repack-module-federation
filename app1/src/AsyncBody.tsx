import React from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Section from './Section';

function AsyncBody() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View
      style={{
        backgroundColor: isDarkMode ? Colors.black : Colors.white,
      }}>
      <Section title="AsyncBody App1">
        <Text style={styles.highlight}>AsyncBody</Text>
      </Section>
    </View>
  );
}

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
});

export default AsyncBody;
