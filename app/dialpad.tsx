import { Picker } from "@react-native-picker/picker";
import { router } from "expo-router";
import React, { useState } from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function DialPad() {
  const [countryCode, setCountryCode] = useState("+1");
  const [number, setNumber] = useState("");

  const addDigit = (digit: string) => {
    setNumber((prev) => prev + digit);
  };

  const deleteDigit = () => {
    setNumber((prev) => prev.slice(0, -1));
  };

  const fullNumber = `${countryCode}${number}`;

  const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "0", "⌫"];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Dial Pad</Text>

      <View style={styles.countryContainer}>
        <Picker
          selectedValue={countryCode}
          onValueChange={(itemValue) => setCountryCode(itemValue)}
        >
          <Picker.Item label="🇺🇸 USA (+1)" value="+1" />
          <Picker.Item label="🇮🇳 India (+91)" value="+91" />
          <Picker.Item label="🇬🇧 UK (+44)" value="+44" />
          <Picker.Item label="🇦🇺 Australia (+61)" value="+61" />
          <Picker.Item label="🇨🇦 Canada (+1)" value="+1" />
          <Picker.Item label="🇸🇬 Singapore (+65)" value="+65" />
        </Picker>
      </View>

      <View style={styles.display}>
        <Text style={styles.numberText}>
          {number ? fullNumber : "Enter Number"}
        </Text>
      </View>

      <View style={styles.grid}>
        {keys.map((item) => (
          <TouchableOpacity
            key={item}
            style={styles.key}
            onPress={() => {
              if (item === "⌫") {
                deleteDigit();
              } else {
                addDigit(item);
              }
            }}
          >
            <Text style={styles.keyText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        style={styles.callButton}
        onPress={() =>
          router.push({
            pathname: "/call",
            params: {
              number: fullNumber,
            },
          })
        }
      >
        <Text style={styles.callText}>📞 CALL</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 15,
  },

  countryContainer: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    marginBottom: 20,
    overflow: "hidden",
  },

  display: {
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginBottom: 20,
  },

  numberText: {
    fontSize: 28,
    fontWeight: "600",
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  key: {
    width: "30%",
    height: 75,
    borderRadius: 40,
    backgroundColor: "#f2f2f2",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },

  keyText: {
    fontSize: 30,
    fontWeight: "bold",
  },

  callButton: {
    backgroundColor: "#28a745",
    paddingVertical: 18,
    borderRadius: 15,
    marginTop: 10,
    marginBottom: 20,
  },

  callText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
  },
});
