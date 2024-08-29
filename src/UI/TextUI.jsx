import { StyleSheet, Text } from 'react-native'


function TextUI ({ color = "#6B422C",
    fontSize = 16,
    fontWeight = "",
    fontFamily = 'roboto-bold',
    marginTop = 0,
    marginLeft = 0,
    marginRigth = 0,
    marginBottom = 0,
    children,
    moreStyles = {}, 
    ...props}) 
{
    
    
    const styles = StyleSheet.create({
        text: {
            color: color,
            fontSize: fontSize,
            fontWeight: fontWeight,
            marginTop: marginTop,
            marginLeft: marginLeft,
            marginRigth: marginRigth,
            marginBottom: marginBottom,
            fontFamily: fontFamily,
            ...moreStyles
        },
    })

    return (
        <Text style={styles.text} {...props}>{children}</Text>
    )
}

export default TextUI

