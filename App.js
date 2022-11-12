import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import Tareas from "./services/Tareas";
import ListaCuidadores from "./views/ListaCuidadores";
import Signin from "./views/Signin";
import Login from "./views/Login";
import MenuH from "./views/MenuH";
import Persona from "./views/Persona";
import ListaTareas from "./views/ListaTareas";
import ListaPulpos from "./views/ListaPulpos";
import Tarea from "./views/Tarea";
import Gasto from "./views/Gasto";
import ListaGastos from "./views/ListaGastos";
import Pulpo from "./views/Pulpo";
import Home from "./views/Home";
import LoginG from "./views/LoginG";
import { createContext } from "react";
//import * as Google from 'expo-auth-session/providers/google'

// **********************************************************
// apaga el WARNING
import { LogBox } from "react-native";

LogBox.ignoreLogs(["EventEmitter.removeListener"]);
// **********************************************************

import { NativeBaseProvider, Box } from "native-base";
const Stack = createNativeStackNavigator();
// options={{headerShown: false}}

export default function App() {
  const [authData, setAuthData] = useState(true);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <>
          {authData ? (
            <>
              <Stack.Screen name="Home" component={Home} />
            </>
          ) : (
            <Stack.Screen name="LoginG" component={LoginG} />
          )}

          <Stack.Screen name="ListaCuidadores" component={ListaCuidadores} />
          <Stack.Screen name="ListaTareas" component={ListaTareas} />
          <Stack.Screen name="ListaPulpos" component={ListaPulpos} />
          <Stack.Screen name="ListaGastos" component={ListaGastos} />
          <Stack.Screen name="Signin" component={Signin} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Persona" component={Persona} />
          <Stack.Screen name="Tarea" component={Tarea} />
          <Stack.Screen name="Gasto" component={Gasto} />
          <Stack.Screen name="Pulpo" component={Pulpo} />
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
