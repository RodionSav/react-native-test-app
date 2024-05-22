import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppContent } from "./components/AppContent/AppContent";
import { PersonDetailsModal } from "./components/PersonDetailsModal/PersonDetailsModal";

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={AppContent} />
        <Stack.Screen name="DetailsModal" component={PersonDetailsModal} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}