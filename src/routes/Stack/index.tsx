import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Splash } from "../../pages/Splash";
import { Home } from "../../pages/Home";
import { TStack } from "./types";

const { Navigator, Screen } = createNativeStackNavigator<TStack>();

export function Stack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ animation: 'none' }}>
        <Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        <Screen name="Home" component={Home} options={{ headerShown: false }} />
      </Navigator>
    </NavigationContainer>
  );
}