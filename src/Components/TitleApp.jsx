import { StyleSheet, View, Image } from 'react-native'

//UI
import TextUI from "../UI/TextUI";

import beer from "../assets/Images/beer.png"

function TitleApp ({children}) {
  return (
    <View style={styles.container}>
        <Image source={beer} style={styles.imageBeer}/>
        <TextUI color="#FFFFFF" fontSize={32} fontFamily='impact'>
            Beer<TextUI fontSize={32} fontFamily='impact'>conf</TextUI>
        </TextUI>

        <View style={styles.containerElements}>
            {children}
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FDB515",
        flex: 1,
        alignItems: "center",
        gap: 20,
    },
    imageBeer: {
        width: 150,
        height: 150,
        top: -10,
    },
    containerElements: {
        alignItems: "center",
        padding: 16,
        gap: 25,
        width: '100%',
        height: '80%',
        backgroundColor: '#FFFFFF',
        borderRadius: 40,
    }
})

export default TitleApp

