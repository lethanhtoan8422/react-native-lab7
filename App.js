import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/home/Home';
import Shop from './src/shop/Shop';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Shop' screenOptions={({route}) => ({
        headerShown : false
      })}>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Shop' component={Shop}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

