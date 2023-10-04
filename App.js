import { StatusBar } from "expo-status-bar"
import { StyleSheet, View, SafeAreaView } from "react-native";
import Home from "./Home/Home";

export default function App() {

  return (
    <SafeAreaView >
      <StatusBar style="auto" />
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});