import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, CardStyleInterpolators  } from "@react-navigation/stack";
import { Pressable, StyleSheet } from "react-native";

//Components Views
import MapMainConferences from "../Views/MapMainConferences";
import Login from "../Views/Login";
import { SignUp } from "../Views/SingUp";
import { Home } from "../Views/Home";
import Detail from "../Views/Detail";
import { Account } from "../Views/Account";
import ForgotPassword from "../Views/ForgotPassword";
import MyAcc from "../Components/MyAcc";

const Stack = createStackNavigator();
const routeScreenDefaultOptions = {
  headerStyle: {
    backgroundColor: "#FDB515",
  },
  headerTitleStyle: {
    color: "#fff",
  },

};

const Routes = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={routeScreenDefaultOptions}
        />
        <Stack.Screen
          name="SingUp"
          component={SignUp}
          options={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, 
            ...routeScreenDefaultOptions}}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, 
            ...routeScreenDefaultOptions}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{gestureEnabled: false, 
            headerLeft: () => null,
            headerRight: () => <MyAcc/>,
            ...routeScreenDefaultOptions}}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, 
            ...routeScreenDefaultOptions}}
        />
        <Stack.Screen
          name="Account"
          component={Account}
          options={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, 
            ...routeScreenDefaultOptions}}
        />
        <Stack.Screen
          name="MapConferences"
          component={MapMainConferences}
          options={routeScreenDefaultOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default Routes;
