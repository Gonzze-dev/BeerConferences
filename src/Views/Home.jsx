//Componentes
import { View, StyleSheet, Text, Pressable, Alert } from "react-native";
import HomeHeader from "../Components/HomeHeader";
import ListCardsEvents from "../Components/ListCardsEvents";

//UI
import ImageUI from "../UI/ImageUI";

import location from "../assets/icons/location.png"

//Funciones
import { getData } from "../utils/getData";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import LoadingIndicator from "../Components/Loading";
import TextUI from "../UI/TextUI";

export const Home = () => {
  const { navigate } = useNavigation();
  const [Conferences, setConferences] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  const GetConfereces = async () => {
    const data = await getData();
    setConferences(data);
  };
  useEffect(() => {
    GetConfereces();
  }, []);

  const filteredConferences = Conferences.filter((conference) =>
    conference.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const conferenceProps =
    filteredConferences.length !== 0 ? filteredConferences : Conferences;

  return (
    <View style={styles.container}>
      
      {
        Conferences.length === 0 ?
        <LoadingIndicator/>
        :
        <>
          <HomeHeader onSearch={handleSearch} />
          <View style={styles.ButtonMapContainer}>
            <Pressable
              style={styles.ButtonMap}
              onPress={() => navigate("MapConferences")}
            >
              <TextUI ><ImageUI img={location}/> Ver en el Mapa</TextUI>
            </Pressable>
          </View>

          <ListCardsEvents conferences={conferenceProps} />
        </>
      }
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    backgroundColor: '#FDC13C',
  },
  ButtonMapContainer: {
    marginTop: 70,
    width: "100%",
    alignItems: "center",
  },
  TextOrder: {
    fontWeight: "bold",
    marginTop: 70,
    fontSize: 16,
  },
});
