/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

import type { RNTesterModuleExample } from '../../types/RNTesterTypes';

import RNTesterText from '../../components/RNTesterText';
import * as React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';

function Playground() {
  const [visible, setVisible] = React.useState(true);
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={() => setVisible(v => !v)}>
        <Text>Click Me</Text>
      </Pressable>
      {visible && <Text>Hello World</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  button: {
    cursor: 'pointer',
    backgroundColor: 'salmon',
    width: 200,
  },
});

export default ({
  title: 'Playground',
  name: 'playground',
  description: 'Test out new features and ideas.',
  render: (): React.Node => <Playground />,
}: RNTesterModuleExample);
