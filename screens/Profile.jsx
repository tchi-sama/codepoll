import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { colors } from '../public/Colors'
import Ionicons from '../public/Ionicons'

const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor:colors.backgroundDark}} className="flex-1 pt-10">
        <View className="h-12 flex-row items-center justify-between px-2">
            <TouchableOpacity onPress={()=>{navigation.goBack()}} className="p-2 rounded-full">
                <Ionicons name="arrow-back-outline" size={24} color={colors.white} />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 rounded-full">
                <Ionicons name="ellipsis-vertical" size={24} color={colors.white} />
            </TouchableOpacity>
        </View>
        <View className="flex-col items-center gap-y-2">
            <View className="relative">
                <Image  className="border border-white w-28 h-28  rounded-full  " source={{uri:"https://scontent.frak1-2.fna.fbcdn.net/v/t39.30808-6/272903096_1179661402805532_104898404720613763_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEs_5DFN-2Cy9Vo3E5e1l5LwQJqJyaWMXzBAmonJpYxfDnXv4-k5p3D4CIPKQmvBQsI-M64HVPlsq_PgvkCoMDW&_nc_ohc=CMI1GSpuWosAX-D0Aa6&_nc_ht=scontent.frak1-2.fna&oh=00_AfD7TJ2290NeeoF7jaeL1CYPB0SlCN_2OFzlFQbtyHuUzQ&oe=64500925"}}></Image>
                <TouchableOpacity style={{backgroundColor:colors.primary}} className="p-2 rounded-full absolute bottom-0 right-0 ">
                    <Ionicons name="camera" size={20} color={colors.white} />
                </TouchableOpacity>
            </View>
            <Text style={{color:colors.white}} className="text-lg">tchi sama</Text>
            <Text style={{color:colors.white}} className="opacity-60 text-sm px-3 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sunt id quae consequatur aspernatur ab veritatis cumque porro, omnis similique quasi cupiditate fuga debitis minus eius placeat accusantium consequuntur itaque? sama</Text>
        </View>
    </SafeAreaView>
  )
}

export default Profile