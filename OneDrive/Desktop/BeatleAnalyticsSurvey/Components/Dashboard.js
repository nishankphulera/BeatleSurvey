import React from "react";
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
} from "react-native";
import Footer from "./Footer";
const Dashboard = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={{ backgroundColor: "white", height: 700 }}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text
            style={{
              alignItems: "center",
              fontSize: 25,
              color: "#939393",
              fontWeight: "bold",
            }}
          >
            DASHBOARD
          </Text>
        </View>
        <View style={styles.imagestyler}>
          <Image
            style={{
              width: 90,
              height: 50,
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
            style={{
              alignItems: "center",
              fontSize: 25,
              color: "#939393",
              fontWeight: "bold",
            }}
          >
            BEATLE SURVEY
          </Text>
        </View>
        <View style={styles.story}>
          <View
            style={{
              marginBottom: 30,
              // alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              style={styles.roundbutton}
              onPress={() => navigation.navigate("Info")}
            >
              <Text style={{ fontSize: 25, color: "white" }}>Feedback</Text>
            </TouchableOpacity>
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
              onPress={() => navigation.navigate("Info")}
            >
              <Text style={{ fontSize: 25, color: "white" }}>Complaint</Text>
            </TouchableOpacity>
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
              onPress={() => navigation.navigate("Info")}
            >
              <Text style={{ fontSize: 25, color: "white" }}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <Footer />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  imagestyler: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  story: {
    marginTop: 20,
    height: "70%",

    backgroundColor: "#56CDD3",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    alignItems: "center",
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    paddingTop: 60,
  },
  roundbutton: {
    width: 150,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 15,
    backgroundColor: "#369398",
  },
});
export default Dashboard;
