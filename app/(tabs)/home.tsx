import { getTodayclassThunks } from "@/src/feature/classes/redux/thunks";
import { getDashboardThunks } from "@/src/feature/dashboard/redux/thunks";
import { AppDispatch, RootState } from "@/src/store/store";
import { useEffect } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { COLORS, FONTS } from "../../src/constant/uiConstants";


export default function HomeScreen() {

  const dispatch = useDispatch<AppDispatch>()
  const dashboard = useSelector((state:RootState)=>state.dashboard)
  const classes = useSelector((state:RootState)=>state.classes)

  useEffect(() => {
    dispatch(getDashboardThunks())
    dispatch(getTodayclassThunks('today'))
  }, [dispatch]);

  console.log(classes,"classes")


  return (
    <View className="flex-1 p-2 " style={{ backgroundColor: COLORS.background }}>
      <ScrollView showsVerticalScrollIndicator={false} >

        <View className="bg-white rounded-3xl p-5 mb-4">
          <Text className="text-xs  uppercase" style={{ color: COLORS.textSecondary }}>
            Tuesday, Oct 24
          </Text>

          <Text className=" font-bold mt-2"
            style={{ color: COLORS.textPrimary, fontSize: FONTS.heading, }}>
            Good Morning, Alex
          </Text>

          <Text className="mt-1" style={{ color: COLORS.textMuted }}>
            You have 3 classes today.
          </Text>
        </View>


        <View className=" rounded-3xl p-4 mb-4" style={{ backgroundColor: COLORS.white }}>
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-xl font-bold"
              style={{
                color: COLORS.textPrimary,
                fontSize: FONTS.title,
              }}
            >
              Today's Classes
            </Text>

            <TouchableOpacity>
              <Text className="text-[#0094FF] "
                style={{
                  color: COLORS.primaryLight,
                  fontWeight: FONTS.semibold,
                }}>
                View Full
              </Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 8 }}
          >

            <View
              className="bg-white rounded-3xl p-4 mr-4"
              style={{
                width: 290,
                borderLeftWidth: 4,
                borderLeftColor: "#14A3FF",
              }}
            >
              <View className="flex-row justify-between items-start">
                <Text className=" px-3 py-2 rounded-lg  text-xs"
                  style={{
                    backgroundColor: COLORS.badgeBg,
                    color: COLORS.primaryLight,
                    fontWeight: FONTS.bold,
                  }}
                >
                  09:00 AM - 10:30 AM
                </Text>

                <Image source={require("../../src/assets/home/videoiconimg.png")} style={{ width: 15, height: 12, resizeMode: "contain", }} />
              </View>

              <Text className="text-[18px] font-bold text-[#1B1C1C] mt-4">
                Advanced Calculus
              </Text>

              <Text className="text-[#454652] text-base mt-1">
                Prof. Sarah Jenkins
              </Text>

              <TouchableOpacity className=" rounded-xl py-4 mt-6" style={{ backgroundColor: COLORS.primary }}>
                <View className="flex-row items-center justify-center">
                  <Image source={require("../../src/assets/home/joinicon.png")} style={{ width: 15, height: 12, resizeMode: "contain", marginRight: 8, }} />

                  <Text className="text-white font-semibold">
                    Join Lecture
                  </Text>
                </View>
              </TouchableOpacity>
            </View>


            <View
              className="bg-white rounded-3xl p-4"
              style={{
                width: 290,
                borderLeftWidth: 4,
                borderLeftColor: "#0C7A35",
              }}
            >
              <View className="flex-row justify-between items-start">
                <Text className="bg-[#F1F1F1] px-3 py-2 rounded-lg text-[#0C5F2E] font-bold text-xs">
                  11:00 AM - 12:30 PM
                </Text>

                <Image source={require("../../src/assets/home/buildingicon.png")} style={{ width: 15, height: 12, resizeMode: "contain", }} />

              </View>

              <Text className="text-[18px] font-bold text-[#2D2D2D] mt-4">
                Data Structures
              </Text>

              <Text className="text-[#666] text-base mt-1">
                Prof. Michael Chen
              </Text>

              <View className="flex-row items-center justify-center bg-[#F3F0F1] rounded-xl px-4 py-4 mt-6">
                <Image source={require("../../src/assets/home/mapicon.png")} style={{ width: 15, height: 12, resizeMode: "contain", marginRight: 8, }} />
                <Text className="text-[#4D4D4D] font-medium">
                  Building A, Room 302
                </Text>

              </View>
            </View>
          </ScrollView>
        </View>

        <View className="bg-white rounded-3xl p-4 mb-4">
          <View className="flex-row justify-between items-center">
            <View>
              <Text className="text-lg font-bold">
                Weekly Attendance
              </Text>

              <Text className="text-gray-500 mt-1">
                You're on track!
              </Text>
            </View>

            <View className="w-16 h-16 rounded-full border-4 border-green-700 justify-center items-center">
              <Text className="font-bold text-[#132B63]">
                92%
              </Text>
            </View>
          </View>
        </View>


        <View className="bg-white rounded-3xl p-4">
          <Text className="text-lg font-bold mb-4">
            Quick Actions
          </Text>

          <View className="flex-row justify-between">
            <TouchableOpacity className="bg-[#F4F4F4] w-[31%] rounded-2xl p-4 items-center">
              <View className="w-14 h-14 rounded-full  items-center justify-center mb-2" style={{ backgroundColor: COLORS.purpleCircle }}>
                <Image source={require("../../src/assets/home/notesicon.png")} style={{ width: 20, height: 20, resizeMode: "contain" }} />

              </View>

              <Text className="font-medium">Notes</Text>
            </TouchableOpacity>

            <TouchableOpacity className=" w-[31%] rounded-2xl p-4 items-center" style={{ backgroundColor: COLORS.cardBg }}>
              <View className="w-14 h-14 rounded-full  items-center justify-center mb-2" style={{ backgroundColor: COLORS.blueCircle }}>
                <Image source={require("../../src/assets/home/paymenticon.png")} style={{ width: 20, height: 20, resizeMode: "contain" }} />
              </View>

              <Text className="font-medium">Payments</Text>
            </TouchableOpacity>

            <TouchableOpacity className="bg-[#F4F4F4] w-[31%] rounded-2xl p-4 items-center">
              <View className="w-14 h-14 rounded-full  items-center justify-center mb-2" style={{ backgroundColor: COLORS.greenCircle }}>
                <Image source={require("../../src/assets/home/gradesicon.png")} style={{ width: 20, height: 20, resizeMode: "contain" }} />
              </View>

              <Text className="font-medium">Grades</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}