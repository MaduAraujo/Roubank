import { Text, SafeAreaView, StyleSheet, ImageBackground, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BotaoEntrada from './components/BotaoEntrada';
import { useState } from 'react';

export default function TiposDeEntradas() {
  const navigation = useNavigation();
  const [showPinInput, setShowPinInput] = useState(false);
  const [pin, setPin] = useState('');

  const goToLoginOutros = () => {
    navigation.navigate('LoginOutros');
  };

  const goToLoginPin = () => {
    navigation.navigate('LoginPin');
  };

  const goToLoginAutenticacao = () => {
    navigation.navigate('LoginBiometria');
  };

  const goToLoginCadastro= () => {
    navigation.navigate('Cadastrar');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.background} source={require('./assets/background1.png')}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>Roubank</Text>
        </View>

        <View style={styles.containerBottom}>
          <View style={styles.containerEntrarComo}>
            <Text style={styles.txtEntrarComo}>Entrar Como</Text>
          </View>
          <View style={styles.containerBotoes}>
            <BotaoEntrada 
            title= "Pin" 
            imageName = 'dial-pad' 
            handleClick = {() => goToLoginPin()}/>

            <BotaoEntrada 
            title= "Biometria" 
            imageName = 'user' 
            handleClick = {() => goToLoginAutenticacao()} />

            <BotaoEntrada 
            title= "Outros"  
            imageName = 'chevron-thin-up' 
            handleClick = {() => goToLoginOutros()}/>

            <BotaoEntrada 
            title= "Cadastrar"  
            imageName = 'chevron-thin-up' 
            handleClick = {() => goToLoginCadastro()}/>
          </View>
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
    fontSize: 50,
    color: '#ffffff',
  },

  containerEntrarComo: {
    marginBottom: 0,
  },

  containerBottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 50,
  },

  txtEntrarComo: {
    fontSize: 12,
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 50,
  },

  containerBotoes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});