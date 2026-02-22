
import React, { useState } from 'react'
import SafeScreen from '@/components/SafeScreen'
import { ScrollView, View, Text, TouchableOpacity, TextInput } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

const ShopScreen = () => {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const Category=['All', 'Clothing', 'Electronics', 'Home', 'Books']

  return (
    <SafeScreen>
      <ScrollView className="flex-1"
       contentContainerStyle={{ paddingBottom: 16 }} 
       showsVerticalScrollIndicator={false}>
        
      
      {/*HEDER */}
      <View className='pt-4' >
        <View className="flex-row items-center justify-between px-4 py-2">
          <View>
            <Text className="text-xl font-bold text-white">Shop</Text>
            <Text className="text-gray-500">Find your favorite products</Text>
          </View>
          <View>
            <TouchableOpacity className="p-2 bg-gray-700 rounded-full">
            <Ionicons name="options" size={24} color="white"  />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/*SEARCH BAR */}
      <View className="px-4 py-2">
        <View className="flex-row items-center bg-gray-700 rounded-2xl px-4 py-2">
          <Ionicons name="search" size={20} color="gray" />
          <TextInput className="ml-2"
           placeholderTextColor={"gray"}
            placeholder="Search products..."
              value={search}
            onChangeText={setSearch} />
        </View>
      </View>
      {/*CATEGORY COMPONENT */}
      <View className="px-4 py-2">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {Category.map((category) => (
            <TouchableOpacity key={category} 
            onPress={() => setSelectedCategory(category)} 
            className={`mr-4 px-4 py-2 ${selectedCategory === category ? 'bg-green-500' : 'bg-gray-700'} rounded-full`}>
              <Text className="text-white">{category}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      </ScrollView>
    </SafeScreen>
  )
}

export default ShopScreen