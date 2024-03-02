import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Pressable,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import { theme } from "./colors";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Fontisto } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const STORAGE_KEY = "@toDos";
const LASTLOCATION_KEY = "@lastLocation";

export default function App() {
  const [working, setWorking] = useState("");
  const [text, setText] = useState("");
  const [toDos, setToDos] = useState({});

  useEffect(() => {
    const loadToDos = async () => {
      const strTodos = await AsyncStorage.getItem(STORAGE_KEY);
      const lastLocation = await AsyncStorage.getItem(LASTLOCATION_KEY);
      lastLocation === "Work" ? setWorking(true) : setWorking(false);
      setToDos(JSON.parse(strTodos));
    };
    loadToDos();
  }, []);

  const changeMenu = async (Menu) => {
    Menu === "Work" ? setWorking(true) : setWorking(false);
    await AsyncStorage.setItem("@lastLocation", Menu);
  };

  const onChangeText = (payload) => setText(payload);

  const saveToDos = async (toSave) => {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  };

  // Todo 추가 함수
  const addTodo = async () => {
    if (text === "") {
      return;
    }
    const newToDos = {
      ...toDos,
      [Date.now()]: { text, working, completed: false },
    };
    setToDos(newToDos);
    await saveToDos(newToDos);
    setText("");
  };

  // Todo 삭제 함수
  const deleteTodo = (key) => {
    Alert.alert("할일을 삭제하시겠습니까 ?", "삭제하면 되돌릴 수 없습니다.", [
      { text: "취소" },
      {
        text: "확인",
        style: "destructive",
        onPress: () => {
          const newToDos = { ...toDos };
          delete newToDos[key];
          setToDos(newToDos);
          saveToDos(newToDos);
        },
      },
    ]);
  };

  const checkTodos = (key) => {
    const newToDos = { ...toDos };
    newToDos[key].completed = !newToDos[key].completed;
    setToDos(newToDos);
    saveToDos(newToDos);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => changeMenu("Work")}>
          <Text
            style={{ ...styles.btnText, color: working ? "white" : theme.grey }}
          >
            Work
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeMenu("Travel")}>
          <Text
            style={{
              ...styles.btnText,
              color: !working ? "white" : theme.grey,
            }}
          >
            Travel
          </Text>
        </TouchableOpacity>
      </View>
      <TextInput
        onSubmitEditing={addTodo}
        onChangeText={onChangeText}
        returnKeyType="done"
        placeholder={working ? "할일을 적어주세요" : "여행 계획을 적어줘"}
        style={styles.input}
        value={text}
      ></TextInput>
      <ScrollView>
        {Object.keys(toDos).map((key) =>
          toDos[key].working === working ? (
            <View style={styles.toDo} key={key}>
              <TouchableOpacity
                style={styles.flexBox}
                onPress={() => checkTodos(key)}
              >
                <Text style={styles.checkIconBox}>
                  <AntDesign
                    name={toDos[key].completed ? "checksquare" : "checksquareo"}
                    size={24}
                    color={toDos[key].completed ? "black" : "white"}
                  />
                </Text>
                <Text
                  style={{
                    ...styles.toDoText,
                    color: toDos[key].completed ? "black" : "white",
                  }}
                >
                  {toDos[key].text}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteTodo(key)}>
                <Text>
                  <Fontisto name="trash" size={18} color={theme.toDoBg} />
                </Text>
              </TouchableOpacity>
            </View>
          ) : null
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal: 20,
  },
  flexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 100,
  },
  btnText: {
    fontSize: 38,
    fontWeight: 600,
  },
  input: {
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginVertical: 20,
    fontSize: 18,
  },
  checkIconBox: {
    marginRight: 10,
  },
  toDo: {
    backgroundColor: theme.grey,
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  toDoText: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
});
