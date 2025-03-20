import { useState } from "react";
import { View, Text, Button,} from "react-native";

export default function app() {
  const [count, setCount] = useState(0);

  return (
    <View style={{alignItems:"center", justifyContent: "center",flex:1}}>
      <Text >Counter: {count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)}/>
      <Button title="Decrement" onPress={() => setCount(count - 1)}/>
    </View>
  );
};