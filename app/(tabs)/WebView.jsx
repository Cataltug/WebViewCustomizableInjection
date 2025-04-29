import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Alert } from 'react-native';
import { WebView } from 'react-native-webview';


const namedColors = [
  "red","green","blue","yellow","lightblue",
  "tomato","orange","purple","pink","brown",
  "gray","black","white","dodgerblue","seagreen"
];

const InjectExample = () => {
  const [bgColor, setBgColor] = useState("lightblue");


  const isValidColor = (str) => {
    return namedColors.includes(str.toLowerCase());
  };

  const handleColorChange = (text) => {
    const color = text.trim().toLowerCase();
    if (!isValidColor(color)) {
      Alert.alert(
        "invalid color",
        `"${text}" is not a valid color.\nPlease use one of those: ${namedColors.join(", ")}`
      );
      return;
    }
    setBgColor(color);
  };

  return (
    <View style={styles.container}>
      <WebView
        key={bgColor}
        source={{ uri: "https://www.google.com" }}
        style={styles.webview}
        injectedJavaScript={`document.body.style.backgroundColor = "${bgColor}"; true;`}
      />

      <TextInput
        style={styles.input}
        placeholder="Example: red, blue, tomato"
        onSubmitEditing={(e) => handleColorChange(e.nativeEvent.text)}
        returnKeyType="done"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  webview: {
    flex: 1
  },
  input: {
    height: 40,
    borderWidth: 1,
    margin: 8,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
});

export default InjectExample;