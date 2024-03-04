# 사용 API

1. [ScrollView](#ScrollView)
2. [Dimensions](#Dimensions)
3. [ActivityIndicator](#ActivityIndicator)
4. [Location](#Location)
5. [expo/vector-icons](#expo/vector-icons)

### ScrollView

```js
import { ScrollView } from "react-native";
<ScrollView
  pagingEnabled
  horizontal
  showsHorizontalScrollIndicator={false}
  contentContainerStyle={styles.weather}
></ScrollView>;
```

사용이유 : 리엑트 네이티브는 브라우저가 아니기 때문에 초과된 콘텐츠에 대한 스크롤뷰가 필요하다.

📋옵션

`pagingEnabled` : 크기에 맞게 스크롤을 시켜준다. ( 기본값 : 스크롤함에 있어 기준이 없음 )

`horizontal` : 스크롤의 기준을 수평(가로)으로 해준다. ( 기본값 : 세로 )

`showsHorizontalScrollIndicator` : 수평 스크롤시 스크롤바를 표시한다. ( 기본값 : True )

`contentContainerStyle` : 스크롤바에서의 스타일을 지정한다.

### Dimensions

```js
import { Dimensions } from "react-native";
const { width: SCREEN_WIDTH } = Dimensions.get("window");
```

사용이유 : 사용자들의 기기에 맞게 넓이와 높이를 계산해준다.

📋옵션

`width` : 넓이

`height` : 높이

### ActivityIndicator

```js
import { ActivityIndicator } from "react-native";
<ActivityIndicator color="white" size="large" />;
```

사용이유 : 데이터를 받아오는 시간에 대한 로딩UI를 대체해준다.

📋옵션

`color`
`size` : large , small

### Location

```js
import * as Location from "expo-location";
const { granted } = await Location.requestForegroundPermissionsAsync();
const {
  coords: { latitude, longitude },
} = await Location.getCurrentPositionAsync({ accuracy: 5 });
const location = await Location.reverseGeocodeAsync(
  { latitude, longitude },
  { useGoogleMaps: false }
);
```

사용이유 : 유저의 위치정보의 권한을 받고 여러 정보들을 가져온다.

📋옵션

1. `requestForegroundPermissionsAsync()` : 유저에 권한을 달라고 요청한다.
 
   1-1. `granted` : 유저에게서 받은 권한 ( true , false )
   
2. `getCurrentPositionAsync({ accuracy: 5 })` : 사용자의 현재 위치에 해당하는 좌표를 가져온다.
   
   2-1. `accuracy` : 정확도를 의미하는데 값이 낮을수록 더 세밀한 정보를 가져오지만 응답시간이 길어질 수 있다.
   
3. `reverseGeocodeAsync( { latitude, longitude },{ useGoogleMaps: false })` : 위도와 경도에 대한 사용자 위치를 가져온다.
   
   3-1. `latitude` : 위도
   
   3-2. `longitude` : 경도
   
   3-3. `useGoogleMaps` : 구글맵을 사용하는지의 여부

### expo/vector-icons

```js
import { AntDesign } from "@expo/vector-icons";
```

[아이콘 사용](https://icons.expo.fyi/Index)
