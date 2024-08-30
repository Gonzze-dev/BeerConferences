//Components
import { View, Text, StyleSheet, Pressable } from "react-native";

//UI
import ImageUI from "../UI/ImageUI";

import location from "../assets/icons/location.png"
import calendar from "../assets/icons/calendar.png"

import { useNavigation } from "@react-navigation/native";
import { getDates } from "../utils/getDates";
import TextUI from "../UI/TextUI";


const CardEvent = ({ conference }) => {
  const { navigate } = useNavigation();

  //Pasamos los datos por parametros con navigate para no hacer otro llamado a la api de firebase
  const handleViewPress = () => {
    navigate("Detail", { conference });
  };


  const { start } = getDates(conference.start, conference.end);

  return (
    <Pressable style={styles.cardContainer} onPress={handleViewPress}>

      <ImageUI size={150} resizeMode="cover" moreStyles={styles.imageCard} source={{ uri: conference.img }} />

      <View style={styles.dataContainer}>

        <TextUI fontSize={20}>{conference.name}</TextUI>

        <View style={styles.detailsContainer}>

          <View style={styles.iconTextContainer}>

            <ImageUI size={20} source={location} />
            <Text style={styles.detailText}>{conference.city}</Text>

          </View>

          <View style={styles.iconTextContainer}>
            <ImageUI size={20} source={calendar} />
            <Text style={styles.detailText}>{start} </Text>

          </View>

        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    overflow: "hidden",
    marginVertical: 10,
    marginHorizontal: 16,
    elevation: 8,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.9,
    shadowRadius: 3.84,
  },

  imageCard: {
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  dataContainer: {
    alignItems: "flex-start",
    flex: 1,
    padding: 16,
  },
  detailsContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 7,
  },
  iconTextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  detailText: {
    marginLeft:5,
    fontSize: 16,
    color: "#777777",
  },
});

export default CardEvent;
