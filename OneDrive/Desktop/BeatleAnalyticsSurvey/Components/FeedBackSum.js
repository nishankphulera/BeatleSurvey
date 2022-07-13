import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { CheckBox } from 'react-native-elements'
import Footer from './Footer'


const FeedBackSum = ({ navigation }) => {
    const { Checked, setChecked } = useState(false)

    return (
        <ScrollView>
            <View style={{ height: 40 }}>
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ fontSize: 30, color: "black" }}>
                        Your Over All Visit.
                    </Text>
                </View>
            </View>
            <View style={{ backgroundColor: "#56CDD3" }}>


                <View style={{ margin: 10, justifyContent: "center" }}>
                    <Text style={{ fontSize: 25, color: "black" }}>
                        First Visit?
                    </Text>
                </View>
                <CheckBox
                    title={'YES'}
                    checked={Checked}
                    onPress={() => setChecked(!Checked)}>

                </CheckBox>

                <CheckBox
                    title={'NO'}
                    checked={Checked}
                    onPress={() => setChecked(!Checked)}>

                </CheckBox>

                <View style={{ margin: 10, justifyContent: "center" }}>
                    <Text style={{ fontSize: 25, color: "black" }}>
                        Recommend Us?
                    </Text>
                </View>

                <CheckBox
                    title={'YES'}
                    checked={Checked}
                    onPress={() => setChecked(!Checked)}>

                </CheckBox>

                <CheckBox
                    title={'NO'}
                    checked={Checked}
                    onPress={() => setChecked(!Checked)}>

                </CheckBox>

                <View style={{ margin: 10, justifyContent: "center" }}>
                    <Text style={{ fontSize: 25, color: "black" }}>
                        I Came Here With.
                    </Text>
                </View>

                <CheckBox
                    title={'My Friends'}
                    checked={Checked}
                    onPress={() => setChecked(!Checked)}>

                </CheckBox>

                <CheckBox
                    title={'My Relatives'}
                    checked={Checked}
                    onPress={() => setChecked(!Checked)}>

                </CheckBox>
                <CheckBox
                    title={'Others'}
                    checked={Checked}
                    onPress={() => setChecked(!Checked)}>

                </CheckBox>


                <View style={{ margin: 10, justifyContent: "center" }}>
                    <Text style={{ fontSize: 25, color: "black" }}>
                        Are You a Member of Belverde Club?
                    </Text>
                </View>

                <CheckBox
                    title={'YES'}
                    checked={Checked}
                    onPress={() => setChecked(!Checked)}>

                </CheckBox>

                <CheckBox
                    title={'NO'}
                    checked={Checked}
                    onPress={() => setChecked(!Checked)}>

                </CheckBox>

                <View
                    style={{
                        marginTop: 50,
                        marginBottom: 30,
                        marginLeft: 20,
                        justifyContent: "center",

                    }}
                >
                    <TouchableOpacity
                        style={styles.roundbutton}
                        onPress={() => navigation.navigate("ThankYou")}
                    >
                        <Text style={{ fontSize: 25, color: "white" }}>Submit</Text>
                    </TouchableOpacity>
                </View>




            </View>
            <Footer />
        </ScrollView>
    )
}

export default FeedBackSum

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
})