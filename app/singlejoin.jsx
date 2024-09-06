import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'
import Entypo from '@expo/vector-icons/Entypo';
import { router } from 'expo-router';

const SingleJoin = () => {
  return (
    <SafeAreaView style={{ flex: moderateScale(1), backgroundColor: "#fff" }}>
      <View style={styles.singlejoin_wrapper}>
        <Text style={{ fontFamily: "font-bold", fontSize: moderateScale(18), textAlign: "center" }}>SingleJoin</Text>
        <View style={{ marginVertical: verticalScale(20), flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <Text style={{ fontFamily: "font-semibold", fontSize: moderateScale(14) }}>Who are you looking for ?</Text>
          <Text style={{ fontFamily: "font-semibold", fontSize: moderateScale(12), color: "#808080" }}>Available Barbers <Text style={{ fontFamily: "font-bold", fontSize: moderateScale(12), color: "#000" }}>3</Text></Text>
        </View>

        <View style={styles.singlejoin_content}>
          <Pressable onPress={() => router.push("/singlejoinservices")} style={{ marginBottom: verticalScale(10)}}>
            <View style={styles.singlejoin_item}>
              <View style={styles.singlejoin_item_top}>
                <View style={styles.item_top1}>
                  <Image
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 50
                    }}
                    source={{ uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" }}
                  />
                </View>
                <View style={styles.item_top2}>
                  <Text style={{ fontFamily: "font-semibold", fontSize: moderateScale(14) }}>Wade Warren</Text>
                  <View style={{ flexDirection: "row", alignItems: "center", gap: moderateScale(5) }}>
                    <View style={{ justifyContent: "center", alignItems: "center" }}><Entypo name="star" size={moderateScale(14)} color="orangered" /></View>
                    <Text style={{ fontFamily: "font-medium", fontSize: moderateScale(12), color: "#808080" }}>{"(4.5)"}</Text>
                  </View>
                  <Text style={{ fontFamily: "font-medium", fontSize: moderateScale(12), color: "#808080" }}>Cutting, Styling, Hair Color, Hair Straightening</Text>
                </View>

                <View style={styles.item_top3}>
                  <Text style={{ fontFamily: "font-semibold", fontSize: moderateScale(12), color: "#808080", textAlign: "center" }}>Queueing</Text>
                  <Text style={{ fontFamily: "font-bold", fontSize: moderateScale(18), textAlign: "center" }}>2</Text>
                </View>
                <View></View>
              </View>
              <View style={styles.singlejoin_item_bottom}>
                <View style={styles.bottomitem}>
                  <Text style={{ fontFamily: "font-semibold", fontSize: moderateScale(12), color: "#808080", textAlign: "center" }}>Next available position</Text>
                  <Text style={{ fontFamily: "font-bold", fontSize: moderateScale(18), textAlign: "center", marginTop: moderateScale(10) }}>3</Text>
                </View>
                <View style={styles.bottomitem}>
                  <Text style={{ fontFamily: "font-semibold", fontSize: moderateScale(12), color: "#808080", textAlign: "center" }}>Estimated Time</Text>
                  <Text style={{ fontFamily: "font-bold", fontSize: moderateScale(18), textAlign: "center", marginTop: moderateScale(10) }}>15mins</Text>
                </View>
              </View>
            </View>
          </Pressable>

          <Pressable onPress={() => router.push("/singlejoinservices")} style={{ marginBottom: verticalScale(10)}}>
            <View style={styles.singlejoin_item}>
              <View style={styles.singlejoin_item_top}>
                <View style={styles.item_top1}>
                  <Image
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 50
                    }}
                    source={{ uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" }}
                  />
                </View>
                <View style={styles.item_top2}>
                  <Text style={{ fontFamily: "font-semibold", fontSize: moderateScale(14) }}>Wade Warren</Text>
                  <View style={{ flexDirection: "row", alignItems: "center", gap: moderateScale(5) }}>
                    <View style={{ justifyContent: "center", alignItems: "center" }}><Entypo name="star" size={moderateScale(14)} color="orangered" /></View>
                    <Text style={{ fontFamily: "font-medium", fontSize: moderateScale(12), color: "#808080" }}>{"(4.5)"}</Text>
                  </View>
                  <Text style={{ fontFamily: "font-medium", fontSize: moderateScale(12), color: "#808080" }}>Cutting, Styling, Hair Color, Hair Straightening</Text>
                </View>

                <View style={styles.item_top3}>
                  <Text style={{ fontFamily: "font-semibold", fontSize: moderateScale(12), color: "#808080", textAlign: "center" }}>Queueing</Text>
                  <Text style={{ fontFamily: "font-bold", fontSize: moderateScale(18), textAlign: "center" }}>2</Text>
                </View>
                <View></View>
              </View>
              <View style={styles.singlejoin_item_bottom}>
                <View style={styles.bottomitem}>
                  <Text style={{ fontFamily: "font-semibold", fontSize: moderateScale(12), color: "#808080", textAlign: "center" }}>Next available position</Text>
                  <Text style={{ fontFamily: "font-bold", fontSize: moderateScale(18), textAlign: "center", marginTop: moderateScale(10) }}>3</Text>
                </View>
                <View style={styles.bottomitem}>
                  <Text style={{ fontFamily: "font-semibold", fontSize: moderateScale(12), color: "#808080", textAlign: "center" }}>Estimated Time</Text>
                  <Text style={{ fontFamily: "font-bold", fontSize: moderateScale(18), textAlign: "center", marginTop: moderateScale(10) }}>15mins</Text>
                </View>
              </View>
            </View>
          </Pressable>

          <Pressable onPress={() => router.push("/singlejoinservices")} style={{ marginBottom: verticalScale(10)}}>
            <View style={styles.singlejoin_item}>
              <View style={styles.singlejoin_item_top}>
                <View style={styles.item_top1}>
                  <Image
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 50
                    }}
                    source={{ uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" }}
                  />
                </View>
                <View style={styles.item_top2}>
                  <Text style={{ fontFamily: "font-semibold", fontSize: moderateScale(14) }}>Wade Warren</Text>
                  <View style={{ flexDirection: "row", alignItems: "center", gap: moderateScale(5) }}>
                    <View style={{ justifyContent: "center", alignItems: "center" }}><Entypo name="star" size={moderateScale(14)} color="orangered" /></View>
                    <Text style={{ fontFamily: "font-medium", fontSize: moderateScale(12), color: "#808080" }}>{"(4.5)"}</Text>
                  </View>
                  <Text style={{ fontFamily: "font-medium", fontSize: moderateScale(12), color: "#808080" }}>Cutting, Styling, Hair Color, Hair Straightening</Text>
                </View>

                <View style={styles.item_top3}>
                  <Text style={{ fontFamily: "font-semibold", fontSize: moderateScale(12), color: "#808080", textAlign: "center" }}>Queueing</Text>
                  <Text style={{ fontFamily: "font-bold", fontSize: moderateScale(18), textAlign: "center" }}>2</Text>
                </View>
                <View></View>
              </View>
              <View style={styles.singlejoin_item_bottom}>
                <View style={styles.bottomitem}>
                  <Text style={{ fontFamily: "font-semibold", fontSize: moderateScale(12), color: "#808080", textAlign: "center" }}>Next available position</Text>
                  <Text style={{ fontFamily: "font-bold", fontSize: moderateScale(18), textAlign: "center", marginTop: moderateScale(10) }}>3</Text>
                </View>
                <View style={styles.bottomitem}>
                  <Text style={{ fontFamily: "font-semibold", fontSize: moderateScale(12), color: "#808080", textAlign: "center" }}>Estimated Time</Text>
                  <Text style={{ fontFamily: "font-bold", fontSize: moderateScale(18), textAlign: "center", marginTop: moderateScale(10) }}>15mins</Text>
                </View>
              </View>
            </View>
          </Pressable>
        </View>

      </View>
    </SafeAreaView>
  )
}

export default SingleJoin

const styles = StyleSheet.create({
  singlejoin_wrapper: {
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(20),
    backgroundColor: "#FCFCFC",
    flex: 1,
  },

  singlejoin_content: {
    height: 100,
    flex: 1
  },
  singlejoin_item: {
    height: verticalScale(156),
    borderWidth: 1,
    borderColor: "#D2D2D2",
    borderRadius: moderateScale(8),
    paddingHorizontal: scale(10),
    backgroundColor: "#fff"
  },

  singlejoin_item_top: {
    flex: 2,
    borderBottomWidth: 1,
    borderBottomColor: "#D2D2D2",
    flexDirection: "row",
    alignItems: "center"
  },

  singlejoin_item_bottom: {
    flex: 1.5,
    flexDirection: "row"
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