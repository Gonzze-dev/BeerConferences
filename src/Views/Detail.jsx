//Componentes
import { View, Image, Text, StyleSheet, ScrollView } from "react-native";
import MapScreen from "../Components/Map";

//UI
import TextUI from '../UI/TextUI'
import ImageUI from "../UI/ImageUI";

import locationPNG from "../assets/icons/location.png"
import calendarPNG from "../assets/icons/calendar.png"
import clockPNG from "../assets/icons/clock.png"

//Funciones y hooks
import { useRoute } from "@react-navigation/native";
import { getDates } from "../utils/getDates";

const Detail = () => {
  const route = useRoute();
  const { conference } = route.params;

  const { date, start, end } = getDates(
    conference.start,
    conference.end
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.nameConfContainer}>
        <TextUI fontSize={21} fontFamily = 'roboto-black' moreStyles={styles.nameConf}>{conference.name}</TextUI>
        <Image style={styles.image} source={{ uri: conference.img }} />
      </View>

      <View style={styles.dateTimeContainer}>
        <View style={styles.dateTimeIcon}>
          <Text style={styles.date}> <ImageUI img={calendarPNG}/> {date}</Text>
        </View>
        <Text style={styles.time}> <ImageUI img={clockPNG}/> {`${start} a ${end}`}</Text>
      </View>

      <TextUI fontSize={16} moreStyles={styles.speackerContainer}>Organizador: <TextUI color="black" fontFamily="roboto-medium">{conference.speacker}</TextUI> </TextUI>
      <TextUI moreStyles={styles.description}>{conference.name}</TextUI>

      <View style={styles.locationContainer}>
        <TextUI><ImageUI size={30} img={locationPNG}/> {conference.city}</TextUI>
          <MapScreen
            lat={conference.ubication._lat}
            long={conference.ubication._long}
            name={conference.name}
            des={conference.name}
          />
      </View>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FDC13C'
  },
  nameConfContainer: {
    position: 'relative',
    marginTop: 30
  },

  dateTimeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 10,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20
  },
  nameConf:{
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    padding: 3,
    borderRadius: 20,
    position: 'absolute',
    top: -25,
    left: 10,
    zIndex: 99
  },

  image: {
    width: "100%",
    height: 200,
    borderRadius: 20,
    marginBottom: 10,
  },

  speackerContainer:{
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
  },
  
  description: {
    fontSize: 16,
    fontFamily: 'roboto-medium',
    marginTop: 20,
    marginBottom: 20,
    padding: 10,
    color: "gray",
    backgroundColor: 'white',
    borderRadius: 20
  },
  
  dateTimeIcon: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  date: {
    marginLeft: 0,
    fontSize: 14,
  },
  time: {
    fontSize: 14,
    color: "#000a23",
  },

  locationContainer: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 40,
    borderRadius: 20
  },
  location: {
    marginLeft: 0,
    fontSize: 16,
  },
});

export default Detail;
