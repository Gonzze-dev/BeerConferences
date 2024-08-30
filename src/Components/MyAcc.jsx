import { StyleSheet, Pressable} from 'react-native'

import TextUI from '../UI/TextUI'

import { useNavigation } from '@react-navigation/native';


const MyAcc = () => {
    const { navigate } = useNavigation();

  return (
    <Pressable
        style={styles.myAcc}
        onPress={() => navigate("Account")}
    >
        <TextUI >Mi cuenta</TextUI>
    </Pressable>
    )
}

export default MyAcc

const styles = StyleSheet.create({
    myAcc: {
      width: "min-content",
      paddingVertical: 10,
      paddingHorizontal: 10,
      alignItems: "flex-end",
  
    }
})