//Componentes
import {
  View,
  Text,
  Image,
  StyleSheet,
  Alert,
  BackHandler,
} from "react-native";

//UI
import ButtonUI from "../UI/ButtonUI";
import userImg from "../assets/Images/userImg2.png"

//Components UI
import TitleApp from "../Components/TitleApp";

//Funciones
import { useNavigation } from "@react-navigation/native";
import { auth } from "../FB/Firebase";
import { useState, useEffect } from "react";
import TextUI from "../UI/TextUI";



export const Account = () => {
  const [user, setUser] = useState(null);
  const {navigate, reset} = useNavigation();

  useEffect(() => {
    const handleBackButton = () => {
      return true;
    };

    BackHandler.addEventListener("hardwareBackPress", handleBackButton);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackButton);
    };
  }, []);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("Login");
      reset({
        index: 0,
        routes: [{ name: "Login" }],
      });
    } catch (error) {
      Alert.alert("Error al cerrar sesión", error);
    }
  };
  return (
    <TitleApp>
      {user && (
        <>
            <Image
              style={styles.profileImage}
              source={userImg}
            />

            <TextUI fontSize={22}>{user.email}</TextUI>
        </>
      )}
      <ButtonUI onPress={handleLogout}>
        <TextUI>Cerrar sesión</TextUI>
      </ButtonUI>
    </TitleApp>
  );
};

const styles = StyleSheet.create({
  profileImage: {
    width: 150,
    height: 150,
  },

  textInfo: {
    marginTop: 30,
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Account;
