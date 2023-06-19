import { View, StatusBar } from "react-native";

export function Home() {
  return (
    <View style={{ flex: 1, backgroundColor: '#FFF', justifyContent: 'center', alignItems: 'center' }}>
      <StatusBar hidden={false} backgroundColor="#FFF" barStyle={"dark-content"} />
    </View>
  )
}