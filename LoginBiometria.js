import * as LocalAuthentication from 'expo-local-authentication';
import { StyleSheet, Text, View, Alert, ImageBackground, TouchableOpacity} from 'react-native';
import { useState, useEffect } from 'react'; 
import { useNavigation } from '@react-navigation/native';

export default function LoginBiometria() {

  const navigation = useNavigation();
   const goToAreaLogada = () => {
    navigation.navigate('AreaLogadaTabs');
  }

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isBiometryAvailable, setIsBiometryAvailable] = useState(false);

  async function verifyAvailableAuthentication() {
    const compatible = await LocalAuthentication.hasHardwareAsync();
    setIsBiometryAvailable(compatible);

    if (compatible) {
      const types = await LocalAuthentication.supportedAuthenticationTypesAsync();
      console.log('Tipos de autenticação suportados:', types.map(type => LocalAuthentication.AuthenticationType[type]));
    } else {
      console.log('A autenticação biométrica não está disponível neste dispositivo.');
    }
  }

  async function handleAuthentication() {
    if (!isBiometryAvailable) {
      return Alert.alert('Login', 'A autenticação biométrica não está disponível neste dispositivo.');
    }

    const isBiometricEnrolled = await LocalAuthentication.isEnrolledAsync();

    if (!isBiometricEnrolled) {
      return Alert.alert('Login', 'Nenhuma biometria encontrada. Cadastre uma biometria nas configurações do aparelho.');
    }

    try {
      const auth = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Login com Biometria',
        fallbackLabel: 'Usar senha do dispositivo',
      });

      setIsAuthenticated(auth.success);

      if (auth.success) {
        goToAreaLogada();
      } else {
        if (auth.error === 'user_cancel') {
          Alert.alert('Login', 'Autenticação cancelada.');
        } else if (auth.error === 'system_cancel') {
          Alert.alert('Login', 'Autenticação cancelada pelo sistema.');
        } else {
          Alert.alert('Login', 'Falha na autenticação biométrica. Tente novamente.');
        }
      }
    } catch (error) {
      Alert.alert('Login', 'Ocorreu um erro durante a autenticação.');
    }
  }

  useEffect(() => {
    verifyAvailableAuthentication();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.background} source={require('./assets/background1.png')} resizeMode="cover">
        {isBiometryAvailable ? (
          <View style={styles.buttonContainer}>
             <TouchableOpacity
              style={styles.customButton}
              onPress={handleAuthentication}
              activeOpacity={0.8}
            >
              <Text style={styles.buttonText}>
                Entrar com Face ID ou Biometria
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <Text style={styles.unavailableText}>
            Autenticação biométrica não disponível ou configurada no dispositivo.
          </Text>
        )}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    width: '100%',
    height: '110%',
  },

  buttonContainer: {
    height: 50,      
    width: '70%',  
  },

  customButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',  
    borderRadius: 6,        
    alignItems: 'center',  
    justifyContent: 'center',
    flex: 1,
  },

  buttonText: {
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
  },

  unavailableText: {
    fontSize: 16,
    color: '#FF0000',
    textAlign: 'center',
    marginHorizontal: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 10,
    borderRadius: 5,
  },
});
