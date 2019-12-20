import React, { Component } from "react";
import { View, StyleSheet, Image, Text, ActivityIndicator, FlatList, TouchableNativeFeedback } from "react-native";
import { connect } from "react-redux";

import { fetchCoins, setPage } from "../actions/coinsActions";

class CoinsList extends Component {
    componentDidMount() {
        this.props.fetchCoins(1);
    }

    _formatNumber(value) {
        var suffixes = ["", "K", "M", "B", "T"];
        var suffixNum = Math.floor(("" + value).length / 3);
        var shortValue = parseFloat((suffixNum != 0 ? value / Math.pow(1000, suffixNum) : value).toPrecision(2));
        if (shortValue % 1 != 0) {
            shortValue = shortValue.toFixed(2);
        }
        return shortValue + " " + suffixes[suffixNum];
    }

    _checkForPositiveNumber(value) {
        if (Math.sign(value) === 1) return true;
        return false;
    }

    _onRefresh = () => {
        this.props.setPage(1);
        this.props.fetchCoins(1);
    };

    _fetchMoreData = () => {
        const { page } = this.props;
        this.props.setPage(page + 1);
        this.props.fetchCoins(page + 1);
    };

    _goToDetailsScreen = item => {
        this.props.goToDetails(item);
    };

    _renderListItem = (item, first) => {
        return (
            <TouchableNativeFeedback onPress={() => this._goToDetailsScreen(item)}>
                <View style={{ ...styles.itemContainer, marginTop: first ? 20 : 5 }}>
                    <View style={styles.iconContainer}>
                        <Image
                            source={{ uri: `https://delta.app/images/${item.id}/icon-64.png` }}
                            style={{ width: 40, height: 40, resizeMode: "contain" }}
                        />
                    </View>
                    <View style={styles.contentContainer}>
                        <View style={{ ...styles.info }}>
                            <Text style={styles.nameStyle}>
                                {item.name.substring(0, 16)}
                                {item.name.length > 16 && "..."}
                            </Text>
                            <Text style={styles.mcStyle}>${this._formatNumber(item.marketCapInUSD.toFixed(0))}</Text>
                        </View>
                        <View style={{ ...styles.info }}>
                            <Text style={{ ...styles.nameStyle, textAlign: "right" }}>
                                $ {item.priceInUSD.toFixed(2)}
                            </Text>
                            <Text
                                style={{
                                    ...styles.mcStyle,
                                    textAlign: "right",
                                    color: this._checkForPositiveNumber(item.percentChange24h) ? "green" : "red"
                                }}
                            >
                                {item.percentChange24h.toFixed(2)} %
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableNativeFeedback>
        );
    };

    _renderFooter = () => {
        return (
            <View style={styles.loader}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    };

    _renderFlatList = (coins, loading) => {
        return (
            <FlatList
                data={coins}
                refreshing={loading}
                keyExtractor={item => item.id}
                renderItem={({ item, index }) => this._renderListItem(item, index === 0)}
                onRefresh={this._onRefresh}
                onEndReached={this._fetchMoreData}
                onEndReachedThreshold={0.1}
                ListFooterComponent={this._renderFooter}
            />
        );
    };

    render() {
        const { loading, coins } = this.props;

        return (
            <View style={styles.container}>
                {loading && <ActivityIndicator size="small" color="#0000ff" />}
                {!loading && this._renderFlatList(coins, loading)}
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        coins: state.coinsReducer.coins,
        loading: state.coinsReducer.loading,
        page: state.coinsReducer.page
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchCoins: page => dispatch(fetchCoins(page)),
        setPage: page => dispatch(setPage(page))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoinsList);

const styles = StyleSheet.create({
    container: { flex: 1 },
    itemContainer: {
        height: 100,
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    iconContainer: {
        height: "100%",
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden"
    },
    contentContainer: {
        height: "100%",
        flex: 1,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderLeftWidth: 3,
        borderLeftColor: "lightgrey",
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    nameStyle: {
        fontSize: 20,
        fontWeight: "800"
    },
    mcStyle: {
        color: "grey"
    },
    loader: {
        alignItems: "center",
        marginVertical: 10
    }
});

/*
 Object {
        "availableSupply": 108965976.6865,
        "code": "eth",
        "dirtyCode": "ETH",
        "id": "V1Y7OX",
        "marketCapInUSD": 13927718821.78605,
        "marketCapRank": 2,
        "name": "Ethereum",
        "percentChange1h": 0.191645,
        "percentChange24h": 0.558523,
        "percentChange7d": -11.4384,
        "priceInUSD": 127.80096318,
        "slug": "ethereum",
        "totalSupply": 108965976.6865,
        "volume24hInUSD": 10411099915.2826,
      },
      */
