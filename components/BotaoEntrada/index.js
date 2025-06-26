import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function BotaoEntrada({title, imageName, handleClick}) {
  return (
     <View style={styles.containerIcon}>
        <TouchableOpacity onPress={handleClick}>
        <Entypo style={styles.imgIcon} name={imageName} />
        <Text style={styles.txtIcon}>{title}</Text>
        </TouchableOpacity>
     </View>
  );
}

const styles = StyleSheet.create({
   containerIcon: {
    flexDirection: 'column',
    marginTop: 'auto',
    width: 90,
    alignItems: 'center',
  },

  txtIcon: {
    fontSize: 14,
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 40,
  },

  imgIcon: {
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 35,
    color: '#ffffff',
    width: 50, 
    height: 50, 
    tintColor: 'white',
  },
})