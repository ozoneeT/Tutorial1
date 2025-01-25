import { View, Image, StyleSheet, Text, Pressable } from 'react-native';
import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { FlatList } from 'react-native';
import NewProfile from '@/components/Newcomp';

export default function Home() {
    const [value,setValue]=useState(0)
    const [word,setnewword]=useState("hello")
  const router = useRouter();
  const Card = ({item})=>{
    return(
    <View style={styles.card}>
            <View style={styles.icon}>
        <FontAwesome name={item.iconName} size={30} color="black" />
        </View>
        <View>
        <Text>{item.title}</Text>
        <Text>{item.Subtitle}</Text>
        </View>
        </View>
    )
  }

  const NewComponent =()=>{
    return (
        <Text>Hellow World</Text>
    )
  }
  const add =()=>{
    setValue(value+1)
  }
  const remove =()=>{
    setValue(value-1)
  }
  const Press =()=>{
    if (word===("hello")) {
        setnewword("hello  world")
    }
    else {
        setnewword("hello")
    }
  }

  
  return (
    <View style={styles.container}>
        
        <FlatList scrollEnabled={false} data={[{iconName:"mobile-phone",title:"Buy Airtime", Subtitle:"Airtime for all local networks"},{iconName:"calendar-plus-o", title:"Balance Enquiry", Subtitle:"Account balance Details"},{iconName:'money',title:'Send money', Subtitle:"Local Transfers"}]} 
        renderItem={({item})=><Card item={item} />}
        />
        <Text  style={{fontSize:40, top:-100}}>{value}</Text>
        <Pressable onPress={add} style={{top:-100}}><Text style={{fontSize:100}}>+</Text></Pressable>
        <Pressable onPress={remove} style={{top:-100}}><Text style={{fontSize:100}}>-</Text></Pressable>
    <Text onPress={Press}>{word}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  splashImage: {
    width: '80%',
    height: '80%',
  },
  card:{
    flexDirection:"row",
    alignItems:"center",
    backgroundColor:"white",
    top:20,
    marginHorizontal:15,
    marginVertical:5,
    padding:10,
    borderRadius:5,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 3.65,
    
    elevation: 7,
  },
  icon:{
    backgroundColor:"#c9d3e7",
    borderRadius:10,
    width:40,
    height:45,
    alignItems:"center",
    justifyContent:"center",
    marginHorizontal:15
  }
});
