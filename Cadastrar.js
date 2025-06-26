import { Text, SafeAreaView, StyleSheet, ImageBackground, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

export default function Cadastrar() {
  const navigation = useNavigation();
  const goToAreaLogada = () => {
    navigation.navigate('AreaLogadaTabs');
  };

  const [usuario, setUsuario] = useState({
    name: '',
    cpf: '',
    email: '',
    password: ''
  });

  const [confirmarPassword, setConfirmarPassword] = useState('');

  const validarFormulario = async () => {
    const { name, cpf, email, password } = usuario;

    //Verifica se todos os campos estão preenchidos
    if (!name || !cpf || !email || !password || !confirmarPassword) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    //Valida o formato do email
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailValido) {
      Alert.alert('Erro', 'Email inválido.');
      return;
    }

    //Verifica se as senhas coincidem
    if (password !== confirmarPassword) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }

    try{
      Alert.alert('Sucesso', 'Cadastro realizado com sucesso');
      goToAreaLogada();
    }catch(error){
      Alert.alert('Erro ao cadastrar usuário' + error);
    }
  };
 
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.background} source={require('./assets/background1.png')}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>Roubank</Text>
        </View>
        
        <View style={styles.containerInputs}>
          <TextInput style={styles.input} 
            placeholder="Informe seu nome completo"
            placeholderTextColor="white"
            paddingLeft = '10'
            value = {usuario.name}
            onChangeText = {(text) => setUsuario({...usuario, name: text})}
            returnKeyType="next"
          />
          <TextInput style={styles.input} 
            placeholder="Informe seu CPF"
            placeholderTextColor="white"
            paddingLeft = '10'
            keyboardType="numeric"
            value = {usuario.cpf}
            onChangeText = {(text) => setUsuario({...usuario, cpf: text})}
            maxLength={11}
            returnKeyType="next"
          />
          <TextInput style={styles.input} 
            placeholder="Informe seu email"
            placeholderTextColor="white"
            paddingLeft = '10'
            keyboardType="email-address"
            value = {usuario.email}
            onChangeText = {(text) => setUsuario({...usuario, email: text})}
            returnKeyType="next"
          />
          <TextInput style={styles.input} 
            placeholder="Informe sua senha"
            placeholderTextColor="white"
            paddingLeft = '10'
            value = {usuario.password}
            onChangeText = {(text) => setUsuario({...usuario, password: text })}
            secureTextEntry={true} 
            returnKeyType="next"
          />
          <TextInput style={styles.input} 
            placeholder="Confirme sua senha"
            placeholderTextColor="white"
            paddingLeft = '10'
            value = {confirmarPassword}
            onChangeText = {(text) => setConfirmarPassword(text)}
            secureTextEntry={true} 
            returnKeyType="done"
          />
        </View>
        
        <View style={styles.containerCadastrar}>
          <TouchableOpacity style={styles.btnCadastrar} onPress={validarFormulario}>
            <Text style={styles.txtCadastrar}>CADASTRAR</Text>
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
    marginTop: 200,
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
    borderColor: '#A992E8',
    borderWidth: 1,
    marginTop: 20,
    width: 290,
    height: 50,
    borderRadius: 24,
    color: '#ffffff',
    fontSize: 12,
  },
  
  containerCadastrar: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 50,
  },
  
  btnCadastrar: {
    backgroundColor: '#3C2348',
    borderColor: '#A992E8',
    borderWidth: 1,
    width: 155,
    height: 59,
    borderRadius: 24,
    alignItems:'center',
    justifyContent: 'center',
  },
  
  txtCadastrar: {
    textAlign: 'center',
    color:'#A48EED',
    fontSize: 15,
  }
});