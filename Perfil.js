import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker'; 
import Slider from '@react-native-community/slider'; 

const ModalEditPerfil = ({
  visible,
  onClose,
  initialDateOfBirth,
  initialLimitePix,
  onSave
}) => {
  const [datePickerIsVisible, setDatePickerIsVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(initialDateOfBirth instanceof Date ? initialDateOfBirth : new Date());
  const [limitePix, setLimitePix] = useState(initialLimitePix ?? 300);

  const showHideDatePicker = () => {
    setDatePickerIsVisible(!datePickerIsVisible);
  };

  const handleDateChange = (event, newDate) => {
    if (newDate !== undefined) {
      setSelectedDate(newDate);
    }
    setDatePickerIsVisible(false);
  };

  const handleSave = () => {
    if (onSave) {
      onSave({
        dateOfBirth: selectedDate,
        pixLimit: limitePix,
      });
    }
  };

  const handleRequestClose = () => {
    if (onClose) {
      onClose();
    }
  };

  const formattedDate = selectedDate.toLocaleDateString('pt-BR');
  const formattedLimitePix = `R$${limitePix.toFixed(2)}`;

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={handleRequestClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Editar</Text>

          <TouchableOpacity onPress={showHideDatePicker}>
            <Text style={styles.infoText}>Data de nascimento:</Text>
            <Text style={styles.infoTextDetail}>
              {formattedDate}
            </Text>
          </TouchableOpacity>

          {datePickerIsVisible && (
            <DateTimePicker
              value={selectedDate}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          )}

          <View style={styles.separator} />
          <Text style={styles.infoText}>Limite Pix</Text>
          <Text style={styles.infoTextDetail}>{formattedLimitePix}</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={5000} 
            step={100}
            minimumTrackTintColor="#1FB28A"
            maximumTrackTintColor="#d3d3d3"
            thumbTintColor="#1FB28A"
            value={limitePix}
            onValueChange={setLimitePix}
          />

          <View style={styles.separator} />
          <Text style={styles.infoText}>Limite Crédito:</Text>
          <Text style={styles.infoTextDetail}> R$ 30.000,00</Text>

          <TouchableOpacity style={styles.btnFechar} onPress={handleSave}>
            <Text style={styles.txtAcessar}>FECHAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default function Perfil() {
  const navigation = useNavigation();
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState(new Date(2000, 9, 10));
  const [pixLimit, setPixLimit] = useState(300); 

  const showHideModalEdit = () => {
    setModalIsVisible(!modalIsVisible);
  };

  const handleSaveEdit = ({ dateOfBirth: newDateOfBirth, pixLimit: newPixLimit }) => {
    setDateOfBirth(newDateOfBirth);
    setPixLimit(newPixLimit);
    showHideModalEdit();
  };

  const formattedDateOfBirth = dateOfBirth.toLocaleDateString('pt-BR');
  const formattedPixLimit = `R$${pixLimit.toFixed(2)}`;

  return (
    <ImageBackground
      source={require('./assets/background1.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.dragIndicatorContainer}>
        <View style={styles.dragIndicator} />
      </View>

      <View style={styles.sheet}>
        <TouchableOpacity style={styles.fechar} onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={28} color="#333" />
        </TouchableOpacity>

        <Text style={styles.titulo}>Perfil</Text>

        <View style={styles.conteudo}>
          <Image
            source={require('./assets/retrato.jpg')}
            style={styles.avatar}
          />
          <Text style={styles.nome}>Ana Maria de Souza</Text>
          <Text style={styles.subtexto}>Conta pessoal - Banco Roubank</Text>

          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Data de nascimento:</Text>
            <Text style={styles.infoTextDetail}>{formattedDateOfBirth}</Text>
            <View style={styles.separator} />
            <Text style={styles.infoText}>Limite Pix</Text>
            <Text style={styles.infoTextDetail}>{formattedPixLimit}</Text>
            <View style={styles.separator} />
            <Text style={styles.infoText}>Limite Crédito:</Text>
            <Text style={styles.infoTextDetail}> R$ 30.000,00</Text>
          </View>

          <TouchableOpacity style={styles.btnEditar} onPress={showHideModalEdit}>
            <Text style={styles.txtAcessar}>EDITAR</Text>
          </TouchableOpacity>

          <ModalEditPerfil
            visible={modalIsVisible}
            onClose={showHideModalEdit}
            initialDateOfBirth={dateOfBirth}
            initialLimitePix={pixLimit}
            onSave={handleSaveEdit}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '110%',
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },

  dragIndicatorContainer: {
    position: 'absolute',
    top: '8.7%',
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 20,
  },

  dragIndicator: {
    width: 40,
    height: 4,
    backgroundColor: '#D1D5DB',
    borderRadius: 4,
  },

  sheet: {
    height: '90%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    padding: 20,
    paddingTop: 40,
  },

  fechar: {
    position: 'absolute',
    top: 12,
    right: 20,
    zIndex: 10,
  },

  titulo: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
  },

  conteudo: {
    flex: 1,
    alignItems: 'center',
  },

  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    marginBottom: 16,
  },

  nome: {
    fontSize: 22,
    fontWeight: '600',
    fontFamily: 'System',
    marginBottom: 4,
  },

  subtexto: {
    fontSize: 14,
    color: '#6B7280',
    fontFamily: 'System',
    marginBottom: 45,
  },

  infoContainer: {
    width: '85%',
    marginBottom: 40,
  },

  infoText: {
    fontSize: 16,
    color: '#111827',
    fontFamily: 'System',
    paddingVertical: 5,
    paddingHorizontal: 8,
  },

  infoTextDetail: {
    fontSize: 12,
    color: '#A8A9AD',
    fontFamily: 'System',
    paddingBottom: 10,
    paddingHorizontal: 8,
  },

  separator: {
    height: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    marginHorizontal: 8,
    borderRadius: 1,
  },

  btnEditar: {
    backgroundColor: '#3C2348',
    borderColor: '#A992E8',
    borderWidth: 1,
    width: 155,
    height: 59,
    borderRadius: 24,
    alignItems:'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 20,
  },

  txtAcessar: {
    textAlign: 'center',
    color:'#A48EED',
    fontSize: 15
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContent: {
    width: '85%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    elevation: 10,
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  slider: {
    width: '100%',
    height: 40,
  },

  btnFechar: {
    backgroundColor: '#3C2348',
    borderColor: '#A992E8',
    borderWidth: 1,
    width: 155,
    height: 59,
    borderRadius: 24,
    alignItems:'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 25,
  },
});