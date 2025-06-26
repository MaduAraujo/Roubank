import React from 'react';
import { useRef } from 'react';
import {SafeAreaView, StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, FlatList,Dimensions, Animated} from 'react-native';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.8;
const SPACING = width * 0.04;
const CAROUSEL_HORIZONTAL_PADDING = width * 0.08;

const cards = [
  {
    id: '1',
    balanceLabel: 'Saldo Conta Corrente',
    balance: '$10 985,84',
    number: '**** **** **** 1289',
    expiry: '09/25',
    logo: require('./assets/mastercard.png'),
  },
  {
    id: '2',
    balanceLabel: 'Saldo Poupança',
    balance: '$5 200,00',
    number: '**** **** **** 5678',
    expiry: '12/27',
    logo: require('./assets/visa.png'),
  },
  {
    id: '3',
    balanceLabel: 'Limite de Crédito',
    balance: '$2 500,00',
    number: '**** **** **** 9012',
    expiry: '07/24',
    logo: require('./assets/hipercard.png'),
  },
];

const transactions = [
  {
    id: '1',
    title: 'Starbucks New York LLP',
    amount: '-$2.70',
    type: 'out',
    data: '12.01.2020 09:34',
    location: 'NY, USA',
  },
  {
    id: '2',
    title: 'Wallmart Marketplace',
    amount: '-$135.00',
    type: 'out',
    data: '11.01.2020 21:34',
    location: 'NY, USA',
  },
  {
    id: '3',
    title: 'From Catherine Pierce',
    amount: '+$250.00',
    type: 'in',
    data: '11.01.2020 18:08',
    code: '32548/765487',
  },
  {
    id: '4',
    title: 'Gym Membership',
    amount: '-$50.00',
    type: 'out',
    data: '09.01.2020 17:00',
    location: 'NY, USA',
  },
];

const CardItem = ({ card }) => (
  <View style={styles.card}>
    <Text style={styles.cardBalanceLabel}>{card.balanceLabel}</Text>
    <Text style={styles.cardBalance}>{card.balance}</Text>
    <Text style={styles.cardNumber}>{card.number}</Text>
    <Text style={styles.cardExpiryDate}>{card.expiry}</Text>
    {card.logo && <Image source={card.logo} style={styles.cardLogo} resizeMode="contain" />}
  </View>
);

const TransactionItem = ({ item }) => (
  <View style={styles.transactionItem}>
    <View style={styles.iconCircle}>
      <Image
        source={item.type === 'out' ? require('./assets/vermelho.png') : require('./assets/verde.png')}
        style={styles.icon}
        resizeMode="contain"
      />
    </View>
    <View style={styles.transactionDetails}>
      <Text style={styles.transactionTitle}>{item.title}</Text>
      <Text style={styles.transactionDate}>{item.data}</Text>
      {'location' in item && <Text style={styles.transactionLocation}>{item.location}</Text>}
      {'code' in item && <Text style={styles.transactionCode}>{item.code}</Text>}
    </View>
    <Text style={[styles.transactionAmount, item.type === 'out' ? styles.amountOut : styles.amountIn]}>
      {item.amount}
    </Text>
  </View>
);

export default function Cartoes() {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <ImageBackground style={styles.background} source={require('./assets/background1.png')} resizeMode="cover">
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContent}>
          <Text style={styles.title}>Cartões</Text>
        </View>

        <View style={styles.carouselWrapper}>
          <Animated.FlatList
            data={cards}
            renderItem={({ item }) => <CardItem card={item} />}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={CARD_WIDTH + SPACING}
            decelerationRate="fast"
            contentContainerStyle={styles.carouselContainer}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: false }
            )}
            scrollEventThrottle={16}
          />
        </View>

        <View style={styles.dotContainer}>
          {cards.map((_, i) => {
            const opacity = scrollX.interpolate({
              inputRange: [(i - 1) * (CARD_WIDTH + SPACING), i * (CARD_WIDTH + SPACING), (i + 1) * (CARD_WIDTH + SPACING)],
              outputRange: [0.3, 1, 0.3],
              extrapolate: 'clamp',
            });
            const dotWidth = scrollX.interpolate({
              inputRange: [(i - 1) * (CARD_WIDTH + SPACING), i * (CARD_WIDTH + SPACING), (i + 1) * (CARD_WIDTH + SPACING)],
              outputRange: [8, 12, 8],
              extrapolate: 'clamp',
            });
            const dotColor = scrollX.interpolate({
              inputRange: [(i - 1) * (CARD_WIDTH + SPACING), i * (CARD_WIDTH + SPACING), (i + 1) * (CARD_WIDTH + SPACING)],
              outputRange: ['#ddd', '#fff', '#ddd'],
              extrapolate: 'clamp',
            });

            return (
              <Animated.View
                key={i}
                style={[
                  styles.dot,
                  { opacity, width: dotWidth, backgroundColor: dotColor },
                ]}
              />
            );
          })}
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.detailsTitle}>Detalhes</Text>
          <View style={styles.usdBalance}>
            <Image style={styles.euaImage} source={require('./assets/EUA.png')} resizeMode="contain" />
            <Text style={styles.usdText}>USD 56*3254</Text>
            <TouchableOpacity onPress={() => { /* Add navigation */ }}>
              <Text style={styles.seeButton}>Ver {'>'}</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.sectionTitle}>Histórico de Transações</Text>
          <FlatList
            data={transactions}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <TransactionItem item={item} />}
            contentContainerStyle={{ paddingBottom: 20 }}
            showsVerticalScrollIndicator={false}
            style={{ flexGrow: 1 }}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
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

  headerContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
    marginBottom: 20,
    marginTop: 40,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },

  carouselWrapper: {
    marginTop: 50,
    height: 200,
    justifyContent: 'center',
  },

  carouselContainer: {
    paddingHorizontal: CAROUSEL_HORIZONTAL_PADDING - SPACING / 2,
  },

  card: {
    width: CARD_WIDTH,
    height: 180,
    backgroundColor: '#dddd',
    borderRadius: 15,
    padding: 20,
    marginRight: SPACING,
    justifyContent: 'space-between',
  },

  cardBalanceLabel: {
    fontSize: 14,
    color: 'black',
  },

  cardBalance: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },

  cardNumber: {
    fontSize: 16,
    color: 'black', 
  },

  cardExpiryDate: {
    fontSize: 13,
    color: 'black',
    textAlign: 'left',
  },

  cardLogo: {
    width: 50,
    height: 30,
    position: 'absolute',
    bottom: 20,
    right: 20,
  },

  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 5,
    zIndex: 1,
  },

  dot: {
    height: 8,
    borderRadius: 8,
    marginHorizontal: 5,
    backgroundColor: '#ddd', 
  },

  detailsContainer: {
    flex: 1, 
    backgroundColor: '#fff', 
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    marginTop: 20,
  },

  detailsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },

  usdBalance: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    color: 'black',
  },

  euaImage: {
    width: 30,
    height: 20,
    marginRight: 10,
  },

  usdText: {
    flex: 1, 
    fontSize: 13,
    color: '#333',
    fontWeight: 'bold',
  },

  seeButton: {
    fontSize: 16,
    color: 'red', 
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },

  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee', 
  },

  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20, 
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },

  icon: {
    width: 20,
    height: 20,
  },

  transactionDetails: {
    flex: 1,
  },

  transactionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },

  transactionDate: {
    fontSize: 12,
    color: '#777',
    marginTop: 2,
  },

  transactionLocation: {
    fontSize: 12,
    color: '#777',
    marginTop: 2,
  },

  transactionCode: {
    fontSize: 12,
    color: '#777',
    marginTop: 2,
  },

  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  amountOut: {
    color: 'red',
  },

  amountIn: {
    color: 'green',
  },
});