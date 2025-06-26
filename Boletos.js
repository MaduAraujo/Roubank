import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, ImageBackground, ScrollView, FlatList, Image} from 'react-native';

export default function Boletos() {
  const boletos = [
    {
      id: '1',
      title: 'Agua',
      amount: 'R$150,00',
      type: 'in',
      data: '10/04/2025',
      company: 'Sabesp',
      status: 'pago' 
    },
    {
      id: '2',
      title: 'Luz',
      amount: 'R$300,00',
      type: 'in',
      data: '10/04/2025',
      company: 'Enel',
      status: 'pago'
    },
    {
      id: '3',
      title: 'Telefone',
      amount: 'R$50,00',
      type: 'out', 
      data: '10/04/2025',
      company: 'Tim',
      status: 'pendente'
    },
    {
      id: '4',
      title: 'Gás',
      amount: 'R$130,00',
      type: 'in',
      data: '10/04/2025',
      company: 'Congás',
      status: 'pago'
    },
    {
      id: '5',
      title: 'Internet',
      amount: 'R$80,00',
      type: 'out',
      data: '10/04/2025',
      company: 'Claro',
      status: 'pendente'
    },
    {
      id: '6',
      title: 'Supermercado',
      amount: 'R$200,00',
      type: 'in',
      data: '10/04/2025',
      company: 'Carrefour',
      status: 'pago'
    }
  ];

  const renderBoletoItem = ({ item }) => {
    const imageSource = item.type === 'out'
      ? require('./assets/vermelho.png')
      : require('./assets/verde.png');

    const colorStyle = item.status === 'pago'
      ? styles.boletoPago      
      : styles.boletoPendente;

    return (
      <View style={styles.boletoItemContainer}>
        <Image source={imageSource} style={styles.boletoImage} />
        <View style={styles.boletoDetails}>
          <Text style={styles.boletoTitle}>{item.title}</Text>
          <Text style={[styles.boletoAmountBase, colorStyle]}>{item.amount}</Text>
          <Text style={[styles.boletoStatusBase,colorStyle]}>{item.status}</Text>
          <Text style={styles.boletoData}>Vencimento: {item.data}</Text>
          <Text style={styles.boletoData}>Empresa: {item.company}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.background} source={require('./assets/background1.png')}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.content}>
            <Text style={styles.sectionTitle}>Boletos</Text>
            <FlatList
              data={boletos}
              keyExtractor={(item) => item.id}
              renderItem={renderBoletoItem}
              contentContainerStyle={{ paddingBottom: 5}}
              scrollEnabled={false}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  background: {
    flex: 1,
    width: '100%',
    height: '110%',
  },

  scrollViewContent: {
    flexGrow: 1,
  },

  content: {
    flex: 1, 
    padding: 10,
    backgroundColor: '#fafafa',
    marginTop: 150, 
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  sectionTitle: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
    marginTop: 20,
    marginLeft: 15,
  },

  boletoItemContainer: {
    flexDirection: 'row', 
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
    backgroundColor: '#fff', 
    marginVertical: 5,
    marginHorizontal: 10, 
    borderRadius: 8, 
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
  },

  boletoDetails: {
    flex: 1,
    marginLeft: 10,
  },

  boletoImage: {
      width: 30,
      height: 30,
      resizeMode: 'contain',
  },

  boletoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    marginLeft: 15,
  },

  boletoAmountBase: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 15,
  },

  boletoStatusBase: {
      fontSize: 13,
      fontStyle: 'italic',
      marginTop: 2,
      marginLeft: 15,
  },

  boletoData: {
    fontSize: 10,
    marginTop: 2,
    color: '#555',
    marginLeft: 15,
  },

  boletoPago: {
    color: 'green', 
  },

  boletoPendente: {
    color: 'red',
  },
});