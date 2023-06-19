import { View, StatusBar, BackHandler } from "react-native";
import { Working } from "../../components/Working";
import { useEffect } from "react";

export function Home() {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true);
    return () => backHandler.remove();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#FFF' }}>
      <StatusBar hidden={false} backgroundColor="#FFF" barStyle={"dark-content"} />
      <Working status="none" />
    </View>
  )
}