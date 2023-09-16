import { Pressable, StyleSheet, Text, View, Dimensions } from "react-native";
import * as React from "react";
import MapView, { Marker } from "react-native-maps";
import Logout from "../../Img/log-out.svg";
import { useNavigation } from "@react-navigation/native";

const MapScreen = () => {
  const navigation = useNavigation();
  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Logout onPress={() => navigation.navigate("Login")} />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <MapView
          style={styles.mapStyle}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          mapType="standard"
          minZoomLevel={5}
          onMapReady={() => console.log("Map is ready")}
          onRegionChange={() => console.log("Region change")}
        >
          <Marker
            title="I am here"
            coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
            description="Hello"
          />
        </MapView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: "relative",
    backgroundColor: "white",
    justifyContent: "space-between",
  },
  box: {
    justifyContent: "flex-start",
    // paddingLeft: 16,
    // paddingRight: 16,
    // paddingTop: 32,
    // paddingBottom: 32,
  },
  mapStyle: {
    width: "100%",
    height: "100%",
    // width: Dimensions.get("window").width,
    // height: Dimensions.get("window").height,
  },
});
export default MapScreen;
