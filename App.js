import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import InputText from "./component/inputText";
import SignUp from "./signUp";
import Login from "./login";
import ForgetPassword from "./forgetPassword";


const App = () => {
  return (
    <View>
      <SafeAreaView>

      {/* <SignUp/> */}
      <Login/>
      {/* <ForgetPassword/> */}

      </SafeAreaView>
    </View>
  )
}

export default App;