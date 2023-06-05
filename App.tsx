import Main from "./screens/Main";
import { StyleSheet, StatusBar, View} from "react-native";
import SnackBarContextProvider from "./context/SnackBarContext";

export default function App() {
 
  return (
    <SnackBarContextProvider>
      <View style={styles.container}>
        <StatusBar
          translucent
          barStyle={"light-content"}
          backgroundColor={"#5A5A5A"}
        />
        <Main />
      </View>
    </SnackBarContextProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
