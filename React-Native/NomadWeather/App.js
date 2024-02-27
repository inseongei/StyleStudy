import { StatusBar } from "expo-status-bar";
import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ActivityIndicator,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import * as Location from "expo-location";
const { width: SCREEN_WIDTH } = Dimensions.get("window");

const icons = {
  Clouds: "cloudy",
};

export default function App() {
  const [city, setCity] = useState("Loading...");
  const [codeit, setCodeit] = useState();
  const [ok, setOk] = useState(true);
  const getWeather = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      setOk(false);
    }
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({ accuracy: 5 });
    const location = await Location.reverseGeocodeAsync(
      { latitude, longitude },
      { useGoogleMaps: false }
    );
    setCity(location[0].city);
    const res = await axios.get(
      `https://learn.codeit.kr/api/codeitmall/products/`
    );
    setCodeit(res.data);
  };

  useEffect(() => {
    getWeather();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
      </View>
      <ScrollView
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.weather}
      >
        {!codeit ? (
          <View style={styles.day}>
            <ActivityIndicator color="white" size="large" marginTop="10px" />
          </View>
        ) : (
          codeit.results.map((item, index) => (
            <View style={styles.day} key={index}>
              <Text style={styles.texts}>{item.name}</Text>
              {/* <AntDesign name="banckward" size={24} color="black" /> */}
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "teal",
  },
  city: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    fontSize: 50,
    fontWeight: "500",
  },
  weather: {},
  day: {
    width: SCREEN_WIDTH,
    alignItems: "center",
  },
  temp: {
    marginTop: 50,
    fontSize: 130,
  },
  description: {
    marginTop: -20,
    fontSize: 60,
  },
  texts: {
    fontSize: 30,
    textAlign: "center",
  },
});
