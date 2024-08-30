import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useState, useEffect } from "react";
import { getData } from "../utils/getData";

//UI
import ImageUI from "../UI/ImageUI";

import location from "../assets/icons/location.png"

const MapMainConferences = () => {
  const [conferences, setConferences] = useState([]);
  const GetConfereces = async () => {
    const data = await getData();
    setConferences(data);
  };
  useEffect(() => {
    GetConfereces();
  }, []);

  return (
    <View style={styles.container}>
      {conferences !== 0 ?
          <MapView
          style={styles.map}
          initialRegion={{
            latitude: -33.0143763850396,
            longitude: -58.52120861209565,
            latitudeDelta:  0.02,
            longitudeDelta:  0.045,
          }}
        >
          {conferences.map((conference, index) => (
            <Marker
              key={index}
              pinColor="#fdba74"
              coordinate={{
                latitude: conference?.ubication?.latitude ?? -33.0143763850396,
                longitude: conference?.ubication?.longitude ?? -58.52120861209565,
              }}
              title={`${conference?.name ?? '-'}`}
              description={` ${conference?.city ?? 'Gualeguaychú'} - ${conference?.speacker ?? '-'}`}
            />
          ))}
        </MapView>
        :
        null
      }
      
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});

export default MapMainConferences;
