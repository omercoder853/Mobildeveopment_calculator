import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, useWindowDimensions, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from './styles/global';
import { Feather } from '@expo/vector-icons';
import Display from './Display';
import MainButtons from './MainButtons';
import SideButtons from './SideButtons';
const mainButtons = [
  { label: 'C', is_icon: false, color: '#2196F3', action: 'clear' },
  { label: '/', is_icon: true, color: '#2196F3', action: 'divide' },
  { label: 'x', is_icon: true, color: '#2196F3', action: 'x' },

  { label: '7', is_icon: false, color: 'white', action: 'number' },
  { label: '8', is_icon: false, color: 'white', action: 'number' },
  { label: '9', is_icon: false, color: 'white', action: 'number' },

  { label: '4', is_icon: false, color: 'white', action: 'number' },
  { label: '5', is_icon: false, color: 'white', action: 'number' },
  { label: '6', is_icon: false, color: 'white', action: 'number' },

  { label: '1', is_icon: false, color: 'white', action: 'number' },
  { label: '2', is_icon: false, color: 'white', action: 'number' },
  { label: '3', is_icon: false, color: 'white', action: 'number' },

  { label: '%', is_icon: false, color: 'white', action: 'operator' },
  { label: '0', is_icon: false, color: 'white', action: 'number' },
  { label: ',', is_icon: false, color: 'white', action: 'operator' },
];

const sideButtons = [
  { label: '<-', is_icon: true, color: '#2196F3', action: 'delete', is_double: false },
  { label: '-', is_icon: true, color: '#2196F3', action: 'minus', is_double: false },
  { label: '+', is_icon: true, color: '#2196F3', action: 'plus', is_double: false },
  { label: '=', is_icon: false, color: 'white', action: 'calculate', is_double: true },
];

const operators = ["+", "-", "x", "/", ","]

export default function App() {
  const [display, setdisplay] = useState("0");
  const [output, setoutput] = useState("");
  const handlePress = (label, action) => {
    setdisplay(prev => {
      if (prev == "0" && action == "number") {
        return label
      }
      else if (action == "clear") {
        setoutput("")
        return "0"
      }
      else if (action == 'calculate') {
        let formula = display
        if (operators.includes(display.at(-1))) {
          return prev
        }
        else if (display.includes(",")) {
          formula = formula.replaceAll(",", ".")
        }
        else if (display.includes("x")) {
          formula = formula.replaceAll("x", "*")
        }
        try {
          setoutput(String(eval(formula)))
          return prev
        }
        catch (error) {
          setoutput("Error")
          setTimeout(() => {
            setdisplay("0");
            setoutput("");
          }, 700)
        }
      }
      else if (action == 'delete') {
        if (display != "" && display != "0") {
          const text = display.slice(0, -1)
          if (text == "") {
            return "0"
          }
          return text
        }
        else { return "0" }
      }
      else if (operators.includes(label) && operators.includes(prev.at(-1))) {
        return prev
      }
      return prev + label
    })
  }
  const {width,height} = useWindowDimensions();
  const isHorizontal = width > height
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <SafeAreaView style={[styles.safeArea, isHorizontal ? { flexDirection: 'row' } : { flexDirection: 'column' }]}>
      <Display isHorizontal={isHorizontal} height={height} width={width} display={display} output={output} />
      <View style={[styles.button_container, isHorizontal ? { width: width * 0.6, height: '100%',borderBottomStartRadius:40,paddingRight:30} : { height: height * 0.6 }]}>
        <MainButtons mainButtons={mainButtons} height={height} width={width} handlePress={handlePress} isHorizontal={isHorizontal} />
        <SideButtons sideButtons={sideButtons} height={height} width={width} handlePress={handlePress} isHorizontal={isHorizontal} />
      </View>
    </SafeAreaView>
    </SafeAreaProvider>
  );
}
