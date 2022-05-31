import {View, Text, StyleSheet, Image} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import pins from '../assets/data/pins'
import { useEffect,useState } from 'react'
const PinScreen = () => {
    const [ratio, setRatio] = useState(1)
    const pin = pins[0]
    useEffect(() => {
        if(pin.image){
          Image.getSize(pin.image, (width,height) => setRatio(width/height));
        }
      },[pin.image])

    return(
        <SafeAreaView style={{backgroundColor:"black"}}>
        <View style={styles.root}>
            <Image
            source={{uri:
            pin.image}}
            style={[styles.image,{aspectRatio:ratio}]}
            />
            <Text style={styles.title}> {pin.title}</Text>
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    root:{
        height:"100%",
        backgroundColor:"white"
        
    },
    image:{
width:"100%",
height:200,

    },
    title:{},
})

export default PinScreen
