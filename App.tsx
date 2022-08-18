// import { StatusBar } from "expo-status-bar";
// import { Button, StyleSheet, Text, View } from "react-native";
// import * as WebBrowser from "expo-web-browser";
// import * as Application from "expo-application";
// import * as Google from "expo-auth-session/providers/google";
// import { useEffect, useState } from "react";
// import axios from "axios";

// interface User {
//   email: string;
//   family_name: string;
//   given_name: string;
//   id: number;
//   locale: string;
//   name: string;
//   picture: string;
//   verified_email: boolean;
// }

// WebBrowser.maybeCompleteAuthSession();

// const config = {
//   expoClientId:
//     "898252562836-a1ncucgau6fthgs030jgh2lhs877nv6m.apps.googleusercontent.com",
//   androidClientId:
//     "898252562836-t7j03agpglic6fsrbqrtpftt6klidrlt.apps.googleusercontent.com",
//   webClientId:
//     "898252562836-hesq3ibd5q2d60ac2m17fufv8nah94lk.apps.googleusercontent.com",
// };

// export default function App() {
//   const androidId = Application.androidId;
//   const applicationId = Application.applicationId;
//   const [accessToken, setAccessToken] = useState<string | undefined>("");
//   const [userData, setUserData] = useState<User>();
//   // console.log("Android ID : ", androidId, "Application ID : ", applicationId);

//   const [request, response, promptAsync] = Google.useAuthRequest(config);

//   useEffect(() => {
//     if (response?.type === "success") {
//       const { authentication } = response;
//       setAccessToken(authentication?.accessToken);
//     }
//   }, [response]);

//   const userInfo = async () => {
//     const response = await axios.get(
//       "https://www.googleapis.com/userinfo/v2/me",
//       {
//         headers: { Authorization: `Bearer ${accessToken}` },
//       }
//     );
//     setUserData(response.data);
//   };

//   return (
//     <View style={styles.container}>
//       <Text>Open up App.tsx to start working on your app!</Text>
//       <Button
//         disabled={!request}
//         title={accessToken ? "Get User Info" : "Login"}
//         onPress={
//           accessToken
//             ? userInfo
//             : () => {
//                 promptAsync();
//               }
//         }
//       />
//       <StatusBar style="auto" />
//       {userData ? <Text>{userData.name}{userData.email}</Text> : null}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import FeedBack from "./pages/Feedback/FeedBack";
import HomePage from "./pages/Homepage/HomePage";
import Submit from "./pages/Submit";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList ={
  Home: undefined;
  FeedBack : undefined;
  Submit : {handleSubmit: ()=> void}
}
export type Props = NativeStackScreenProps<RootStackParamList, 'Submit'>;
const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  const [loaded] = useFonts({
    Cocogoose: require("./assets/fonts/Cocogoose-Classic-Medium-trial.ttf"),
    OpenSansRegular : require("./assets/fonts/OpenSans-Regular.ttf"),
    OpenSansSemiBold : require("./assets/fonts/OpenSans-Semibold.ttf")
  });
  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="FeedBack" component={FeedBack}/>
        <Stack.Screen name="Submit" component={Submit}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
