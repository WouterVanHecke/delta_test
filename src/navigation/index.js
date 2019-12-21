import React from "react";
import { View, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";

const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                title: "Delta test app"
            }
        },
        Details: {
            screen: DetailsScreen
        }
    },
    {
        initialRouteName: "Home",
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: "darkblue"
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                fontWeight: "bold",
                fontSize: 22
            }
        }
    }
);

export default createAppContainer(AppNavigator);
