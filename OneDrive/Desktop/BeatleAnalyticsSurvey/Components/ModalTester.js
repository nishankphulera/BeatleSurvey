import React, { useState } from 'react';
import { StyleSheet, View, Text, Modal, Button, TextInput } from 'react-native';
export default function ModalTester({ navigation }) {
    const [active, setactive] = useState(false);
    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={active}
                onRequestClose={() => {
                    console.warn("closed");
                }}
            >
                <View style={styles.container}>
                    <View style={styles.View}>
                        <Text style={{ fontSize: 15, color: "black" }}>Enter Auditor Name</Text>
                        <TextInput style={{ fontSize: 15, padding: 1.5, height: 40, width: 150, padding: 10 }} placeholderTextColor="black"
                            backgroundColor="white" placeholder='Enter here'
                            placeholderStyle={styles.placeholderStyle} />

                        <Text style={{ fontSize: 15, color: "black" }}>Enter Auditor Gender</Text>
                        <TextInput style={{ fontSize: 15, padding: 1.5, height: 40, width: 150, padding: 10 }} placeholderTextColor="black"
                            backgroundColor="white" placeholder='Enter here'
                            placeholderStyle={styles.placeholderStyle} />

                        <Text style={{ fontSize: 15, color: "black" }}>Enter The Bill Amount</Text>
                        <TextInput style={{ fontSize: 15, padding: 1.5, height: 40, width: 150, padding: 10 }} placeholderTextColor="black"
                            backgroundColor="white" placeholder='Enter here'
                            placeholderStyle={styles.placeholderStyle} />
                    </View>
                </View>
            </Modal>
            <Button
                title={"click"}
                onPress={() => { setactive(!active) }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: 'center',
        justifyContent: 'center',
    },
    View: {
        backgroundColor: "#56CDD3",
        height: 340,
        width: 350,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "black",
        borderWidth: 2,
    },
    // text: {
    //     fontSize: 20,
    //     color: "green",
    //     marginBottom: 20
    // },
    button: {
        margin: 20,
        width: 200,
    },
    placeholderStyle: {
        padding: 1.5,
        //    borderRadius:20,
    },
    button: {
        backgroundColor: `#369398`,
        width: '40%',
        height: 50,
        borderRadius: 15
    }
});
