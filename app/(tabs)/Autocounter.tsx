import {useState, useEffect} from "react";
import {View, Text} from "react-native";

export default function AutoCounter() {
  const [count, setCount] = useState(0);

useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []); 


  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text>Counter: {count}</Text>
    </View>
  );
}