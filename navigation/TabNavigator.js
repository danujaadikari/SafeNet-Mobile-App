import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import ProfileScreen from "../screens/ProfileScreen";
import WebsitesScreen from "../screens/WebsitesScreen";
import KeyloggingScreen from "../screens/KeyloggingScreen";
import EmergencyAlertScreen from "../screens/EmergencyAlertScreen";
import MonthlyReportsScreen from "../screens/MonthlyReportsScreen";
import LogoutScreen from "../screens/LogoutScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Profile") iconName = "person-circle";
          else if (route.name === "Websites") iconName = "globe";
          else if (route.name === "Keylogging") iconName = "key";
          else if (route.name === "Emergency") iconName = "alert-circle";
          else if (route.name === "Reports") iconName = "bar-chart";
          else if (route.name === "Logout") iconName = "exit";

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#34a4eb",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Websites" component={WebsitesScreen} />
      <Tab.Screen name="Keylogging" component={KeyloggingScreen} />
      <Tab.Screen name="Emergency" component={EmergencyAlertScreen} />
      <Tab.Screen name="Reports" component={MonthlyReportsScreen} />
      <Tab.Screen name="Logout" component={LogoutScreen} />
    </Tab.Navigator>
  );
}
