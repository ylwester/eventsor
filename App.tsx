import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import { Button, createTheme, Text, ThemeProvider } from '@rneui/themed'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { NunitoSans_400Regular, useFonts } from '@expo-google-fonts/nunito-sans'
import Ionicons from '@expo/vector-icons/Ionicons'

const RootStack = createBottomTabNavigator()

const theme = createTheme({
  Text: {
    style: {
      fontFamily: 'NunitoSans_400Regular'
    }
  }
})

const HomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button>Home</Button>
    </View>
  )
}

const BrowseScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button>Settings</Button>
    </View>
  )
}

const App = () => {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular
  })

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen
            name="Home"
            component={HomeScreen}
            options={() => ({
              headerShown: false,
              tabBarLabel: ({ focused }) => (
                <Text
                  style={{ fontWeight: focused ? '600' : '400', fontSize: 12 }}>
                  Odkrywaj
                </Text>
              ),
              tabBarIcon: ({ focused }) =>
                focused
                  ? (
                  <Ionicons size={24} name="ios-home" />
                    )
                  : (
                  <Ionicons size={24} name="ios-home-outline" />
                    )
            })}
          />
          <RootStack.Screen name="Browse" component={BrowseScreen} options={() => ({
            headerShown: false,
            tabBarLabel: ({ focused }) => (
              <Text
                style={{ fontWeight: focused ? '600' : '400', fontSize: 12 }}>
                Wyszukaj
              </Text>
            ),
            tabBarIcon: ({ focused }) =>
              focused
                ? (
                  <Ionicons size={24} name="ios-search" />
                  )
                : (
                  <Ionicons size={24} name="ios-search-outline" />
                  )
          })} />
        </RootStack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default App
