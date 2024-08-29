//Componentes
import {
  View,
  StyleSheet,
  Alert,
} from "react-native";

//UI
import ButtonUI from "../UI/ButtonUI";
import InputUI from "../UI/InputUI";
import TextUI from "../UI/TextUI";

//Funciones
import { useState } from "react";
import { auth } from "../FB/Firebase";
import { useNavigation } from "@react-navigation/native";
import { sendPasswordResetEmail } from "firebase/auth";
import TitleApp from "../Components/TitleApp";


const ForgotPassword = () => {
  const [Email, setEmail] = useState("");
  const { navigate } = useNavigation();

  const handleResetPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, Email);
      Alert.alert(
        "Correo Enviado",
        "Se ha enviado un correo electrónico para restablecer tu contraseña. Por favor, revisa tu bandeja de entrada.",
        [
          {
            text: "OK",
            onPress: () => navigate("Login"),
          },
        ]
      );
    } catch (error) {
      console.error(
        "Error al enviar el correo de recuperación:",
        error.message
      );
      Alert.alert(
        "Error",
        "No se pudo enviar el correo de recuperación. Verifica la dirección de correo electrónico."
      );
    }
  };

  return (
    <TitleApp>

      <View style={styles.inputContainer}>
        <TextUI fontSize={22} marginBottom={10}>Recuperar contraseña</TextUI>
        <InputUI
          placeholder="Email"
          onChangeText={(value) => setEmail(value)}
        />
      </View>
      <ButtonUI onPress={handleResetPassword}>
        <TextUI>Enviar</TextUI>
      </ButtonUI>

    </TitleApp>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    alignItems: "center",
  },
});

export default ForgotPassword;
