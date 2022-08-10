import "@expo/match-media";
import { ActivityIndicator, StyleSheet } from "react-native";
import { useResponsiveScreen } from "./app/hook/useResponsiveScreen";
import {
  useFonts,
  Lexend_300Light,
  Lexend_500Medium,
  Lexend_400Regular,
  Lexend_700Bold,
} from "@expo-google-fonts/lexend";
import ContactUs from "./ContactUs";
import Landing from "./Landing";
import { createStackNavigator } from "@react-navigation/stack";
import { LinkingOptions, NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

const linking = {
  config: {
    screens: {
      landing: "/",
      contactus: "contactus",
      NotFound: "*",
    },
  },
};

const Nav = () => (
  <NavigationContainer linking={linking}>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="landing" component={Landing} />
      <Stack.Screen name="contactus" component={ContactUs} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default function App() {
  const { isDesktopOrLaptop, isTabletOrMobile } = useResponsiveScreen();
  let [fontsLoaded] = useFonts({
    Lexend_300Light,
    Lexend_500Medium,
    Lexend_400Regular,
    Lexend_700Bold,
  });

  if (!fontsLoaded) return <ActivityIndicator size={"large"} />;

  return <Nav />;
}
