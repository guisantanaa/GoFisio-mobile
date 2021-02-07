import "react-native-gesture-handler";
import React from "react";
import { View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppProvider from "./hooks";
import Routes from "./routes";

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#D7DEDC" />
    <AppProvider>
      <View style={{ flex: 1, backgroundColor: "#D7DEDC" }}>
        <Routes />
      </View>
    </AppProvider>
  </NavigationContainer>
);

export default App;
