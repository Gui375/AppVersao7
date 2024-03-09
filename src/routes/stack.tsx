import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';
import Login from '../screens/Login/Login';
import imc from '../screens/Imc/Imc'

const Stack = createNativeStackNavigator();

type StackNavigation = {
    Home : undefined;
    Login : undefined;
    imc : undefined;
}
export type StackTypes = NativeStackNavigationProp<StackNavigation>


export default function StackComponent(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen  name="Login" component={ Login}   options={{headerShown: false }}  />
                <Stack.Screen  name="Home" component={Home} />
                <Stack.Screen  name="imc" component={imc} />
            </Stack.Navigator>
        </NavigationContainer>

    );
}