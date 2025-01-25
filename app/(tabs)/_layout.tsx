import { Tabs } from "expo-router";
import { Text, View } from "react-native";
import {AntDesign} from "@expo/vector-icons"

export default function TabsLayout(){
    return <Tabs>
        <Tabs.Screen name="home" options={{headerTitle:"QuickLinks", headerStyle:{backgroundColor:"yellow"}, headerLeft(){
            return <AntDesign name="arrowleft" size={24} color="black" />
        }}}/>
        <Tabs.Screen name="profile" options={{headerTitle:"profile name"}}/>
    </Tabs>
}