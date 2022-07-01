import { StyleSheet, Text, View } from 'react-native'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Footer from './Footer';

const Input = () => {
    const { text, setText } = useState('');
    return (

        <ScrollView>
            <View>
                <View style={{ backgroundColor: "red", opacity: 0.8, height: 40 }}>
                    <View style={{ alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ fontSize: 25, color: "white" }}>
                            Suggest Some More Inputs.
                        </Text>
                    </View>
                </View>

                <View style={{ margin: 10, justifyContent: "center" }}>
                    <Text style={{ fontSize: 20, color: "black" }}>
                        Which is your Prefered Place to stay while visiting this area.
                    </Text>
                </View>
                <View style={{ padding: 10 }}>
                    <TextInput
                        style={{ height: 40, fontSize: 15 }}
                        placeholder="Please suggest!"
                        onChangeText={newText => setText(newText)}
                        defaultValue={text}
                    />

                    <TouchableOpacity
                        style={styles.roundbutton} /*styles={{allignItems:"center"}}*/
                    // onPress={() => navigation.navigate("Dashboard")}
                    >
                        <Text style={{ fontSize: 15, color: "white" }}>Next</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ margin: 10, justifyContent: "center" }}>
                    <Text style={{ fontSize: 20, color: "black" }}>
                        What else we can do to make your next stay more satishfying.
                    </Text>
                </View>

                <View style={{ padding: 10 }}>
                    <TextInput
                        style={{ height: 40, fontSize: 15 }}
                        placeholder="Please suggest!"
                        onChangeText={newText => setText(newText)}
                        defaultValue={text}
                    />

                    <TouchableOpacity
                        style={styles.roundbutton1} /*styles={{allignItems:"center"}}*/
                    // onPress={() => navigation.navigate("Dashboard")}
                    >
                        <Text style={{ fontSize: 15, color: "white" }}>Next</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ margin: 10, justifyContent: "center" }}>
                    <Text style={{ fontSize: 20, color: "black" }}>
                        Our Feedback about you is.
                    </Text>
                </View>

                <View style={{ padding: 10 }}>
                    <TextInput
                        style={{ height: 40, fontSize: 15 }}
                        placeholder="Thanks For Visiting!"
                        onChangeText={newText => setText(newText)}
                        defaultValue={text}
                    />

                    <TouchableOpacity
                        style={styles.roundbutton2} /*styles={{allignItems:"center"}}*/
                    // onPress={() => navigation.navigate("Dashboard")}
                    >
                        <Text style={{ fontSize: 15, color: "white" }}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Footer/>
        </ScrollView>
    )
}

export default Input

const styles = StyleSheet.create({
    roundbutton: {
        width: 80,
        height: 40,
        justifyContent: "center",
        flexDirection:"row",
        alignItems: "center",
        padding: 10,
        borderRadius: 15,
        backgroundColor: "#369398",
        marginLeft: 140,
        // marginBottom:200,
    },
    roundbutton2: {
        width: 80,
        height: 40,
        justifyContent: "center",
        flexDirection:"row",
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
        flexDirection:"row",
        alignItems: "center",
        padding: 10,
        borderRadius: 15,
        backgroundColor: "#369398",
        marginLeft: 140,
    }

})