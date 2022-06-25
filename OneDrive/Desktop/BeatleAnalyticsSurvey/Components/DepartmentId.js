import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import Footer from "./Footer";
import Welcome from "./Welcome";
const DepartmentID = ({ navigation }) => {
  const [department, setDepartment] = useState();

  return (
    <ScrollView>
      <View style={{ paddingTop: 20, backgroundColor: "white", height: 700 }}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text
            style={{ alignItems: "center", fontSize: 30, color: "#939393" }}
          >
            Welcome to
          </Text>
        </View>
        <View style={styles.imagestyler}>
          <Image
            style={{
              width: 140,
              position: "relative",
              left: 100,
              marginBottom: 0,
              height: 90,
              marginTop: 10,
            }}
            source={require("../assets/beatle_logo.png")}
          />
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <Text
            style={{ alignItems: "center", fontSize: 30, color: "#939393" }}
          >
            Beatle Analytics
          </Text>
        </View>
        <View style={styles.story}>
          <KeyboardAvoidingView>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <View style={{ width: "94%" }}>
                <Text
                  style={{
                    marginTop: 20,
                    marginBottom: 5,
                    color: "#369398",
                    marginLeft: 55,
                    fontSize: 22,
                    marginBottom: 10,
                  }}
                >
                  Enter Department ID
                </Text>
                <View
                  style={{
                    backgroundColor: "white",
                    padding: 2,
                    borderRadius: 15,
                  }}
                >
                  <TextInput
                    selectionColor="black"
                    style={{
                      marginVertical: 10,
                      fontSize: 17,
                      marginLeft: 10,
                      width: 300,
                    }}
                    placeholder="Department ID"
                    placeholderTextColor="black"
                    onChangeText={(value) => setDepartment(value)}
                  />
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </View>
        <View
          style={{
            marginBottom: 30,
            // alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={styles.roundbutton}
            onPress={() => navigation.navigate(Welcome)}
          >
            <Text style={{ fontSize: 25, color: "white" }}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Footer />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  imagestyler: {
    height: 110,
  },
  story: {
    margin: 10,
    // maxHeight: "60%",
    // minHeight: "50%",
    bottom: 0,
    backgroundColor: "#CCCCCC",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    alignItems: "center",
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    paddingBottom: 30,
    marginTop: 50,
    height: 200,
    justifyContent: "center",
  },
  roundbutton: {
    width: 120,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 15,
    backgroundColor: "#369398",
    marginLeft: 120,
  },
});
export default DepartmentID;
