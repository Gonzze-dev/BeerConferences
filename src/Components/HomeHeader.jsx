//Componentes
import {
  View,
  StyleSheet,
  TextInput,
} from "react-native";

//UI
import TextUI from "../UI/TextUI";
import ImageUI from "../UI/ImageUI";

import beer from "../assets/Images/beer.png"

//Funciones y hooks
import searchSvg from '../assets/icons/search.png'


const HomeHeader = ({ onSearch }) => {
  
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <ImageUI size={70} source={beer}/>
        <TextUI marginLeft={10} color="#FFFFFF" fontSize={32} fontFamily='impact'>
            Beer<TextUI fontSize={32} fontFamily='impact'>conf</TextUI>
        </TextUI>
      </View>

      <View style={styles.inputContainer}>
        <ImageUI
          size={20}
          img={searchSvg}
        />
        <TextInput
          style={styles.searchInput}
          onChangeText={(text) => {
            onSearch(text);
          }}
          placeholder="Buscar evento..."
          placeholderTextColor="#A55B40"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 160,
    backgroundColor: "#FDB515",
    alignItems: "center",
    paddingTop: 25,
    position: 'relative'
  },
  
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    backgroundColor: "#F9990E",
    height: 55,
    borderRadius: 25,
    paddingHorizontal: 16,
    top: 40,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#6B422C",
    marginLeft: 10
  },
  
});

export default HomeHeader;
