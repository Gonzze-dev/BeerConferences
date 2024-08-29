import { StyleSheet, Text, Image } from 'react-native'
import React from 'react'

function ImageUI ({size=30,
                    resizeMode='contain',
                    img = '',
                    moreStyles={},
                    ...props
}) {
    const styles = StyleSheet.create({
        image: {
            width: size,
            height: size,
            resizeMode: resizeMode,
            ...moreStyles
        }
    })

    return (
        <Image style={styles.image} 
                source={img} 
                {...props}/>
        
  )
}

export default ImageUI

