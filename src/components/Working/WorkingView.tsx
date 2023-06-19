import { Pressable, Text, View } from "react-native";
import Lottie from 'lottie-react-native';
import { WorkingViewProps } from "./types/WorkingViewProps";

export function WorkingView({ isOk, isWorking, title, ...props }: WorkingViewProps) {
  return (
    <View>
      {isOk ?
        <View style={{ height: 8, backgroundColor: isWorking ? '#8BE266' : '#FF4444' }} /> :
        <Pressable {...props} style={{
          flexDirection: 'row',
          marginHorizontal: 16,
          backgroundColor: isWorking ? '#8BE266' : '#FF4444',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderRadius: 8
        }}>
          <Text style={{
            color: '#16439E',
            paddingHorizontal: 16,
            fontSize: 10,
            fontFamily: 'Poppins-SemiBold'
          }}>{title}</Text>
          <Text style={{
            backgroundColor: '#16439E',
            color: '#FFF',
            paddingHorizontal: 20,
            fontSize: 10,
            fontFamily: 'Poppins-SemiBold',
            lineHeight: 20,
            borderBottomRightRadius: 8,
            borderTopRightRadius: 8
          }}>OK</Text>
        </Pressable>}
    </View>
  )
}