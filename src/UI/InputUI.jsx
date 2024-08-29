import { StyleSheet, TextInput } from 'react-native'
import { useState } from 'react'
import brightenColor from '../utils/brightenColor';

function InputUI ({color='#6B422C',
                height=50,
                width='95%',
                marginBottom=12,
                borderBottomWidth = 1,
                amount = 0.3,
                borderColor = '#6B422C',
                placeholder="",
                placeholderTextColor="#A45C3F",
                onChangeText=() => {},
                ...props})
{
    const [isPressed, setIsPressed] = useState(false);
    
    const handlerFocus = () => setIsPressed(!isPressed)
    const handlerFocusOut = () => setIsPressed(false)

    const styles = StyleSheet.create({
        input: {
            color: color,
            height: height,
            width: width,
            marginBottom: marginBottom,
            borderBottomWidth: borderBottomWidth,
            borderColor: isPressed ? borderColor : brightenColor(borderColor, amount),
        }
    })
    
    return (
        <TextInput style={styles.input}
        onFocus={handlerFocus}
        onBlur={handlerFocusOut}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        onChangeText={onChangeText}
        {...props}/>
    )
}

export default InputUI

