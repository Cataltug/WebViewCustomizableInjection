## 🧠 Challenge: Customizable Injection

- Modify the code snippet below so that the site’s background can be set to a color other than `lightblue`.
- You should allow the user to change the color via a text input. If you prefer, you can also add buttons for a set of predefined colors.
- **Note:** You may also adjust the `style` prop of the `WebView` component!

```jsx
import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

const InjectExample = () => {
  const script = `document.body.style.backgroundColor = 'lightblue';`;

  return (
    <View style={{ flex: 1 }}>
      <WebView 
        source={{ uri: 'https://www.google.com' }} 
        injectedJavaScript={script} 
      />
    </View>
  );
};

export default InjectExample;
