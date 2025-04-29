import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const InjectExample = () => {
  const [bgColor, setBgColor] = useState("lightblue");

  return (
    <View style={styles.container}>

      <WebView
        key={bgColor}
        source={{ uri: 'https://www.google.com' }}
        style={styles.webview}
        injectedJavaScript={`document.body.style.backgroundColor = '${bgColor}';`}
      />

      <TextInput
        style={styles.input}
        placeholder="Example: red, #00ff00, blue"
        onSubmitEditing={(e) => setBgColor(e.nativeEvent.text.trim())}
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