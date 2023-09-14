import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native';
import { categories,sources } from '../utils/api';
import {Feather} from '@expo/vector-icons';
export default function NewsView({navigation,route}) {


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
    return(
       <View style={{flex:"1",justifyContent:"center",alignItems:"center",flexDirection:"column",margin:"23px"}}>
       <Image source={{
        uri:props.pic
       }} style={{width:"90px",height:"90px"}} />
       {/* <Text style={{color:"#f6f6f6",fontSize:"17px",fontWeight:"normal"}}>{props.name}</Text> */}
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
      <SourceItem pic={item.pic} name={item.name} />
    )
  }

console.log(route.params.val)
var val = route.params.val;
  return (

    
    <View style={styles.container}>
      {/* <Text style={{color:"#f3f3f3"}}>Open up Home.js to start working on your app!</Text> */}
      <View style={{flex:"1",justifyContent:"center",alignItems:"center",flexDirection:"column",margin:"0px",marginBottom:"0px",paddingBottom:"30px",backgroundColor:"transparent",height:"fit-content",overflow:"hidden",borderRadius:"0px",position:"relative"}}>
        <Pressable onPress={()=>navigation.goBack()} style={styles.backBtn} ><Feather name="arrow-left" size={31} color="rgb(94, 69, 69)" /></Pressable>
       <Image source={{
        uri:val.urlToImage
       }} style={{minWidth:"325px",height:"290px",width:"100%"}} />
          <Text style={{color:"#F6F6F6",fontSize:"17px",fontWeight:"normal",padding:"10px",textAlign:"left",whiteSpace:"no-wrap",overflow:"hidden",textOverflow:"ellipsis"}}>{val.author}</Text>

       <Text numberOfLines={4} style={{color:"#F6F6F6",fontSize:"17px",fontWeight:"bold",padding:"10px",whiteSpace:"no-wrap",overflow:"hidden",textOverflow:"ellipsis",borderBottomColor:"#3f54f2",paddingBottom:"30px",
    borderBottomWidth:"3px",paddingBottom:"30px"}}>{val.title}</Text>
       <Text style={{color:"#F6F6F6",fontSize:"17px",fontWeight:"bold",padding:"10px",width:"100%",whiteSpace:"no-wrap",overflow:"hidden",textOverflow:"ellipsis",borderBottomColor:"#3f54f2",marginBottom:"20px",paddingBottom:"30px",
    borderBottomWidth:"3px",}}>Description:</Text>

       <Text  style={{color:"#F6F6F6",fontSize:"13px",fontWeight:"normal",padding:"5px",textAlign:"left",whiteSpace:"no-wrap",overflow:"hidden",textOverflow:"ellipsis"}}>{val.content}</Text>

       <Text style={{color:"#cac8ee",fontSize:"17px",fontWeight:"normal",padding:"10px",width:"100%",whiteSpace:"no-wrap",overflow:"hidden",textOverflow:"ellipsis",borderBottomColor:"#3f54f2",marginBottom:"20px",marginTop:"20px",
    borderBottomWidth:"0px",}}>URL to News:</Text>
       <Text  style={{color:"blue",fontSize:"13px",fontWeight:"normal",padding:"5px",textAlign:"left",whiteSpace:"no-wrap",overflow:"hidden",textOverflow:"ellipsis"}}>{val.url}</Text>

       {/* <Pressable
        title="View News" style={{marginTop:"20px",backgroundColor:"#333",borderRadius:"5px",padding:"6px",color:"#ffffff"}}
        onPress={() => navigation.navigate("News",{val:val})}
      >
        <View style={{flex:1,justifyContent:"center",alignItems:"center",flexDirection:"row"}}>
        <Text style={{margin:"7px",color:"#ffffff"}}>View News</Text>
        <FontAwesome color="#ffffff" name="newspaper-o" size={17} />
        </View>
      </Pressable> */}
      
       </View>    </View>
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
 ,backBtn:{
  position:"absolute",
  left:"10px",
  top:"10px",
  zIndex:100
 }
});
