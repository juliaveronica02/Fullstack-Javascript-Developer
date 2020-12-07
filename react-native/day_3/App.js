import React from 'react'
import {View, Text, Button} from "react-native"
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import { TextInput } from 'react-native-gesture-handler';

function HomeScreen({navigation, route}) {
  React.useEffect(() => {
    if (route.params?.post) {

    }
  }, [route.params?.post]);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>HomeScreen</Text>
      <Button title="Create Post" onPress={() => navigation.navigate('CreatePost')} />
      <Text style={{margin: 10}}>
        Post: {route.params?.post}
      </Text>
    </View>
  )
}
const Stack = createStackNavigator();

function CreatePostScreen({navigation, route}) {
  const [postText, setPostText] = React.useState('');
  return (
    <>
    <TextInput multiline placeholder="What's on your mind"
    style={{height: 200, padding: 10, backgroundColor: 'white'}} value={postText} onChangeText={setPostText} />
    <Button title="Done" onPress={() => {
      navigation.navigate("Home", {post: postText})
    }}/>
    </>
  )
}

// function DetailsScreen({route, navigation}) {
//   const {itemId} = route.params;
//   const {otherParam} = route.params
//   return (
//     <View style={{flex: 1, alignItems:'center', justifyContent: 'center'}}>
//       <Text> Details Screen</Text>
//       <Text>itemId: {JSON.stringify(itemId)}</Text>
//       <Text>otherParam: {JSON.stringify(otherParam)}</Text>
//       <Button title="Go to Details ... again" onPress={()=> navigation.push('Details'), {
//         itemId:Math.floor(Math.random()* 100),
//       }} />
//       <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
//       <Button title="Go Back" onPress={() => navigation.goBack()} />
//       {/* <Button title="Go back to first screen in stack" onPress={() => navigation.popToTop()} /> */}
//     </View>
//   )
// }

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
        <Stack.Screen name="CreatePost" component={CreatePostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;