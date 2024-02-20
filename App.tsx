import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './Navigation';
import { Provider } from 'react-redux';
import store from './redux/store';
import { PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <PaperProvider>
        <Provider store={store}>
          <Navigation />
        </Provider>
      </PaperProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
