import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native';
import { categories,getNewsAPI,getSourceAPI,sources } from '../utils/api';
export default function Home({navigation}) {

  

  const [text, onChangeText] = useState('');

  const Item = (props)=>{
    return(
       <Pressable onPress={()=>navigation.navigate("NewsByFilter",{categoryTitle:props.name,url:getNewsAPI(props.name)})} style={{flex:"1",justifyContent:"center",alignItems:"center",flexDirection:"column",margin:"10px"}}>
       <Image source={{
        uri:props.pic
       }} style={{width:"70px",height:"70px"}} />
       <Text style={{color:"#f6f6f6",fontSize:"17px",fontWeight:"normal"}}>{props.name}</Text>
       </Pressable>
    )
  }

  const SourceItem = (props)=>{
    console.log(props)
    return(
       <Pressable onPress={()=>navigation.navigate("NewsByFilter",{categoryTitle:props.name,url:getSourceAPI(props.id_news)})} style={{flex:"1",justifyContent:"center",alignItems:"center",flexDirection:"column",margin:"23px"}}>
       <Image source={{
        uri:props.pic
       }} style={{width:"90px",height:"90px"}} />
       {/* <Text style={{color:"#f6f6f6",fontSize:"17px",fontWeight:"normal"}}>{props.name}</Text> */}
       </Pressable>
    )
  }


  function renderItem({item}){
    return (
      <Item pic={item.pic} name={item.name} />
    )
  }

  function renderSourceItem({item}){
    return (
      <SourceItem pic={item.pic} name={item.name} id_news={item.id_news} />
    )
  }


  return (

    <ScrollView  showsVerticalScrollIndicator={false}>

    <View  style={styles.container}>
      {/* <Text style={{color:"#f3f3f3"}}>Open up Home.js to start working on your app!</Text> */}
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Search for News"
      />
      <View style={{width:"100%",padding:"10px"}}>
        <Text style={styles.title}>Categories</Text>
        <FlatList showsHorizontalScrollIndicator={false} style={styles.categoriesList} horizontal data={categories} renderItem={renderItem}  />
     
        <Text style={styles.title}>Sources</Text>
        {/* <View style={{flex:1/2,justifyContent:"start",flexDirection:"row",height:"380px"}}> */}
        <FlatList  horizontal={false} numColumns={2}   data={sources} renderItem={renderSourceItem}  />
        {/* </View> */}
     
      </View>
      <StatusBar style="auto" />
      </View>

      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#323245',

    maxWidth:"380px",
    minWidth:"300px",
    alignItems: 'center',
    justifyContent: 'start',
    overflow:"auto"
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:"10px",
    backgroundColor:"#fff",
    width:"85%"
  },
  title:{
    color:"#f6f6f6",
    fontSize:"23px",
    borderBottomColor:"#3f54f2",
    borderBottomWidth:"3px",
    display:"inline-block",
    width:"fit-content",
    padding:"10px"
  },
  categoriesList:{
   margin:"20px",
  }
 
});
