import { 
    Pressable,
    StyleSheet } from 'react-native'
import { useState } from 'react'

import darkenColor from '../utils/darkerColor';

function ButtonUI({width= '100%', 
                    backgroundColor = "#FDB515",
                    amount = 0.2,
                    paddingVertical = 16,
                    borderRadius = 30,
                    onPress=() => {}, 
                    children, 
                    ...props}) {

    const [isPressed, setIsPressed] = useState(false);
    
    const handlerPressedIn = () => setIsPressed(!isPressed)
    const handlerPressedOut = () => setIsPressed(false)

    const styles = StyleSheet.create({
        button: {
            width: width,
            alignItems: "center",
            paddingVertical: paddingVertical,
            backgroundColor: isPressed ? darkenColor(backgroundColor, amount) : backgroundColor,
            borderRadius: borderRadius,
        },
    })

    return (
        <Pressable style={styles.button}
                    onPress={onPress}
                    onPressIn={handlerPressedIn}
                    onPressOut={handlerPressedOut}
                    {...props}>
            {children}
        </Pressable>
    )
}

export default ButtonUI;