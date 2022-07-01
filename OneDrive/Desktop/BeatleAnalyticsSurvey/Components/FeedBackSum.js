import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { CheckBox } from 'react-native-elements'
import { ScrollView } from 'react-native'
import Footer from './Footer'


const FeedBackSum = () => {
    const { Checked, setChecked } = useState(false)

    return (
        <ScrollView>
            <View>
                <View style={{ backgroundColor: "red", opacity: 0.8, height: 40 }}>
                    <View style={{ alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ fontSize: 30, color: "white" }}>
                            Your Over All Visit.
                        </Text>
                    </View>
                </View>

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

                <View style={{margin:10, justifyContent:"center" }}>
                    <Text style={{fontSize:25, color:"black"}}>
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
                {/* <CheckBox
                    title={'My Sister'}
                    checked={Checked}
                    onPress={() => setChecked(!Checked)}>

                </CheckBox> */}
                {/* <CheckBox
                    title={'My relatives'}
                    checked={Checked}
                    onPress={() => setChecked(!Checked)}>

                </CheckBox> */}

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




            </View>
            <Footer/>
        </ScrollView>
    )
}

export default FeedBackSum

const styles = StyleSheet.create({})