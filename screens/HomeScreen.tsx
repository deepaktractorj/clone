import { StyleSheet, Image,ScrollView } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import Pin from '../components/Pin';
import pins from '../assets/data/pins'
export default function HomeScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <ScrollView>
    <View style={styles.container}>
      {/* firstCoumn */}
      <View style={styles.coulmn}>
         {pins.filter((_,index) => index % 2 === 0).map((item,index) => <Pin pin={item} key={index} /> )}
      </View>
      {/* secondColumn */}
      <View style={styles.coulmn}>
      {pins.filter((_,index) => index % 2 !== 0).map((item,index) => <Pin pin={item} key={index} /> )}
      </View>
    </View>
    </ScrollView> 
  ); 
}
const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    padding:10
  },
  coulmn:{
    flex:1
  },
  pin:{
    width:"100%",
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft:10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  image:{
    width:"100%",
    height:200,
    borderRadius:25,
  }
});
