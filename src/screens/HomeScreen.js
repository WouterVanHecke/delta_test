import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

class HomeScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: "Delta test app"
        };
    };

    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return <View></View>;
    }
}

export default HomeScreen;
