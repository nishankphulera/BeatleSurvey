import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { ScrollView, TextInput } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown';
import Footer from './Footer';
import { TouchableOpacity } from 'react-native';


const data = [
    { label: 'Food1', value: '1' },
    { label: 'Food2', value: '2' },
    { label: 'Food3', value: '3' },
    { label: 'Food4', value: '4' },
    // { label1: 'Yes', value: '1' },
    // { label1: 'No', value: '2' },
    // { label: 'Item 7', value: '7' },
    // { label: 'Item 8', value: '8' },
];

const Complaint = ({ navigation }) => {
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
                <View style={{ backgroundColor: "#56CDD3", height: 680 }}>
                    <View style={{ alignItems: "center", margin: 10, justifyContent: "center", }}>
                        <Text style={{ fontSize: 25, color: "white" }}>
                            Post Your Complaint!
                        </Text>
                    </View>
                    <View style={{ backgroundColor: "white", opacity: 0.8, height: 60, margin: 30, borderRadius: 15 }}>
                        <Dropdown
                            style={styles.dropdown}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}

                            data={data}
                            search
                            maxHeight={250}
                            labelField="label"
                            valueField="value"
                            placeholder="Our Food"
                            searchPlaceholder="Search..."
                            value={value}
                            onChange={item => { setValue(item.value); }}

                        />
                    </View>

                    <View style={{ backgroundColor: "white", opacity: 0.8, height: 60, margin: 30, borderRadius: 15 }}>
                        <Dropdown
                            style={styles.dropdown}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            data={data}
                            search
                            maxHeight={250}
                            labelField="label"
                            valueField="value"
                            placeholder="Food Quality"
                            searchPlaceholder="Search..."
                            value={value}
                            onChange={item => { setValue(item.value); }}

                        />
                    </View>
                    <View style={{ padding: 25 }}>
                        <Text style={{ fontSize: 25, color: "white" }}>
                            Please write your complain here.
                        </Text>
                        <View style={{ marginTop: 15, backgroundColor: "white", height: 160, borderRadius: 10 }}>
                            <TextInput placeholderTextColor="black" placeholder="Please Write Here!" />
                        </View>
                    </View>

                    <View style={{ marginTop: 10 }}>
                        <View style={styles.container}>

                            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Complaint")}>
                                <Text style={{ fontSize: 25, color: "white", padding: 2, textAlign: "center" }}>Re-Survey</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("ThankYou")}>
                                <Text style={{ fontSize: 25, color: "white", padding: 2, textAlign: "center" }}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>






                </View>
            </View>
            <Footer />
        </ScrollView>
    )
}

export default Complaint

const styles = StyleSheet.create({
    dropdown: {
        margin: 16,
        height: 40,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,


    },
    placeholderStyle: {
        fontSize: 20,
        padding: 1.5,
        fontWeight: "bold",
        textAlign: "center",

    },
    selectedTextStyle: {
        fontSize: 16,
        textAlign: "center"
    },

    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },

    // buttonStyle: {
    //     marginHorizontal: 20,
    //     marginTop: 5,
    //     margin: 5,
    //     borderBottomColor: "#464646"
    // }
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 18
    },

    button: {
        backgroundColor: `#369398`,
        width: '40%',
        height: 50,
        borderRadius: 15
    }



})