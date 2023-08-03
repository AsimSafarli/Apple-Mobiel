import { StatusBar } from 'expo-status-bar';
import { useState,useCallback ,useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import Home from './Page/Home/Home';

export default function App() {
  SplashScreen.preventAutoHideAsync();
  const [appReady,setAppReady] =useState(false)
  useEffect(() => {
    async function prepare() {
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appReady) {
      await SplashScreen.hideAsync();
    }
  }, [appReady]);

  if (!appReady) {
    return null;
  }
  return (
    <SafeAreaView  onLayout={onLayoutRootView} style={styles.main}>
    <Home/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main:{
    width:"100%",
    height:"100%",
    backgroundColor:"#F0F0F0",
    
  }
})