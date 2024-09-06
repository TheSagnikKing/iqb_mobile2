import { StyleSheet, Text, View, Image, Pressable, FlatList } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'
import { Colors } from "../constants/Colors"
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import { router } from 'expo-router';

const singlejoinservices = () => {

    const services = [
        {
            id: 1
        },
        {
            id: 2
        },
        {
            id: 3
        },
        {
            id: 4
        },
        {
            id: 5
        },
        {
            id: 6
        }
    ]

    const [servicesArr, setServicesArr] = useState([])

    const addServicesPressed = (item) => {
        setServicesArr([...servicesArr, item])
    }

    const cancelServicesPressed = (item) => {
        // setServicesArr((prev) => {
        //     prev.map((previtem) => {
        //         previtem.id !== item.id
        //     })
        // })
    }

    console.log(servicesArr)
    return (
        <SafeAreaView style={{ flex: moderateScale(1), backgroundColor: "#fff" }}>
            <View style={styles.singlejoinservices_wrapper}>
                <Text style={{ fontFamily: "font-bold", fontSize: moderateScale(18), textAlign: "center" }}>SingleJoin</Text>
                <View style={{ marginVertical: verticalScale(20), flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ fontFamily: "font-semibold", fontSize: moderateScale(14) }}>Available services</Text>
                </View>

                <View style={styles.singlejoinservices_content}>

                    <FlatList
                        data={services}
                        renderItem={({ item }) => <View style={styles.singlejoinservices_item}>
                            <View style={styles.singlejoinservices_item_top}>
                                <View style={{ gap: verticalScale(10) }}>
                                    <Text style={{ fontFamily: "font-semibold", fontSize: moderateScale(14) }}>Hair Cut</Text>
                                    <View style={{ flexDirection: "row", alignItems: "center", gap: moderateScale(5) }}>
                                        <View style={{ justifyContent: "center", alignItems: "center" }}><Entypo name="star" size={moderateScale(14)} color="orangered" /></View>
                                        <Text style={{ fontFamily: "font-medium", fontSize: moderateScale(12), color: "#808080" }}>{"(4.5) .20 reviews"}</Text>
                                    </View>
                                </View>

                                {
                                    servicesArr.find((seritem) => seritem.id == item.id) ?
                                        <Pressable style={{ height: moderateScale(32), width: moderateScale(32), backgroundColor: "red", borderRadius: 50, justifyContent: "center", alignItems: "center" }}
                                            onPress={() => cancelServicesPressed(item)}
                                        ><FontAwesome6 name="add" size={18} color="#fff" /></Pressable> :
                                        <Pressable style={{ height: moderateScale(32), width: moderateScale(32), backgroundColor: Colors.bgColor, borderRadius: 50, justifyContent: "center", alignItems: "center" }}
                                            onPress={() => addServicesPressed(item)}
                                        ><FontAwesome6 name="add" size={18} color="#fff" /></Pressable>
                                }

                            </View>
                            <View style={styles.singlejoinservices_item_bottom}>
                                <View style={{ flexDirection: "column", gap: moderateScale(15) }}>
                                    <Text style={{ fontFamily: "font-medium", fontSize: moderateScale(12), color: "#808080" }}>{". Hair cut"}</Text>
                                    <Text style={{ fontFamily: "font-medium", fontSize: moderateScale(12), color: "#808080" }}>{". Hair wash"}</Text>

                                </View>
                                <View style={{ flexDirection: "column", gap: moderateScale(15) }}>
                                    <Text style={{ fontFamily: "font-bold", fontSize: moderateScale(18), color: "#000", textAlign: "center" }}>{"$110"}</Text>
                                    <View style={{ flexDirection: "row", alignItems: "center", gap: scale(5) }}>
                                        <Feather name="clock" size={moderateScale(18)} color="#808080" />
                                        <Text style={{ fontFamily: "font-medium", fontSize: moderateScale(12), color: "#808080" }}>30 mins</Text>
                                    </View>
                                </View>
                            </View>
                        </View>}
                        keyExtractor={item => item.id}
                    />
                </View>

            </View>
        </SafeAreaView>
    )
}

export default singlejoinservices

const styles = StyleSheet.create({
    singlejoinservices_wrapper: {
        paddingHorizontal: scale(10),
        paddingVertical: verticalScale(20),
        backgroundColor: "#FCFCFC",
        flex: 1,
    },
    singlejoinservices_content: {
        height: 100,
        flex: 1
    },
    singlejoinservices_item: {
        height: verticalScale(156),
        borderWidth: 1,
        borderColor: "#D2D2D2",
        borderRadius: moderateScale(8),
        paddingHorizontal: scale(10),
        backgroundColor: "#fff",
        marginBottom: verticalScale(10)
    },

    singlejoinservices_item_top: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: "#D2D2D2",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },

    singlejoinservices_item_bottom: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    bottomitem: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },


    item_top1: {
        height: moderateScale(64),
        width: moderateScale(64),
        borderRadius: 50
    },

    item_top2: {
        flex: 2.2,
        paddingHorizontal: scale(10),
        flexDirection: "column",
        gap: moderateScale(5)
    },

    item_top3: {
        flex: 1,
        flexDirection: "column",
        gap: moderateScale(10)
    }
})