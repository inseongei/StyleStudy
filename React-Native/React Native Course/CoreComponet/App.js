import { View, StyleSheet, Text } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.darkmode}>
        <Text style={styles.darkmodeText}>
          Style Inheritance<Text style={styles.boldText}>in bold</Text>
        </Text>
      </View>
      <View style={[styles.box, styles.lightblueBg, styles.boxShadow]}>
        <Text>Lightblue box</Text>
      </View>
      <View style={[styles.box, styles.lightgreenBg, styles.androidShadow]}>
        <Text>Lightgreen box</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
  },

  darkmode: {
    backgroundColor: "black",
  },

  darkmodeText: {
    color: "#fff",
  },

  boldText: {
    fontWeight: "bold",
  },

  box: {
    width: 250,
    height: 250,
    borderWidth: 2,
    borderColor: "purple",
    borderStyle: "soild",
    border: "2px solid purple",
    borderRadius: 5,
    margin: 70,
  },

  lightblueBg: {
    backgroundColor: "blue",
  },

  lightgreenBg: {
    backgroundColor: "lightgreen",
  },

  boxShadow: {
    shadowColor: "#333333",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
  },

  androidShadow: {
    elevation: 10,
  },
});
