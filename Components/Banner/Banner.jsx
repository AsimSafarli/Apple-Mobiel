import React from "react";
import { Text, View, Image, Pressable, StyleSheet } from "react-native";

function Banner() {
  return (
    <View>
      <Image source={require("../../assets/applebanner.png")} style={{ position: "absolute" }} />
      <View style={styles.banner}>
        <View style={styles.bannerLeft}>
          <View>
            <Text style={styles.bannerText}>MacBook Pro</Text>
          </View>
          <View>
            <Pressable style={styles.button}>
              <Text>View More</Text>
            </Pressable>
          </View>
        </View>
        <View>
          <Image source={require("../../assets/computerapple.png")} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bannerText: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "500",
  },
  banner: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 30,
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 123,
    height: 25,
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden"
  },
  bannerLeft: {
    display: "flex",
    flexDirection: "column",
    justifyContent: 'flex-start',
    alignItems: "flex-start",
    gap:5
  },
});

export default Banner;
