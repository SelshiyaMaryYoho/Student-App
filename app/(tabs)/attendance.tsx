import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { COLORS, FONTS } from "../../src/constant/uiConstants";

export default function AttendanceScreen() {
  return (
    <ScrollView
      style={{ backgroundColor: COLORS.background }}
      showsVerticalScrollIndicator={false}
      className="flex-1 p-3"
    >
  
      <View className="mb-4">
        <Text
          style={{
            color: COLORS.textPrimary,
            fontSize: FONTS.title,
            fontWeight: "700",
          }}
        >
          Attendance
        </Text>

        <View className="flex-row justify-between items-center mt-1">
          <Text
            style={{
              color: COLORS.textSecondary,
              fontSize: FONTS.small,
            }}
          >
            Thursday, Oct 26
          </Text>

          <View className="bg-[#E8E8E8] px-3 py-1 rounded-full">
            <Text
              style={{
                color: COLORS.textSecondary,
                fontSize: 11,
              }}
            >
              ● Not Checked In
            </Text>
          </View>
        </View>
      </View>

     
      <View
        className="bg-white rounded-2xl p-5 mb-4"
        style={{
          borderWidth: 1,
          borderColor: "#EFEFEF",
        }}
      >
        <View className="items-center">
          <Image source={require("../../src/assets/attendance/attendanceClock.png")} 
           style={{ width: 50, height: 50, marginBottom: 8, }} resizeMode="contain"/>

          <Text
            style={{
              fontSize: 28,
              fontWeight: "700",
              color: COLORS.textPrimary,
            }}
          >
            08:45 AM
          </Text>

          <Text
            style={{
              color: COLORS.textSecondary,
              textAlign: "center",
              marginTop: 4,
            }}
          >
            Your first class "Advanced Physics"
            {"\n"}starts in 15 mins.
          </Text>
        </View>

        <TouchableOpacity
          className="rounded-xl py-4 mt-5"
          style={{
            backgroundColor: COLORS.primary,
          }}
        >
          <Text
            style={{
              color: COLORS.white,
              textAlign: "center",
              fontWeight: "700",
              fontSize: FONTS.subtitle,
            }}
          >
            Clock In
          </Text>
        </TouchableOpacity>
      </View>

      
      <View className="flex-row gap-2 mb-2">
        <View className="flex-1 bg-white rounded-2xl p-4">
         <View className="p-2  bg-[#00390A1A] rounded-full  mb-2 self-start">
          <Image source={require("../../src/assets/attendance/presentIcon.png")} 
           style={{ width:15, height: 15 }} resizeMode="contain"/>
          </View> 

          <Text
            style={{
              color: COLORS.textSecondary,
              fontSize: 10,
              marginTop: 4,
            }}
          >
            PRESENT
          </Text>

          <Text
            style={{
              color: COLORS.textPrimary,
              fontSize: 30,
              fontWeight: "700",
            }}
          >
            18
          </Text>

          <Text style={{ color: COLORS.textSecondary }}>days</Text>
        </View>

        <View className="flex-1 bg-white rounded-2xl p-4">
         <View className="p-2  bg-[#BA1A1A1A] rounded-full  mb-2 self-start">
          <Image source={require("../../src/assets/attendance/absentIcon.png")} 
           style={{ width:15, height: 15 }} resizeMode="contain"/>
          </View> 

          <Text
            style={{
              color: COLORS.textSecondary,
              fontSize: 10,
              marginTop: 4,
            }}
          >
            ABSENT
          </Text>

          <Text
            style={{
              color: COLORS.textPrimary,
              fontSize: 30,
              fontWeight: "700",
            }}
          >
            2
          </Text>

          <Text style={{ color: COLORS.textSecondary }}>days</Text>
        </View>
      </View>

      <View className="bg-white rounded-2xl p-4 mb-5">
       <View className="flex-row justify-between">
  <View className= "flex-row gap-2 items-center">
    <View className="p-3 bg-[#00639A1A] rounded-full mb-2 self-start">
      <Image
        source={require("../../src/assets/attendance/lateArrival.png")}
        style={{ width: 15, height: 15 }}
        resizeMode="contain"
      />
    </View>
<View>
  <Text
      style={{
        color: COLORS.textSecondary,
        fontSize: 10,
      }}
    >
      LATE ARRIVALS
    </Text>

    <Text
      style={{
        color: COLORS.textPrimary,
        fontSize: 24,
        fontWeight: "700",
      }}
    >
      3
      <Text
        style={{
          fontSize: 14,
          color: COLORS.textSecondary,
        }}
      >
        {" "}instances
      </Text>
    </Text>
</View>
    
  </View>

  <View className="items-end">
    <Text
      style={{
        color: COLORS.textSecondary,
        fontSize: 10,
      }}
    >
      Avg. Delay
    </Text>

    <Text
      style={{
        color: COLORS.textPrimary,
        fontWeight: "700",
      }}
    >
      12 mins
    </Text>
  </View>
</View>
      </View>

     
      <View className="flex-row justify-between items-center mb-3">
        <Text
          style={{
            color: COLORS.textPrimary,
            fontSize: FONTS.subtitle,
            fontWeight: "700",
          }}
        >
          Recent History
        </Text>

        <TouchableOpacity>
          <Text
            style={{
              color: COLORS.primary,
              fontSize: 12,
              fontWeight: "600",
            }}
          >
            VIEW CALENDAR
          </Text>
        </TouchableOpacity>
      </View>

      {[
        {
          date: "25",
          day: "Wed",
          status: "Present",
          time: "08:05 AM",
          badge: "On Time",
          badgeColor: "#DFF3E2",
          textColor: "#0C7A35",
        },
        {
          date: "24",
          day: "Tue",
          status: "Present",
          time: "09:15 AM",
          badge: "Late",
          badgeColor: "#E3F2FD",
          textColor: "#0D7CB2",
        },
        {
          date: "23",
          day: "Mon",
          status: "Absent",
          time: "No check-in recorded",
          badge: "Missed",
          badgeColor: "#FFE5E5",
          textColor: "#F44336",
        },
      ].map((item) => (
        <View
          key={item.date}
          className="bg-white rounded-2xl p-4 mb-2 flex-row items-center"
        >
          <View className="items-center mr-4">
            <Text style={{ color: COLORS.textSecondary, fontSize: 10 }}>
              OCT
            </Text>

            <Text
              style={{
                color: COLORS.textPrimary,
                fontWeight: "700",
              }}
            >
              {item.date}
            </Text>
          </View>

          <View className="flex-1">
            <Text
              style={{
                color: COLORS.textPrimary,
                fontWeight: "600",
              }}
            >
              {item.day}, {item.status}
            </Text>

            <Text
              style={{
                color: COLORS.textSecondary,
                fontSize: FONTS.small,
              }}
            >
              {item.time}
            </Text>
          </View>

          <View
            className="px-3 py-1 rounded-lg"
            style={{ backgroundColor: item.badgeColor }}
          >
            <Text
              style={{
                color: item.textColor,
                fontSize: 11,
                fontWeight: "600",
              }}
            >
              {item.badge}
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}