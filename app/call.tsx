import { router, useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CallScreen() {
  const { number } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.status}>Calling...</Text>

      <Text style={styles.number}>{number || "Unknown Number"}</Text>

      <View style={styles.controls}>
        <TouchableOpacity style={styles.controlButton}>
          <Text style={styles.controlText}>🔇 Mute</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.controlButton}>
          <Text style={styles.controlText}>🔊 Speaker</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.endButton} onPress={() => router.back()}>
        <Text style={styles.endText}>📞 End Call</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  status: {
    color: "#fff",
    fontSize: 22,
    marginBottom: 20,
  },

  number: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 60,
  },

  controls: {
    flexDirection: "row",
    gap: 20,
    marginBottom: 50,
  },

  controlButton: {
    backgroundColor: "#333",
    padding: 20,
    borderRadius: 15,
  },

  controlText: {
    color: "#fff",
    fontSize: 18,
  },

  endButton: {
    backgroundColor: "#ff3b30",
    paddingVertical: 18,
    paddingHorizontal: 40,
    borderRadius: 50,
  },

  endText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
});
