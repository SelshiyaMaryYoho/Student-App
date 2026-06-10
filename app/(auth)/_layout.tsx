import { useAuth } from "@/src/contexts/AuthUseContext";
import { HandelLogin, ResetPassService } from "@/src/feature/authentication/service";
import { GetLocalStorage, RemoveLocalStorage, StoreLocalStorage } from "@/src/utils/localstorage";
import { Redirect } from "expo-router";
import React, { useState } from "react";
import {
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

export default function LoginScreen() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const { login, isAuthenticated } = useAuth()

  const [changepass, setchangepass] = useState(false);
  const [match, setmatch] = useState(false);

  const [newpass, setnewpass] = useState('');
  const [confpass, setconfpass] = useState('');


  if (isAuthenticated) {
    return <Redirect href={"/(tabs)/home"} />
  }

  const handleLogin = async () => {
    setLoading(true);

    if (studentId === '' || password === '') {
      return console.log("enter the email and password")
    }

    const res = await HandelLogin({ email: studentId, password })

    if (res?.changepass) {
      const token = res?.token
      StoreLocalStorage('temp-tkn', token)
      setchangepass(true)
      return setLoading(false)
    }

    if (res?.success) {
      const token = res?.data;
      login(token)
      setLoading(false)
    } else {
      console.log("email and password are incorrect.")
      setLoading(false)
    }
  };

  const handelResetpass =async()=>{
    setLoading(true);

    if (newpass === '' || confpass === '') {
      return console.log("empty")
    }

    if (newpass !== confpass) {
     return console.log("not matching")
    }

    const token = await GetLocalStorage('temp-tkn') as string;

    const res = await ResetPassService({password: newpass,token})

    console.log(res)

    if (res?.success) {
      login(res?.data)
      setLoading(false)
    }else{
      console.log("try again after a few seconds..")
      setLoading(false)
    }
    RemoveLocalStorage('temp-tkn')
  }

  return (
    <View className="flex-1 bg-[#f7f9fb]">
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          paddingHorizontal: 20,
          paddingVertical: 40,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View className="items-center w-full max-w-md self-center">

          {/* Logo */}
          <View className="items-center mb-10">
            <View className="w-16 h-16 bg-blue-600 rounded-xl items-center justify-center shadow-md">
              <Text className="text-white text-2xl">📚</Text>
            </View>

            <Text className="text-2xl font-bold text-blue-600 mt-3">
              AeroFlow
            </Text>
          </View>

          {
            changepass ?
              <View className="w-full">
                {/* Welcome */}
                <View className="items-center mb-10">
                  <Text className="text-2xl font-bold text-gray-800">
                    Welcome our new Aerocap!!
                  </Text>
                  <Text className="text-gray-500 mt-1 text-center">
                    please reset default password here
                  </Text>
                </View>

                <View className="mb-5 w-full">
                  <Text className="text-gray-600 mb-1">
                    New password
                  </Text>

                  <View className="flex-row items-center bg-white border border-gray-300 rounded-xl px-4 h-12">
                    <TextInput
                      value={newpass}
                      onChangeText={setnewpass}
                      placeholder="••••••••"
                      secureTextEntry={true}
                      className="flex-1"
                    />
                  </View>
                </View>

                <View className="mb-6 w-full">
                  <View className="flex-row justify-between mb-1">
                    <Text className="text-gray-600">Confirm Password</Text>
                  </View>

                  <View className="flex-row items-center bg-white border border-gray-300 rounded-xl px-4 h-12">
                    <TextInput
                      value={confpass}
                      onChangeText={(data)=>{
                        if (newpass.includes(data)) {
                          setmatch(false)
                        }else{
                          setmatch(true)
                        }
                        setconfpass(data)
                      }}
                      placeholder="••••••••"
                      secureTextEntry={!passwordVisible}
                      className="flex-1"
                    />

                    <Pressable
                      onPress={() => setPasswordVisible(!passwordVisible)}
                    >
                      <Text className="text-gray-500 text-lg">
                        {passwordVisible ? "🙈" : "👁️"}
                      </Text>
                    </Pressable>
                  </View>
                  {
                    match &&
                  <Text className="text-sm text-red-400 px-2">*new password and confirm password not match*</Text>
                  }
                </View>
                <Pressable
                  onPress={handelResetpass}
                  disabled={loading}
                  className="bg-blue-600 h-12 rounded-xl items-center justify-center w-full"
                >
                  <Text className="text-white font-semibold">
                    {loading ? "Re-seting..." : "Re-set"}
                  </Text>
                </Pressable>
              </View> :
              <View className="w-full">
                {/* Welcome */}
                <View className="items-center mb-10">
                  <Text className="text-2xl font-bold text-gray-800">
                    Welcome back!
                  </Text>
                  <Text className="text-gray-500 mt-1 text-center">
                    Sign in to manage your campus life
                  </Text>
                </View>

                <View className="mb-5 w-full">
                  <Text className="text-gray-600 mb-1">
                    Student ID or Email
                  </Text>

                  <TextInput
                    value={studentId}
                    onChangeText={setStudentId}
                    placeholder="e.g. STU12345"
                    className="bg-white border border-gray-300 rounded-xl px-4 h-12"
                  />
                </View>

                <View className="mb-6 w-full">
                  <View className="flex-row justify-between mb-1">
                    <Text className="text-gray-600">Password</Text>
                    <Text className="text-blue-600">Forgot Password?</Text>
                  </View>

                  <View className="flex-row items-center bg-white border border-gray-300 rounded-xl px-4 h-12">
                    <TextInput
                      value={password}
                      onChangeText={setPassword}
                      placeholder="••••••••"
                      secureTextEntry={!passwordVisible}
                      className="flex-1"
                    />

                    <Pressable
                      onPress={() => setPasswordVisible(!passwordVisible)}
                    >
                      <Text className="text-gray-500 text-lg">
                        {passwordVisible ? "🙈" : "👁️"}
                      </Text>
                    </Pressable>
                  </View>
                </View>
                <Pressable
                  onPress={handleLogin}
                  disabled={loading}
                  className="bg-blue-600 h-12 rounded-xl items-center justify-center w-full"
                >
                  <Text className="text-white font-semibold">
                    {loading ? "Logging in..." : "Log In"}
                  </Text>
                </Pressable>
              </View>
          }



        </View>
      </ScrollView>
    </View>
  );
}