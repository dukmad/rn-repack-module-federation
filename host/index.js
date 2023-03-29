import {AppRegistry, Platform} from 'react-native';
import {ScriptManager, Script, Federated} from '@callstack/repack/client';
import App from './App';
import {name as appName} from './app.json';

const resolveURL = Federated.createURLResolver({
  containers: {
    app1: 'http://localhost:9001/[name][ext]',
    app2: 'http://localhost:9002/[name][ext]',
    // app1: 'http://10.0.2.2:9001/[name][ext]',
    // app2: 'http://10.0.2.2:9002/[name][ext]',
  },
});

ScriptManager.shared.addResolver(async (scriptId, caller) => {
  let url;
  console.log('caller:', caller);
  if (caller === 'main') {
    url = Script.getDevServerURL(scriptId);
  } else {
    url = resolveURL(scriptId, caller);
    console.log('devUrl', Script.getDevServerURL(scriptId));
  }
  console.log('url:', url);
  if (!url) {
    return undefined;
  }

  return {
    url,
    cache: false,
    query: {
      platform: Platform.OS,
    },
  };
});

AppRegistry.registerComponent(appName, () => App);
