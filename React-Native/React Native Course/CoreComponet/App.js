import { View, Button, Modal, Text } from "react-native";
import { useState } from "react";

export default function App() {
  const [isModal, setIsModal] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Button title={"Press"} onPress={() => setIsModal(true)} color={"blue"} />
      <Modal
        visible={isModal}
        onRequestClose={() => setIsModal(false)}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <View style={{ flex: 1, backgroundColor: "lightblue", padding: 60 }}>
          <Text>Modal Content</Text>
          <Button
            title="Close"
            color="midnightblue"
            onPress={() => setIsModal(false)}
          />
        </View>
      </Modal>
    </View>
  );
}
