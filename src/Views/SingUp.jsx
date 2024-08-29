// Componentes
import React, { useState } from "react";

import {
  View,
  StyleSheet,
  Alert,
} from "react-native";

//UI
import ButtonUI from "../UI/ButtonUI";
import InputUI from "../UI/InputUI";
import TextUI from "../UI/TextUI";

import beer from "../assets/Images/beer.png"

// Funciones
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../FB/Firebase";
import { useNavigation } from "@react-navigation/native";
import TitleApp from "../Components/TitleApp";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { navigate } = useNavigation();

  const handleCreateAccount = () => {
    if ([email, password, confirmPassword].includes("")) {
      return Alert.alert('Datos incompletos',"Ingrese todos los datos");
    }
    if (password.length < 6) {
      return Alert.alert('Contraseña corta', "La contraseña debe de ser mayor a 5 caracteres!");
    }
    if (password !== confirmPassword) {
      return Alert.alert('Error, contraseñas diferentes',"Las dos contraseñas ingresadas deben ser iguales!");
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        Alert.alert("Cuenta creada!", 
          "La cuenta a sido creada correctamente!", 
          [
            {
              text: 'OK',
              onPress: () => navigate("Login")
            }
          ]
      );
      })
      .catch((error) => {
        Alert.alert("Error", 'hubo un error al intentar crear la cuenta :(');
      });
  };

  return (
    <TitleApp>

        <View style={styles.inputContainer}>
          <TextUI fontSize={22} marginBottom={10}>Registrarse</TextUI>
          <InputUI
            placeholder="Correo Electrónico"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <InputUI
            placeholder="Contraseña"
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry
          />
          <InputUI
            placeholder="Confirmar Contraseña"
            onChangeText={(text) => setConfirmPassword(text)}
            value={confirmPassword}
            secureTextEntry
          />
        </View>

        <ButtonUI onPress={handleCreateAccount}>
          <TextUI>Registrarse</TextUI>
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
