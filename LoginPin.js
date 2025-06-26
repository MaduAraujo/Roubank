import { Text, SafeAreaView, StyleSheet, ImageBackground, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginPin() {
  const navigation = useNavigation();
  const goToAreaLogada = () => {
    navigation.navigate('AreaLogadaTabs');
  }
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.background} source={require('./assets/background1.png')}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>Roubank</Text>
        </View>

        <View style={styles.containerInputs}>
          <TextInput
            style={styles.input}
            placeholder="Informe seu pin"
            placeholderTextColor='white'
            paddingLeft = '10'
            keyboardType="numeric" 
            secureTextEntry={true} 
          />
        </View>

        <View style={styles.containerAcessar}>
          <TouchableOpacity style={styles.btnAcessar} onPress={goToAreaLogada}>
            <Text style={styles.txtAcessar}>ACESSAR</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
    
  background: {
    flex: 1,
    width: '100%', 
    height: '103%',
  },
  
  containerTitle: {
    marginTop: 390,
    marginLeft: 111,
    width: 229,
    height: 61,
  },
  
  title: {
    color: '#ffffff',
    fontSize: 50,
  },
  
  containerInputs: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 40,
  },
  
  input: {
    backgroundColor: '#342748',
    color: 'white',
    borderColor: '#A992E8',
    borderWidth: 3,
    marginTop: 20,
    width: 300,
    height: 50,
    borderRadius: 24,
    fontSize: 12,
  },
  
  containerAcessar: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 70,
  },
  
  btnAcessar: {
    backgroundColor: '#3C2348',
    borderColor: '#A992E8',
    borderWidth: 1,
    width: 155,
    height: 59,
    borderRadius: 24,
    alignItems:'center',
    justifyContent: 'center',
  },
  
  txtAcessar: {
    textAlign: 'center',
    color:'#A48EED',
    fontSize: 15,
  }
});