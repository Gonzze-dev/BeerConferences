//Componentes
import {
    View,
    Text,
    StyleSheet,
    Pressable,
    Alert,
} from "react-native";

//UI
import ButtonUI from "../UI/ButtonUI";
import InputUI from "../UI/InputUI";
import TextUI from "../UI/TextUI";

//Components UI
import TitleApp from "../Components/TitleApp";

//Funciones
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../FB/Firebase";


const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const { navigate, reset } = useNavigation();
  
  const handleLogin = () => {
    reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  };

  const HandleSingIn = () => {
    if ([Email, Password].includes("")) {
      return Alert.alert("Ingrese todos los datos");
    }
    signInWithEmailAndPassword(auth, Email, Password)
      .then(() => {
        navigate("Home");
        handleLogin();
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };

  const handleViewPress = () => {
    navigate("SingUp");
  };

  return (
    <TitleApp>
      
        <View style={styles.inputContainer}>
          <TextUI fontSize={22}>Iniciar Sesión</TextUI>
          <InputUI
            placeholder="Email"
            onChangeText={(value) => setEmail(value)}
          />
          <InputUI
            placeholder="Password"
            onChangeText={(value) => setPassword(value)}
            secureTextEntry
          />
        </View>

        <ButtonUI onPress={HandleSingIn}>
          <TextUI>Ingresar</TextUI>
        </ButtonUI>

        <ButtonUI onPress={handleViewPress}>
          <TextUI>Crear cuenta</TextUI>
        </ButtonUI>

        <Pressable onPress={() => navigate("ForgotPassword")}>
          <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
        </Pressable>

    </TitleApp>
      
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    alignItems: "center",
  },
  forgotPassword: {
    color: "gray",
  },
});

export default Login;
