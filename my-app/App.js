
import { NavigationContainer } from '@react-navigation/native';
import { ImageBackground, StatusBar } from 'react-native';
import Index from './index'
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View, Text } from 'react-native';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Index} options={{ headerShown: false }} />

      </Stack.Navigator>
      <StatusBar style="auto" />

      <View style={styles.container}>
        <View >
          <Text style={styles.text}>minga!</Text>
        </View>
      </View>
      {/* </ImageBackground>*/}
    </NavigationContainer >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "black",
  }
});
