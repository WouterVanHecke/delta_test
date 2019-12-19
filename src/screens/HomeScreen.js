import React, { Component } from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";

import CoinsList from "../redux/components/CoinsList";

export default HomeScreen = props => {
    const goToDetails = item => {
        props.navigation.navigate("Details", item);
    };

    return (
        <SafeAreaView style={styles.container}>
            <CoinsList goToDetails={goToDetails} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#f2f2f2" }
});
