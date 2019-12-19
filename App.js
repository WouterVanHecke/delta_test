import React from "react";
import { Provider } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import { PersistGate } from "redux-persist/integration/react";

import AppContainer from "./src/navigation";
import { store, persistor } from "./src/redux/store";

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <AppContainer />
            </PersistGate>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});
