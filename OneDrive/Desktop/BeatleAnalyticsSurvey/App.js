import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./Components/Welcome";
import DepartmentID from "./Components/DepartmentId";
import Info from "./Components/Info";
import Dashboard from "./Components/Dashboard";
import Input from "./Components/Input";
import CustFeedBackWel from "./Components/CustFeedBackWel";
import FeedBackSum from "./Components/FeedBackSum";
import ThankYou from "./Components/ThankYou";
import Complaint from "./Components/Complaint";
// import ModalTester from "./Components/ModalTester";
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="ModalTester" component={ModalTester} /> */}
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="DepartmentID" component={DepartmentID} />
        <Stack.Screen name="Info" component={Info} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="CustFeedBackWel" component={CustFeedBackWel} />
        <Stack.Screen name="Complaint" component={Complaint} />


        <Stack.Screen name="Input" component={Input} />
        <Stack.Screen name="ThankYou" component={ThankYou} />
        <Stack.Screen name="FeedBackSum" component={FeedBackSum} />





      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default App;
