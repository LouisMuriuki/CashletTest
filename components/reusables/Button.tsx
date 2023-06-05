import { ColorValue, FlexAlignType, Pressable, Text, View } from "react-native";
import React from "react";
interface Props {
  disabled?: boolean;
  onPress: () => void;
  text?: string;
  rippleColor?: ColorValue;
  backgroundColor?: ColorValue;
  height?: number;
  elevation?: number;
  margin?: number | string;
  fontSize?: number;
  fontWeight?: number | string;
  color?: ColorValue | string;
  fontFamily?: string;
  icon?: string;
  width?: number | string;
  paddingHorizontal?: number;
  borderRadius?: number;
  borderColor?: ColorValue;
  borderWidth?: number;
  justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignItems?: FlexAlignType;
  flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
  iconcolor?: ColorValue;
  iconsize?: number;
  marginHorizontal?: number | string;
  marginBottom?: number | string;
  marginTop?: number | string;
  loading?: boolean;
}

const Button = ({
  disabled,
  onPress,
  text,
  rippleColor,
  backgroundColor,
  height,
  elevation,
  margin,
  fontSize,
  color,
  fontFamily,
  width,
  paddingHorizontal,
  borderRadius,
  borderColor,
  borderWidth,
  justifyContent,
  alignItems,
  flexDirection,
  marginHorizontal,
  marginBottom,
  marginTop,
}: Props) => {
  return (
    <View
      style={{
        borderRadius: borderRadius ?? 0,
        justifyContent: justifyContent,
        elevation: elevation ?? 0,
        margin: margin ?? 0,
        marginBottom: marginBottom ?? 0,
        marginHorizontal: marginHorizontal ?? 0,
        marginTop: marginTop ?? 0,
        borderColor: borderColor,
        flexDirection: flexDirection ?? "row",
        borderWidth: borderWidth ?? 0,
        alignItems: alignItems ?? "center",
        backgroundColor: backgroundColor,
      }}
    >
      <Pressable
        disabled={disabled}
        android_ripple={{ color: rippleColor, borderless: true }}
        onPress={onPress}
        style={{
          backgroundColor: backgroundColor,
          height: height ?? 0,
          width: width ?? 0,
          borderRadius: borderRadius ?? 0,
          paddingHorizontal: paddingHorizontal ?? 0,
          borderColor: backgroundColor,
          justifyContent: justifyContent ?? "center",
          alignItems: alignItems ?? "center",
          flexDirection: flexDirection ?? "row",
        }}
      >
        <Text
          style={{
            fontSize: fontSize ?? 0,
            color: color,
            fontFamily: fontFamily,
            justifyContent: justifyContent ?? "center",
            alignItems: alignItems ?? "center",
          }}
        >
          {text}
        </Text>
      </Pressable>
    </View>
  );
};
export default Button;
