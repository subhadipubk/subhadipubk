import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DemoFile from './src/Home/demoFile';
import Details from './src/Details/Details';
import ProductSummery from './src/ProductSummery/productSummery';
import HelloWorldApp from './src/Hello/Hello';
const Stack = createNativeStackNavigator();
class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="HelloWorldApp"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="DemoFile" component={DemoFile} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="ProductSummery" component={ProductSummery} />
          <Stack.Screen name="HelloWorldApp" component={HelloWorldApp} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default App;
