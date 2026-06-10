import { Tabs } from "expo-router";
import { Image, View } from "react-native";
import Header from "../../src/components/common/Header";

export default function TabLayout() {

  return (
    <Tabs screenOptions={{
       header: () => <Header />,
       tabBarShowLabel: true,
        tabBarStyle: {
          height: 70,
          paddingTop: 10,
          borderTopWidth: 0,
          elevation: 10,
          backgroundColor: "#FFFFFF",
        },
      }}
    >
    
      <Tabs.Screen name="home" options={{ title: "Home", tabBarIcon: ({ focused }) => (
            <View style={{ backgroundColor: focused ? "#E8F1FF" : "transparent", padding: 18, borderRadius: 14,}} >
              <Image source={
                  focused
                    ? require("../../src/assets/mainImages/homeBlueicon.png")
                    : require("../../src/assets/mainImages/homeGrayicon.png")
                }  style={{ width: 20, height: 20 }}
              />
            </View>
          ),
        }}
      />

      <Tabs.Screen  name="classes" options={{ title: "Classes", tabBarIcon: ({ focused }) => (
            <View style={{  backgroundColor: focused ? "#E8F1FF" : "transparent", padding: 18, borderRadius: 14,}}>
              <Image source={ focused
                    ? require("../../src/assets/mainImages/classesBlue.png")
                    : require("../../src/assets/mainImages/classesGrayicon.png")
                }  style={{ width: 20, height: 20}}
              />
            </View>
          ),
        }}
      />

      
      <Tabs.Screen name="attendance" options={{ title: "Attendance", tabBarIcon: ({ focused }) => (
            <View  style={{  backgroundColor: focused ? "#E8F1FF" : "transparent", padding: 18,  borderRadius: 14, }}>
              <Image source={ focused
                    ? require("../../src/assets/mainImages/attendanceBlue.png")
                    : require("../../src/assets/mainImages/attendanceGrayicon.png")
                }
                style={{ width: 20, height: 20 }}
              />
            </View>
          ),
        }}
      />

   
      <Tabs.Screen name="payments" options={{ title: "Payments",tabBarIcon: ({ focused }) => (
            <View style={{ backgroundColor: focused ? "#E8F1FF" : "transparent", padding: 18, borderRadius: 14, }}>
              <Image
                source={
                  focused
                    ? require("../../src/assets/mainImages/paymentBlue.png")
                    : require("../../src/assets/mainImages/paymentGrayicon.png")
                }
                style={{ width: 20, height: 20 }}
              />
            </View>
          ),
        }}
      />

      
      <Tabs.Screen name="profile"  options={{ title: "Profile", tabBarIcon: ({ focused }) => (
            <View style={{ backgroundColor: focused ? "#E8F1FF" : "transparent", padding: 18, borderRadius: 14,}}>
              <Image source={
                   focused
                    ? require("../../src/assets/mainImages/profileGrayicon.png")
                    : require("../../src/assets/mainImages/profileGrayicon.png")
                }
                style={{ width: 20, height: 20 }}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}