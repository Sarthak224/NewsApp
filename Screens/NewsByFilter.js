import axios from "axios";
import { useEffect, useState } from "react";
import { Text, View ,StyleSheet, FlatList, Pressable, Image} from "react-native";
import {FontAwesome,Feather} from '@expo/vector-icons';

export default function NewsByFilter(props){
    var navigation = props.navigation
    var propsData = props.route.params;
    console.log(propsData)

    const [news,setNews] = useState([]);

    async function getNewsData(){
        var res = await axios.get(propsData.url);
        if(res.status == 200){
            setNews(res.data)
        }
    }


    useEffect(()=>{
      getNewsData();
    },[])

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
    
    

    
      function renderSourceItem({item}){
        return (
          <SourceItem val={item} />
        )
      }


return (
    
    <View style={{backgroundColor:"#323245",position:"relative"}}>
    <Pressable onPress={()=>navigation.goBack()} style={styles.backBtn} ><Feather name="arrow-left" size={31} color="#f6f6f6" /></Pressable>

      <Text style={styles.title}>{propsData.categoryTitle}</Text>
        {/* <FlatList showsHorizontalScrollIndicator={false} style={styles.categoriesList} horizontal data={categories} renderItem={renderItem}  />
        
        <Text style={styles.title}>Sources</Text>
        {/* <View style={{flex:1/2,justifyContent:"start",flexDirection:"row",height:"380px"}}> */}
        <FlatList  horizontal={false} numColumns={1}   data={news.articles} renderItem={renderSourceItem}  />
   </View>
)



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
    },
    backBtn:{
        position:"absolute",
        left:"90%",
        top:"10px",
        zIndex:100
       }
}
)  