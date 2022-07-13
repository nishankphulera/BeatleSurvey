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
const Info = ({ navigation }) => {
  const [name, setName] = useState();
  const [mobno, setMobno] = useState();

  return (
    <ScrollView>
      <View style={{ backgroundColor: "white", height: 730 }}>
        <View
          style={{
            marginTop: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{ alignItems: "center", fontSize: 30, color: "#939393" }}
          >
            Welcome to Beatle Survey
          </Text>
        </View>

        <View style={styles.story}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <Text style={{ fontSize: 22, color: "white", fontWeight: "bold" }}>
              Log in Here
            </Text>
          </View>
          <View
            style={{
              paddingTop: 20,
              alignItems: "center",
              justifyContent: "center",
              paddingBottom: 20,
            }}
          >
            <KeyboardAvoidingView>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <View style={{ width: "90%" }}>
                  <Text
                    style={{
                      marginTop: 20,
                      marginBottom: 5,
                      color: "white",
                      marginLeft: 15,
                      fontSize: 18,
                      marginBottom: 10,
                    }}
                  >
                    Enter Your Name
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
                      placeholder="Name"
                      placeholderTextColor="black"
                      onChangeText={(value) => setName(value)}
                    />
                  </View>
                </View>
              </View>
            </KeyboardAvoidingView>
            <KeyboardAvoidingView>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <View style={{ width: "90%" }}>
                  <Text
                    style={{
                      marginTop: 20,
                      marginBottom: 5,
                      color: "white",
                      marginLeft: 15,
                      fontSize: 18,
                      marginBottom: 10,
                    }}
                  >
                    Enter Your Mobile No
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
                      placeholder="Mobile Number"
                      placeholderTextColor="black"
                      textContentType="telephoneNumber"
                      keyboardType="phone-pad"
                      onChangeText={(value) => setMobno(value)}
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
              onPress={() => navigation.navigate("Dashboard")}
            >
              <Text style={{ fontSize: 25, color: "white" }}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <Footer />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  story: {
    height: "75%",
    marginTop: 50,
    backgroundColor: "#56CDD3",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    alignItems: "center",
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  roundbutton: {
    width: 100,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 15,
    backgroundColor: "#369398",
    marginTop: 40,
  },
});
export default Info;
