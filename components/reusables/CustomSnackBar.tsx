import React, {  useEffect,useRef, useContext } from "react";
import {
  View,
  Text,
  Animated,
  Pressable,
  StyleSheet
} from "react-native";
import { SnackBarContext } from "../../context/SnackBarContext";
import Icon from 'react-native-vector-icons/AntDesign'
import { Text1, Text2 } from "../../constants";

interface SnackbarProps {
  duration: number;
}

const CustomSnackbar = ({ duration }: SnackbarProps) => {
  const { snackmessage,setSnackMessage, snackvisible, setSnackVisible } =
    useContext(SnackBarContext);
    const positionY = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    if (snackvisible) {
      Animated.spring(positionY, {
        toValue: 0,
        useNativeDriver: true,
      }).start();

      const timeout = setTimeout(() => {
        hideSnackbar();
      }, duration);

      return () => clearTimeout(timeout);
    }
  }, [snackvisible]);

  const hideSnackbar = () => {
    Animated.timing(positionY, {
      toValue: -100,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setSnackVisible(false);
      setSnackMessage(Text1)
    });
  };
   
  const onSnackbarClick=()=>{
    setSnackMessage(Text2)
  }

  if (!snackvisible) {
    return null;
  }

  return (
    <Animated.View style={[styles.container,  { transform: [{ translateY: positionY }] }]}>
      <View style={{ width: "90%",marginRight:10 }}>
        <Pressable onPress={onSnackbarClick}>
          <Text style={styles.message}>{snackmessage}</Text>
        </Pressable>
      </View>
      <View
        style={{ width: "10%", alignItems: "center", justifyContent: "center" }}
      >
        <Icon name="close" size={24} color="#fff" onPress={hideSnackbar} />
      </View>
    </Animated.View>
  );
};

const styles  = StyleSheet.create({
  container: {
    display: "flex",
    zIndex: 1,
    position: "absolute",
    top: 40,
    left: 20,
    right: 20,
    backgroundColor: "#F92A53",
    borderRadius: 8,
    padding: 16,
    flexDirection: "row",
  },
  message: {
    color: "#fff",
    fontSize: 16,
  },
  closeButton: {
    marginLeft: 16,
    paddingVertical: 8,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CustomSnackbar;
