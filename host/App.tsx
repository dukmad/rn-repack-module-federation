import {Federated} from '@callstack/repack/client';
import React from 'react';
import {Text, SafeAreaView, View} from 'react-native';

const App1 = React.lazy(() => Federated.importModule('app1', './App'));
const App2 = React.lazy(() => Federated.importModule('app2', './App'));

export default function App() {
  return (
    <SafeAreaView>
      <Text>Host App</Text>
      <View>
        <Text>Aplicativo 1</Text>
        <React.Suspense fallback={<Text>Loading app1...</Text>}>
          <App1 />
        </React.Suspense>
      </View>
      <React.Suspense fallback={<Text>Loading app2...</Text>}>
        <App2 />
      </React.Suspense>
    </SafeAreaView>
  );
}
