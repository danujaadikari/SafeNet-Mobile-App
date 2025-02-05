import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function WebsitesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Manage Blocked Websites</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#d0d7e2" },
  text: { fontSize: 20, fontWeight: "bold" }
});
