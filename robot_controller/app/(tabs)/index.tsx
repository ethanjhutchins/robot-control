import RosContext from '@/components/RosContext';
import ServerConnection from '@/hooks/useServerConnection';
import { useContext, useEffect, useState } from 'react';
import { Dimensions, SafeAreaView, Text, View } from 'react-native';

export default function MotionScreen() {
  const { height, width } = Dimensions.get("window");
  const { ros, isConnected } = useContext(RosContext);
  const [robot_description, setRobotDescription] = useState<Object>({});

  useEffect(() => {
    const getRobotDescription = async () => {
      if (isConnected && !robot_description) {
        const desc = await ServerConnection.getRobotDescription(ros);
        setRobotDescription(desc);
      }
    }
    getRobotDescription()
  }, [isConnected])

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <View style={{ flex: 1, justifyContent: 'center', borderColor: 'white' }}>
        <Text style={{ color: 'white', textAlign: 'center', }}>{JSON.stringify(robot_description)}</Text>
        {/* <Text style={{ color: 'white', textAlign: 'center', }}>ros3djs visualiser</Text> */}
      </View>
      <View style={{ flex: 1, justifyContent: 'center', borderColor: 'white' }}>
        <Text style={{ color: 'white', textAlign: 'center', }}>sliders</Text>
      </View>
    </SafeAreaView>
  )
}

