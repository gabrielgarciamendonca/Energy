import { View } from "react-native";
import Lottie from 'lottie-react-native';

export function Splash() {
  return (
    <View style={{ flex: 1, backgroundColor: '#16439E', justifyContent: 'center', alignItems: 'center' }}>
      <Lottie style={{ width: 120, height: 120 }} source={require('../../assets/lottie/loading.json')} autoPlay loop />
    </View>
  )
}