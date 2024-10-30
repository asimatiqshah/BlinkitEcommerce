import { Text, View } from "react-native";
import LottieView from 'lottie-react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "../features/auth/SplashScreen";
import MapTesting from "../components/MapTesting.js";


const Stack = createNativeStackNavigator();
const Navigation = () => {

   let {Navigator,Screen} = Stack;

    return (
           <NavigationContainer>
            <Navigator
            initialRouteName="MapTesting"
            screenOptions={{
                headerShown:false
            }}
            >
                <Screen name="SplashScreen" component={SplashScreen} />
                <Screen name="MapTesting" component={MapTesting} />
            </Navigator>
           </NavigationContainer>
    )
}
export default Navigation;