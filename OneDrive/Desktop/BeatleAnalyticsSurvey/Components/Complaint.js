import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { ScrollView, TextInput, Button } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown';
// import AntDesign from 'react-native-vector-icons/AntDesign';
import Footer from './Footer';


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

const Complaint = () => {
    const [value, setValue] = useState(null);
    const { text, setText } = useState('');
    return (
        <ScrollView>
            <View>
                {/* <View style={{ backgroundColor: "red", opacity: 0.8, height: 80 }}>
                    <View style={{ alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ alignItems: "center", fontSize: 30, color: "black" }}>
                            Welcome to Beatle Analytics!
                        </Text>
                    </View>
                </View> */}
                <View style={{ alignItems: "center", margin: 10, justifyContent: "center" }}>
                    <Text style={{ fontSize: 25, color: "black" }}>
                        Welcome Guest
                    </Text>
                </View>
                <View style={{ backgroundColor: "#369398", height: 680 }}>
                    <View style={{ alignItems: "center", margin: 10, justifyContent: "center", backgroundColor: "#369398" }}>
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
                            // iconStyle={styles.iconStyle}
                            data={data}
                            search
                            maxHeight={250}
                            labelField="label"
                            valueField="value"
                            placeholder="Our Food"
                            searchPlaceholder="Search..."
                            value={value}
                            onChange={item => { setValue(item.value); }}
                        // renderLeftIcon={() => (
                        //     <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
                        // )}
                        />
                    </View>

                    <View style={{ backgroundColor: "white", opacity: 0.8, height: 60, margin: 30, borderRadius: 15 }}>
                        <Dropdown
                            style={styles.dropdown}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            // iconStyle={styles.iconStyle}
                            data={data}
                            search
                            maxHeight={250}
                            labelField="label"
                            valueField="value"
                            placeholder="Food Quality"
                            searchPlaceholder="Search..."
                            value={value}
                            onChange={item => { setValue(item.value); }}
                        // renderLeftIcon={() => (
                        //     <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
                        // )}
                        />
                    </View>
                    <View style={{ padding: 25 }}>
                        <Text style={{ fontSize: 25, color: "white" }}>
                            Please write your complain here.
                        </Text>
                        <TextInput
                            style={{ height: 150, fontSize: 15, backgroundColor: "white", borderRadius: 15 }}
                            placeholder="write here!"
                            onChangeText={newText => setText(newText)}
                            defaultValue={text}
                        />
                    </View>
                    {/* <View style={styles.buttonStyle}>
                        <Button
                            title={"Re-Survey"}
                            style={styles.buttonStyle}
                            onPress={() => {
                                this.setState({ submitted: true });
                            }}
                            color="#369398"
                        />

                    </View>
                    <View style={styles.buttonStyle}>
                        <Button
                            title={"Submit"}
                            onPress={() => {
                                this.setState({ submitted: false });
                            }}
                            color="#369398"
                        />
                    </View> */}
                    <View style={{ marginTop: 10 }}>
                        <View style={styles.container}>
                            {/* <Button title="submit"/> */}
                            <View style={styles.button}>
                                <Text style={{ fontSize: 25, color: "white", padding: 2, textAlign: "center" }}>Re-Survey</Text>
                            </View>
                            <View style={styles.button}>
                                <Text style={{ fontSize: 25, color: "white", padding: 2, textAlign: "center" }}>Submit</Text>
                            </View>
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
    // icon: {
    //     marginRight: 5,
    // },
    placeholderStyle: {
        fontSize: 20,
        padding: 1.5,
        // margin:5,
        // alignItems:"center",
        fontWeight: "bold",
        textAlign: "center",
        // borderRadius:20
    },
    selectedTextStyle: {
        fontSize: 16,
        textAlign: "center"
    },
    // iconStyle: {
    //     width: 20,
    //     height: 20,
    // },
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
        // borderRadius:15
        margin: 18
    },
    button: {
        backgroundColor: `#a9a9a9`,
        width: '40%',
        height: 50,
        borderRadius: 15
    }



})