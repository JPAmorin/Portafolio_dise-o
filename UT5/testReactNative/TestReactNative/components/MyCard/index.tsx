import React, { ReactNode } from "react";
import { View, ViewStyle } from "react-native";
interface MyCardProps {
    children: ReactNode
    id: string
    style?: ViewStyle
}
const MyCard: React.FC<MyCardProps> = ({ id, children, style }) => {
    return (
    <View key={id} style={style}>
        {children}
    </View>)
}
export default MyCard