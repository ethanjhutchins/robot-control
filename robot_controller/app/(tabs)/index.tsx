import { Dimensions, SafeAreaView, Text } from 'react-native';

export default function MotionScreen() {

  const { height, width } = Dimensions.get("window");

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <Text style={{ color: 'white', textAlign: 'center', }}>HELLO THERE</Text>
    </SafeAreaView>
  )
}

