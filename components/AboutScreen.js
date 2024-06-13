import { Text, View } from 'react-native';

function AboutScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text onPress={() => console.log('hello pradeep')}>About!</Text>
    </View>
  );
  
}

export default AboutScreen