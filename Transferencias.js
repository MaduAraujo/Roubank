import React from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, ImageBackground, Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

const Routes = createStackNavigator();

export default function Transferencias() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.background} source={require('./assets/background1.png')}>
        <ScrollView style={styles.content}>
          <View style={styles.containerTitle}>
            <Text style={styles.title}>Transferências</Text>
          </View>

          <View style={styles.accountInfo}>
            <Image style={styles.euaImage} source={require('./assets/EUA.png')} />
            <Text style={styles.accountLabel}>USD 56*3254</Text>
          </View>
          <View style={styles.separatorTop} />

          <Text style={styles.transactionsTitle}>Histórico de Transações</Text>
          <View style={styles.transactionItem}>
              <View style={styles.transactionIconNegative}>
                <Ionicons name="arrow-down" size={20} color="#fc0303" />
              </View>
              <View style={styles.transactionDetails}>
                <Text style={styles.transactionAmountNegative}>-$2,7</Text>
                <Text style={styles.transactionDate}>12.01.2020 09:34</Text>
              </View>
              <View style={styles.containerDescription}>
              <Text style={styles.transactionDescription}>Starbucks New York LLP</Text>
              <Text style={styles.transactionLocation}>NY, USA</Text>
              </View>
            </View>

          <View style={styles.transactionItem}>
              <View style={styles.transactionIconNegative}>
                <Ionicons name="arrow-down" size={20} color="#fc0303" />
              </View>
              <View style={styles.transactionDetails}>
                <Text style={styles.transactionAmountNegative}>-$135</Text>
                <Text style={styles.transactionDate}>11.01.2020 21:34</Text>
              </View>
              <View style={styles.containerDescription}>
              <Text style={styles.transactionDescription}>Wallmart Marketplace</Text>
              <Text style={styles.transactionLocation}>NY, USA</Text>
              </View>
            </View>

          <View style={styles.transactionItem}>
            <View style={styles.transactionIconPositive}>
              <Ionicons name="arrow-up" size={20} color="#28C76F" />
            </View>
            <View style={styles.transactionDetails}>
              <Text style={styles.transactionAmountPositive}>+$250</Text>
              <Text style={styles.transactionDate}>11.01.2020 18:08</Text>
            </View>
            <View style={styles.containerDescription}>
              <Text style={styles.transactionDescription}>From Catherine Pierce</Text>
              <Text style={styles.transactionCode}>Code: 32548/765487</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="key" size={24} color="#777" style={styles.menuIcon} />
            <Text style={styles.menuText}>Acesso e limites</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="card" size={24} color="#777" style={styles.menuIcon} />
            <Text style={styles.menuText}>Recarregar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="keypad" size={24} color="#777" style={styles.menuIcon} />
            <Text style={styles.menuText}>Alterar Senha</Text>
          </TouchableOpacity>
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

  content: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fafafa',
    marginTop: 150,
    height: '100%',
    borderTopLeftRadius: 20, 
    borderTopRightRadius: 20,
  }, 

  containerTitle: {
    paddingTop: 5,
    alignItems: 'flex-start', 
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 30,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
  },
  
  accountInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: 'space-between',
  },

  euaImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginRight: 10,
  },

  accountLabel: {
    color:'black',
    fontSize: 14,
    fontWeight: 'bold',
    flex: 1,
  },

  separatorTop: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 2,
    marginBottom: 15,
  },
  
  transactionsTitle: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 25,
  },

  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 15,
  },

  transactionIconNegative: {
    backgroundColor: '#f7f5f5',
    borderRadius: 15,
    padding: 8,
    marginRight: 17,
  },

  transactionIconPositive: {
    backgroundColor: '#f7f5f5',
    borderRadius: 15,
    padding: 8,
    marginRight: 17,
  },
  
  transactionDetails: {
    flex:1,
    marginBottom: 15,
  },
  
  transactionAmountNegative: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },

  transactionAmountPositive: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  
  transactionDate: {
    color: '#ccc',
    fontSize: 12,
  },
  
  containerDescription: {
    color: '#ccc',
    fontSize: 13,
    marginRight: 15,
  },

  transactionDescription: {
    color: 'black',
    fontSize: 12,
  },
  
  transactionLocation: {
    color: '#ccc',
    fontSize: 12,
  },

  transactionCode: {
    color: '#ccc',
    fontSize: 12,
  },

  menuItem: {
    padding: 10,
    marginHorizontal: 20,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  menuIcon: {
    marginRight: 15,
    color: '#777',
  },

  menuText: {
    fontSize: 16,
    color: '#333',
  },
});