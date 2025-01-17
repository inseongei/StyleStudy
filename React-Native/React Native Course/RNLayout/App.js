import { StyleSheet, View } from "react-native";
import Box from "./components/Box";

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "#8e9b00", top: 75, left: 75 }}>Box 1</Box>
      <Box style={{ backgroundColor: "#b65d1f" }}>Box 2</Box>
      <Box style={{ backgroundColor: "#1c4c56" }}>Box 3</Box>
      <Box
        style={{
          backgroundColor: "green",
          position: "absolute",
          top: 100,
          left: 100,
        }}
      >
        Box 4
      </Box>
      <Box style={{ backgroundColor: "blue" }}>Box 5</Box>
      <Box style={{ backgroundColor: "orange" }}>Box 6</Box>
      <Box style={{ backgroundColor: "yellow" }}>Box 7</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 64,
    borderWidth: 6,
    borderColor: "red",
  },
});
