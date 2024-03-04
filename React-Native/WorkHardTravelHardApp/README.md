# 사용 API

- TouchableOpacity
- TextInput
- Alert
- AsyncStorage

### TouchableOpacity

```js
import { TouchableOpacity } from "react-native";
<TouchableOpacity></TouchableOpacity>;
```

사용이유 : IOS 와 안드로이드에서 동일시 하게 해주는 버튼
♻️ 옵션

1. activeOpacity : 버튼을 클릭할때의 투명도를 지정할 수 있다. ( 0.0 ~ 1.0 )

### TextInput

```js
import { TextInput } from "react-native";
<TextInput
  onSubmitEditing={Fn}
  onChangeText={Fn}
  returnKeyType="done"
  style={styles.input}
  value={text}
></TextInput>;
```

사용이유 : 사용자들로부터 텍스트 입력값을 받을 수 있다.
♻️ 옵션

1. onSubmitEditing : 사용자의 키보드의 입력을 눌렀을 때 실행되는 함수를 지정할 수 있다.
2. onChangeText : 사용자들이 입력하는 텍스트를 받을 수 있다. ( 따로 파라미터를 지정하지 않아도 상관없음)

```js
const onChangeText = (payload) => setText(payload);
```

3. returnKeyType : 사용자의 키보드의 엔터 버튼을 바꿀 수 있다. ( default, done, join 등등)

### Alert

```js
Alert.alert("큰제목", "작은 제목", [
  { text: "취소" },
  {
    text: "확인",
    style: "destructive",
    onPress: () => {},
  },
]);
```

사용이유 : Alert를 띄울 수 있으며, 해당 버튼을 눌렀을 때 실행할 함수도 정의할 수 있다.
♻️ 옵션

1. ("큰제목", "작은 제목") : Alert 창의 큰제목과 작은 제목을 첫번째 인자로 지정할 수 있다.
2. text : 버튼을 설정할 수 있다.

### AsyncStorage

설치방법 : `expo install @react-native-async-storage/async-storage`

```js
import AsyncStorage from "@react-native-async-storage/async-storage";
await AsyncStorage.getItem(KEY);
await AsyncStorage.setItem(KEY, value);
await AsyncStorage.removeItem(KEY);
```

사용이유 : 리엑트 네이티브에서 로컬 스토리지의 역할을 해준다. ( 다양한 것들을 Key 와 Value 형태로 지정할 수 있음 )
❗ 주의사항

1. AsyncStorage 는 async/await를 같이 사용해야 한다.
2. value는 문자열만 저장 되기때문에 문자열이 아닐 경우 문자열로 타입 변환을 해야 한다.
