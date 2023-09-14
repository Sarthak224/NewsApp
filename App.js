import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Home from './Screens/Home';
import News from './Screens/News';
import NewsView from './Screens/NewsView';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Feather} from '@expo/vector-icons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NewsByFilter from './Screens/NewsByFilter';

export default function App() {

  const Stack = createNativeStackNavigator();

  const Tab = createBottomTabNavigator();
  // const Stack = createStackNavigator()
  function HomeScreen({navigation}){
    return(
    // <NavigationContainer>
      <Tab.Navigator screenOptions={
        {
          tabBarActiveTintColor:"tomato",
          tabBarInactiveTintColor:"grey",
          
        }
      }>
      {/* <View style={styles.container}> */}
       <Tab.Screen name={"Categories"} children={()=><Home navigation={navigation}/> }
       options={{
        tabBarIcon : ({focused})=><Feather name="search" size={25} color={focused?'tomato':'grey'} />
       }}
       />
       {/* <Tab.Screen name={"upcoming"} component={Home}
        options={{
          tabBarIcon : ({focused})=><Feather name="clock" size={25} color={focused?'tomato':'grey'} />
         }}
       /> */}
       <Tab.Screen name={"Home"} 
        children={()=><News navigation={navigation} />}
        options={{
          tabBarIcon : ({focused})=><Feather name="home" size={25} color={focused?'tomato':'grey'} />
         }}
       />
  
       {/* <Home /> */}
       {/* <UpcomingWeather /> */}
       {/* <City /> */}
      {/* </View> */}
      </Tab.Navigator>
  
     
  
    )
  }
  

  return (
    // <SafeAreaView>
  
     <NavigationContainer>
     <Stack.Navigator screenOptions={{headerShown: false}}>
     <Stack.Screen name="Home" component={HomeScreen}/>
     <Stack.Screen name="News" component={NewsView}/>
     <Stack.Screen name="NewsByFilter" component={NewsByFilter}/>

     {/* <Stack.Screen name="Home" component={Home}/>
     <Stack.Screen name="MachinesList" component={MachinesList}/>
     <Stack.Screen name="Size" component={Size}/>
     <Stack.Screen name="Weight" component={Weight}/>  */}
</Stack.Navigator>
</NavigationContainer> 

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    color:"#f6f6f6",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width:"100%",
    height:"100%",
  },
});
