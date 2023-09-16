import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MapScreen from "../MapScreen/MapScreen";
import ProfileScreen from "../ProfileScreen/ProfileScreen";
const ProfileStack = createStackNavigator();
const ProfileNavStack = () => {
  return (
    <ProfileStack.Navigator initialRouteName="ProfileScreen">
      <ProfileStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <ProfileStack.Screen
        name="MapScreen"
        component={MapScreen}
        options={{ headerShown: false }}
      />
    </ProfileStack.Navigator>
  );
};
export default ProfileNavStack;
