import React, { ReactNode } from 'react';
import { Pressable, View, ViewStyle } from 'react-native';

interface MyCardProps {
  children: ReactNode;
  id: string;
  style?: ViewStyle;
  onPress: () => void;
}

const MyCard: React.FC<MyCardProps> = ({ id, children, style, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View key={id} style={style}>
        {children}
      </View>
    </Pressable>
  );
}

export default MyCard;
