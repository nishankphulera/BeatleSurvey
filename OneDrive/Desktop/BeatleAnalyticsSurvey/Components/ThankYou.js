import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Footer from './Footer'

const ThankYou = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={{ backgroundColor: "white", height: 700,marginTop:40 }}>
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                    <Text
                        style={{ alignItems: "center", fontSize: 30, color: "#939393" }}
                    >
                        THAT'S ALL THANK YOU!
                        </Text>    

                </View>
                <View style={{ alignItems: "center",justifyContent: "center",marginTop: 30, }}>
                    <Text style={{ alignItems: "center", fontSize: 30, color: "#939393" }}>
                        Download Your Personal App From Playstore.
                    </Text>
                </View>
                    
                
                <View
                    style={{
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: 20,
                    }}
                >
                </View>
                <View
                    style={{
                        marginTop:50,
                        marginBottom: 30,
                        marginLeft:20,
                        justifyContent: "center",
                    }}
                >
                    <TouchableOpacity
                        style={styles.roundbutton} /*styles={{allignItems:"center"}}*/
                        onPress={() => navigation.navigate("Dashboard")}
                    >
                        <Text style={{ fontSize: 25, color: "white" }}>Home</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Footer />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    
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

export default ThankYou;