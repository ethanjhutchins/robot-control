import { useServerConnection } from '@/hooks/useServerConnection';
import { useEffect } from 'react';
import { Dimensions, SafeAreaView, Text, View } from 'react-native';

export default function MotionScreen() {

  const { height, width } = Dimensions.get("window");

  useEffect(() => {
    useServerConnection()
  }, [])

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <View style={{ flex: 1, justifyContent: 'center', borderColor: 'white' }}>
        <Text style={{ color: 'white', textAlign: 'center', }}>ros3djs visualiser</Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', borderColor: 'white' }}>
        <Text style={{ color: 'white', textAlign: 'center', }}>sliders</Text>
      </View>
    </SafeAreaView>
  )
}

