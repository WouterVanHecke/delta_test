import React, { Component } from "react";
import { View, StyleSheet, SafeAreaView, Image, Text } from "react-native";
import NumberFormat from "react-number-format";

import { formatFullNumber, checkForPositiveNumber } from "../utils/dataFormatter";

export default DetailsScreen = props => {
    const item = props.navigation.getParam("item");

    const _renderMainContainer = () => {
        return (
            <View style={styles.mainInfoContainer}>
                <Image
                    source={{ uri: `https://delta.app/images/${item.id}/icon-64.png` }}
                    style={{ width: 80, height: 80, resizeMode: "contain" }}
                />
                <View style={styles.mainInfo}>
                    <Text style={styles.marketCapTextStyle}>Number {item.marketCapRank}</Text>
                    <Text style={styles.priceTextStyle}>$ {formatFullNumber(item.priceInUSD)}</Text>
                </View>
            </View>
        );
    };

    const _renderExtraInfo = () => {
        return (
            <React.Fragment>
                <Text style={styles.titleStyle}>Extra market info</Text>
                <View style={styles.extraInfoContainer}>
                    <View style={styles.infoWrapper}>
                        <View style={styles.infoItem}>
                            <Text style={styles.subtitle}>Market Cap</Text>
                            <NumberFormat
                                value={item.marketCapInUSD.toFixed(2)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                                renderText={value => <Text style={styles.infoTextStyle}>{value}</Text>}
                            />
                        </View>
                        <View style={styles.infoItem}>
                            <Text style={styles.subtitle}>Available Supply</Text>
                            <NumberFormat
                                value={item.availableSupply}
                                displayType={"text"}
                                thousandSeparator={true}
                                renderText={value => <Text style={styles.infoTextStyle}>{value}</Text>}
                            />
                        </View>
                        <View style={styles.infoItem}>
                            <Text style={styles.subtitle}>Volume 24h</Text>
                            <NumberFormat
                                value={item.volume24hInUSD.toFixed(2)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                                renderText={value => <Text style={styles.infoTextStyle}>{value}</Text>}
                            />
                        </View>
                        <View style={styles.infoItem}>
                            <Text style={styles.subtitle}>Change 24h</Text>
                            <Text
                                style={{
                                    ...styles.infoTextStyle,
                                    color: checkForPositiveNumber(item.percentChange24h) ? "green" : "red"
                                }}
                            >
                                {item.percentChange24h.toFixed(3)} %
                            </Text>
                        </View>
                        <View style={styles.infoItem}>
                            <Text style={styles.subtitle}>Change 1h</Text>
                            <Text
                                style={{
                                    ...styles.infoTextStyle,
                                    color: checkForPositiveNumber(item.percentChange1h) ? "green" : "red"
                                }}
                            >
                                {item.percentChange1h.toFixed(3)} %
                            </Text>
                        </View>
                        <View style={styles.infoItem}>
                            <Text style={styles.subtitle}>Change 7d</Text>
                            <Text
                                style={{
                                    ...styles.infoTextStyle,
                                    color: checkForPositiveNumber(item.percentChange7d) ? "green" : "red"
                                }}
                            >
                                {item.percentChange7d.toFixed(3)} %
                            </Text>
                        </View>
                    </View>
                </View>
            </React.Fragment>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            {_renderMainContainer()}
            {_renderExtraInfo()}
        </SafeAreaView>
    );
};

DetailsScreen.navigationOptions = screenProps => {
    const title = screenProps.navigation.getParam("item").name;
    return { title };
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#f2f2f2" },
    mainInfoContainer: {
        width: "100%",
        height: 150,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingHorizontal: 30
    },
    mainInfo: {
        paddingHorizontal: 25
    },
    marketCapTextStyle: {
        fontSize: 18,
        fontWeight: "800",
        color: "grey"
    },
    priceTextStyle: {
        fontSize: 24,
        fontWeight: "800"
    },
    extraInfoContainer: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: 20,
        paddingLeft: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        elevation: 5
    },
    titleStyle: { marginLeft: 20, fontWeight: "800", fontSize: 18, paddingVertical: 10 },
    infoWrapper: { flexDirection: "row", height: 75, width: "100%", flexWrap: "wrap" },
    infoItem: {
        height: "100%",
        width: "45%",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginHorizontal: 10
    },
    subtitle: {
        fontSize: 15,
        color: "grey"
    },
    infoTextStyle: { fontSize: 17, fontWeight: "800" }
});
