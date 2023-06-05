import { View } from "react-native";
import Header from "../components/Header";
import Goals from "../components/Goals";
import { DarkBlueGreycolor } from "../constants";
import CustomSnackbar from "../components/reusables/CustomSnackBar";

const Main = () => {
  return (
    <View style={{ backgroundColor: DarkBlueGreycolor, flex: 1 }}>
      <CustomSnackbar duration={10000} />
      <Header />
      <Goals />
    </View>
  );
};

export default Main;
