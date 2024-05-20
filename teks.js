import { StyleSheet, Text, View, Image, Button } from "react-native";

const teks = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "flex-end",
        flexDirection: "row",
        paddingBottom: 20,
      }}
    >
      <View
        style={{
          backgroundColor: "red",
          width: 100,
          height: 50,
          margin: 10,
          borderRadius: 10,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold",
            shadowColor: "black",
          }}
        >
          Login
        </Text>
      </View>

      <View
        style={{
          backgroundColor: "blue",
          width: 100,
          height: 50,
          margin: 10,
          borderRadius: 10,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Register
        </Text>
      </View>
    </View>
  );
}