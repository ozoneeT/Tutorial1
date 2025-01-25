import { View, Image, StyleSheet } from 'react-native';
import { useEffect } from 'react';
import { useRouter } from 'expo-router';

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    // Set timeout to redirect after 5 seconds
    const timer = setTimeout(() => {
      router.replace('/onboardingScreen');
    }, 5000);

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {/* Replace with your splash screen image */}
      <Image
        source={require('@/assets/images/react-logo.png')}
        style={styles.splashImage}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashImage: {
    width: '80%',
    height: '80%',
  },
});
