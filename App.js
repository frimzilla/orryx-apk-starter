import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [count, setCount] = React.useState(0);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#0b0f1a' }}>
      <Text style={{ color: 'white', fontSize: 22, fontWeight: '600', marginBottom: 12 }}>Orryx Demo</Text>
      <Text style={{ color: '#9cc9ff', marginBottom: 24 }}>Quick internal APK build via Expo EAS</Text>
      <Pressable onPress={() => setCount(c => c + 1)} style={{ paddingHorizontal: 16, paddingVertical: 10, borderRadius: 12, backgroundColor: '#1f2937' }}>
        <Text style={{ color: 'white' }}>Tap me: {count}</Text>
      </Pressable>
      <StatusBar style="light" />
    </View>
  );
}
