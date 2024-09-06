import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import {Colors} from "../constants/Colors"

const Home = () => {

    return (
        <SafeAreaView style={{ flex: moderateScale(1), backgroundColor: "#fff" }}>
            <View style={{ flex: moderateScale(2) }}>
                <View style={styles.top_container}>
                    <Image
                        style={styles.top_image}
                        source={require('../assets/images/IQB_Logo.png')}
                    />
                </View>
                <View style={styles.bottom_container}>
                    <Image
                        style={styles.bottom_image}
                        source={require('../assets/images/Onboarding.png')}
                    />
                </View>
            </View>
            <View style={{ flex: moderateScale(1) }}>
                <View style={styles.bottom_head}>
                    <Text style={{ fontWeight: "bold", fontSize: moderateScale(22), fontFamily: "font-semibold", }}>Welcome To iQueueBarbers</Text>
                    <Text style={{ fontWeight: 500, textAlign: "center", width: "90%", marginTop: verticalScale(10), color: "gray", fontFamily: "font-regular" }}>Instantly book, style your hair and mustache the way you want by the stylist of your choice.</Text>
                </View>

                <View style={styles.button_container}>
                    <Pressable style={styles.button_container_btn1}>Register</Pressable>
                    <Pressable style={styles.button_container_btn2}>Log in</Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    top_container: {
        flex: moderateScale(1),
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    top_image: {
        width: scale(80),
        height: verticalScale(80),
        marginHorizontal: "auto"
    },
    bottom_container: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    },

    bottom_image: {
        width: moderateScale(300),
        height: moderateScale(256),
        marginHorizontal: "auto"
    },

    bottom_head: {
        height: verticalScale(72),
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    button_container: {
        flex: moderateScale(1),
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: moderateScale(20)
    },
    button_container_btn1: {
        height: moderateScale(44),
        backgroundColor: Colors.bgColor,
        width: "90%",
        borderRadius: moderateScale(40),
        justifyContent: "center",
        alignItems: "center",
        fontSize: moderateScale(20),
        fontFamily: "font-medium",
        color: "#fff"
    },
    button_container_btn2: {
        height: moderateScale(44),
        width: "90%",
        borderRadius: moderateScale(40),
        justifyContent: "center",
        alignItems: "center",
        fontSize: moderateScale(20),
        fontFamily: "font-medium",
        color: "#000",
        borderColor: "#000",
        borderWidth: moderateScale(1),
    }
})