import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { ScrollView, TouchableOpacity } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown';
import Footer from './Footer';

const data = [
    { label: '', value: '1' },
    { label: '', value: '2' },
    { label: '', value: '3' },
    { label: '', value: '4' },
    { label: '', value: '5' },
    { label1: '', value: '6' },
    { label: '', value: '7' },
    { label: '', value: '8' },
];

const CustFeedBackWelWel = ({ navigation }) => {
    const [value, setValue] = useState(null);
    const { text, setText } = useState('');
    return (
        <ScrollView>
            <View>


                <View style={{ alignItems: "center", margin: 10, justifyContent: "center" }}>
                    <Text style={{ fontSize: 25, color: "black" }}>
                        Welcome Guest
                    </Text>
                </View>
                <View style={{ backgroundColor: "#369398", height: 680 }}>
                    <View style={{ alignItems: "center", marginTop: 25, justifyContent: "center", backgroundColor: "#369398" }}>
                        <Text style={{ fontSize: 20, color: "white" }}>
                            Quality is never an accident. It is always the result of an intelligent effort.

                        </Text>


                    </View>
                    <View style={{ backgroundColor: "white", opacity: 0.8, height: 70, margin: 15, marginTop: 10, marginBottom: 10, borderRadius: 15 }}>
                        <Dropdown
                            style={styles.dropdown}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            // iconStyle={styles.iconStyle}
                            // valueStyle={styles.valueStyle}
                            data={data}
                            search
                            maxHeight={250}
                            labelField="label"
                            valueField="value"
                            placeholder=""
                            searchPlaceholder="Search..."
                            value={value}
                            onChange={item => { setValue(item.value); }}
                        // renderLeftIcon={() => (
                        //     <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
                        // )}
                        />
                    </View>
                    <View style={{ alignItems: "center", marginHorizontal: 15, marginBottom: 5, justifyContent: "center", backgroundColor: "#369398", marginTop: 10 }}>
                        <Text style={{ fontSize: 20, color: "white" }}>
                            Please Rate Our Food Quality As per the Taste and Packaging.
                            It Helps Us to Serve You in a Better Way. ThankYou!
                        </Text>
                    </View>

                    <View style={{ backgroundColor: "white", opacity: 0.8, height: 70, margin: 15, marginTop: 10, marginBottom: 10, borderRadius: 15 }}>
                        <Dropdown
                            style={styles.dropdown}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            // iconStyle={styles.iconStyle}
                            // valueStyle={styles.valueStyle}
                            data={data}
                            search
                            maxHeight={250}
                            labelField="label"
                            valueField="value"
                            placeholder=""
                            searchPlaceholder="Search..."
                            value={value}
                            onChange={item => { setValue(item.value); }}

                        />
                    </View>
                    <View style={{ alignItems: "center", marginHorizontal: 15, marginBottom: 5, justifyContent: "center", backgroundColor: "#369398", marginTop: 10 }}>
                        <Text style={{ fontSize: 20, color: "white" }}>
                            Please Rate Our Beverage Quality As per the Taste and Packaging.
                            It Helps Us to Serve You in a Better Way. ThankYou!
                        </Text>
                    </View>
                    <View
                        style={{
                            marginTop: 50,
                            marginBottom: 30,
                            marginLeft: 20,
                            justifyContent: "center",

                        }}
                    >
                        <TouchableOpacity
                            style={styles.roundbutton} /*styles={{allignItems:"center"}}*/
                            onPress={() => navigation.navigate("FeedBackSum")}
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

export default CustFeedBackWelWel

const styles = StyleSheet.create({
    dropdown: {
        margin: 10,
        marginBottom: 20,
        height: 60,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
        borderBottomEndRadius: 10
        // borderRadius:14


    },

    roundbutton: {
        width: 120,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        borderRadius: 15,
        backgroundColor: "#48d1cc",
        marginLeft: 120,
    },
    // icon: {
    //     marginRight: 5,
    // },
    placeholderStyle: {
        fontSize: 22,
        padding: 2,
        paddingBottom: 2,
        // margin:5,

        // alignItems:"center",
        fontWeight: "bold",
        textAlign: "center",

    },

    selectedTextStyle: {
        fontSize: 25,
        fontWeight: "bold",
        // backgroundColor:"#e0ffff"
        // borderBottomEndRadius:10
    },
    // iconStyle: {
    //     width: 20,
    //     height: 20,
    // },

    inputSearchStyle: {
        height: 50,
        // fontWeight: "bold",
        fontSize: 20,
        borderRadius: 12,
        backgroundColor: "#e0ffff"
    },

})