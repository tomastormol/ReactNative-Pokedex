import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Image, FlatList } from 'react-native';

const generations = [
  { normal: require('../assets/Images/generations/Generation1.png'), selected: require('../assets/Images/generations/Generation1Selected.png'), id: 1 },
  { normal: require('../assets/Images/generations/Generation2.png'), selected: require('../assets/Images/generations/Generation2Selected.png'), id: 2 },
  { normal: require('../assets/Images/generations/Generation3.png'), selected: require('../assets/Images/generations/Generation3Selected.png'), id: 3 },
  { normal: require('../assets/Images/generations/Generation4.png'), selected: require('../assets/Images/generations/Generation4Selected.png'), id: 4 },
  { normal: require('../assets/Images/generations/Generation5.png'), selected: require('../assets/Images/generations/Generation5Selected.png'), id: 5 },
  { normal: require('../assets/Images/generations/Generation6.png'), selected: require('../assets/Images/generations/Generation6Selected.png'), id: 6 },
  { normal: require('../assets/Images/generations/Generation7.png'), selected: require('../assets/Images/generations/Generation7Selected.png'), id: 7 },
  { normal: require('../assets/Images/generations/Generation8.png'), selected: require('../assets/Images/generations/Generation8Selected.png'), id: 8 },
];

const GenerationsFilterView = ({ onClose, onToggleGeneration, selectedGenerations }) => {

  const handleToggle = (id) => {
    onToggleGeneration(id);
  };

  return (
    <View style={styles.overlay}>
      <TouchableOpacity style={styles.background} onPress={onClose} />
      <View style={styles.modal}>
        <FlatList
          data={generations}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          renderItem={({ item }) => {
            const isSelected = selectedGenerations.includes(item.id);
            return (
              <TouchableOpacity
                style={styles.imageContainer}
                onPress={() => handleToggle(item.id)}
              >
                <Image
                  source={isSelected ? item.selected : item.normal}
                  style={styles.image}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            );
          }}
          contentContainerStyle={{ paddingVertical: 20 }}
        />
      </View>
    </View>
  );
};

const { height } = Dimensions.get('window');
const modalHeight = height * 0.75;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modal: {
    height: modalHeight,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  imageContainer: {
    flex: 1,
    margin: 10,
    borderRadius: 16,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GenerationsFilterView;
