import { StyleSheet, Text, View, Image, Pressable, FlatList } from 'react-native'
import React from 'react'
import { Colors } from "../../constants/Colors"
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';

const QueueList = () => {

    const router = useRouter()

    const queuelist = [
        {
            id: 1,
            color: "orange",
            customerName: "akira",
            barberName: "John",
            qpos: 1,
            ewt: 15
        },
        {
            id: 2,
            color: "orange",
            customerName: "akira",
            barberName: "John",
            qpos: 1,
            ewt: 15
        },
        {
            id: 3,
            color: "orange",
            customerName: "akira",
            barberName: "John",
            qpos: 1,
            ewt: 15
        },
        {
            id: 4,
            color: "orange",
            customerName: "akira",
            barberName: "John",
            qpos: 1,
            ewt: 15
        },
        {
            id: 5,
            color: "orange",
            customerName: "akira",
            barberName: "John",
            qpos: 1,
            ewt: 15
        },


        {
            id: 6,
            color: "orange",
            customerName: "akira",
            barberName: "John",
            qpos: 1,
            ewt: 15
        },
        {
            id: 7,
            color: "orange",
            customerName: "akira",
            barberName: "John",
            qpos: 1,
            ewt: 15
        },
        {
            id: 8,
            color: "orange",
            customerName: "akira",
            barberName: "John",
            qpos: 1,
            ewt: 15
        },
        {
            id: 9,
            color: "orange",
            customerName: "akira",
            barberName: "John",
            qpos: 1,
            ewt: 15
        },
        {
            id: 10,
            color: "orange",
            customerName: "akira",
            barberName: "John",
            qpos: 1,
            ewt: 15
        },


        {
            id: 11,
            color: "orange",
            customerName: "akira",
            barberName: "John",
            qpos: 1,
            ewt: 15
        },
        {
            id: 12,
            color: "orange",
            customerName: "akira",
            barberName: "John",
            qpos: 1,
            ewt: 15
        },
        {
            id: 13,
            color: "orange",
            customerName: "akira",
            barberName: "John",
            qpos: 1,
            ewt: 15
        },
        {
            id: 14,
            color: "orange",
            customerName: "akira",
            barberName: "John",
            qpos: 1,
            ewt: 15
        },
        {
            id: 15,
            color: "orange",
            customerName: "akira",
            barberName: "John",
            qpos: 1,
            ewt: 15
        },
    ]
    return (
        <SafeAreaView style={{ flex: moderateScale(1), backgroundColor: "#fff"}}>
            <View style={styles.queuetopbar}>
                <View><Image
                    style={styles.queuetopbar_salonlogo}
                    source={{
                        uri: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNhbG9ufGVufDB8fDB8fHww',
                    }}
                /></View>
                <Text style={{ fontFamily: "font-semibold", fontSize: moderateScale(18) }}>Salon Name</Text>
                <View style={styles.queuetopbar_notifyicon}><MaterialIcons name="notifications-none" size={moderateScale(24)} color={`${Colors.bgColor}`} /></View>
            </View>

            <View style={styles.main_content}>
                <View style={styles.main_content_btngrp}>
                    <Pressable style={styles.btngrp_btn} onPress={() => router.push("/singlejoin")}><Text style={styles.btngrp_btn_text}>Single Join</Text></Pressable>
                    <Pressable style={styles.btngrp_btn}><Text style={styles.btngrp_btn_text}>Group Join</Text></Pressable>
                </View>

                <View style={styles.queuelist_container}>
                    <FlatList
                        data={queuelist}
                        renderItem={({ item }) => <View style={styles.queuelist_item}>
                            <View style={[styles.item_image_wrapper, { backgroundColor: item.color }]}></View>
                            <View style={styles.customerwrapper}>
                                <Text style={{ fontFamily: "font-bold", textTransform: "capitalize", fontSize: moderateScale(14)}}>{item.customerName}</Text>
                                <Text style={{ fontFamily: "font-semibold", textTransform: "capitalize", fontSize: moderateScale(12), color: "#777777"}}>Q-Position: {item.qpos}</Text>
                            </View>
                            <View style={styles.barberwrapper}>
                                <Text style={{ fontFamily: "font-bold", textTransform: "capitalize", fontSize: moderateScale(14)}}>{item.barberName}</Text>
                                <Text style={{ fontFamily: "font-semibold", textTransform: "capitalize", fontSize: moderateScale(12), color: "#777777"}}>EWT: {item.ewt}min</Text>
                            </View>
                        </View>}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default QueueList

const styles = StyleSheet.create({
    queuetopbar: {
        height: verticalScale(72),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: moderateScale(15),
    },
    queuetopbar_salonlogo: {
        width: moderateScale(53),
        height: moderateScale(53),
        borderRadius: 50
    },
    queuetopbar_notifyicon: {
        height: moderateScale(44),
        width: moderateScale(44),
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        padding: moderateScale(10),
        shadowColor: '#1C1C1E',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 2,
    },
    main_content: {
        flex: 1,
        paddingHorizontal: scale(15),
        backgroundColor: "#F4F4F4",
    },

    main_content_btngrp: {
        paddingVertical: verticalScale(22),
        paddingHorizontal: scale(10),
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: moderateScale(20),
    },

    btngrp_btn: {
        backgroundColor: Colors.bgColor,
        height: verticalScale(36),
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 24,
    },

    btngrp_btn_text: {
        fontFamily: "font-medium",
        color: "#fff",
        fontSize: moderateScale(14),
    },

    queuelist_container: {
        flex: 1,
        backgroundColor: "#fff",
        borderRadius: moderateScale(12),
        marginBottom: verticalScale(10),
        paddingHorizontal: scale(10),
    },

    queuelist_item: {
        height: verticalScale(50),
        borderBottomColor: "#D9D9D9",
        borderBottomWidth: 2,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },

    item_image_wrapper:{
        height: moderateScale(40),
        width: moderateScale(40),
        borderRadius: 50,
    },

    customerwrapper:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    barberwrapper:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})