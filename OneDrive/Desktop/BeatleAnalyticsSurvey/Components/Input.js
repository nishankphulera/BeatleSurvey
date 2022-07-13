import { StyleSheet, Text, View } from 'react-native'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Footer from './Footer';

const Input = ({ navigation }) => {
    const { text, setText } = useState('');
    return (

        <ScrollView>
            <View >
                <View style={{ opacity: 0.8, height: 40 }}>
                    <View style={{ alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ fontSize: 25, color: "black" }}>
                            Suggest Some More Inputs.
                        </Text>
                    </View>
                </View>
                <View style={{ backgroundColor: "#56CDD3", height: 750 }}>
                    <View style={{ justifyContent: "center", margin: 15, marginTop: 30 }}>
                        <Text style={{ fontSize: 20, color: "black", fontWeight: "bold" }}>
                            Which is your Prefered Place to stay while visiting this area.
                        </Text>
                    </View>

                    <View style={{ margin: 10, padding: 10, backgroundColor: "white", height: 40, borderRadius: 10 }}>
                        <TextInput placeholderTextColor="black" placeholder="Please Write Here!" />
                    </View>

                    <View style={{ padding: 10 }}>
                        <TouchableOpacity
                            style={styles.roundbutton} /*styles={{allignItems:"center"}}*/
                        // onPress={() => navigation.navigate("")}
                        >
                            <Text style={{ fontSize: 15, color: "white" }}>Next</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ margin: 15, justifyContent: "center", marginTop: 30 }}>
                        <Text style={{ fontSize: 20, color: "black", fontWeight: "bold" }}>
                            What else we can do to make your next stay more satishfying.
                        </Text>
                    </View>

                    <View style={{ margin: 10, padding: 10, backgroundColor: "white", height: 40, borderRadius: 10 }}>
                        <TextInput placeholderTextColor="black" placeholder="Please Write Here!" />
                    </View>

                    <View style={{ padding: 10 }}>
                        <TouchableOpacity
                            style={styles.roundbutton1} /*styles={{allignItems:"center"}}*/
                        // onPress={() => navigation.navigate("")}
                        >
                            <Text style={{ fontSize: 15, color: "white" }}>Next</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ margin: 15, justifyContent: "center", marginTop: 30 }}>
                        <Text style={{ fontSize: 20, color: "black", fontWeight: "bold" }}>
                            Our Feedback about you is.
                        </Text>
                    </View>

                    <View style={{ margin: 10, padding: 10, backgroundColor: "white", height: 40, borderRadius: 10 }}>
                        <TextInput placeholderTextColor="black" placeholder="Please Write Here!" />
                    </View>


                    <View style={{ padding: 10, marginBottom: 60 }}>

                        <TouchableOpacity
                            style={styles.roundbutton2} /*styles={{allignItems:"center"}}*/
                        // onPress={() => navigation.navigate("")}
                        >
                            <Text style={{ fontSize: 15, color: "white" }}>Next</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginTop:-30}}>
                        <TouchableOpacity
                            style={styles.roundbutton5}
                            onPress={() => navigation.navigate("ThankYou")}
                        >
                            <Text style={{ fontSize: 25, color: "white" }}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <Footer />
        </ScrollView>
    )
}

export default Input

const styles = StyleSheet.create({
    roundbutton: {
        width: 80,
        height: 40,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        borderRadius: 15,
        backgroundColor: "#369398",
        marginLeft: 140,
    },

    roundbutton2: {
        width: 80,
        height: 40,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        borderRadius: 15,
        backgroundColor: "#369398",
        marginLeft: 140,
    },

    roundbutton1: {
        width: 80,
        height: 40,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        borderRadius: 15,
        backgroundColor: "#369398",
        marginLeft: 140,
    },
    roundbutton5: {
        width: 120,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        borderRadius: 15,
        backgroundColor: "#369398",
        marginLeft: 140,

    },

})