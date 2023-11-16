import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Router from "./routes";

export default function App() {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});
