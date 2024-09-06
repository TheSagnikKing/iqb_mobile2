import { StyleSheet, Text, View, Image, Pressable, TextInput, Switch } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const Signin = () => {

  const [rememberdatatrue, setRememberdatatrue] = useState(false)

  const toggleSwitch = () => setRememberdatatrue(previousState => !previousState);

  return (
    <SafeAreaView style={{ flex: moderateScale(1), backgroundColor: "#fff" }}>
      <View style={{ flex: moderateScale(1) }}>
        <View style={styles.top_container}>
          <Image
            style={styles.top_image}
            source={require('../../assets/images/IQB_Logo.png')}
          />
        </View>
      </View>

      <View style={{ flex: moderateScale(3), paddingHorizontal: moderateScale(20) }}>
        <TextInput
          editable
          placeholder='Enter Your Email'
          style={styles.input}
          onChangeText={text => { }}
          value={""}
        />

        <TextInput
          editable
          placeholder='Enter Your Password'
          style={styles.input}
          onChangeText={text => { }}
          value={""}
        />

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <View style={{
            flexDirection: "row",
            alignItems: "center",
            gap: moderateScale(5)
          }}>

            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={rememberdatatrue ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={rememberdatatrue}
            />
            <Text style={{
              fontFamily: "font-medium",
              fontSize: moderateScale(13)
            }}>Remember me login</Text>
          </View>

          <Pressable
            onPress={() => router.push("/forgot")}
          ><Text style={{
            fontFamily: "font-medium",
            fontSize: moderateScale(13),
          }}>Forgot Password ?</Text></Pressable>
        </View>

        <View style={styles.button_container}>
          <Pressable style={styles.button_container_btn1}>Log in</Pressable>
          <Text style={{ fontFamily: "font-medium", fontSize:moderateScale(14)}}>Don't have an account ?</Text>
        </View>

      </View>
    </SafeAreaView>
  )
}

export default Signin

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
  input: {
    height: verticalScale(50),
    marginBottom: verticalScale(25),
    // paddingHorizontal: 4,
    borderBottomColor: "#0A84FF",
    borderBottomWidth: moderateScale(2),
    outlineStyle: "none",
    fontFamily: "font-medium",
    fontSize: moderateScale(16)
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
    backgroundColor: "#0A84FF",
    width: "90%",
    borderRadius: moderateScale(40),
    justifyContent: "center",
    alignItems: "center",
    fontSize: moderateScale(20),
    fontFamily: "font-medium",
    color: "#fff"
  },
})