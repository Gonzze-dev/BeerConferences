import { useEffect, useState } from 'react'
import { loadAsync } from 'expo-font'

import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Routes from "./src/Routes/Routes";
import LoadingIndicator from './src/Components/Loading';

export default function App() {
  const [loadingFonts, setLoadingFonts] = useState(false)

    const loadFonts = async () => {
        await loadAsync({
            "roboto-black": require('./src/assets/fonts/Roboto/Roboto-Black.ttf'),
            "roboto-bold": require('./src/assets/fonts/Roboto/Roboto-Bold.ttf'),
            "roboto-medium": require('./src/assets/fonts/Roboto/Roboto-Medium.ttf'),
            "impact": require('./src/assets/fonts/Impact/Impact.ttf')
        })
        setLoadingFonts(true)
    }

    useEffect(() => {
        if (!loadingFonts) {loadFonts()};
    })

  return (
    <View style={styles.container}>
      {loadingFonts?
        <>
          <StatusBar />
          <Routes />
        </>
      :
        <LoadingIndicator/>
      }
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
