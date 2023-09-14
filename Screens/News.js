import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native';
import { categories,getNewsAPI,sources } from '../utils/api';
import axios from 'axios';
import {FontAwesome} from '@expo/vector-icons';
import { Alert } from 'react-native';

export default function News({navigation}) {

  var apiUrl = getNewsAPI("general");
  var apiUrl2 = getNewsAPI("sports");

  const [genNews,setGenNews] = useState([]);
  const [sportNews,setSportNews] = useState([]);

  console.log(apiUrl)

  async function getGenNews(){
    var data = await axios.get(apiUrl);
    if(data.status==200){
      setGenNews(data.data)
    }
  }


  async function getSportNews(){
    var data = await axios.get(apiUrl2);
    if(data.status==200){
      setSportNews(data.data)
    }
  }

  useEffect(()=>{
    getGenNews();
    getSportNews();
  },[])
  console.log(genNews)
  const [text, onChangeText] = useState('');

  const Item = (props)=>{
    return(
       <View style={{flex:"1",justifyContent:"center",alignItems:"center",flexDirection:"column",margin:"10px"}}>
       <Image source={{
        uri:props.pic
       }} style={{width:"80px",height:"80px"}} />
       <Text style={{color:"#f6f6f6",fontSize:"17px",fontWeight:"normal"}}>{props.name}</Text>
       </View>
    )
  }

  const SourceItem = (props)=>{
    console.log(props.val)
    return(
       <View style={{flex:"1",justifyContent:"center",alignItems:"center",flexDirection:"column",margin:"3px",marginBottom:"20px",paddingBottom:"30px",backgroundColor:"#ffffff",height:"360px",overflow:"hidden",borderRadius:"15px"}}>
       <Image source={{
        uri:props.val.urlToImage
       }} style={{width:"305px",height:"170px"}} />
          <Text style={{color:"#333",fontSize:"17px",fontWeight:"normal",padding:"10px",textAlign:"left",whiteSpace:"no-wrap",overflow:"hidden",textOverflow:"ellipsis"}}>{props.val.author}</Text>

       <Text style={{color:"#333",fontSize:"17px",fontWeight:"bold",padding:"10px",height:"80px",whiteSpace:"no-wrap",overflow:"hidden",textOverflow:"ellipsis"}}>{props.val.title}</Text>
       <Text numberOfLines={4} style={{color:"#333",fontSize:"13px",fontWeight:"normal",padding:"5px",textAlign:"left",whiteSpace:"no-wrap",overflow:"hidden",textOverflow:"ellipsis"}}>{props.val.description}</Text>
       <Pressable
        title="View News" style={{marginTop:"20px",backgroundColor:"#333",borderRadius:"5px",padding:"6px",color:"#ffffff"}}
        onPress={() => navigation.navigate("News",{val:props.val})}
      >
        <View style={{flex:1,justifyContent:"center",alignItems:"center",flexDirection:"row"}}>
        <Text style={{margin:"7px",color:"#ffffff"}}>View News</Text>
        <FontAwesome color="#ffffff" name="newspaper-o" size={17} />
        </View>
      </Pressable>
      
       </View>
    )
  }


  function renderItem({item}){
    return (
      <Item pic={item.pic} name={item.name} />
    )
  }

  function renderSourceItem({item}){
    return (
      <SourceItem val={item} />
    )
  }


  return (

    
    <View style={styles.container}>
      {/* <Text style={{color:"#f3f3f3"}}>Open up Home.js to start working on your app!</Text> */}
      {/* <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Search for News"
      /> */}
      <View style={{width:"100%",padding:"10px"}}>
        <Text style={styles.title}>General</Text>
        {/* <FlatList showsHorizontalScrollIndicator={false} style={styles.categoriesList} horizontal data={categories} renderItem={renderItem}  />
        
        <Text style={styles.title}>Sources</Text>
        {/* <View style={{flex:1/2,justifyContent:"start",flexDirection:"row",height:"380px"}}> */}
        <FlatList  horizontal={false} numColumns={1}   data={genNews.articles} renderItem={renderSourceItem}  />
        
        <Text style={styles.title}>Sports</Text>
        {/* <FlatList showsHorizontalScrollIndicator={false} style={styles.categoriesList} horizontal data={categories} renderItem={renderItem}  />
        
        <Text style={styles.title}>Sources</Text>
        {/* <View style={{flex:1/2,justifyContent:"start",flexDirection:"row",height:"380px"}}> */}
        <FlatList  horizontal={false} numColumns={1}   data={sportNews.articles} renderItem={renderSourceItem}  />
        
        
        {/* </View> */}
     {/* */}
      </View>
      <StatusBar style="auto" />
    </View>
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
    padding:"10px",
    marginBottom:"20px"
  },
  categoriesList:{
   margin:"20px",
  }
 
});
