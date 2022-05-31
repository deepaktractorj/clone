import {View, Image, StyleSheet,Text, Pressable} from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import {useState,useEffect} from 'react'


const Pin = (props) => {
  const [aspectRatio, setAspectRatio] = useState(1)
  const {id,title, image} = props.pin

const OnLike = () => {}
 
  useEffect(() => {
    if(image){
      Image.getSize(image, (width,height) => setAspectRatio(width/height));
    }
  },[image])


return (
        <View style={styles.pin}>
          <View>
        <Image
        source={{uri:image}}
        style={[styles.image,{aspectRatio:aspectRatio}]}
           
        />
        <Pressable onPress={OnLike}
        style={styles.heartBtn}
        >
        <AntDesign name="hearto" size={16} color="black" />
        </Pressable>
        </View>
              <Text style={styles.title}
              numberOfLines={2}
              >{title}</Text>
            </View>
    )
}
const styles = StyleSheet.create({
    pin:{
      width:"100%",
      padding:4,
    },
    title: {
      fontSize: 16,
      fontWeight: '600',
      lineHeight:22,
      color:"#6b6b6e",
      margin:10,
    },
    heartBtn:{
      backgroundColor:"#D3CFD4",
      position:"absolute",
      bottom:10,
      right:10,
      padding:4,
      borderRadius:50,
      justifyContent:"center",
      alignItems:"center",

    },
    image:{
      width:"100%",
      borderRadius:25,
    }
  });
export default Pin;
