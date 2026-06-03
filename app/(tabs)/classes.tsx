import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { COLORS, FONTS } from "../../src/constant/uiConstants";

export default function ClassesScreen() {
  return (
    <ScrollView
      className="flex-1"
      style={{ backgroundColor: COLORS.background }}
      showsVerticalScrollIndicator={false}
    >
      <View className="p-3">
      
        <View
          className="rounded-3xl p-4"
          style={{
            backgroundColor: COLORS.white,
            borderTopWidth: 5,
            borderTopColor: COLORS.primary,
            shadowColor: "#000",
            shadowOpacity: 0.08,
            shadowRadius: 8,
            elevation: 4,
          }}
        >
          {/* Header */}
          <View className="flex-row justify-between items-start">
            <View>
              <Text
                style={{
                  color: COLORS.textSecondary,
                  fontSize: FONTS.small,
                }}
              >
                MAT-401
              </Text>

              <Text
                style={{
                  color: COLORS.primary,
                  fontSize: 28,
                  fontWeight: "700",
                  marginTop: 8,
                }}
              >
                Advanced{"\n"}Mathematics
              </Text>

             <View className="flex-row items-center mt-2">
  <Image
    source={require("../../src/assets/classes/profIcon.png")}
    style={{ width: 12, height: 12, marginRight: 6 }}
  />

  <Text
    style={{
      color: COLORS.textSecondary,
      fontSize: FONTS.body,
    }}
  >
    Prof. Eleanor Vance
  </Text>
</View>
            </View>

            
            <View
              className="rounded-xl px-4 py-2 items-center border border-[#00390A1A]"
              style={{
                backgroundColor: "#00390A1A",
              }}
            >
                       <Image source={require("../../src/assets/classes/presentTickicon.png")} style={{ width: 20, height: 20, resizeMode: "contain",  }} />



              <Text
                style={{
                  color: "#0C7A35",
                  fontSize: 12,
                  fontWeight: "600",
                }}
              >
                  Present
              </Text>
            </View>
          </View>

         
          <View
            className="flex-row items-center mt-5 rounded-xl p-3"
            style={{
              backgroundColor: "#F5F5F5",
            }}
          >
            <View
              className="w-10 h-10 rounded-lg items-center justify-center"
              style={{
                backgroundColor: "#233A8B",
              }}
            >
              <Image source={require("../../src/assets/classes/classclock.png")} style={{ width: 15, height: 15, resizeMode: "contain",  }} />

            </View>

            <View className="ml-3">
              <Text
                style={{
                  color: COLORS.textSecondary,
                  fontSize: 11,
                  fontWeight: "600",
                }}
              >
                NEXT SESSION
              </Text>

              <Text
                style={{
                  color: COLORS.textPrimary,
                  fontSize: 13,
                  fontWeight: "700",
                }}
              >
                Today • 14:00 - 15:30
              </Text>
            </View>
          </View>

       
          <TouchableOpacity
  className="mt-5 rounded-xl py-4"
  style={{
    backgroundColor: "#0D7CB2",
  }}
>
  <View className="flex-row items-center justify-center">
    <Image
      source={require("../../src/assets/classes/joinclassIcon.png")}
      style={{
        width: 20,
        height: 20,
        resizeMode: "contain",
        marginRight: 8,
      }}
    />

    <Text
      style={{
        color: COLORS.white,
        fontSize: FONTS.subtitle,
        fontWeight: "700",
      }}
    >
      Join Online Class
    </Text>
  </View>
</TouchableOpacity>
        </View>

        <View className="flex-row gap-3 mt-4">
          <TouchableOpacity
            className="flex-1 rounded-2xl p-4"
            style={{ backgroundColor: COLORS.white }}
          >
           <Image source={require("../../src/assets/classes/syllabusIcon.png")} style={{ width: 20, height: 20, resizeMode: "contain",  }} />


            <Text
              style={{
                color: COLORS.primary,
                fontWeight: "700",
                fontSize: FONTS.subtitle,
              }}
            >
              Syllabus
            </Text>

            <Text
              style={{
                color: COLORS.textSecondary,
                fontSize: FONTS.small,
                marginTop: 4,
              }}
            >
              Updated Fall 2023
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-1 rounded-2xl p-4"
            style={{ backgroundColor: COLORS.white }}
          >
            <Text
              style={{
                fontSize: 28,
                color: COLORS.primary,
              }}
            >
             <Image source={require("../../src/assets/classes/discussionIcon.png")} style={{ width: 20, height: 20, resizeMode: "contain",  }} />
            </Text>

            <Text
              style={{
                color: COLORS.primary,
                fontWeight: "700",
                fontSize: FONTS.subtitle,
              }}
            >
              Discussion
            </Text>

            <Text
              style={{
                color: COLORS.textSecondary,
                fontSize: FONTS.small,
                marginTop: 4,
              }}
            >
              3 New Posts
            </Text>
          </TouchableOpacity>
        </View>

       
        <View className="mt-8">
          <View className="flex-row justify-between items-center mb-4">
            <Text
              style={{
                color: COLORS.primary,
                fontWeight: "700",
                fontSize: FONTS.title,
              }}
            >
              Class Notes
            </Text>

            <TouchableOpacity>
              <Text
                style={{
                  color: COLORS.primaryLight,
                  fontWeight: "600",
                }}
              >
                View All
              </Text>
            </TouchableOpacity>
          </View>

        
          <View
            className="rounded-2xl p-4 mb-2 flex-row justify-between items-center"
            style={{ backgroundColor: COLORS.white }}
          >
            <View className="flex-row items-center flex-1">
              <View
                className="w-10 h-10 rounded-lg items-center justify-center"
                style={{ backgroundColor: "#FFDAD6" }}
              >
                <Image source={require("../../src/assets/classes/pdfIconRed.png")} style={{ width: 20, height: 20, resizeMode: "contain",  }} />
              </View>

              <View className="ml-3">
                <Text
                  style={{
                    color: COLORS.textPrimary,
                    fontWeight: "600",
                  }}
                >
                  Lecture 12: Tensor Calculus
                </Text>

                <Text
                  style={{
                    color: COLORS.textSecondary,
                    fontSize: FONTS.small,
                  }}
                >
                  Oct 24 • 2.4 MB
                </Text>
              </View>
            </View>

             <Image source={require("../../src/assets/classes/downloadIcon.png")} style={{ width: 20, height: 20, resizeMode: "contain",  }} />

          </View>

         
          <View
            className="rounded-2xl p-4 mb-2 flex-row justify-between items-center"
            style={{ backgroundColor: COLORS.white }}
          >
            <View className="flex-row items-center flex-1">
              <View
                className="w-10 h-10 rounded-lg items-center justify-center"
                style={{ backgroundColor: "#FFE6E6" }}
              >
                <Image source={require("../../src/assets/classes/pdfIconRed.png")} style={{ width: 20, height: 20, resizeMode: "contain",  }} />
              </View>

              <View className="ml-3">
                <Text
                  style={{
                    color: COLORS.textPrimary,
                    fontWeight: "600",
                  }}
                >
                  Midterm Review Sheet
                </Text>

                <Text
                  style={{
                    color: COLORS.textSecondary,
                    fontSize: FONTS.small,
                  }}
                >
                  Oct 20 • 1.1 MB
                </Text>
              </View>
            </View>

            <Image source={require("../../src/assets/classes/downloadIcon.png")} style={{ width: 20, height: 20, resizeMode: "contain",  }} />
          </View>

        
          <View
            className="rounded-2xl p-4 flex-row justify-between items-center"
            style={{ backgroundColor: COLORS.white }}
          >
            <View className="flex-row items-center flex-1">
              <View
                className="w-10 h-10 rounded-lg items-center justify-center"
                style={{ backgroundColor: "#1A237E" }}
              >
                <Image source={require("../../src/assets/classes/homeWorkIcon.png")} style={{ width: 20, height: 20, resizeMode: "contain",  }} />
              </View>

              <View className="ml-3">
                <Text
                  style={{
                    color: COLORS.textPrimary,
                    fontWeight: "600",
                  }}
                >
                  Homework 4 Solutions
                </Text>

                <Text
                  style={{
                    color: COLORS.textSecondary,
                    fontSize: FONTS.small,
                  }}
                >
                  Oct 18 • Text Format
                </Text>
              </View>
            </View>

            <Image source={require("../../src/assets/classes/downloadIcon.png")} style={{ width: 20, height: 20, resizeMode: "contain",  }} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}